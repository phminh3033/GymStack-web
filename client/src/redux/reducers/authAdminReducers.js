import { AUTH_ADMIN, LOGOUT_ADMIN, FETCH_ALL_ADMINS, FETCH_ADMINS_BY_SEARCH } from '../../constants/actionTypes';

export const authAdminReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_ADMIN:
            localStorage.setItem('profileAdmin', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case LOGOUT_ADMIN:
            localStorage.removeItem('profileAdmin');
            return { ...state, authData: null };
        default:
            return state;
    }
};

export const admins = (state = { admins: [] }, action) => {
    switch (action.type) {
        // case START_LOADING:
        //     return { ...state, isLoading: true };
        // case END_LOADING:
        //     return { ...state, isLoading: false };

        case FETCH_ALL_ADMINS:
            return { ...state, admins: action.payload };
        case FETCH_ADMINS_BY_SEARCH:
            return { ...state, admins: action.payload };
        default:
            return state;
    }
};
