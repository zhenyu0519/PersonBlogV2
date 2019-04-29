import { GET_LAT_POSTS_REQ, GET_LAT_POSTS_OK, GET_LAT_POSTS_ERR } from '../actions/actionTypes.js';

//init the posts state
const initialState = {
    posts: []
}

//store the data based on action
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LAT_POSTS_REQ:
            return {
                ...state,
                posts: []
            }
        case GET_LAT_POSTS_OK:
            return {
                ...state,
                posts: action.posts
            }
        case GET_LAT_POSTS_ERR:
            return {
                ...state,
                posts: action.error
            }
        default:
            return state;
    }
}