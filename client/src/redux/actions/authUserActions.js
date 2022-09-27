import * as api from '../../api';
import {
    AUTH_USER,
    FETCH_USER,
    FETCH_ALL_USERS,
    FETCH_USERS_BY_SEARCH,
    DELETE_USER,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

export const signInUser = (formDataUser, navigate) => async (dispatch) => {
    try {
        //login user
        const { data } = await api.signInUser(formDataUser);
        dispatch({ type: AUTH_USER, data });
        navigate(-1);
    } catch (err) {
        console.log({ errorSignInUserAction: err.message });
    }
};

export const signUpUser = (formDataUser, navigate) => async (dispatch) => {
    try {
        //sing up user
        const { data } = await api.signUpUser(formDataUser);
        dispatch({ type: AUTH_USER, data });
        navigate(-1);
    } catch (err) {
        console.log({ errorSignUpUserAction: err.message });
    }
};

export const getUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchUser(id);
        dispatch({ type: FETCH_USER, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetUserAction: err.message });
    }
};

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchUsers();
        console.log(data);
        dispatch({ type: FETCH_ALL_USERS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetUsersAction: err.message });
    }
};

export const getUsersBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {
            data: { data },
        } = await api.fetchUsersBySearch(searchQuery);
        dispatch({ type: FETCH_USERS_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetUsersBySearchAction: err.message });
    }
};

// export const updateUser = (id, user) => async (dispatch) => {
//     try {
//         const { data } = await api.updateUser(id, user);
//         dispatch({ type: UPDATE_USER, payload: data });
//     } catch (err) {
//         console.log({ errorUpdateUserAction: err.message });
//     }
// };

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({ type: DELETE_USER, payload: id });
    } catch (err) {
        console.log({ errorDeleteUserAction: err.message });
    }
};
