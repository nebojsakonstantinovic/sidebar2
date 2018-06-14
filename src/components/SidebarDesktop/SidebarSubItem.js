import React from 'react';
import '../Components.css';

const SidebarSubItem = ({ title, onClick, parentActive }) => {
  return (
    <li className="mt-0 list-group-item" style={{ color: '#FFF', padding: '20px', border: '1px solid #FFF',backgroundColor: 'gray' }} onClick={onClick}>
      {parentActive
        ? (
          <div className="row no-gutters">
            <div className="col-2"></div>
            <div className="col-10">
              <div className="tLeft">
                {title}
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
