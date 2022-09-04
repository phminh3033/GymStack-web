import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';

//components
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderAdmin from '../../components/Header/HeaderAdmin/HeaderAdmin';
import FooterBottom from '../../components/Footer/FooterBottom';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <>
            <div className={cx('warning')}>Dashboard vẫn chưa hỗ trợ cho màn hình có độ phân giải thấp hơn!</div>
            <div className={cx('wrapper')}>
                <Sidebar />
                <HeaderAdmin />
                <div>
                    <div className={cx('pages')}>{children}</div>
                </div>
                <FooterBottom className="dashboard" />
            </div>
        </>
    );
}

export default AdminLayout;
