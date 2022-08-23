import React from 'react'
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './TrainingPackPage.module.scss';

const cx = classNames.bind(styles);

export default function TrainingPackPage() {
  return (
    <div className={cx('container')}>
      <div>TrainingPackPage</div>
    </div>
  )
}
