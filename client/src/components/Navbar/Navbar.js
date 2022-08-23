import PropTypes from 'prop-types';

import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar({ children }) {
    return ( 
        <nav className={cx('navbar')}>{children}</nav>
     );
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Navbar;

