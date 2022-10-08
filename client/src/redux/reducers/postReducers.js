import {
    FETCH_POST,
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_NO_PAGINATE,
    FETCH_BY_SEARCH,
    CREATE_POST,
    UPDATE_POST,
    LIKE_POST,
    COMMENT_POST,
    DELETE_CMT,
    DELETE_POST,
    START_LOADING,
    END_LOADING,
} from '../../constants/actionTypes';

export default function postsReducers(state = { isLoading: true, posts: [] }, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };

        case FETCH_ALL_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_ALL_POSTS_NO_PAGINATE:
            return { ...state, posts: action.payload };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        // case FETCH_RECOMMEND_POSTS:
        //     return { ...state, posts: action.payload };
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
            };
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
            };
        case COMMENT_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    //change the post that just received a comment
                    if (post._id === action.payload._id) {
                        console.log('payload cmt', action.payload);
                        return action.payload;
                    }
                    //return all the other posts normally
                    return post;
                }),
            };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case DELETE_CMT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    //change the post that just deleted a comment
                    if (post._id === action.payload._id) {
                        console.log('payload delete', action.payload);
                        return action.payload;
                    }
                    //return all the other posts normally
                    return post;
                }),
            };
        default:
            return state;
    }
}
