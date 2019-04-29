import axios from 'axios';
import { GET_LAT_POSTS_REQ, GET_LAT_POSTS_OK, GET_LAT_POSTS_ERR } from './actionTypes'

//send posts request action
export const getLatestPostsReq = () => {
  return {
    type: GET_LAT_POSTS_REQ,
  }
}

//send posts ok action
export const getLatestPostsOk = (res) => {
  return {
    type: GET_LAT_POSTS_OK,
    posts: res
  }
}

//send posts err action
export const getLatestPostsErr = (err) => {
  return {
    type: GET_LAT_POSTS_ERR,
    error: err
  }
}

//if action is ok dispatch api
export const getLatestPosts = () => dispatch => {
  dispatch(getLatestPostsReq());
  axios.get('api/posts/').then(res => {
    dispatch(getLatestPostsOk(res.data));
  }).catch(err => dispatch(getLatestPostsErr(err)))
}



