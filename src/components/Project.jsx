import React, { Component } from "react";
export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let project = this.props.project || {};
    let projectTech = project.tech || [];
    const tech = {
      sass: "fab fa-sass",
      css: "fab fa-css3-alt",
      js: "fab fa-js-square",
      react: "fab fa-react",
      vue: "fab fa-vuejs",
      d3: "far fa-chart-bar",
      node: "fab fa-node",
    };
    const link = project.link || "http://";
    const repo = project.repo || "http://";
    return (
      <div className="project">
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="project-image"
            src={project.photoUrl}
            alt={"Screenshot of " + project.title}
          />
        </a>
        <div className="project-details">
          <div className="project-tile">
            {/* <p className="icons">
              {projectTech.split(" ").map((t) => (
                <i className={tech[t]} key={t} />
              ))}
            </p> */}
            {project.name}{" "}
          </div>
          {this.props.children}
          <div className="buttons"></div>
        </div>
      </div>
    );
  }
}
