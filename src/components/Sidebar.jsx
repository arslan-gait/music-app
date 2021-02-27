import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom'
import { SidebarRow } from "."

import "../css/Sidebar.scss"

const Sidebar = () => {

  const [active, setActive] = React.useState(0)

  return (
    <div className="sidebar">
      <Link to="/">
        <div onClick={() => setActive(0)}>
          <SidebarRow selected={active === 0} Icon={HomeIcon} title="Нахшилар" />
        </div>
      </Link>
      <Link to="/converterPage">
        <div onClick={() => setActive(1)}>
          <SidebarRow selected={active === 1} Icon={InfoIcon} title="Конвертер" />
        </div>
      </Link>

      <hr />
    </div>
  )
}

export default Sidebar
