import { combineReducers, createStore } from 'redux';
import roomReducer from './reducer';
import { logger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ cart: cartReducer, hotel: roomReducer });
const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleware);
export default store;
