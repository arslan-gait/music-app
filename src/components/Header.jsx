import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">MusicApp</div>
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
      </div>
    );
  }
}
