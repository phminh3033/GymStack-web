import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Member.module.scss';

//React library
import { Link } from 'react-router-dom';

//Component
import images from '../../assets/images';
import AvaCard from '../../components/AvaCard/AvaCard';

const cx = classNames.bind(styles);

export default function Member() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <h1 className={cx('heading')}>HUẤN LUYỆN VIÊN CHUYÊN NGHIỆP CỦA CHÚNG TÔI</h1>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <AvaCard />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <AvaCard />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <AvaCard />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <AvaCard />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <Link to="/posts" className={cx('more-btn')}>
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
