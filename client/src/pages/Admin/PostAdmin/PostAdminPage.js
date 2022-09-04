import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './PostAdminPage.module.scss';

//react library
import { useState } from 'react';

//react-bootstrap library
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const cx = classNames.bind(styles);

export default function PostAdminPage() {
    const [show, setShow] = useState(false);
    const handleOpenForm = () => {
        setShow(!show);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Button variant="primary" className={cx('addPost-btn')} onClick={handleOpenForm}>
                    Thêm bài viết
                </Button>
                <div className={cx('table-container')}>
                    <Table bordered hover className={cx('table')}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tiêu đề</th>
                                <th>Mô tả</th>
                                <th>Video ID</th>
                                <th>Loại</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>OttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOttoOtto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className={cx('right')}>
                <Form className={cx('form', { show: show })} method="POST">
                    <h1 className={cx('heading')}>Thêm bài viết hữu ích</h1>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Tiêu đề:</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            type="text"
                            placeholder="Enter title of the post..."
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Mô tả:</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            type="password"
                            placeholder="Enter description of the post..."
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formVideoId">
                        <Form.Label>Video ID (Youtube):</Form.Label>
                        <Form.Control
                            className={cx('input-form')}
                            type="text"
                            placeholder="Enter video ID of the post..."
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Loại:</Form.Label>
                        <Form.Select aria-label="Default select example" className={cx('input-form')}>
                            <option value="knowledge">Kiến thức</option>
                            <option value="exercise">Bài tập</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={cx('btn-action')}>
                        <Button variant="success" type="submit" className={cx('submit-btn')}>
                            Thêm
                        </Button>
                        <Button variant="danger" className={cx('close-btn')} onClick={handleOpenForm}>
                            Đóng
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}
