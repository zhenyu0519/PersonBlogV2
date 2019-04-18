import axios from 'axios';
import { GET_POSTS } from './actionTypes'

//GET POST
export const getPosts = () => dispatch => {
    axios.get('api/posts/').then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    }).catch(err => console.log(err))
}