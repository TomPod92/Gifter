import React from "react";
// import { connect } from 'react-redux';
import Header from "./Header.js";
import AddPanel from "./AddPanel.js";
import Overlay from "./Overlay.js";
import SliderContainer from './SliderContainer.js';
import './app.scss';
import personList from '../personList.js';

class App extends React.Component {
  state = {
    OverlayOpen: false
  }

  handleOpenAddPanel = () => {
    this.setState( prevState => ( {addPanelOpen: !prevState.addPanelOpen} ))
  }

  render() {
    return (
        <div className="App">
          {this.state.addPanelOpen && <AddPanel handleOpenAddPanel={this.handleOpenAddPanel}/>}
          {this.state.addPanelOpen && <Overlay  handleOpenAddPanel={this.handleOpenAddPanel}/>}
          
          <Header handleOpenAddPanel={this.handleOpenAddPanel}/>
          { personList.map( current => (<SliderContainer key={current} person={current}/>)) }
        </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     gifts: state.list
//   }
// };

export default App;
