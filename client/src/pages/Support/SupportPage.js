import React from 'react';
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './SupportPage.module.scss';

const cx = classNames.bind(styles);

export default function SupportPage() {
    return (
        <div className={cx('wrapper')}>
            <div>SupportPage</div>
        </div>
    );
}
