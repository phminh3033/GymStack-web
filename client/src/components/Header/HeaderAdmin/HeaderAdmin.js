import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';

import images from '../../../assets/images';

//component
import { MemberIcon, RevenueIcon } from '../../Icon';

const cx = classNames.bind(styles);

export default function HeaderAdmin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('banner')} src={images.header_admin} alt="" />
            </div>
            <div className={cx('info')}>
                <div className={cx('admin-info')}>
                    <img className={cx('admin-ava')} src={images.ava1} alt="" />
                    <ul className={cx('admin-details')}>
                        <li className={cx('admin-detail')}>Họ tên: Phạm Hoàng Minh</li>
                        <li className={cx('admin-detail')}>CCCD: 000000000xxx</li>
                        <li className={cx('admin-detail')}>Phone: 0363xxxxxx</li>
                        <li className={cx('admin-detail')}>Địa chỉ: Cần Thơ</li>
                    </ul>
                </div>
                <div className={cx('statistical')}>
                    <div className={cx('people-statistical')}>
                        <div className={cx('student')}>
                            <MemberIcon />
                            <div className={cx('detail')}>
                                <h3>Học viên</h3>
                                <p>68</p>
                            </div>
                        </div>
                        <div className={cx('trainer')}>
                            <MemberIcon />
                            <div className={cx('detail')}>
                                <h3>Huấn luyện viên</h3>
                                <p>68</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('revenue-statistical')}>
                        <RevenueIcon />
                        <div className={cx('detail')}>
                            <h3>Doanh thu</h3>
                            <p>100.000 d</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
