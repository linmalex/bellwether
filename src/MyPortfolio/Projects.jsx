import React, { Component } from "react";
import { Project } from "./Project";
import { FiberProject } from "./FiberProject";
import { LoadingSpinner } from "./LoadingSpinner";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { endpoint: "", loading: true };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    // let endpoint = this.state.endpoint;
    let stagingEndpoint =
      "http://localhost:7071/api/GetRavProjects?username=zoeyzimzim";
    let endpoint =
      "https://bellwetherapp.azurewebsites.net/api/GetRavProjects?username=zoeyzimzim";
    var resultJson = await fetch(endpoint, { mode: "cors" }).then((r) =>
      r.json()
    );
    this.setState({ fiberProjects: resultJson, loading: false });
  }
  render() {
    let fiberProjects = [{ title: "Test Title", tech: "react" }];
    let fiberProjectsDiv = this.state.loading ? (
      <LoadingSpinner className="projects-container"></LoadingSpinner>
    ) : (
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Ravelry Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            These are my ten most-recent projects on Ravelry. Enjoy!
          </p>
        </div>
        <div className="projects-wrapper">
          {this.state.fiberProjects.map((p) => (
            <FiberProject project={p} />
          ))}
        </div>
      </div>
    );
    return <section id="projects">{fiberProjectsDiv}</section>;
  }
}
