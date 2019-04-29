import { combineReducers } from 'redux';
import posts from './latestPostsReducers'

export default combineReducers({
    latestPostsReducers: posts
})