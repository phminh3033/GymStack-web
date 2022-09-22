import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Post.module.scss';
import moment from 'moment';

//React library
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';

//Component
import Card from '../../components/Card/Card';

const cx = classNames.bind(styles);

export default function Post() {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('post-heading')}>
                    <h1 className={cx('heading')}>BÀI VIẾT HỮU ÍCH</h1>
                    <Link to="/posts" className={cx('more-btn')}>
                        Xem tất cả
                    </Link>
                </div>
                <div className={cx('row')}>
                    {posts?.map((post) => (
                        <div key={post._id} className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <Card
                                src={post.image}
                                alt={post.title}
                                title={post.title}
                                desc={post.description}
                                createAt={moment(post.createdAt).format('DD/MM/YYYY')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
