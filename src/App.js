import React, { Component } from 'react';
import './App.css';
import { SidebarMenu, Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="row height100">
          <div className="col-md-3 text-center bar">
            <SidebarMenu className="margin-l-15"/>
          </div>
      
          <div className="col-md-9 text-center">text</div>
        </div>
      </div>
    );
  }
}

export default App;
