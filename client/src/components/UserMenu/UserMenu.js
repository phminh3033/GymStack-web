import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './UserMenu.module.scss';

//React library
import { Link } from 'react-router-dom';

//MUI library
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const cx = classNames.bind(styles);

export default function UserMenu({ user, handleLogOut }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <Avatar
                    className={cx('avatar')}
                    src={user?.result.picture}
                    alt={user?.result.name}
                    sx={{ bgcolor: green[600] }}
                >
                    {user?.result.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className={cx('info')}>
                    <div className={cx('name')}>{user?.result.name}</div>
                </div>
            </div>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <Link to={`/personal/${user?.result.name}`}>Trang cá nhân</Link>
                </li>
                <li className={cx('menu-item')}>
                    <span onClick={handleLogOut}>Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}
