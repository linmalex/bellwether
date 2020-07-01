import React, { Component } from "react";
import { Project } from "./Project";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let projects = [{ title: "Test Title", tech: "react" }];
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Here is where I'd put my works...IF I HAD ANY
            </p>
          </div>
          <div className="projects-wrapper">
            {projects.map((p) => (
              <Project project={p} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
