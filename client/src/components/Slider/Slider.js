import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Slider.module.scss';
import { Link } from 'react-router-dom';

//Component

const cx = classNames.bind(styles);

export default function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div className={cx('slider-text')}>
                    <h2 className={cx('slider-heading')}>CHUNG SỨC TẠO NÊN CỘNG ĐỒNG</h2>
                    <Link to="/introduce" className={cx('slider-subHeading')}>
                        Tham gia cùng chúng tôi
                    </Link>
                </div>
            </div>
        </div>
    );
}
