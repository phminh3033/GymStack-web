import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

export default function FooterBottom({ className }) {
    return (
        <div className={cx('bottom', className)}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('content-bottom')}>
                            <Link to="/admin" target="_blank">
                                <p className={cx('copyright')}>
                                    © 2022 Gym Stack. Nền tảng rèn luyện sức khỏe hàng đầu Việt Nam
                                </p>
                            </Link>
                            <div className={cx('social-list')}>
                                <a
                                    href="https://www.youtube.com/user/GymSharkTV"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Gym Stack trên Youtube"
                                    className={cx('social-item')}
                                >
                                    <FontAwesomeIcon className={cx('youtube-icon')} icon={faYoutube} />
                                </a>
                                <a
                                    href="https://www.facebook.com/Gymshark/"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Gym Stack trên Facebook"
                                    className={cx('social-item')}
                                >
                                    <FontAwesomeIcon className={cx('facebook-icon')} icon={faSquareFacebook} />
                                </a>
                                <a
                                    href="https://www.instagram.com/gymshark/"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Gym Stack trên Instagram"
                                    className={cx('social-item')}
                                >
                                    <FontAwesomeIcon className={cx('ig-icon')} icon={faSquareInstagram} />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@gymshark"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Gym Stack trên Tiktok"
                                    className={cx('social-item')}
                                >
                                    <FontAwesomeIcon className={cx('tiktok-icon')} icon={faTiktok} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
