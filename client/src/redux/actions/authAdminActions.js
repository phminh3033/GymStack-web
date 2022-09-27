import * as api from '../../api';
import { AUTH_ADMIN } from '../../constants/actionTypes';

export const signInAdmin = (formDataAdmin, navigate) => async (dispatch) => {
    try {
        //login admin
        const { data } = await api.signInAdmin(formDataAdmin);
        dispatch({ type: AUTH_ADMIN, data });
        navigate('/admin/dashboard');
    } catch (err) {
        console.log({ errorSignInAdminAction: err.message });
    }
};

export const signUpAdmin = (formDataAdmin, navigate) => async (dispatch) => {
    try {
        //sing up admin
        const { data } = await api.signUpAdmin(formDataAdmin);
        dispatch({ type: AUTH_ADMIN, data });
        navigate('/admin');
    } catch (err) {
        console.log({ errorSignUpAdminAction: err.message });
    }
};

// export const getUsers = () => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchUsers();
//         console.log(data);
//         dispatch({ type: FETCH_ALL_USERS, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (err) {
//         console.log({ errorGetUsersAction: err.message });
//     }
// };

// export const getUsersBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const {
//             data: { data },
//         } = await api.fetchUsersBySearch(searchQuery);
//         dispatch({ type: FETCH_USERS_BY_SEARCH, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (err) {
//         console.log({ errorGetUsersBySearchAction: err.message });
//     }
// };

// export const deleteUser = (id) => async (dispatch) => {
//     try {
//         await api.deleteUser(id);
//         dispatch({ type: DELETE_USER, payload: id });
//     } catch (err) {
//         console.log({ errorDeleteUserAction: err.message });
//     }
// };
