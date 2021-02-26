import React from "react";
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"

import "../css/Header.scss"


const Header = ({ isDark }) => {

  const dark = typeof isDark === "undefined" ? "" : " dark"

  return (
    <div className={`header${dark}`}>
      <div className={`header__left${dark}`}>
        <MenuIcon className={`header__icon${dark}`} />
        <div className={`header__logo${dark}`}>
          <h4>MusicApp</h4>
        </div>
      </div>

      <div className="header__inner">
        <div className="nav">
          <div className={`nav__link${dark}`}>
            Intro
            </div>

          <div className={`nav__link${dark}`}>
            Home
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
