import { combineReducers } from 'redux';
import posts from './latestPostsReducers'
import post from './postReducers';

export default combineReducers({
    latestPostsReducers: posts,
    postReducers: post
})