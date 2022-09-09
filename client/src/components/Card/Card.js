import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Card.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Card({ src, alt, type, createAt, title, desc, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('card')}>
                <div className={cx('card-header')}>
                    <img className={cx('card-img')} src={src} alt={alt} />
                </div>
                <div className={cx('card-body')}>
                    <div className={cx('top')}>
                        <p className={cx('date')}>{createAt}</p>
                        <p className={cx('type')}>{type}</p>
                    </div>
                    <h2 className={cx('title')}>{title}</h2>
                    <p className={cx('desc')}>{desc}</p>
                </div>
                <div className={cx('card-btn')}>
                    Tìm hiểu thêm
                    <FontAwesomeIcon className={cx('more-icon')} icon={faArrowRightLong} />
                </div>
            </div>
        </div>
    );
}
