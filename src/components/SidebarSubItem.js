import React from 'react';

const SidebarSubItem = ({ title, onClick }) => {
  return (
    <div className="mt-0" style={{color: '#FFF', padding: '20px', border: '1px solid #FFF', backgroundColor: 'gray'}} onClick={onClick}>{title}</div>
  )
}

export default SidebarSubItem;
