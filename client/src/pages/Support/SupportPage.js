import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './SupportPage.module.scss';
import images from '../../assets/images';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Grow from '@mui/material/Grow';

const cx = classNames.bind(styles);

export default function SupportPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('main-heading')}>CÔNG TY CỔ PHẦN GIÁO DỤC THỂ HÌNH GYM STACK</div>
                        <Divider className={cx('divider')} />
                        <div className={cx('sub-heading')}>HỖ TRỢ</div>
                    </div>
                </div>
                <Grow in>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                            <Link to="/contact-us">
                                <div className={cx('supportItem')}>
                                    <div className={cx('heading')}>Liên hệ</div>
                                    <p className={cx('content')}>
                                        Đừng ngần ngại liên lạc với chúng tôi khi cần bất kỳ sự trợ giúp nào
                                    </p>
                                    <img className={cx('img')} src={images.contact} alt="contact" />
                                </div>
                            </Link>
                        </div>
                        <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                            <Link to="/privacy">
                                <div className={cx('supportItem')}>
                                    <div className={cx('heading')}>Bảo mật</div>
                                    <p className={cx('content')}>Chúng tôi luôn muốn giữ cho bạn an toàn tuyệt đối</p>
                                    <img className={cx('img')} src={images.privacy} alt="contact" />
                                </div>
                            </Link>
                        </div>
                        <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                            <Link to="/terms">
                                <div className={cx('supportItem')}>
                                    <div className={cx('heading')}>Điều khoản</div>
                                    <p className={cx('content')}>
                                        Chúng tôi sẽ cố gắng hỗ trợ các bạn nhiệt tình hết mức có thể
                                    </p>
                                    <img className={cx('img')} src={images.rule} alt="contact" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </Grow>
            </div>
        </div>
    );
}
