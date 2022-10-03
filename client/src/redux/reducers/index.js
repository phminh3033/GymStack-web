import { combineReducers } from 'redux';
import posts from './postReducers';
import { authAdminReducers, admins } from './authAdminReducers';
import { authUserReducers, users } from './authUserReducers';

export default combineReducers({
    posts,
    authAdminReducers,
    authUserReducers,
    admins,
    users,
});
