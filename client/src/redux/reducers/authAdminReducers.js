import { AUTH_ADMIN, LOGOUT_ADMIN } from '../../constants/actionTypes';

const authAdminReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_ADMIN:
            localStorage.setItem('profileAdmin', JSON.stringify({ ...action?.data }));
            console.log(action?.data);
            return { ...state, authData: action?.data };
        case LOGOUT_ADMIN:
            localStorage.removeItem('profileAdmin');
            console.log(action?.data);
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authAdminReducers;
