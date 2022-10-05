import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';
import { useState } from 'react';

//Component
import SearchExercise from './SearchExercise';
import Exercises from './Exercises';

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
                        </div>
                        <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
                    </div>
                </div>
            </div>
        </div>
    );
}
