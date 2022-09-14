import * as api from '../../api';
import { AUTH } from '../../constants/actionTypes';

export const signIn = (formDataUser, navigate) => async (dispatch) => {
    try {
        //login user
        navigate('/');
    } catch (err) {
        console.log({ error: err });
    }
};

export const signUp = (formDataUser, navigate) => async (dispatch) => {
    try {
        //sing up user
        navigate('/');
    } catch (err) {
        console.log({ error: err });
    }
};
