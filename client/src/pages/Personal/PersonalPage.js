import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PersonalPage.module.scss';
import decode from 'jwt-decode';

import { googleLogout } from '@react-oauth/google';

//React library
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

//MUI library
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const cx = classNames.bind(styles);

export default function PersonalPage() {
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
        navigate('/');
        googleLogout();
        setUser(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('top')}>
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
                        </div>
                        <div className={cx('info')}>
                            {user && (
                                <>
                                    <p className={cx('content')}>
                                        <strong className={cx('title')}>Email:</strong>
                                        {user.result.email}
                                    </p>
                                    <p className={cx('content')}>
                                        <strong className={cx('title')}>Số điện thoại:</strong>
                                        {user.result.phone}
                                    </p>
                                    <p className={cx('content')}>
                                        <strong className={cx('title')}>Chiều cao:</strong>
                                        {user.result.height}
                                    </p>
                                    <p className={cx('content')}>
                                        <strong className={cx('title')}>Cân nặng:</strong>
                                        {user.result.weight}
                                    </p>
                                    {/* <p className={cx('content')}>
                                        <strong>Chỉ số BMI:</strong>
                                        {user.result.email}
                                    </p> */}
                                </>
                            )}
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('action-btn')}>
                                <span className={cx('text-btn')} onClick={handleLogOut}>
                                    Đăng xuất
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
