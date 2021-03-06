import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from '../redux/RootReducer'

const logger = createLogger()
const middleware = [thunk, logger]

export const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)