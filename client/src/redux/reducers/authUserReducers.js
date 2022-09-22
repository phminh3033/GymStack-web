import { AUTH_USER, LOGOUT_USER } from '../../constants/actionTypes';

const authUserReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_USER:
            localStorage.setItem('profileUser', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case LOGOUT_USER:
            localStorage.removeItem('profileUser');
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authUserReducers;
