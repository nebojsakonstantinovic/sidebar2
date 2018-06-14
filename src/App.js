import React, { Component } from 'react';
import './App.css';
import { SidebarDesktop, Navbar } from './components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="shones">
          <SidebarDesktop />
          <div className={`text-center d-inline-block`}>text</div>
        </div>
      </div>
    );
  }
}

export default App;
