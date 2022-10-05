import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

//component
import images from '../../assets/images';
import FooterBottom from './FooterBottom';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>Gym Stack</h2>
                                <ul className={cx('list')}>
                                    <li>Điện thoại: 0292.xxx.xxxx</li>
                                    <li>Email: contact@gymstack.edu.vn</li>
                                    <li>Địa chỉ: Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</li>
                                </ul>
                                <img className={cx('footer-img')} src={images.footer1} alt="Bộ công thương" />
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>Về chúng tôi</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link
                                            to="/introduce"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Giới thiệu
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/careers"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Cơ hội việc làm
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>HỖ TRỢ</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link
                                            to="/contact-us"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Liên hệ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/privacy"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Bảo mật
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        >
                                            Điều khoản
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</h2>
                                <ul className={cx('list')}>
                                    <li>Mã số thuế: 01099xxxxx</li>
                                    <li>Ngày thành lập: 19/08/2022</li>
                                    <li>
                                        Lĩnh vực: Sức khỏe, giáo dục. GYM STACK xây dựng và phát triển những sản phẩm
                                        mang lại giá trị cho cộng đồng.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}
