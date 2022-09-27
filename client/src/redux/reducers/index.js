import { combineReducers } from 'redux';
import posts from './postReducers';
import { authAdminReducers, adminReducers } from './authAdminReducers';
import { authUserReducers, userReducers } from './authUserReducers';

export default combineReducers({
    posts,
    authAdminReducers,
    authUserReducers,
    adminReducers,
    userReducers,
});
