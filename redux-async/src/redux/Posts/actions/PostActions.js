// action creator returns a action object with a 
// type and a payload

// dispatching a action object is the only way to update the 
// store and to update the whole global state managment system

import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR} from '../Types'
import Axios from 'axios'

export const fetchRequest = () => {
    return {
        type: FETCH_POST_REQUEST,
        payload: null
    }
}

export const fetchSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_POST_ERROR,
        payload: error
    }
}

export const fetchPost = () => async (dispatch, getState) => {
    dispatch(fetchRequest())
    
    try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(fetchSuccess(response.data))
    } catch(error) {
        dispatch(fetchError(error.message))
    }
}

// export const fetchPost = () => async (dispatch, getState) => {
//     const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log(response.data)
//     dispatch({type: FETCH_POST, payload: response.data})
// }       

// export const fetchPost = async () => (dispatch, getState) => {
//     const responce = await Axios.get('https://jsonplaceholder.typicode.com/posts')
//     return {
//         type: FETCH_POST,
//         payload: responce.data
//     }
// }