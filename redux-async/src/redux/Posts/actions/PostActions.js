// action creator returns a action object with a 
// type and a payload

// dispatching a action object is the only way to update the 
// store and to update the whole global state managment system

import { FETCH_POST } from '../Types'
import Axios from 'axios'

export const fetchPost = async () => {
    const responce = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    return {
        type: FETCH_POST,
        payload: responce.data
    }
}