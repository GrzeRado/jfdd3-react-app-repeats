import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer
)