import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Header.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless'; // different import path!

//MUI library
import Avatar from '@mui/material/Avatar';

//React library
import { Link } from 'react-router-dom';

import images from '../../assets/images';

//component
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import NavItem from '../Navbar/NavItem';
import UserMenu from '../UserMenu/UserMenu';

const cx = classNames.bind(styles);

export default function Header({ handleOpenMenu }) {
    const user = false;
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

                {user ? (
                    <div>
                        <Tippy
                            interactive
                            trigger="click"
                            hideOnClick
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className={cx('user-menu')} tabIndex="-1" {...attrs}>
                                    <UserMenu />
                                </div>
                            )}
                        >
                            <Avatar className={cx('avatar')}>T</Avatar>
                        </Tippy>
                    </div>
                ) : (
                    <Link to="/login" className={cx('login-btn')}>
                        ĐĂNG NHẬP
                    </Link>
                )}
            </div>
            <div className={cx('inner-responsive')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="GymStack logo" />
                </Link>
                <Search />
                <div className={cx('mobile-menu')} onClick={handleOpenMenu}>
                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
                </div>
            </div>
        </header>
    );
}
