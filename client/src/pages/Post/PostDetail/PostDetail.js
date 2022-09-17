import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostDetail.module.scss';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function PostDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('top-heading')}>
                    <Link to="/posts" className={cx('heading')}>
                        BÀI VIẾT HỮU ÍCH
                    </Link>
                    <div className={cx('sub-heading')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        <span className={cx('content')}>Các bài tập</span>
                    </div>
                    <div className={cx('sub-heading')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        <span className={cx('content')}>Các bài tập</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
