import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';

//React library
import { Link } from 'react-router-dom';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faDumbbell, faUsers, faBookmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function MobileMenu() {
    return (
        <div className={cx('menu-modal')}>
            <div className={cx('menu-body')}>
                <div className={cx('wrapper')}>
                    <div className={cx('user')}></div>
                    <div className={cx('list')}>
                        <ul className={cx('list-items')}>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />
                                    <span>Trang cá nhân</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className={cx('list-items')}>
                            <li>
                                <Link to="/trainingPack">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBox} />
                                    <span>Gói luyện tập</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/exercise">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faDumbbell} />
                                    <span>Bài tập</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/trainer">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faUsers} />
                                    <span>Huấn luyện viên</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/posts">
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faBookmark} />
                                    <span>Bài viết hữu ích</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className={cx('list-items')}>
                            <Link to="/">
                                <FontAwesomeIcon className={cx('menu-icon')} icon={faRightFromBracket} />
                                <span>Bài viết hữu ích</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
