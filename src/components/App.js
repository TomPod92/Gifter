import React from 'react';
import configureStore from "../store/configureStore.js";
import { Provider } from "react-redux";
import Header from './Header.js';

const store = configureStore();

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App;