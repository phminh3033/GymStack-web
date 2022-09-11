import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './UserMenu.module.scss';

//React library
import { Link } from 'react-router-dom';

//MUI library
import Avatar from '@mui/material/Avatar';

const cx = classNames.bind(styles);

export default function UserMenu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <Avatar className={cx('avatar')}>T</Avatar>
                <div className={cx('info')}>
                    <div className={cx('name')}>Minh Pham</div>
                </div>
            </div>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <Link to="/">Trang cá nhân</Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link to="/">Đăng xuất</Link>
                </li>
            </ul>
        </div>
    );
}
