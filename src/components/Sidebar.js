import React, { Component } from 'react';
import { SidebarItem, SidebarSubItem } from './';
import  './Components.css';

class SidebarMenu extends Component {

  state = {
    activeTab: null,
  }

  setActiveTab = (tab) => () => {
    const { activeTab } = this.state;
    this.setState({ activeTab: activeTab === tab ? null : tab })
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="margin-l-15">
        <ul className="list-group">
        <li className="list-group-item p-0">
          <SidebarItem icon='fas fa-user' title='catalog' active={activeTab === 'catalog'} onClick={this.setActiveTab('catalog')}>
            <SidebarSubItem title='mi' onClick={console.log} />
            <SidebarSubItem title='mir' onClick={console.log} />
            <SidebarSubItem title='mirk' onClick={console.log} />
            <SidebarSubItem title='mirko' onClick={console.log} />
          </SidebarItem>
        </li>
        <li className="list-group-item p-0">
          <SidebarItem icon='fas fa-anchor' title='catalog2' active={activeTab === 'catalog2'} onClick={this.setActiveTab('catalog2')}>
            <SidebarSubItem title='mi 2' onClick={console.log} />
            <SidebarSubItem title='mir 2' onClick={console.log} />
            <SidebarSubItem title='mirk 2' onClick={console.log} />
            <SidebarSubItem title='mirko 2' onClick={console.log} />
          </SidebarItem>
        </li>
        <li className="list-group-item p-0">
        <SidebarItem icon='fas fa-align-justify' active={activeTab === 'catalog2'} onClick={this.setActiveTab('catalog2')}>
        </SidebarItem>
        </li>
        </ul>
      </div>
    );
  }
}

export default SidebarMenu;
