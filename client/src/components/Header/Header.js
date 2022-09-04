import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Header.module.scss';

//React library
import { Link } from 'react-router-dom';

import images from '../../assets/images';

//component
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import NavItem from '../Navbar/NavItem';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="GymStack logo" />
                </Link>

                <Navbar>
                    <NavItem title="GÓI TẬP LUYỆN" to="/trainingPack" />
                    <NavItem title="BÀI TẬP" to="/exercise" />
                    <NavItem title="HUẤN LUYỆN VIÊN" to="/trainer" />
                    <NavItem title="BÀI VIẾT HỮU ÍCH" to="/posts" />
                </Navbar>

                <Search />

                <Link to="/login" className={cx('login-btn')}>
                    ĐĂNG NHẬP
                </Link>
            </div>
        </header>
    );
}
