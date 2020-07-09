import React, { Component } from "react";
export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { props } = { ...this };
    return (
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Lindsay.
            <strong>Alexander</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    );
  }
}
