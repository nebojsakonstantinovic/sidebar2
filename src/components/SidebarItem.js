import React, { Component } from 'react';

class SidebarItem extends Component {

  state = {
    isHovered: false
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true })
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  render() {
    const {isHovered} = this.state;
    const { title, onClick, active, children, icon } = this.props;
    return (
      <div style={{ position: 'relative', color: active ? '#FFF' : 'gray', border: `1px solid ${active ? '#FFF' : 'gray'}` }} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <div style={{ padding: '20px' }} onClick={onClick}><i className={icon}></i> {title}</div>
        {active
          ? children
          : isHovered
            ? <div style={{position: 'absolute', left: '100%', top: 0}}>{children}</div>
            : null
        }

      </div>
    )
  }
}

export default SidebarItem;