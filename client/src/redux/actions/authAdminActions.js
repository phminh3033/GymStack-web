import * as api from '../../api';
import { AUTH_ADMIN } from '../../constants/actionTypes';

export const signInAdmin = (formDataAdmin, navigate) => async (dispatch) => {
    try {
        //login admin
        const { data } = await api.signInAdmin(formDataAdmin);
        dispatch({ type: AUTH_ADMIN, data });
        navigate('/admin/dashboard');
    } catch (err) {
        console.log({ error: err.message });
    }
};

export const signUpAdmin = (formDataAdmin, navigate) => async (dispatch) => {
    try {
        //sing up admin
        const { data } = await api.signUpAdmin(formDataAdmin);
        dispatch({ type: AUTH_ADMIN, data });
        navigate('/admin');
    } catch (err) {
        console.log({ error: err.message });
    }
};
