import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import listReducer from '../reducers/listReducer.js';
import authReducer from "../reducers/authReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      list: listReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
