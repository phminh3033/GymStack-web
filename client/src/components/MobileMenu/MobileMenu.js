import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';
import decode from 'jwt-decode';

import { googleLogout } from '@react-oauth/google';

//React library
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faUser,
    faBox,
    faDumbbell,
    faUsers,
    faBookmark,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

//MUI library
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const cx = classNames.bind(styles);

export default function MobileMenu({ className, handleCloseMenu }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileUser')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        //JWT... when jwt expiry
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogOut();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profileUser')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT_USER' });
        navigate(location);
        googleLogout();
        setUser(null);
    };

    return (
        <div className={cx('menuModal', className)} onClick={handleCloseMenu}>
            <div className={cx('menu-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    {user && (
                        <div className={cx('user')}>
                            <Avatar
                                className={cx('avatar')}
                                src={user.result.picture}
                                alt={user.result.name}
                                sx={{ bgcolor: green[600] }}
                            >
                                {user.result.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className={cx('fullName')}>{user?.result.name}</div>
                        </div>
                    )}
                    <div className={cx('list')}>
                        {user ? (
                            <ul className={cx('list-items')}>
                                <li>
                                    <NavLink
                                        className={(nav) => cx('list-item', { active: nav.isActive })}
                                        to={`/personal/${user?.result.name}`}
                                    >
                                        <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />
                                        <span>Trang cá nhân</span>
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <ul className={cx('list-items')}>
                                <li>
                                    <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/login">
                                        <FontAwesomeIcon className={cx('menu-icon')} icon={faRightToBracket} />
                                        <span>Đăng nhập</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        <ul className={cx('list-items')}>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/introduce">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBox} />
                                    <span>Giới thiệu</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/posts">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBookmark} />
                                    <span>Bài viết hữu ích</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/exercise">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faDumbbell} />
                                    <span>Bài tập</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/support">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUsers} />
                                    <span>Hỗ trợ</span>
                                </NavLink>
                            </li>
                        </ul>
                        {user && (
                            <ul className={cx('list-items')}>
                                <li className={cx('list-item')}>
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faRightFromBracket} />
                                    <span onClick={handleLogOut}>Đăng xuất</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
