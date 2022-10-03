import * as api from '../../api';
import {
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_NO_PAGINATE,
    FETCH_POST,
    FETCH_BY_SEARCH,
    CREATE_POST,
    UPDATE_POST,
    LIKE_POST,
    DELETE_POST,
    COMMENT_POST,
    DELETE_CMT,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

export const getPost = (id, type) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id, type);
        dispatch({ type: FETCH_POST, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostAction: err.message });
    }
};

export const getPostsNoPaginate = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPostsNoPaginate();
        dispatch({ type: FETCH_ALL_POSTS_NO_PAGINATE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostsNoPaginateAction: err.message });
    }
};

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        dispatch({ type: FETCH_ALL_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostsAction: err.message });
    }
};

// export const getRecommendPosts = (type) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchRecommendPosts(type);
//         dispatch({ type: FETCH_RECOMMEND_POSTS, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (err) {
//         console.log({ errorGetRecommendPostsAction: err.message });
//     }
// };

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {
            data: { data },
        } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostsBySearchAction: err.message });
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        // navigate('/admin/posts?');
        dispatch({ type: CREATE_POST, payload: data });
    } catch (err) {
        console.log({ errorCreatePostAction: err.message });
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (err) {
        console.log({ errorUpdatePostAction: err.message });
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
        console.log({ errorDeletePostAction: err.message });
    }
};

export const deleteCmt = (id) => async (dispatch) => {
    try {
        await api.deleteCmt(id);
        dispatch({ type: DELETE_CMT, payload: id });
    } catch (err) {
        console.log({ errorDeleteCmtAction: err.message });
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE_POST, payload: data });
    } catch (err) {
        console.log({ errorLikePostAction: err.message });
    }
};

export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.commentPost(value, id);
        dispatch({ type: COMMENT_POST, payload: data });
        console.log('commentPost', data.comments);
        return data.comments;
    } catch (err) {
        console.log({ errorCommentPostAction: err.message });
    }
};
