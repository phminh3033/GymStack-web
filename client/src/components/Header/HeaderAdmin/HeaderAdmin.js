import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';
import images from '../../../assets/images';

import { googleLogout } from '@react-oauth/google';

import decode from 'jwt-decode';

//MUI library
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';

//React library
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { getPosts } from '../../../redux/actions/postActions';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

//component
import { MemberIcon, PostIcon } from '../../Icon';

const cx = classNames.bind(styles);

export default function HeaderAdmin() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileAdmin')));
    const posts = useSelector((state) => state.posts);

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
        setUser(JSON.parse(localStorage.getItem('profileAdmin')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT_ADMIN' });
        navigate('/admin');
        googleLogout();
        setUser(null);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('banner')} src={images.header_admin} alt="banner-header-admin" />
            </div>
            <div className={cx('info')}>
                <div className={cx('admin-info')}>
                    <Avatar
                        className={cx('admin-ava')}
                        src={user.result.picture}
                        alt={user.result.name}
                        sx={{ bgcolor: orange[700] }}
                    >
                        {user.result.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <ul className={cx('admin-details')}>
                        <li className={cx('admin-detail')}>Họ tên: &nbsp; {user.result.name}</li>
                        <li className={cx('admin-detail')}>Email: &nbsp; {user.result.email}</li>
                        <li className={cx('admin-detail')}>Phone: &nbsp; {user.result.phone}</li>
                    </ul>
                </div>
                <div className={cx('statistical')}>
                    <div className={cx('student')}>
                        <MemberIcon width={'3rem'} />
                        <div className={cx('detail')}>
                            <h3 className={cx('title')}>Người dùng</h3>
                            <p className={cx('number')}>68</p>
                        </div>
                    </div>
                    <div className={cx('trainer')}>
                        <PostIcon width={'3rem'} />
                        <div className={cx('detail')}>
                            <h3 className={cx('title')}>Bài viết</h3>
                            <p className={cx('number')}>{posts.length}</p>
                        </div>
                    </div>
                </div>
                <div className={cx('logout-btn')}>
                    <FontAwesomeIcon className={cx('logout-icon')} icon={faRightFromBracket} />
                    <span onClick={handleLogOut}>Đăng xuất</span>
                </div>
            </div>
        </div>
    );
}
