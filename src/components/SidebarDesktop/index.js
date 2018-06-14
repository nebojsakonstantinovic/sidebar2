import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import SidebarSubItem from './SidebarSubItem';
import '../Components.css';

class Sidebar extends Component {

  state = {
    activeTab: null,
    expanded: true,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const stateUpdate = { height: window.innerHeight, width: window.innerWidth };
    if (window.innerWidth < 600) {
      stateUpdate.expanded = false;
    } else if (window.innerWidth > 650) {
      stateUpdate.expanded = true;
    }
    this.setState(stateUpdate);
  }

  toggleSidebar = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  setActiveTab = (tab) => () => {
    const { activeTab, expanded } = this.state;
    if (expanded) {
      this.setState({ activeTab: activeTab === tab ? null : tab })
    }
  }

  setClass() {
    const { expanded } = this.state;
    if (expanded) {
      return "fas fa-times-circle toggle-icon"
    } else {
      return 'fas fa-align-justify toggle-icon'
    }
  }

  demo = [
    { title: 'products', onClick: console.log },
    { title: 'cart routes', onClick: console.log },
    { title: 'orders', onClick: console.log },
    { title: 'modules', onClick: console.log },
  ]

  render() {
    const { activeTab, expanded } = this.state;
    return (
      <ul className="list-group p-0 sidebarUl text-white" style={{display: 'inline-block', height: '100%', backgroundColor: 'darkgray'}}>
        <SidebarItem icon='fas fa-user' expanded={expanded} title={'catalog'} active={activeTab === 'catalog'} onClick={this.setActiveTab('catalog')}>
          <ul className="list-group p-0">
            <SidebarSubItem parentActive={activeTab === 'catalog'} title='products' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog'} title='cart routes' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog'} title='orders' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog'} title='modules' onClick={console.log} />
          </ul>
        </SidebarItem>
        <SidebarItem icon='fas fa-anchor' expanded={expanded} title={'catalog2'} active={activeTab === 'catalog2'} onClick={this.setActiveTab('catalog2')}>
          <ul className="list-group p-0">
            {/* <SidebarSubItem title='products' onClick={console.log} />
              <SidebarSubItem title='cart routes' onClick={console.log} />
              <SidebarSubItem title='orders' onClick={console.log} />
              <SidebarSubItem title='modules' onClick={console.log} /> */}
            {this.demo.map((d, key) => <SidebarSubItem key={key} parentActive={activeTab === 'catalog2'} title={d.title} onClick={d.onClick} />)}
          </ul>
        </SidebarItem>
        <li className="mt-0 list-group-item">
          <i className={this.setClass()} onClick={this.toggleSidebar}></i>
        </li>
        <li className="text-white">{expanded ? 'EXPANDED' : 'MIN'}</li>
      </ul>
    );
  }
}

export default Sidebar;
