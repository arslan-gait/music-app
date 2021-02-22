import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom'
import { SidebarRow } from "."

import "../css/Sidebar.scss"

const Sidebar = () => {

  return (
    <div className="sidebar">
      <Link to="/home">
        <SidebarRow Icon={HomeIcon} title="Главная" />
      </Link>
      <Link to="/converter">
        <SidebarRow Icon={InfoIcon} title="Конвертер" />
      </Link>
      <hr />
    </div>
  )
}

export default Sidebar
