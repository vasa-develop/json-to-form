import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from '../reducers';

const middlewares = [thunk];

const intialState = {};

const store = createStore(RootReducer, intialState, applyMiddleware(...middlewares));

export default store;