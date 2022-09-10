import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';

//React library
import { NavLink } from 'react-router-dom';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faDumbbell, faUsers, faBookmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function MobileMenu({ className, handleCloseMenu }) {
    return (
        <div className={cx('menuModal', className)} onClick={handleCloseMenu}>
            <div className={cx('menu-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('user')}></div>
                    <div className={cx('list')}>
                        <ul className={cx('list-items')}>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />
                                    <span>Trang cá nhân</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={cx('list-items')}>
                            <li>
                                <NavLink
                                    className={(nav) => cx('list-item', { active: nav.isActive })}
                                    to="/trainingPack"
                                >
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBox} />
                                    <span>Gói luyện tập</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/exercise">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faDumbbell} />
                                    <span>Bài tập</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/trainer">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUsers} />
                                    <span>Huấn luyện viên</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx('list-item', { active: nav.isActive })} to="/posts">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBookmark} />
                                    <span>Bài viết hữu ích</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={cx('list-items')}>
                            <NavLink className={cx('list-item')} to="/">
                                <FontAwesomeIcon className={cx('menu-icon')} icon={faRightFromBracket} />
                                <span>Đăng xuất</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
