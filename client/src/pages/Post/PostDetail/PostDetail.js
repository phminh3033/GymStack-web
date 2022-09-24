import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostDetail.module.scss';
import moment from 'moment';

//React library
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPost, getPostsBySearch, likePost } from '../../../redux/actions/postActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//materialUI library
import LinearProgress from '@mui/material/LinearProgress';
// import Grow from '@mui/material/Grow';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

//component
import Card from '../../../components/Card/Card';

const cx = classNames.bind(styles);

export default function PostDetail() {
    const user = JSON.parse(localStorage.getItem('profileUser'));
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { id, type } = useParams();

    useEffect(() => {
        dispatch(getPost(id, type));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, type]);

    //Recommended Posts
    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ type: post?.type }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    if (!post) {
        return null;
    }

    // if (isLoading) {
    //     return <LinearProgress />;
    // }

    const Likes = () => {
        // eslint-disable-next-line array-callback-return
        posts?.map((post) => {
            if (post.likes.length > 0) {
                return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id)) ? (
                    <>
                        <Favorite className={cx('icon-heart')} />
                        {post.likes.length > 2
                            ? `Bạn và ${post.likes.length - 1} người khác`
                            : `${post.likes.length} đã thích`}
                    </>
                ) : (
                    <>
                        <FavoriteBorder className={cx('icon-heart')} />
                        {post.likes.length}
                    </>
                );
            }
        });
        return (
            <>
                <FavoriteBorder className={cx('icon-heart')} />0
            </>
        );
    };

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('top-heading')}>
                    <Link to="/posts" className={cx('heading')}>
                        BÀI VIẾT HỮU ÍCH
                    </Link>
                    <div className={cx('sub-heading')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        <span className={cx('content')}>
                            {/* {post.type } */}
                            Các bài tập
                        </span>
                    </div>
                    <div className={cx('sub-heading')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        <span className={cx('content')}>{post.title}</span>
                    </div>
                </div>
                {isLoading ? (
                    <LinearProgress />
                ) : (
                    <>
                        <div className={cx('row', 'row-sidebarPost')}>
                            <div>
                                <div className={cx('card-wrapper')}>
                                    <div className={cx('top')}>
                                        <p className={cx('date')}>{moment(post.createdAt).format('DD/MM/YYYY')}</p>
                                        <p className={cx('type')}>{`#${post.type}`}</p>
                                    </div>
                                    <div className={cx('card')}>
                                        <div className={cx('card-info')}>
                                            <div className={cx('title')}>{post.title}</div>
                                            <p className={cx('desc')}>{post.description}</p>
                                            <button
                                                className={cx('like-action')}
                                                disabled={!user?.result}
                                                onClick={() => dispatch(likePost(post._id))}
                                            >
                                                <Likes />
                                            </button>
                                        </div>
                                        <div className={cx('card-video')}>
                                            <iframe
                                                width="640"
                                                height="360"
                                                src={`https://www.youtube.com/embed/${post.videoID}`}
                                                title={post.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className={cx('cmt')}>comment</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            {recommendedPosts.length && (
                                <>
                                    <h2>Có thể bạn cũng quan tâm</h2>
                                    {recommendedPosts.map((recommendedPost) => (
                                        <div key={recommendedPost._id} className={cx('col', 'l-3', 'm-6', 'c-12')}>
                                            <Link to={`/posts/${recommendedPost.type}/${recommendedPost._id}`}>
                                                <Card
                                                    className="recommended-card"
                                                    src={recommendedPost.image}
                                                    alt={recommendedPost.title}
                                                    title={recommendedPost.title}
                                                    desc={recommendedPost.description}
                                                    type={`#${recommendedPost.type}`}
                                                    createAt={moment(recommendedPost.createdAt).format('DD/MM/YYYY')}
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
