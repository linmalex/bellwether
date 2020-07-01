import React, { Component } from "react";
export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { props } = { ...this };
    let SocialLinks = <div></div>;
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          {/* <SocialLinks /> */}
        </div>
      </div>
    );
  }
}
