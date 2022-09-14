import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './LoginPage.module.scss';

import { Grid } from '@mui/material';

//React library
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

//component
import Input from '../../components/Auth/Input';

//Actions
import { signUp, signIn } from '../../redux/actions/authActions';

const cx = classNames.bind(styles);
const initialState = {
    firstName: '',
    lastName: '',
    height: '',
    weight: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function LoginPage() {
    const [showPass, setShowPass] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formDataUser, setFormDataUser] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };
    const handleShowPassword = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signUp(formDataUser, navigate));
        } else {
            dispatch(signIn(formDataUser, navigate));
        }
    };
    const handleChange = (e) => {
        setFormDataUser({ ...formDataUser, [e.target.name]: e.target.value });
    };

    const googleSuccess = async (res) => {
        console.log(res);
        console.log(res.credential);
        console.log(jwt_decode(res.credential));

        const result = jwt_decode(res?.credential);
        const token = res?.credential;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate('/');
        } catch (err) {
            console.log({ error: err });
        }
    };
    const googleError = (err) => {
        console.log(err);
        console.log('Google Sing in was unsuccessful. Please try again later!');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                <div className={cx('header')}>
                                    <h1 className={cx('title')}>
                                        {isSignUp ? 'Đăng ký' : 'Đăng nhập'} tài khoản GymStack
                                    </h1>
                                </div>
                                <div className={cx('body')}>
                                    <form className={cx('form')} onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            {isSignUp && (
                                                <>
                                                    <Input
                                                        name="lastName"
                                                        label="Họ"
                                                        handleChange={handleChange}
                                                        autoFocus
                                                        haft
                                                    />
                                                    <Input
                                                        name="firstName"
                                                        label="Tên"
                                                        handleChange={handleChange}
                                                        haft
                                                    />
                                                    <Input
                                                        name="height"
                                                        label="Chiều cao (cm)"
                                                        handleChange={handleChange}
                                                        type="number"
                                                        haft
                                                    />
                                                    <Input
                                                        name="weight"
                                                        label="Cân nặng (kg)"
                                                        handleChange={handleChange}
                                                        type="number"
                                                        haft
                                                    />
                                                </>
                                            )}
                                            <Input
                                                name="email"
                                                label="Email"
                                                handleChange={handleChange}
                                                type="email"
                                            />
                                            <Input
                                                name="password"
                                                label="Password"
                                                handleChange={handleChange}
                                                type={showPass ? 'text' : 'password'}
                                                handleShowPassword={handleShowPassword}
                                            />
                                            {isSignUp && (
                                                <>
                                                    <Input
                                                        name="confirmPassword"
                                                        label="Nhập lại Password"
                                                        handleChange={handleChange}
                                                        type={showPass ? 'text' : 'password'}
                                                        handleShowPassword={handleShowPassword}
                                                    />
                                                </>
                                            )}
                                        </Grid>
                                        <div className={cx('form-action')}>
                                            <button className={cx('action-btn')} variant="contained" type="submit">
                                                {isSignUp ? 'Đăng ký' : 'Đăng nhập'}
                                            </button>
                                            <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
                                            <p className={cx('action-text')}>
                                                Bạn {isSignUp ? 'đã có' : 'chưa có'} tài khoản?
                                                <span className={cx('action-tip')} onClick={switchMode}>
                                                    {isSignUp ? 'Đăng nhập' : 'Đăng ký'}
                                                </span>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
