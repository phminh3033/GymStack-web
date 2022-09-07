import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import moment from 'moment';

//React library
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';

//Component
import Card from '../../components/Card/Card';

const cx = classNames.bind(styles);

export default function PostPage() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'row-sidebarPost')}>
                    <div className={cx('col', 'l-3', 'm-12', 'c-12')}>
                        <div className={cx('sidebarPost')}>
                            <ul className={cx('sidebarPost-list')}>
                                <li className={cx('sidebarPost-item')}>Kiến thức về sức khỏe</li>
                                <li className={cx('sidebarPost-item')}>Dinh dưỡng / Thực phẩm</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-9', 'm-12', 'c-12')}>
                        <div className={cx('right')}>
                            <h2 className={cx('heading')}>BÀI VIẾT HỮU ÍCH</h2>
                            {posts.map((post) => (
                                <Card
                                    className="horizontal-card"
                                    src={post.image}
                                    alt={post.title}
                                    title={post.title}
                                    desc={post.description}
                                    createAt={moment(post.createdAt).format('DD/MM/YYYY')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
