import React from 'react';

const SidebarSubItem = ({ title, onClick,parentActive }) => {
  return (
    <li className="mt-0 list-group-item" style={{color: '#FFF', padding: '20px', border: '1px solid #FFF', backgroundColor: 'gray'}} onClick={onClick}>
      {parentActive
        ? (
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9">
                <div className="tLeft">
                  {title}
                </div>
              </div>
            </div>
          </div>
        )
        : <div className="text-left">{title}</div>
      }
    </li>
  )
}

export default SidebarSubItem;
