import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
        <footer className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                        <div className={cx('column')}>
                            <h2 className={cx('heading')}>Gym Stack</h2>
                            <ul className={cx('list')}>
                                <li>Điện thoại: 0246.329.1102</li>
                                <li>Email: contact@fullstack.edu.vn</li>
                                <li>Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                        <div className={cx('column')}>
                            <h2 className={cx('heading')}>Về chúng tôi</h2>
                            <ul className={cx('list')}>
                                <li>Giới thiệu</li>
                                <li>Cơ hội việc làm</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                        <div className={cx('column')}>
                            <h2 className={cx('heading')}>HỖ TRỢ</h2>
                            <ul className={cx('list')}>
                                <li>Liên hệ</li>
                                <li>Bảo mật</li>
                                <li>Điều khoản</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                        <div className={cx('column')}>
                            <h2 className={cx('heading')}>CÔNG TY CỔ PHẦN CÔNG NGHỆ THỂ HÌNH GYM STACK</h2>
                            <ul className={cx('list')}>
                                <li>Mã số thuế: 0109922901</li>
                                <li>Ngày thành lập: 04/03/2022</li>
                                <li>Lĩnh vực: Sức khỏe, giáo dục. GYM STACK xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>f</div>
                <div className={cx('row')}>f</div>
            </div>
      </footer>
  )
}
