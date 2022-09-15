import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import moment from 'moment';

//React library
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';

//materialUI library
import CircularProgress from '@mui/material/CircularProgress';

//Component
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import NavItem from '../../components/Navbar/NavItem';

const cx = classNames.bind(styles);

export default function PostPage() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const routePost = {
        knowledge: '/posts/knowledge',
        nutrition: '/posts/nutrition',
        exercise: '/posts/exercise',
    };

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
                                <h2 className={cx('heading')}>BÀI VIẾT HỮU ÍCH</h2>
                                {!posts.length ? (
                                    <CircularProgress />
                                ) : (
                                    posts.map((post) => (
                                        <Card
                                            key={post._id}
                                            className="horizontal-card"
                                            src={post.image}
                                            alt={post.title}
                                            title={post.title}
                                            desc={post.description}
                                            type={`#${post.type}`}
                                            createAt={moment(post.createdAt).format('DD/MM/YYYY')}
                                            idPost={post._id}
                                            likeCount={post.likeCount}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
