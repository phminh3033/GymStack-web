import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';

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

const cx = classNames.bind(styles);

export default function MobileMenu({ className, handleCloseMenu }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileUser')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // const token = user?.token;
        //JWT...
        setUser(JSON.parse(localStorage.getItem('profileUser')));
    }, [location]);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
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
                            <Avatar className={cx('avatar')} src={user.result.picture} alt={user.result.name}>
                                {user.result.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className={cx('fullName')}>{user?.result.name}</div>
                        </div>
                    )}
                    <div className={cx('list')}>
                        {user ? (
                            <ul className={cx('list-items')}>
                                <li>
                                    <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/">
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
                                <NavLink
                                    className={(nav) => cx('list-item', { active: nav.isActive })}
                                    to="/trainingPack"
                                >
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBox} />
                                    <span>Gói luyện tập</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/exercise">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faDumbbell} />
                                    <span>Bài tập</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/trainer">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUsers} />
                                    <span>Huấn luyện viên</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/posts">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBookmark} />
                                    <span>Bài viết hữu ích</span>
                                </NavLink>
                            </li>
                        </ul>
                        {user && (
                            <ul className={cx('list-items')}>
                                <NavLink className={cx('list-item')} to="/">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faRightFromBracket} />
                                    <span onClick={handleLogOut}>Đăng xuất</span>
                                </NavLink>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
