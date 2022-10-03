import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './UsersAdmin.module.scss';
import moment from 'moment';

import Grow from '@mui/material/Grow';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

//react library
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../../redux/actions/authUserActions';
// import { getAdmins, deleteUser } from '../../../redux/actions/authUserActions';

//react-bootstrap library
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//components
import Search from '../../../components/Search/Search';

const cx = classNames.bind(styles);

export default function UsersAdmin() {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-action')}>{/* <Search navigatePath="/admin/users" /> */}</div>
            <Grow in>
                <div className={cx('table-container')}>
                    <Table bordered hover className={cx('table')}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Cân nặng</th>
                                <th>Chiều cao</th>
                                <th>Ngày tạo</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user) => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.weight}</td>
                                    <td>{user.height}</td>
                                    <td>{moment(user.createdAt).format('HH:mm - DD/MM/YYYY')}</td>
                                    <td className={cx('table-btn-wrapper')}>
                                        <Tippy
                                            interactive
                                            trigger="click"
                                            hideOnClick
                                            placement="left-start"
                                            render={(attrs) => (
                                                <div className={cx('deleteWarning-wrap')} tabIndex="-1" {...attrs}>
                                                    <div className={cx('deleteWarning')}>
                                                        <FontAwesomeIcon
                                                            className={cx('deleteWarning-icon')}
                                                            icon={faTriangleExclamation}
                                                        />
                                                        <h2>Bạn có chắc chắn muốn xóa</h2>
                                                        <p>
                                                            Người dùng <strong>{user.name}</strong> khỏi hệ thống?
                                                        </p>
                                                        <Button
                                                            variant="danger"
                                                            className={cx('table-btn')}
                                                            onClick={() => dispatch(deleteUser(user._id))}
                                                        >
                                                            Xóa
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        >
                                            <Button variant="danger" className={cx('table-btn')}>
                                                Xóa
                                            </Button>
                                        </Tippy>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Grow>
        </div>
    );
}
