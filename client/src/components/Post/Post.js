import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Post.module.scss';
import moment from 'moment';

//React library
import { Link } from 'react-router-dom';

//React hooks
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/postActions';

//Component
import images from '../../assets/images';
import Card from '../../components/Card/Card';

const cx = classNames.bind(styles);

const postDatas = [
    {
        title: 'Chạy nước rút là gì và có tác dụng như nào đến sức khỏe?',
        img: images.thumb1,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: 'Uống gì để giảm mỡ bụng lâu năm nhanh, an toàn và hiệu quả?',
        img: images.thumb2,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: '18 nguyên tắc vàng của chế độ ăn kiêng giảm mỡ bụng',
        img: images.thumb1,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: 'Cà phê bao nhiêu calo? Uống nhiều có gây béo không?',
        img: images.thumb2,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: 'Chạy nước rút là gì và có tác dụng như nào đến sức khỏe?',
        img: images.thumb1,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: 'Uống gì để giảm mỡ bụng lâu năm nhanh, an toàn và hiệu quả?',
        img: images.thumb2,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: '18 nguyên tắc vàng của chế độ ăn kiêng giảm mỡ bụng',
        img: images.thumb1,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
    {
        title: 'Cà phê bao nhiêu calo? Uống nhiều có gây béo không?',
        img: images.thumb2,
        desc: 'Cùng với chạy bộ cơ bản, chạy nước rút cũng là bài tập được nhiều người lựa chọn để nâng cao hiệu quả tập luyện, cải thiện sức khỏe thể chất, giúp tinh thần thêm phần sảng khoái.',
        createAt: '26/08/2022',
    },
];

export default function Post() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    console.log('[Post - posts]', posts);

    useEffect(() => {
        dispatch(actions.getPosts());
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
                    {/* {postDatas.map((postData, index) => (
                        <div key={index} className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <Card
                                src={postData.img}
                                title={postData.title}
                                desc={postData.desc}
                                createAt={postData.createAt}
                            />
                        </div>
                    ))} */}
                    {posts.map((postData) => (
                        <div key={postData._id} className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <Card
                                src={postData.img}
                                title={postData.title}
                                desc={postData.desc}
                                createAt={moment(postData.createAt).format('DD MM YYYY')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
