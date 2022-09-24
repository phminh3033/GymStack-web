import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import images from '../../assets/images';
import moment from 'moment';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

//React library
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getPosts } from '../../redux/actions/postActions';

//materialUI library
import LinearProgress from '@mui/material/LinearProgress';

//Component
import { SearchIcon } from '../../components/Icon';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import NavItem from '../../components/Navbar/NavItem';
import Paginate from '../../components/Paginate/Paginate';

const cx = classNames.bind(styles);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PostPage() {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const query = useQuery();
    //paginate
    const page = query.get('page') || 1;
    // const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const routePost = {
        knowledge: '/posts/knowledge',
        nutrition: '/posts/nutrition',
        exercise: '/posts/exercise',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'row-sidebarPost')}>
                    <div className={cx('col', 'l-3', 'm-12', 'c-12')}>
                        <div className={cx('sidebarPost')}>
                            <Navbar className="sidebar-postPage">
                                <NavItem title="Kiến thức về sức khỏe" to={routePost.knowledge} />
                                <NavItem title="Dinh dưỡng / Thực phẩm" to={routePost.nutrition} />
                                <NavItem title="Bài tập" to={routePost.exercise} />
                            </Navbar>
                        </div>
                    </div>
                    <div className={cx('col', 'l-9', 'm-12', 'c-12')}>
                        <div className={cx('right')}>
                            <div className={cx('top-heading')}>
                                <h2 className={cx('heading')}>BÀI VIẾT HỮU ÍCH</h2>
                                <Tippy content="Tìm kiếm bài viết hữu ích" placement="bottom">
                                    <Link to="/posts/search" className={cx('search')}>
                                        <SearchIcon className={cx('icon-search')} />
                                    </Link>
                                </Tippy>
                            </div>
                            {!posts?.length && !isLoading ? (
                                <div className={cx('noPost')}>
                                    <img className={cx('noPost-img')} src={images.postNotFound} alt="postNotFound" />
                                    <h2 className={cx('noPost-content')}>
                                        Rất tiếc! Không có bài viết được tìm thấy...
                                    </h2>
                                </div>
                            ) : isLoading ? (
                                <LinearProgress className={cx('linearProgress')} />
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
                            <div className={cx('paginate')}>
                                <Paginate page={page} pathPage="/posts" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
