import axios from 'axios';
import { GET_POST_REQ, GET_POST_OK, GET_POST_ERR } from './actionTypes'

//send posts request action
export const getPostReq = () => {
  return {
    type: GET_POST_REQ,
  }
}

//send posts ok action
export const getPostOk = (res) => {
  return {
    type: GET_POST_OK,
    posts: res
  }
}

//send posts err action
export const getPostErr = (err) => {
  return {
    type: GET_POST_ERR,
    error: err
  }
}

//if action is ok dispatch api
export const getPost = (params) => dispatch => {
  dispatch(getPostReq());
  axios.get('api/post/'+param).then(res => {
    dispatch(getPostOk(res.data));
  }).catch(err => dispatch(getPostErr(err)))
}



