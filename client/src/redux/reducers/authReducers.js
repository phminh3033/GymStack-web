import { AUTH, LOGOUT } from '../../constants/actionTypes';

const authReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profileUser', JSON.stringify({ ...action?.data }));
            console.log(action?.data);
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            console.log(action?.data);
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducers;
