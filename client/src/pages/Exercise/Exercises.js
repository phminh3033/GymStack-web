import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faBullseye, faDumbbell } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchDataRapid } from '../../utils/fetchDataRapid';

const cx = classNames.bind(styles);

export default function Exercises({ bodyPart, exercises, setExercises }) {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 12;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchDataRapid('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchDataRapid(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions,
                );
            }
            setExercises(exercisesData);
        };
        fetchExercisesData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bodyPart]);

    return (
        <Box id="exercise" mt="30px" p="20px">
            <Stack sx={{ gap: { lg: '30px', xs: '50px' } }} direction="row" flexWrap="wrap" justifyContent="center">
                {currentExercise.map((exercise, i) => (
                    <div key={i} className={cx('wrapExercises')}>
                        <h3 className={cx('name')}>{exercise.name}</h3>
                        <img src={exercise.gifUrl} alt={exercise.name} />
                        <Stack direction="row">
                            <p className={cx('bodyPart')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faPersonWalking} />
                                {exercise.bodyPart}
                            </p>
                            <p className={cx('bodyPart', 'target')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faBullseye} />
                                {exercise.target}
                            </p>
                            <p className={cx('bodyPart', 'equipment')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faDumbbell} />
                                {exercise.equipment}
                            </p>
                        </Stack>
                    </div>
                ))}
            </Stack>
            <Stack m="50px 0 20px" alignItems="center">
                {exercises.length > 12 && (
                    <Pagination
                        color="secondary"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
}
