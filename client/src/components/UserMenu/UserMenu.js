import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './UserMenu.module.scss';

import { googleLogout } from '@react-oauth/google';

//React library
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//MUI library
import Avatar from '@mui/material/Avatar';

const cx = classNames.bind(styles);

export default function UserMenu() {
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
        dispatch({ type: 'LOGOUT_USER' });
        navigate(location);
        googleLogout();
        setUser(null);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <Avatar className={cx('avatar')} src={user?.result.picture} alt={user?.result.name}>
                    {user?.result.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className={cx('info')}>
                    <div className={cx('name')}>{user?.result.name}</div>
                </div>
            </div>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <Link to="/">Trang cá nhân</Link>
                </li>
                <li className={cx('menu-item')}>
                    <span onClick={handleLogOut}>Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}
