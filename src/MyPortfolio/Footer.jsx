import React, { Component } from "react";
import { SocialLinks } from "./SocialLinks";
export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="wrapper">
          <h3>Come back soon!</h3>
          <p>© {new Date().getFullYear()} Lindsay Alexander</p>
          <SocialLinks />
        </div>
      </footer>
    );
  }
}
