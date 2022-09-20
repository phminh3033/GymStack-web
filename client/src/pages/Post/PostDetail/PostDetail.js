import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostDetail.module.scss';
import moment from 'moment';

//React library
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../../../redux/actions/postActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//materialUI library
import Grow from '@mui/material/Grow';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const cx = classNames.bind(styles);

export default function PostDetail() {
    const user = JSON.parse(localStorage.getItem('profileUser'));
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [dispatch, id]);

    if (!post) {
        return null;
    }

    const Likes = () => {
        posts.map((post) => {
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
                        <FavoriteBorder />
                        {post.likes.length}
                    </>
                );
            }
        });
        return (
            <>
                <FavoriteBorder />0
            </>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'row-sidebarPost')}>
                    <div className={cx('top-heading')}>
                        <Link to="/posts" className={cx('heading')}>
                            BÀI VIẾT HỮU ÍCH
                        </Link>
                        <div className={cx('sub-heading')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                            <span className={cx('content')}>Các bài tập</span>
                        </div>
                        <div className={cx('sub-heading')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                            <span className={cx('content')}>{post.title}</span>
                        </div>
                    </div>
                    <Grow in>
                        <div className={cx('card-wrapper')}>
                            <div className={cx('top')}>
                                <p className={cx('date')}>07/09/2022</p>
                                <p className={cx('type')}>#exercise</p>
                            </div>
                            <div className={cx('card')}>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        Cần phải nạp bao nhiêu Protein: Các cách tính, hiểu nhầm & lời khuyên
                                    </div>
                                    <p className={cx('desc')}>
                                        Có cơ bắp mà không biết khoe thì phí công tập chính vì vậy hôm nay mình đã sang
                                        SmallGym để xin chú Huy bí kíp posing như 1 VĐV. Cùng theo dõi video lần này để
                                        chiêm ngưỡng body của SHINPHAMM và chú Huy xem ai pose dáng và có cơ bắp đẹp hơn
                                        nào. Có cơ bắp mà không biết khoe thì phí công tập chính vì vậy hôm nay mình đã
                                        sang SmallGym để xin chú Huy bí kíp posing như 1 VĐV. Cùng theo dõi video lần
                                        này để chiêm ngưỡng body của SHINPHAMM và chú Huy xem ai pose dáng và có cơ bắp
                                        đẹp hơn nào. Có cơ bắp mà không biết khoe thì phí công tập chính vì vậy hôm nay
                                        mình đã sang SmallGym để xin chú Huy bí kíp posing như 1 VĐV. Cùng theo dõi
                                        video lần này để chiêm ngưỡng body của SHINPHAMM và chú Huy xem ai pose dáng và
                                        có cơ bắp đẹp hơn nào. Có cơ bắp mà không biết khoe thì phí công tập chính vì
                                        vậy hôm nay mình đã sang SmallGym để xin chú Huy bí kíp posing như 1 VĐV. Cùng
                                        theo dõi video lần này để chiêm ngưỡng body của SHINPHAMM và chú Huy xem ai pose
                                        dáng và có cơ bắp đẹp hơn nào. Cùng theo dõi video lần này để chiêm ngưỡng body
                                        của SHINPHAMM và chú Huy xem ai pose dáng và có cơ bắp đẹp hơn nào. Có cơ bắp mà
                                        không biết khoe thì phí công tập chính vì vậy hôm nay mình đã sang SmallGym để
                                        xin chú Huy bí kíp posing như 1 VĐV.
                                    </p>
                                    <button className={cx('like-action')} disabled={!user?.result}>
                                        <Likes />
                                    </button>
                                </div>
                                <div className={cx('card-video')}>
                                    <iframe
                                        width="640"
                                        height="360"
                                        src="https://www.youtube.com/embed/ld3CR096jow"
                                        title="Course detail page"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </Grow>
                    <div className={cx('cmt')}>comment</div>
                </div>
            </div>
        </div>
    );
}
