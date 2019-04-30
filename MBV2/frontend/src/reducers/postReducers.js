import { GET_POST_REQ, GET_POST_OK, GET_POST_ERR } from '../actions/actionTypes.js';

//init the posts state
const initialState = {
    post: null
}

//store the data based on action
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST_REQ:
            return {
                ...state,
                post: null
            }
        case GET_POST_OK:
            return {
                ...state,
                post: action.post
            }
        case GET_POST_ERR:
            return {
                ...state,
                post: action.error
            }
        default:
            return state;
    }
}