import * as api from '../../api';
import { AUTH_USER } from '../../constants/actionTypes';

export const signInUser = (formDataUser, navigate) => async (dispatch) => {
    try {
        //login user
        const { data } = await api.signInUser(formDataUser);
        dispatch({ type: AUTH_USER, data });
        navigate('/');
    } catch (err) {
        console.log({ error: err });
    }
};

export const signUpUser = (formDataUser, navigate) => async (dispatch) => {
    try {
        //sing up user
        const { data } = await api.signUpUser(formDataUser);
        dispatch({ type: AUTH_USER, data });
        navigate('/');
    } catch (err) {
        console.log({ error: err });
    }
};
