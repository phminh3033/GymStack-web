import React from 'react';
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Search.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

//component
import { SearchIcon } from '../Icon';

const cx = classNames.bind(styles);


export default function Search() {
  return (
    <div className={cx('search')}>
      <div className={cx('search-icon')} onMouseDown={(e) => e.preventDefault()}>
        <SearchIcon />
      </div>
      <input placeholder="Search your posts..."/>
      <div className={cx('clear-icon')}><FontAwesomeIcon icon={faXmark}/></div>
    </div>
  )
}
