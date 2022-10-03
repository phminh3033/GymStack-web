import {
    AUTH_USER,
    LOGOUT_USER,
    FETCH_USER,
    FETCH_ALL_USERS,
    FETCH_USERS_BY_SEARCH,
    DELETE_USER,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

export const authUserReducers = (state = { authData: null }, action) => {
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

export const users = (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };

        case FETCH_ALL_USERS:
            return { ...state, users: action.payload };
        case FETCH_USER:
            return { ...state, user: action.payload };
        case FETCH_USERS_BY_SEARCH:
            return { ...state, users: action.payload };
        case DELETE_USER:
            return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
        default:
            return state;
    }
};
