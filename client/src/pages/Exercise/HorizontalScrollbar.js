import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Box, Stack } from '@mui/material';

const cx = classNames.bind(styles);

export default function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
    return (
        <ScrollMenu>
            {data.map((item) => (
                <Box key={item.id || item}>
                    <Stack
                        type="button"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            backgroundColor: bodyPart === item ? '#b71c1c' : '',
                            color: bodyPart === item ? '#fff' : '',
                            width: '100px',
                            height: '50px',
                            border: bodyPart === item ? '' : '1px solid #b71c1c',
                            borderRadius: '10px',
                        }}
                        className={cx('wrapBodyPartItem')}
                    >
                        {item}
                    </Stack>
                </Box>
            ))}
        </ScrollMenu>
    );
}
