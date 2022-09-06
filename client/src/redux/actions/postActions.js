import * as api from '../../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL_POSTS', payload: data });
    } catch (err) {
        console.log({ error: err });
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', payload: data });
    } catch (err) {
        console.log({ error: err });
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE_POST', payload: data });
    } catch (err) {
        console.log({ error: err });
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE_POST', payload: id });
    } catch (err) {
        console.log({ error: err });
    }
};
