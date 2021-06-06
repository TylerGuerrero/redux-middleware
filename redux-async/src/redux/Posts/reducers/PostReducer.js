// state object is binded to the initial state object
// action object is binded to the action object inside the
// dispatch method

// (prevState, action) => newState

// state is immutable. Everytime we change a state it creates
// a new state. We do this for debugging reasons. Everytime we
// create a new state we can now see the states as they change
// with time.

// reducer returns a state object that is the same exact type
// as the original initial state object
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from '../Types'

const initialState = {
    posts: [],
    loading: false,
    error: null
}   

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true,
                posts: [],
                error: null
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        case FETCH_POST_ERROR:
                return {
                    ...state,
                    posts: [],
                    loading: false,
                    error: action.payload
                }
        default:
            return state
    }
}   