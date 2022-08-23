import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

//React library
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavItem({ title, to }) {
    return ( 
        <NavLink className={(nav) => cx('nav-item', {active: nav.isActive})} to={to}>
            <span className={cx('nav-title')}>{title}</span>
        </NavLink>
     );
}

NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default NavItem;

