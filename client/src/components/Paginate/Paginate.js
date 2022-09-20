import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Paginate.module.scss';

//MUI library
import { Pagination, PaginationItem } from '@mui/material';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Paginate() {
    return (
        <div>
            <Pagination
                className={cx('pagination')}
                count={10}
                page={1}
                color="standard"
                size="large"
                renderItem={(item) => (
                    <PaginationItem
                        className={cx('pagination-item')}
                        {...item}
                        component={Link}
                        to={`/posts?page=${1}`}
                    />
                )}
            />
        </div>
    );
}
