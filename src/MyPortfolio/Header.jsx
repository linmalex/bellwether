import React, { Component } from "react";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">some stuff</span>
            <span className="line">
              <span className="color">&</span> more stuff
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  }
}
