import thunkMiddleware from '../node_modules/redux-thunk/es/index.js'
import { createStore, applyMiddleware, compose, combineReducers } from '../node_modules/redux/dist/redux.js'
import * as reducers from './reducers.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers(reducers), composeEnhancers(
  applyMiddleware(thunkMiddleware)
));