import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostDetail.module.scss';
import moment from 'moment';

//React library
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPost, getPostsBySearch, likePost } from '../../../redux/actions/postActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//materialUI library
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
// import Grow from '@mui/material/Grow';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

//component
import Card from '../../../components/Card/Card';
import Comment from '../../../components/Comment/Comment';

const cx = classNames.bind(styles);

export default function PostDetail() {
    const user = JSON.parse(localStorage.getItem('profileUser'));
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const { id, type } = useParams();
    const userId = user?.result?.sub || user?.result?._id;

    useEffect(() => {
        dispatch(getPost(id, type));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, type]);

    //Recommended Posts
    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ searchQuery: 'none', type: post?.type }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    if (!post) {
        return null;
    }
    const handleLikePost = async () => {
        dispatch(likePost(post._id));
        if (post.likes.find((like) => like === userId)) {
            //if the user has liked the post and user clicks the button again that means that they want to unlike it
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            //set like when user don't like
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId) ? (
                <>
                    <Favorite className={cx('icon-heart')} />
                    {likes.length}
                </>
            ) : (
                <>
                    <FavoriteBorder className={cx('icon-heart')} />
                    {likes.length}
                </>
            );
        }
        return (
            <>
                <FavoriteBorder className={cx('icon-heart')} />0
            </>
        );
    };

    const recommendedIDPosts = posts.filter(({ _id }) => _id !== post._id);
    const recommendedPosts = recommendedIDPosts.filter(({ type }) => type === post.type);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('top-heading')}>
                    <Link to="/posts" className={cx('heading', 'heading-link')}>
                        BÀI VIẾT HỮU ÍCH
                    </Link>
                    <div className={cx('sub-heading')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        {post.type === 'exercise' ? (
                            <Link to="/posts/exercise" className={cx('content-link')}>
                                Các bài tập
                            </Link>
                        ) : post.type === 'knowledge' ? (
                            <Link to="/posts/knowledge" className={cx('content-link')}>
                                Kiến thức về sức khỏe
                            </Link>
                        ) : (
                            <Link to="/posts/nutrition" className={cx('content-link')}>
                                Dinh dưỡng / Thực phẩm
                            </Link>
                        )}
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
                                                onClick={handleLikePost}
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
                                    <Divider className={cx('divider')} />
                                    <Comment post={post} />
                                </div>
                            </div>
                        </div>
                        <h2 className={cx('heading')}>Có thể bạn cũng quan tâm</h2>
                        <div className={cx('row')}>
                            {recommendedPosts.length && (
                                <>
                                    {recommendedPosts.map((recommendedPost) => (
                                        <div key={recommendedPost._id} className={cx('col', 'l-3', 'm-6', 'c-12')}>
                                            <Link
                                                to={`/posts/${recommendedPost.type}/${recommendedPost._id}`}
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            >
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
