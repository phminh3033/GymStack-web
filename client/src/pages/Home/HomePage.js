import React from 'react'
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './HomePage.module.scss';

//Component
// import Header from '../../layouts/Header';

const cx = classNames.bind(styles);

export default function HomePage() {
    // const classes = homePageTheme();

  return (
        <div className={cx('container')}>
            <div>HomePage</div>
        </div>
  )
}
