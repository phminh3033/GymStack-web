import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

//components
import MobileMenu from '../../components/MobileMenu/MobileMenu';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div>
                <div className={cx('pages')}>{children}</div>
            </div>
            <Footer />
            {/* <MobileMenu /> */}
        </div>
    );
}

export default DefaultLayout;
