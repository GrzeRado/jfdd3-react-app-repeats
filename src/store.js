import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({

})

import userReducer from './state/users'


const reducer = combineReducers({
    users: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)