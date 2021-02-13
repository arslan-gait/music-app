import React, { Component } from "react";
import "../css/Intro.scss"

export default class Inner extends Component {
  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
            <h2 className="intro__title">Welcome</h2>
          </div>
        </div>
      </div>
    );
  }
}
