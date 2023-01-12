import React from 'react'
import '../../styles/Sidebar/SidebarOptions.css';
const SidebarOptions = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOption--active'}`}  >
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions
