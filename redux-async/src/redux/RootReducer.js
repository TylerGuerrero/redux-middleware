import { combineReducers } from 'redux'
import { postReducer } from './Posts/reducers/PostReducer'

export const rootReducer = combineReducers({
    posts: postReducer
})