import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './TermsPage.module.scss';

const cx = classNames.bind(styles);

export default function TermsPage() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>TermsPage</div>
                </div>
            </div>
        </div>
    );
}
