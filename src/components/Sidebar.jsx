import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SidebarRow from "./SidebarRow";
import "../css/Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={InfoIcon} title="About" />
      <hr />
    </div>
  )
}

export default Sidebar
