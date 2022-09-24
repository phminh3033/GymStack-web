import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Paginate.module.scss';

//MUI library
import { Pagination, PaginationItem } from '@mui/material';

//React library
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../../redux/actions/postActions';

const cx = classNames.bind(styles);

export default function Paginate({ page, pathPage }) {
    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
        <div>
            <Pagination
                className={cx('pagination')}
                count={numberOfPages}
                page={Number(page) || 1}
                color="standard"
                size="large"
                renderItem={(item) => (
                    <PaginationItem
                        className={cx('pagination-item')}
                        {...item}
                        component={Link}
                        to={`${pathPage}?page=${item.page}`}
                    />
                )}
            />
        </div>
    );
}
