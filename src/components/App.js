import React from "react";
import Header from "./Header.js";
import AddPanel from "./AddPanel.js";
import Overlay from "./Overlay.js";
import './app.scss';


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
          <Header handleOpenAddPanel={this.handleOpenAddPanel}/>
          {this.state.addPanelOpen && <AddPanel />}
          {this.state.addPanelOpen && <Overlay  handleOpenAddPanel={this.handleOpenAddPanel}/>}
        </div>
    );
  }
}

export default App;
