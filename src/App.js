import React, { Component } from 'react';
import './App.css';
import { Sidebar, Navbar, SidebarMobile } from './components';

class App extends Component {

  state = {
    barClass: "col-md-3",
    containerClass: "col-md-9",
    sidebarExpanded: true,
    height: window.innerHeight,
    width: window.innerWidth,
    uslov: false,
  };

  barfullClass = `${this.state.barClass} text-center bar p-0`
  containerfullClass = `${this.state.containerClass} text-center`

  updateSidebar = () => {
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded })
  }

//////////////////////////////

  componentDidMount = () => {
     //console.log(this.state.height);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("resize",this.updateExpandedState);
  }

  updateExpandedState = () => {
    const { sidebarExpanded, width } = this.state;
    console.log("method", sidebarExpanded);
    
    if (width < 600) {
      this.setState({ sidebarExpanded: false })
    }
    if (width > 650) {
      this.setState({ sidebarExpanded: true })
    }  
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("resize", this.this.updateExpandedState);
  }

////////////////////////////////////////////////////////

  render() {
    // console.log(this.state.height);
    console.log(this.state.width);
    console.log("render", this.state.sidebarExpanded);
    const { sidebarExpanded, uslov } = this.state;
    let sidebarClass, containerClass;
    if (sidebarExpanded) {
      sidebarClass = 'col-md-3';
      containerClass = 'col-md-9';
    } else {
      sidebarClass = 'col-md-1';
      containerClass = 'col-md-11';
    }
    return (
      <div className="App">
        <span className="custom">
          <i className="fas fa-align-justify"></i>
        </span>
        <Navbar />
        <div className="container height100 m-0 p-0">
          <div className="row height100">
            <div className={`${sidebarClass} text-center bar p-0`}>
              <Sidebar expanded={sidebarExpanded} onSidebarChange={this.updateSidebar} />
            </div>

            <div className={`${containerClass} text-center p-0`}>
              text
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
