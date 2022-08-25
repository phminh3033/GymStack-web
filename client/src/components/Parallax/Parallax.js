import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Parallax.module.scss';

//React library
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

export default function Parallax() {
  return (
    <div className={cx('home-parallax')}>
        <div className={cx('parallax')}>
            <div className={cx('parallax-text')}>
                <h2 className={cx('parallax-heading')}>HỆ THỐNG CÁC BÀI TẬP</h2>
                <Link className={cx('parallax-link')} to='/exercise'>TÌM HIỂU NGAY</Link>
            </div>
        </div>
    </div>
  )
}
