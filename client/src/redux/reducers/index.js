import { combineReducers } from 'redux';
import posts from './postReducers';
import authAdminReducers from './authAdminReducers';
import authUserReducers from './authUserReducers';

export default combineReducers({
    posts,
    authAdminReducers,
    authUserReducers,
});
