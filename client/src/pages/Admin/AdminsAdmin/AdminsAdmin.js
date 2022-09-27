import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './AdminsAdmin.module.scss';
import moment from 'moment';

import Grow from '@mui/material/Grow';

//react library
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmins } from '../../../redux/actions/authAdminActions';

//react-bootstrap library
import Table from 'react-bootstrap/Table';

//components
import Search from '../../../components/Search/Search';

const cx = classNames.bind(styles);

export default function AdminsAdmin() {
    const { admins } = useSelector((state) => state.admins);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdmins());
    }, [dispatch]);

    console.log(admins);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('top-action')}>
                    <Search navigatePath="/admin/admins" />
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
                                    <th>Ngày tạo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins?.map((admin) => (
                                    <tr key={admin._id}>
                                        <td>{admin._id}</td>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.phone}</td>
                                        <td>{moment(admin.createdAt).format('HH:mm - DD/MM/YYYY')}</td>
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
