import React, { Component } from 'react';
import { NavbarItem } from './';

class Navbar extends Component {

  state = {
    loggedIn: true
  };


  render() {
    let navbar;
    const { loggedIn } = this.state
    if (!loggedIn) {
      navbar =
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" onClick={ () => this.setState({ loggedIn: !loggedIn })}>
                  < NavbarItem title='Login' />
                </li>
                <li className="nav-item">
                  <NavbarItem title='Register' />
                </li>
              </ul>
            </div>
          </nav>
        </div>
    } else {
      navbar =
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" onClick={ () => this.setState({ loggedIn: !loggedIn })}>
                  < NavbarItem title='Logout' />
                </li>
                <li className="nav-item">
                  <NavbarItem title='Settings' />
                </li>
              </ul>
            </div>
          </nav>
        </div>
    }
    return (
      navbar
    )
  }
}

export default Navbar;