//React library
import React from 'react';
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import images from '../../assets/images';

//component
import Search from '../Search/Search';

const cx = classNames.bind(styles);

export default function Header() {

  return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok logo" />
            </div>

            <navbar className={cx('navbar')}>
                <nav className={cx('nav-item')}>GÓI TẬP LUYỆN</nav>
                <nav className={cx('nav-item')}>BÀI TẬP</nav>
                <nav className={cx('nav-item')}>HUẤN LUYỆN VIÊN</nav>
                <nav className={cx('nav-item')}>BÀI VIẾT HỮU ÍCH</nav>
            </navbar>

            <Search />

            <button>Login</button>
        </div>
    </header>
  )
}
