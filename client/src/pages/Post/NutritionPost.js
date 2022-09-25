import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import images from '../../assets/images';
import moment from 'moment';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//React library
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsNoPaginate } from '../../redux/actions/postActions';

//materialUI library
import LinearProgress from '@mui/material/LinearProgress';

//Component
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import NavItem from '../../components/Navbar/NavItem';
import { SearchIcon } from '../../components/Icon';
// import Paginate from '../../components/Paginate/Paginate';

const cx = classNames.bind(styles);

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

export default function NutritionPost() {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    // const query = useQuery();

    //paginate
    // const page = query.get('page') || 1;

    useEffect(() => {
        dispatch(getPostsNoPaginate());
    }, [dispatch]);

    const routePost = {
        knowledge: '/posts/knowledge',
        nutrition: '/posts/nutrition',
        exercise: '/posts/exercise',
    };

    const postFilters = posts?.filter((post) => post.type === 'nutrition');
    return (
        <>
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
                                    <div className={cx('info-heading')}>
                                        <Link to="/posts" className={cx('heading', 'heading-link')}>
                                            BÀI VIẾT HỮU ÍCH
                                        </Link>
                                        <div className={cx('sub-heading')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                                            <span className={cx('content')}>Dinh dưỡng / Thực phẩm</span>
                                        </div>
                                    </div>
                                    <Tippy content="Tìm kiếm bài viết hữu ích" placement="bottom">
                                        <Link to="/posts/search" className={cx('search')}>
                                            <SearchIcon className={cx('icon-search')} />
                                        </Link>
                                    </Tippy>
                                </div>
                                {!postFilters?.length && !isLoading ? (
                                    <div className={cx('noPost')}>
                                        <img
                                            className={cx('noPost-img')}
                                            src={images.postNotFound}
                                            alt="postNotFound"
                                        />
                                        <h2 className={cx('noPost-content')}>
                                            Rất tiếc! Không có bài viết được tìm thấy...
                                        </h2>
                                    </div>
                                ) : isLoading ? (
                                    <LinearProgress className={cx('linearProgress')} />
                                ) : (
                                    postFilters.map((postFilter) => (
                                        <Link key={postFilter._id} to={`/posts/${postFilter.type}/${postFilter._id}`}>
                                            <Card
                                                className="horizontal-card"
                                                src={postFilter.image}
                                                alt={postFilter.title}
                                                title={postFilter.title}
                                                desc={postFilter.description}
                                                type={`#${postFilter.type}`}
                                                createAt={moment(postFilter.createdAt).format('DD/MM/YYYY')}
                                                likeCount={postFilter.likes.length < 1 ? 0 : postFilter.likes.length}
                                            />
                                        </Link>
                                    ))
                                )}
                                {/* <div className={cx('paginate')}>
                                    <Paginate page={page} pathPage="/posts/nutrition" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
