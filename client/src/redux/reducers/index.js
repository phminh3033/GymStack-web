import { combineReducers } from 'redux';
import posts from './postReducers';
import authAdmin from './authAdminReducers';
import authUser from './authUserReducers';

export default combineReducers({
    posts,
    authAdmin,
    authUser,
});
