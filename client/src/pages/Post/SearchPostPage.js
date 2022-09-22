import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//React library
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';

//materialUI library
import CircularProgress from '@mui/material/CircularProgress';

//Component
import Card from '../../components/Card/Card';
import Paginate from '../../components/Paginate/Paginate';
import Search from '../../components/Search/Search';

const cx = classNames.bind(styles);

export default function SearchPostPage() {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'row-sidebarPost')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <Link to="/posts" className={cx('back-page')}>
                            <FontAwesomeIcon className={cx('icon-back')} icon={faArrowLeft} />
                            Trở lại
                        </Link>
                        <div className={cx('top-heading', 'search-post')}>
                            <h2 className={cx('heading')}>TÌM KIẾM BÀI VIẾT HỮU ÍCH</h2>
                            <Search navigatePath="/posts" />
                        </div>
                        {!posts?.length ? (
                            <CircularProgress />
                        ) : (
                            posts?.map((post) => (
                                <Link key={post._id} to={`/posts/${post.type}/${post._id}`}>
                                    <Card
                                        className="horizontal-card"
                                        src={post.image}
                                        alt={post.title}
                                        title={post.title}
                                        desc={post.description}
                                        type={`#${post.type}`}
                                        createAt={moment(post.createdAt).format('DD/MM/YYYY')}
                                        idPost={post._id}
                                        likeCount={post.likes.length < 1 ? 0 : post.likes}
                                    />
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
