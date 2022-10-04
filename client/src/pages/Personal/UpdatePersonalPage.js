import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PersonalPage.module.scss';
import decode from 'jwt-decode';

import { googleLogout } from '@react-oauth/google';

//React library
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../../redux/actions/authUserActions';

//MUI library
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const cx = classNames.bind(styles);

export default function UpdatePersonalPage() {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('profileUser')));
    const [validated, setValidated] = useState(false);
    const [currentID, setCurrentID] = useState(0);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        weight: '',
        height: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { users } = useSelector((state) => state.users);
    const user = useSelector((state) => (currentID ? state.users.users.find((u) => u._id === currentID) : 0));

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [user]);

    useEffect(() => {
        const token = userInfo?.token;
        //JWT... when jwt expiry
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogOut();
            }
        }
        setUserInfo(JSON.parse(localStorage.getItem('profileUser')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT_USER' });
        navigate('/');
        googleLogout();
        setUserInfo(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        if (currentID) {
            dispatch(updateUser(currentID, userData));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('cover')}>
                            {userInfo && (
                                <div className={cx('user')}>
                                    <Avatar
                                        className={cx('avatar')}
                                        src={userInfo.result.picture}
                                        alt={userInfo.result.name}
                                        sx={{ bgcolor: green[600] }}
                                    >
                                        {userInfo.result.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <div className={cx('fullName')}>{userInfo?.result.name}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'info-wrap')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        {userInfo && (
                            <div className={cx('info')}>
                                <Form className={cx('form')} noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Họ Tên:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="text"
                                            placeholder="Họ tên của bạn..."
                                            value={userData.name}
                                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Họ tên của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formHeight">
                                        <Form.Label>Chiều cao:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="number"
                                            placeholder="Chiều cao của bạn..."
                                            value={userData.height}
                                            onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Chiều cao của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formWeight">
                                        <Form.Label>Cân nặng:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="number"
                                            placeholder="Cân nặng của bạn..."
                                            value={userData.weight}
                                            onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Cân nặng của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Số điện thoại:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="text"
                                            placeholder="Số điện thoại của bạn..."
                                            value={userData.phone}
                                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Số điện thoại của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="text"
                                            placeholder="Email của bạn..."
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Email của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPass">
                                        <Form.Label>Mật khẩu:</Form.Label>
                                        <Form.Control
                                            className={cx('input-form')}
                                            required
                                            type="text"
                                            placeholder="Mật khẩu của bạn..."
                                            value={userData.password}
                                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Vui lòng nhập Mật khẩu của bạn!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                                <p className={cx('content')}>
                                    <strong className={cx('title')}>Email:</strong>
                                    {userInfo.result.email}
                                </p>
                                <p className={cx('content')}>
                                    <strong className={cx('title')}>Số điện thoại:</strong>
                                    {userInfo.result.phone}
                                </p>
                                <p className={cx('content')}>
                                    <strong className={cx('title')}>Chiều cao:</strong>
                                    {userInfo.result.height}cm
                                </p>
                                <p className={cx('content')}>
                                    <strong className={cx('title')}>Cân nặng:</strong>
                                    {userInfo.result.weight}kg
                                </p>
                            </div>
                        )}
                        <div className={cx('bottom')}>
                            <div className={cx('action-btn')}>
                                <Button className={cx('text-btn')} type="submit">
                                    Lưu
                                </Button>
                            </div>
                            {users?.find((user) => {
                                const userID = user._id === currentID;
                                console.log(userID);
                                if (userID) {
                                    return (
                                        <Button className={cx('action-btn')} onClick={() => setCurrentID(userID)}>
                                            <span className={cx('text-btn')}>Cập nhật</span>
                                        </Button>
                                    );
                                }
                                return false;
                            })}
                            <Link to={`/personal/${userInfo.result.name}`} className={cx('action-btn')}>
                                <span className={cx('text-btn')}>Trở về</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
