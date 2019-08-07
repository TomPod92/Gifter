import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase.js";
import { login, logout } from './actions/authActions.js';
import { startSetItems } from './actions/listActions.js';
import App from './components/App.js';
import LoginPanel from './components/LoginPanel.js';
import './index.scss';

const store = configureStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

const loginPanel = (
    <Provider store={store}>
        <LoginPanel />
    </Provider>
);

// everytime user logs in add his UID to redux, fetch gift list from firebase and render the app
// everytime user logs out remove that UID from redux and render login panel
firebase.auth().onAuthStateChanged( user => {
    if(user) {
      store.dispatch(login(user));
      store.dispatch(startSetItems());
      // console.log('zalogowany');
      // console.log(user);
      // console.log(user.uid);
      ReactDOM.render(app, document.getElementById('root'));
    } else {
      store.dispatch(logout());
      // console.log('wylogowany');
      ReactDOM.render(loginPanel, document.getElementById('root'));
    }
  });


