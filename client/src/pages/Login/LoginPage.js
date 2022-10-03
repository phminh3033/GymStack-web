import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './LoginPage.module.scss';

import { Grid } from '@mui/material';

//React library
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//component
import Input from '../../components/Auth/Input';
// import ShowSnackbar from '../../components/Snackbar/ShowSnackbar';

//Actions
import { signInUser, signUpUser } from '../../redux/actions/authUserActions';

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

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginPage() {
    const [showPass, setShowPass] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [formDataUser, setFormDataUser] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };
    const handleShowPassword = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const showSnackbar = (type, message) => {
        return (
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            dispatch(signUpUser(formDataUser, navigate, showSnackbar));
            handleOpen();
        } else {
            dispatch(signInUser(formDataUser, navigate));
        }
    };
    const handleChange = (e) => {
        setFormDataUser({ ...formDataUser, [e.target.name]: e.target.value });
    };

    //gg login
    const googleSuccess = async (res) => {
        // console.log(res);
        // console.log(res.credential);
        // console.log(jwt_decode(res.credential));
        const result = jwt_decode(res?.credential);
        const token = res?.credential;
        try {
            dispatch({ type: 'AUTH_USER', data: { result, token } });
            navigate(-1);
            showSnackbar('success', 'Bạn đã đăng nhập thành công!');
        } catch (err) {
            console.log({ error: err.message });
        }
    };
    const googleError = (err) => {
        showSnackbar('error', 'Có vẻ tài khoản của bạn không đúng!');
        console.log(err);
        console.log('Google Sign in was unsuccessful. Please try again later!');
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
                                                    <Input
                                                        name="phone"
                                                        label="Số điện thoại"
                                                        handleChange={handleChange}
                                                        type="tel"
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
