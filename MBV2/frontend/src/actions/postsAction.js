import axios from 'axios';
import { GET_POSTS_REQ, GET_POSTS_OK, GET_POSTS_ERR } from './actionTypes'

//GET POST
export const getPostsReq = () => {
  return {
    type: GET_POSTS_REQ,
  }
}

export const getPostsOk = (res) => {
  return {
    type: GET_POSTS_OK,
    posts: res
  }
}

export const getPostsErr = (err) => {
  return {
    type: GET_POSTS_ERR,
    error: err
  }
}



export const getPosts = () => dispatch => {
  dispatch(getPostsReq());
  axios.get('api/posts/').then(res => {
    dispatch(getPostsOk(res.data));
  }).catch(err => dispatch(getPostsErr(err)))
}



