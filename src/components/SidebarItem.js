import React, { Component } from 'react';

class SidebarItem extends Component {

  state = {
    isHovered: false,
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true })
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  renderSubItems() {
    const { isHovered } = this.state;
    const { active, children, title, expanded } = this.props;
    if (!children) return null;
    if (active && expanded) return children;
    if (isHovered) {
      if (expanded) {
        return <ul className="list-group p-0 custom-ul" style={{ position: 'absolute', left: '100%', top: 0 }}>{children}</ul>;
      } else {
        return (
          <ul className="list-group p-0 custom-ul" style={{ position: 'absolute', left: '100%', top: 0 }}>
            <li className="mt-0 list-group-item" style={{ color: '#FFF', padding: '20px', border: '1px solid #FFF', backgroundColor: '#000' }}>{title}</li>
            {children}
          </ul>
        );
      }
    }
  }

  setIconAndTitle() {
    const { expanded, onClick, icon, title } = this.props
    if (expanded && title) {
      return (
        <div className=""  onClick={onClick}>
          <div className="container" style={{ padding: '20px' }}>
            <div className="row">
              <div className="col-3 text-center">
                <i className={icon}></i>
              </div>
              <div className="col-9 text-left">
                {title}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="" style={{ padding: '20px' }} onClick={onClick}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <i className={icon}></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { title, onClick, expanded, active, icon } = this.props;
    return (
      <li className="list-group-item p-0 liItem">
        <div style={{ position: 'relative', color: '#FFF', border: `1px solid ${active ? '#FFF' : 'gray'}` }} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {/* <div className="row" style={{ padding: '20px' }} onClick={onClick}>
            <div className="col-md-2 text-center">
              <i className={icon}></i>
            </div>
            <div className="col-md-10 text-left">
              {title}
            </div>
          </div> */}
          {this.setIconAndTitle()}
          {this.renderSubItems()}

        </div>
      </li>
    )
  }
}

export default SidebarItem;

