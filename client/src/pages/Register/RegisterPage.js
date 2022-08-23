//React library
import React from 'react'
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './RegisterPage.module.scss';

const cx = classNames.bind(styles);

export default function RegisterPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                <div className={cx('header')}>
                                    <h1 className={cx('title')}>Đăng lý tài khoản GymStack</h1>
                                </div>
                                <div className={cx('body')}>
                                    <form className={cx('form')}>
                                        <div className={cx('form-wrap')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')}>Họ:</label>
                                                <div className={cx('form-input')}>
                                                    <input name='last_name' type="text" placeholder="Họ" required/>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')}>Tên:</label>
                                                <div className={cx('form-input')}>
                                                    <input name='first_name' type="text" placeholder="Tên" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-wrap')}>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')}>Giới tính:</label>
                                                <div className={cx('form-input')}>
                                                    <input name='last_name' type="option" placeholder="Họ" required/>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')}>Chiều cao (cm):</label>
                                                <div className={cx('form-input')}>
                                                    <input name='first_name' type="number" placeholder="Chiều cao" required/>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label className={cx('form-label')}>Cân nặng (kg):</label>
                                                <div className={cx('form-input')}>
                                                    <input name='first_name' type="number" placeholder="Cân nặng" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <label className={cx('form-label')}>Số điện thoại:</label>
                                            <div className={cx('form-input')}>
                                                <input name='phone_number' type="tel" placeholder="Số điện thoại:" required/>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <label className={cx('form-label')}>Password:</label>
                                            <div className={cx('form-input')}>
                                                <input  name='password' type="password" placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div className={cx('form-action')}>
                                          <Link to='/login' className={cx('action-btn')}>Đăng ký</Link>
                                          <p className={cx('action-text')}>
                                              Bạn đã có tài khoản?
                                              <Link to='/login' className={cx('action-tip')}>Đăng nhập</Link>
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
    )
}
