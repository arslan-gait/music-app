import React from "react";
import MenuIcon from "@material-ui/icons/Menu"

const Header = () => {

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <div className="header__logo">
          <h4>MusicApp</h4>
        </div>
      </div>

      <div className="header__inner">
        <nav className="nav">
          <a className="nav__link" href="#">
            All Songs
              </a>
          <a className="nav__link" href="#">
            Search
              </a>
        </nav>
      </div>
    </div>
  );
}

export default Header
