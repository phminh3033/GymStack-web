import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostPage.module.scss';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//React library
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postActions';
//Component
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import NavItem from '../../components/Navbar/NavItem';

const cx = classNames.bind(styles);

export default function NutritionPost() {
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

    const postFilters = posts.filter((post) => post.type === 'nutrition');
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
                                    <Link to="/posts" className={cx('heading')}>
                                        BÀI VIẾT HỮU ÍCH
                                    </Link>
                                    <div className={cx('sub-heading')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                                        <span className={cx('content')}>Dinh dưỡng / Thực phẩm</span>
                                    </div>
                                </div>
                                {postFilters.map((postFilter) => (
                                    <Card
                                        key={postFilter._id}
                                        className="horizontal-card"
                                        src={postFilter.image}
                                        alt={postFilter.title}
                                        title={postFilter.title}
                                        desc={postFilter.description}
                                        type={postFilter.type}
                                        createAt={moment(postFilter.createdAt).format('DD/MM/YYYY')}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
