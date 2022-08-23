import React from 'react'
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './TrainerPage.module.scss';

const cx = classNames.bind(styles);

export default function TrainerPage() {
  return (
    <div className={cx('container')}>
      <div>TrainerPage</div>

    </div>
  )
}
