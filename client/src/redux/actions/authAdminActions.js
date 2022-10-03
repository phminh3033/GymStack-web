import * as api from '../../api';
import {
    AUTH_ADMIN,
    FETCH_ALL_ADMINS,
    FETCH_ADMINS_BY_SEARCH,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

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

export const getAdmins = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdmins();
        dispatch({ type: FETCH_ALL_ADMINS, payload: data });
    } catch (err) {
        console.log({ errorGetAdminsAction: err.message });
    }
};

export const getAdminsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {
            data: { data },
        } = await api.fetchAdminsBySearch(searchQuery);
        dispatch({ type: FETCH_ADMINS_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log({ errorGetAdminsBySearchAction: err.message });
    }
};

// export const deleteAdmin = (id) => async (dispatch) => {
//     try {
//         await api.deleteAdmin(id);
//         dispatch({ type: DELETE_ADMIN, payload: id });
//     } catch (err) {
//         console.log({ errorDeleteAdminAction: err.message });
//     }
// };
