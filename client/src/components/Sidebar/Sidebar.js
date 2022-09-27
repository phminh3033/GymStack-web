import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Sidebar.module.scss';

//React library
import { Link } from 'react-router-dom';

import images from '../../assets/images';

//component
import Navbar from '../Navbar/Navbar';
import NavItem from '../Navbar/NavItem';
import { DashboardIcon, AdminIcon, MemberIcon, PostIcon, ClientIcon } from '../Icon';

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('heading')}>
                    <Link to="/admin/dashboard" className={cx('logo')}>
                        <img src={images.logo} alt="GymStack logo" />
                        <h2 className={cx('heading-title')}>Admin Dashboard</h2>
                    </Link>
                </header>
                <Navbar className="dashboard">
                    <NavItem title="Dashboard" to="/admin/dashboard" icon={<DashboardIcon />} />
                    <NavItem title="Admin" to="/admin/admins" icon={<AdminIcon />} />
                    <NavItem title="Người dùng" to="/admin/users" icon={<MemberIcon />} />
                    <NavItem title="Bài viết hữu ích" to="/admin/posts" icon={<PostIcon />} />
                </Navbar>
                <footer className={cx('footer')}>
                    <Link to="/" target="_blank" className={cx('client-btn')}>
                        <span className={cx('client-icon')}>
                            <ClientIcon />
                        </span>
                        <span className={cx('client-title')}>Client Page</span>
                    </Link>
                </footer>
            </div>
        </aside>
    );
}
