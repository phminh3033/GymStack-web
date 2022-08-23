import React from 'react'
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';

const cx = classNames.bind(styles);

export default function ExercisePage() {
  return (
    <div className={cx('container')}>
      <div>Exercise Pages</div>

    </div>
  )
}
