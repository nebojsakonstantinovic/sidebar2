import React, { Component } from 'react';
import { SidebarItem, SidebarSubItem } from './';
import './Components.css';
import './Responsive.css';

class Sidebar extends Component {

  state = {
    activeTab: null,
  };

  setActiveTab = (tab) => () => {
    const { activeTab } = this.state;
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ activeTab: activeTab === tab ? null : tab })
    }
    
  }

  // demo = [
  //   { title: 'products', onClick: console.log }
  //   { title: 'cart routes', onClick: console.log },
  //   { title: 'orders', onClick: console.log },
  //   { title: 'modules', onClick: console.log },
  // ]

  render() {
    const { activeTab } = this.state;
    const { onSidebarChange, expanded } = this.props;
    // console.log(this.state.sidebar);

    return (
      <ul className="list-group p-0 text-white">
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
            <SidebarSubItem parentActive={activeTab === 'catalog2'} title='products' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog2'} title='cart routes' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog2'} title='orders' onClick={console.log} />
            <SidebarSubItem parentActive={activeTab === 'catalog2'} title='modules' onClick={console.log} />
            {/* {this.demo.map((d, key) => <SidebarSubItem key={key} title={d.title} onClick={d.onClick} />)} */}
          </ul>
        </SidebarItem>
        <SidebarItem icon='fas fa-align-justify' onClick={onSidebarChange}>
        </SidebarItem>
        <li className="text-white">{expanded ? 'EXPANDED' : 'MIN'}</li>
      </ul>
    );
  }
}

export default Sidebar;
