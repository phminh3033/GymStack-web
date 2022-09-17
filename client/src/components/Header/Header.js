import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Header.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless'; // different import path!

//MUI library
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

//React library
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import images from '../../assets/images';

//component
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import NavItem from '../Navbar/NavItem';
import UserMenu from '../UserMenu/UserMenu';

const cx = classNames.bind(styles);

export default function Header({ handleOpenMenu }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileUser')));
    const location = useLocation();
    console.log(user);

    useEffect(() => {
        // const token = user?.token;
        //JWT...
        setUser(JSON.parse(localStorage.getItem('profileUser')));
    }, [location]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="GymStack logo" />
                </Link>

                <Navbar>
                    <NavItem title="GÓI TẬP LUYỆN" to="/trainingPack" />
                    <NavItem title="BÀI TẬP" to="/exercise" />
                    <NavItem title="HUẤN LUYỆN VIÊN" to="/trainer" />
                    <NavItem title="BÀI VIẾT HỮU ÍCH" to="/posts" />
                </Navbar>

                <Search />

                {user ? (
                    <div>
                        <Tippy
                            interactive
                            trigger="click"
                            hideOnClick
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className={cx('user-menu')} tabIndex="-1" {...attrs}>
                                    <UserMenu />
                                </div>
                            )}
                        >
                            <Avatar
                                className={cx('avatar')}
                                src={user.result.picture}
                                alt={user.result.name}
                                sx={{ bgcolor: green[600] }}
                            >
                                {user.result.name.charAt(0).toUpperCase()}
                            </Avatar>
                        </Tippy>
                    </div>
                ) : (
                    <Link to="/login" className={cx('login-btn')}>
                        ĐĂNG NHẬP
                    </Link>
                )}
            </div>
            <div className={cx('inner-responsive')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="GymStack logo" />
                </Link>
                <Search />
                <div className={cx('mobile-menu')} onClick={handleOpenMenu}>
                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
                </div>
            </div>
        </header>
    );
}
