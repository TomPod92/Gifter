import React from "react";
import configureStore from "../store/configureStore.js";
import { Provider } from "react-redux";
import Header from "./Header.js";
import { firebase } from "../firebase/firebase.js";
import { login, logout } from '../actions/authActions.js';

const store = configureStore();

// everytime user logs in add his UID to redux
// everytime user logs out remove that UID from redux
// UID in redux store is used to redner the "login/out button" and "add item button"
firebase.auth().onAuthStateChanged( user => {
  if(user) {
    store.dispatch(login(user.uid));
  } else {
    store.dispatch(logout());
  }
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
