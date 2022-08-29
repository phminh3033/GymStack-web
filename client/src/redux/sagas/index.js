import { takeLatest, call, put } from 'redux-saga/effects';

//Actions
import * as actions from '../actions/postActions';

//API
import * as api from '../../api';

//generator function ES6
function* fetchPostSaga(action) {
    const posts = yield call(api.fetchPosts);
    console.log('[posts]', posts);
    yield put(actions.getPosts.getPostSuccess(posts.data));
}

//generator function ES6
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

export default mySaga;
