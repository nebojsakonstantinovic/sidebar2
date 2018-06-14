import React, { Component } from 'react';

class NavbarItem extends Component {
  
  render() {
    const { title } = this.props 
    return(
      <a className="nav-link" href="#">{title}</a>
    )
  }
}

export default NavbarItem;