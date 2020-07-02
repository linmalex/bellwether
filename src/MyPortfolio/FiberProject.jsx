import React, { Component } from "react";
export class FiberProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let project = this.props.project || {};
    let originalReturnDiv = (
      <div className="project">
        <a className="project-link" target="_blank" rel="noopener noreferrer">
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
    let newReturnDiv = (
      <div className="project">
        <a className="project-link" target="_blank" rel="noopener noreferrer">
          <img
            className="project-image"
            src={project.photoUrl}
            alt={"Main ravelry photo of " + project.name}
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

    return newReturnDiv;
  }
}
