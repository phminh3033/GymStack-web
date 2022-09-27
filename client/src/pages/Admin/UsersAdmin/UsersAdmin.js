import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './UsersAdmin.module.scss';
import moment from 'moment';

import Grow from '@mui/material/Grow';

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

    console.log(users);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('top-action')}>
                    <Search navigatePath="/admin/users" />
                </div>
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
                                    <th colSpan={2}>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.weight}</td>
                                        <td>{user.height}</td>
                                        <td>{moment(user.createdAt).format('HH:mm - DD/MM/YYYY')}</td>
                                        <td className={cx('table-btn-wrapper')}>
                                            <Button
                                                variant="danger"
                                                className={cx('table-btn')}
                                                onClick={() => dispatch(deleteUser(user._id))}
                                            >
                                                Xóa
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Grow>
            </div>
        </div>
    );
}
