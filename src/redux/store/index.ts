import { createStore, combineReducers, applyMiddleware } from 'redux';
import stateReducers from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [thunk];

const store = createStore(
  stateReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;