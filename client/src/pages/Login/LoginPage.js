//React library
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

export default function LoginPage() {
    const [showPass, setShowPass] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };
    const handleShowPassword = () => {};
    const handleSubmit = () => {};
    const handleChange = () => {};
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
                                        <div className={cx('form-group')}>
                                            <label className={cx('form-label')}>Số điện thoại:</label>
                                            <div className={cx('form-input')}>
                                                <input
                                                    name="phone_number"
                                                    type="tel"
                                                    placeholder="Số điện thoại"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <label className={cx('form-label')}>Password:</label>
                                            <div className={cx('form-input')}>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('form-action')}>
                                            <Link to="/login" className={cx('action-btn')}>
                                                {isSignUp ? 'Đăng ký' : 'Đăng nhập'}
                                            </Link>
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
