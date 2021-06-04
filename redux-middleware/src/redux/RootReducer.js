import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducers/CounterReducer'

export const rootReducer = combineReducers({
    counter: counterReducer
})