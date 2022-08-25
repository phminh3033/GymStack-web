import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Footer.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

//component
import images from '../../assets/images';

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
                                <img className={cx('footer-img')} src={images.footer1} alt='Bộ công thương'/>
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>Về chúng tôi</h2>
                                <ul className={cx('list')}>
                                    <li><a href="/">Giới thiệu</a></li>
                                    <li><a href="/">Cơ hội việc làm</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>HỖ TRỢ</h2>
                                <ul className={cx('list')}>
                                    <li><a href="/">Liên hệ</a></li>
                                    <li><a href="/">Bảo mật</a></li>
                                    <li><a href="/">Điều khoản</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <div className={cx('column')}>
                                <h2 className={cx('heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</h2>
                                <ul className={cx('list')}>
                                    <li>Mã số thuế: 01099xxxxx</li>
                                    <li>Ngày thành lập: 19/08/2022</li>
                                    <li>Lĩnh vực: Sức khỏe, giáo dục. GYM STACK xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <div className={cx('content-bottom')}>
                                <p className={cx('copyright')}>© 2022 Gym Stack. Nền tảng rèn luyện sức khỏe hàng đầu Việt Nam</p>
                                <div className={cx('social-list')}>
                                    <a href="https://www.youtube.com/user/GymSharkTV" target="_blank" rel="noreferrer" title='Gym Stack trên Youtube' className={cx('social-item')}>
                                        <FontAwesomeIcon className={cx('youtube-icon')} icon={faYoutube}/>
                                    </a>
                                    <a href="https://www.facebook.com/Gymshark/" target="_blank" rel="noreferrer" title='Gym Stack trên Facebook' className={cx('social-item')}>
                                        <FontAwesomeIcon className={cx('facebook-icon')} icon={faSquareFacebook}/>
                                    </a>
                                    <a href="https://www.instagram.com/gymshark/" target="_blank" rel="noreferrer" title='Gym Stack trên Instagram' className={cx('social-item')}>
                                        <FontAwesomeIcon className={cx('ig-icon')} icon={faSquareInstagram}/>
                                    </a>
                                    <a href="https://www.tiktok.com/@gymshark" target="_blank" rel="noreferrer" title='Gym Stack trên Tiktok' className={cx('social-item')}>
                                        <FontAwesomeIcon className={cx('tiktok-icon')} icon={faTiktok}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
  )
}
