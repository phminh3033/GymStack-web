import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

//React library
import { useState } from 'react';

//components
import MobileMenu from '../../components/MobileMenu/MobileMenu';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [openModel, setOpenModel] = useState(true);
    const handleOpenMenu = () => {
        setOpenModel(!openModel);
    };
    const handleCloseMenu = () => {
        setOpenModel(!openModel);
    };
    return (
        <div className={cx('wrapper')}>
            <Header handleOpenMenu={handleOpenMenu} />
            <div>
                <div className={cx('pages')}>{children}</div>
            </div>
            <Footer />
            <MobileMenu className={cx({ open: openModel })} handleCloseMenu={handleCloseMenu} />
        </div>
    );
}

export default DefaultLayout;
