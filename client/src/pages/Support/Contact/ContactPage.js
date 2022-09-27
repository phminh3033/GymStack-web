import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ContactPage.module.scss';

const cx = classNames.bind(styles);

export default function ContactPage() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>ContactPage</div>
                </div>
            </div>
        </div>
    );
}
