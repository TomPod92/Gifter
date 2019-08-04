import { createStore, combineReducers } from "redux";
import listReducer from '../reducers/listReducer.js';
import authReducer from "../reducers/authReducer.js";

export default () => {
  const store = createStore(
    combineReducers({
      list: listReducer,
      auth: authReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
