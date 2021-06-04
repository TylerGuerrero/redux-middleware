import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { rootReducer } from './RootReducer'
import { DECREMENT } from '../redux/counter/Types'

const logger = createLogger()

// middleware runs before the action gets to the reducer
// const myLogger = (store) => {
//     return (action) => {
//         return (next) => {
//             console.log('middleware ran')
//             action(next)
//         }
//     }
// }

const myLogger = (store) => (action) => (next) => {
    console.log('middleware ran')
    return action(next)
}

const limitToTen = (store) => (action) => (next) => {
    if (store.getState().counter.count >= 10) {
        return action({type: DECREMENT})
    }
    
    return action(next)
}

const middleware = [thunk, logger, myLogger, limitToTen]
export const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)