import React from 'react';

const SidebarSubItem = ({ title, onClick }) => {
  return (
    <li className="mt-0 list-group-item" style={{color: '#FFF', padding: '20px', border: '1px solid #FFF', backgroundColor: 'gray'}} onClick={onClick}>{title}</li>
  )
}

export default SidebarSubItem;
