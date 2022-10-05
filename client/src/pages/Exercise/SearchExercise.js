import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';

import { Stack, Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

import { exerciseOptions, fetchDataRapid } from '../../utils/fetchDataRapid';
import HorizontalScrollbar from './HorizontalScrollbar';

const cx = classNames.bind(styles);

export default function SearchExercise({ setExercises, bodyPart, setBodyPart }) {
    const [search, setSearch] = useState('');

    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchDataRapid(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions,
            );
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExercisesData();
    }, []);

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            if (search) {
                const exercisesData = await fetchDataRapid(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions,
                );
                const searchedExercises = exercisesData.filter(
                    (exercise) =>
                        exercise.name.toLowerCase().includes(search) ||
                        exercise.bodyPart.toLowerCase().includes(search) ||
                        exercise.equipment.toLowerCase().includes(search) ||
                        exercise.target.toLowerCase().includes(search),
                );
                setSearch('');
                setExercises(searchedExercises);
            }
        }
    };
    return (
        <div>
            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
                <Box position="relative" mb="72px">
                    <TextField
                        sx={{
                            input: {
                                fontWeight: '700',
                                fontSize: '1.2rem',
                                border: 'none',
                                borderRadius: '4px',
                            },
                            width: { lg: '800px', xs: '350px' },
                            backgroundColor: '#f5f5f5',
                            borderRadius: '4px',
                        }}
                        height="76px"
                        label="Search Exercise"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        onKeyDown={handleSearch}
                        placeholder="Search Exercise..."
                        type="text"
                    />
                </Box>
                <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            </Stack>
        </div>
    );
}
