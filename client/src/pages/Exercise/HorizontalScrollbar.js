import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './ExercisePage.module.scss';

import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Box, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography m="auto 0" onClick={() => scrollPrev()}>
            <FontAwesomeIcon className={cx('arrowIcon')} icon={faCircleLeft} />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography m="auto 0" onClick={() => scrollNext()}>
            <FontAwesomeIcon className={cx('arrowIcon')} icon={faCircleRight} />
        </Typography>
    );
};

const cx = classNames.bind(styles);

export default function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className={cx('scrollMenu')}>
            {data.map((item) => (
                <Box key={item.id || item} m="8px">
                    <Stack
                        type="button"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            backgroundColor: bodyPart === item ? '#b71c1c' : '#ffebee',
                            color: bodyPart === item ? '#fff' : '',
                            width: '150px',
                            height: '50px',
                            border: bodyPart === item ? '' : '1px solid #b71c1c',
                            borderRadius: '10px',
                        }}
                        onClick={() => setBodyPart(item)}
                        className={cx('wrapBodyPartItem')}
                    >
                        <p className={cx('itemName')}>{item}</p>
                    </Stack>
                </Box>
            ))}
        </ScrollMenu>
    );
}
