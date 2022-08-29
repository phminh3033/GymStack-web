import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './AvaCard.module.scss';

const cx = classNames.bind(styles);

export default function AvaCard({ src, alt, createAt, title, desc }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')}>
                <div className={cx('card-header')}>
                    <img className={cx('card-img')} src={src} alt={alt} />
                </div>
                <div className={cx('card-body')}>
                    <p className={cx('date')}>{createAt}</p>
                    <h2 className={cx('title')}>{title}</h2>
                    <p className={cx('desc')}>{desc}</p>
                </div>
                <div className={cx('card-btn')}>Tìm hiểu thêm</div>
            </div>
        </div>
    );
}
