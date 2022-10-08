import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Comment.module.scss';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

//React library
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost, deleteCmt } from '../../redux/actions/postActions';

//MUI library
import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const cx = classNames.bind(styles);

export default function Comment({ post }) {
    const user = JSON.parse(localStorage.getItem('profileUser'));
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const [currentIdCmt, setCurrentIdCmt] = useState(0);
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const handleKeyPress = async (e) => {
        if (e.keyCode === 13) {
            // const finalCmt = `${user.result.name}: ${comment}`;
            const finalCmt = {
                idUser: user.result._id || user?.result?.sub,
                name: user.result.name,
                picture: user.result.picture,
                comment: comment,
            };
            const newCmt = await dispatch(commentPost(finalCmt, post._id));
            setComments(newCmt);
            setComment('');

            // commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDeleteComment = async () => {
        const updateCmtAfterDeleted = await dispatch(deleteCmt(post._id, currentIdCmt));
        setComments(updateCmtAfterDeleted);
    };

    return (
        <div>
            {user?.result ? (
                <div>
                    <TextField
                        fullWidth
                        rows={2}
                        variant="outlined"
                        label="Bình luận"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            ) : (
                <p className={cx('warning')}>Đăng nhập để cùng thảo luận với mọi người!</p>
            )}
            <div className={cx('wrap-comment')}>
                {comments?.map((comment, index) => (
                    <div key={index} className={cx('comment')}>
                        <Avatar
                            className={cx('comment-ava')}
                            src={comment.picture}
                            alt={comment.name}
                            sx={{ bgcolor: green[600] }}
                        >
                            {comment.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className={cx('comment-wrap')}>
                            <div className={cx('comment-detail')}>
                                <div className={cx('comment-name')}>{comment.name}</div>
                                <div className={cx('comment-content')}>{comment.comment}</div>
                            </div>
                            {(comment.idUser === user?.result?._id || comment.idUser === user?.result?.sub) && (
                                <Tippy
                                    interactive
                                    trigger="click"
                                    hideOnClick
                                    placement="right"
                                    render={(attrs) => (
                                        <div className={cx('deleteWarning-wrap')} tabIndex="-1" {...attrs}>
                                            <div className={cx('deleteWarning')}>
                                                <FontAwesomeIcon
                                                    className={cx('deleteWarning-icon')}
                                                    icon={faTriangleExclamation}
                                                />

                                                <h2>Bạn có chắc chắn muốn xóa</h2>
                                                <p>
                                                    Bình Luận <strong>{comment.comment}</strong> khỏi hệ thống?
                                                </p>
                                                <Button
                                                    variant="danger"
                                                    className={cx('deleteBtn')}
                                                    onClick={handleDeleteComment}
                                                >
                                                    Xóa
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <span className={cx('comment-delete')} onClick={() => setCurrentIdCmt(comment._id)}>
                                        Xóa
                                    </span>
                                </Tippy>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div ref={commentsRef} />
        </div>
    );
}
