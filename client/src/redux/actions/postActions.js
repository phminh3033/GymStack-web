import * as api from '../../api';
import {
    FETCH_ALL_POSTS,
    FETCH_POST,
    FETCH_BY_SEARCH,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

export const getPost = (id) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data });
        // dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostAction: err.message });
    }
};

export const getPosts = (page) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        console.log(data);
        dispatch({ type: FETCH_ALL_POSTS, payload: data });
        // dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetPostsAction: err.message });
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const {
            data: { data },
        } = await api.fetchPostsBySearch(searchQuery);
        console.log(data);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (err) {
        console.log({ errorGetPostsBySearchAction: err.message });
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
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

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (err) {
        console.log({ errorLikePostAction: err.message });
    }
};
