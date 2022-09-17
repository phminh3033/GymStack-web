import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostAdminPage.module.scss';
import moment from 'moment';

import Grow from '@mui/material/Grow';

//react library
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//react-bootstrap library
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Actions
import { createPost, updatePost, deletePost } from '../../../redux/actions/postActions';

const cx = classNames.bind(styles);

export default function PostAdminPage() {
    const [hide, setHide] = useState(true);
    const [pushTable, setPutTable] = useState(true);
    const [validated, setValidated] = useState(false);
    const [currentID, setCurrentID] = useState(0);

    //DB
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        videoID: '',
        type: '',
    });

    const dispatch = useDispatch();
    const admin = JSON.parse(localStorage.getItem('profileAdmin'));

    const posts = useSelector((state) => state.posts);
    const post = useSelector((state) => (currentID ? state.posts.find((p) => p._id === currentID) : null));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleOpenForm = () => {
        if (!hide && !pushTable) {
            setHide(hide);
            setPutTable(pushTable);
        } else {
            setHide(!hide);
            setPutTable(!pushTable);
        }
        clearInput();
    };

    const handleCloseForm = () => {
        setHide(!hide);
        setPutTable(!pushTable);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        if (currentID === 0) {
            dispatch(createPost({ ...postData, name: admin?.result?.name }));
        } else {
            dispatch(updatePost(currentID, { ...postData, name: admin?.result?.name }));
        }
        clearInput();
    };

    const clearInput = () => {
        setCurrentID(0);
        setPostData({
            title: '',
            description: '',
            videoID: '',
            type: '',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left', { pushTable: pushTable })}>
                <Button variant="primary" className={cx('addPost-btn')} onClick={handleOpenForm}>
                    Thêm bài viết
                </Button>
                <Grow in>
                    <div className={cx('table-container')}>
                        <Table bordered hover className={cx('table')}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th>Mô tả</th>
                                    <th>Video ID</th>
                                    <th>Loại</th>
                                    <th>Ngày tạo</th>
                                    <th>Người tạo</th>
                                    <th colSpan={2}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post._id}>
                                        <td>{post._id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.description}</td>
                                        <td>{post.videoID}</td>
                                        <td>{post.type}</td>
                                        <td>{moment(post.createdAt).format('hh:mm - DD/MM/YYYY')}</td>
                                        <td>{post.name}</td>
                                        <td className={cx('table-btn-wrapper')}>
                                            <Button
                                                variant="info"
                                                className={cx('table-btn')}
                                                onClick={() => {
                                                    if (!hide && !pushTable) {
                                                        setHide(hide);
                                                        setPutTable(pushTable);
                                                    } else {
                                                        setHide(!hide);
                                                        setPutTable(!pushTable);
                                                    }
                                                    setCurrentID(post._id);
                                                }}
                                            >
                                                Sửa
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className={cx('table-btn')}
                                                onClick={() => dispatch(deletePost(post._id))}
                                            >
                                                Xóa
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Grow>
            </div>
            <div className={cx('right')}>
                <Form className={cx('form', { hide: hide })} noValidate validated={validated} onSubmit={handleSubmit}>
                    <h1 className={cx('heading')}>{currentID ? 'Sửa' : 'Thêm'} bài viết hữu ích</h1>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Tiêu đề:</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            required
                            type="text"
                            placeholder="Enter title of the post..."
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tiêu đề bài viết</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Mô tả:</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            required
                            type="text"
                            placeholder="Enter description of the post..."
                            as="textarea"
                            rows={3}
                            value={postData.description}
                            onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập mô tả bài viết</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formVideoId">
                        <Form.Label>Video ID (Youtube):</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            required
                            type="text"
                            placeholder="Enter video ID of the post..."
                            value={postData.videoID}
                            onChange={(e) => setPostData({ ...postData, videoID: e.target.value })}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập video id bài viết</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label>Loại:</Form.Label>
                        <Form.Select
                            as="select"
                            className={cx('input-form')}
                            value={postData.type}
                            onChange={(e) => setPostData({ ...postData, type: e.target.value })}
                        >
                            <option value="">---</option>
                            <option value="knowledge">Kiến thức</option>
                            <option value="nutrition">Dinh dưỡng</option>
                            <option value="exercise">Bài tập</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={cx('btn-form')}>
                        <Button variant="success" type="submit" className={cx('submit-btn')}>
                            {currentID ? 'Sửa' : 'Thêm'}
                        </Button>
                        <Button variant="danger" className={cx('close-btn')} onClick={handleCloseForm}>
                            {currentID ? 'Hủy' : 'Đóng'}
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}
