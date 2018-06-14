import React, { Component } from 'react';
import { SidebarItem, SidebarSubItem } from './';
import './Components.css';

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

  demo = [
    { title: 'products', onClick: console.log },
    { title: 'cart routes', onClick: console.log },
    { title: 'orders', onClick: console.log },
    { title: 'modules', onClick: console.log },
  ]

  render() {
    const { activeTab } = this.state;
    const { onSidebarChange, expanded } = this.props;
    // console.log(this.state.sidebar);

    return (
      <ul className="list-group p-0">
        <SidebarItem icon='fas fa-user' expanded={expanded} title={'catalog'} active={activeTab === 'catalog'} onClick={this.setActiveTab('catalog')}>
          <ul className="list-group p-0">
            <SidebarSubItem title='products' onClick={console.log} />
            <SidebarSubItem title='cart routes' onClick={console.log} />
            <SidebarSubItem title='orders' onClick={console.log} />
            <SidebarSubItem title='modules' onClick={console.log} />
          </ul>
        </SidebarItem>
        <SidebarItem icon='fas fa-anchor' expanded={expanded} title={'catalog2'} active={activeTab === 'catalog2'} onClick={this.setActiveTab('catalog2')}>
          <ul className="list-group p-0">
            {/* <SidebarSubItem title='products' onClick={console.log} />
            <SidebarSubItem title='cart routes' onClick={console.log} />
            <SidebarSubItem title='orders' onClick={console.log} />
            <SidebarSubItem title='modules' onClick={console.log} /> */}
            {this.demo.map((d, key) => <SidebarSubItem key={key} title={d.title} onClick={d.onClick} />)}
          </ul>
        </SidebarItem>
        <SidebarItem icon='fas fa-align-justify' onClick={onSidebarChange}>
        </SidebarItem>
        <li className="text-white">{expanded ? 'EXPANDED' : 'MINIFIED'}</li>
      </ul>
    );
  }
}

export default Sidebar;
