import React from 'react'
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';

const cx = classNames.bind(styles);


export default function PostPage() {
  return (
    <div className={cx('container')}>
      <div>PostPage</div>

    </div>
  )
}
