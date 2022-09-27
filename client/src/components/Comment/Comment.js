import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Comment.module.scss';

//React library
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../redux/actions/postActions';

//MUI library
import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

const cx = classNames.bind(styles);

export default function Comment({ post }) {
    const user = JSON.parse(localStorage.getItem('profileUser'));
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const handleKeyPress = async (e) => {
        if (e.keyCode === 13) {
            // const finalCmt = `${user.result.name}: ${comment}`;
            const finalCmt = {
                name: user.result.name,
                picture: user.result.picture,
                comment: comment,
            };
            const newCmt = await dispatch(commentPost(finalCmt, post._id));
            setComments(newCmt);
            setComment('');

            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            {user?.result?.name ? (
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
                <p className={cx('warning')}>Đăng nhập để cùng thảo luận với mọi người</p>
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
                        <div className={cx('comment-detail')}>
                            <div className={cx('comment-name')}>{comment.name}</div>
                            <div className={cx('comment-content')}>{comment.comment}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={commentsRef} />
        </div>
    );
}
