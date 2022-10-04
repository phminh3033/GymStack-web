import React from 'react';
import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';
import images from '../../assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Component
import { SearchIcon } from '../../components/Icon';
import SearchExercise from './SearchExercise';

const cx = classNames.bind(styles);

export default function ExercisePage() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('top-heading')}>
                            <h2 className={cx('heading')}>CÁC BÀI TẬP</h2>
                            <Tippy content="Tìm kiếm bài tập" placement="bottom">
                                <Link to="/exercise" className={cx('search')}>
                                    <SearchIcon className={cx('icon-search')} />
                                </Link>
                            </Tippy>
                        </div>
                        <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('comingSoon')}>
                        <img className={cx('comingSoon-img')} src={images.comingSoon} alt="comingSoon" />
                        <h2 className={cx('comingSoon-content')}>Coming Soon...</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
