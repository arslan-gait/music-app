import React from 'react'
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={InfoIcon} title="About"/>
        </div>
    )
}

export default Sidebar
