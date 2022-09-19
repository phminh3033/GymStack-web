import {
    FETCH_POST,
    FETCH_ALL_POSTS,
    CREATE_POST,
    UPDATE_POST,
    LIKE_POST,
    DELETE_POST,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

// export default function postsReducers(state = { isLoading: true, posts: [] }, action) {
//     switch (action.type) {
//         case START_LOADING:
//             return { ...state, isLoading: true };
//         case END_LOADING:
//             return { ...state, isLoading: false };

//         case FETCH_ALL_POSTS:
//             return action.payload;
//         case FETCH_POST:
//             return { ...state, post: action.payload };

//         case CREATE_POST:
//             return { ...state, posts: [...state, action.payload] };
//         case UPDATE_POST:
//             return {
//                 ...state,
//                 posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
//             };
//         case LIKE_POST:
//             return {
//                 ...state,
//                 posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
//             };
//         case DELETE_POST:
//             return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
//         default:
//             return state;
//     }
// }

export default function postsReducers(posts = [], action) {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        case UPDATE_POST:
        case LIKE_POST:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE_POST:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}
