import { GET_POSTS_REQ, GET_POSTS_OK, GET_POSTS_ERR } from '../actions/actionTypes.js';

const initialState = {
    posts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_REQ:
            return {
                ...state,
                posts: []
            }
        case GET_POSTS_OK:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POSTS_ERR:
            return {
                ...state,
                posts: action.error
            }
        default:
            return state;
    }
}