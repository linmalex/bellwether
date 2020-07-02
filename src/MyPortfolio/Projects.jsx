import React, { Component } from "react";
import { Project } from "./Project";

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
    let endpoint =
      "https://bellwether.azurewebsites.net/api/HttpExample?projectsUsername=zoeyzimzim&apiPassword=GTb2bgU2OJuv1w_z0pxVSvYDLUU6f-v5kawXTs4-&username=d42ac631b8d10a866ea40408e01cd5d3";
    var resultJson = await fetch(endpoint, { mode: "cors" }).then((r) =>
      r.json()
    );
    this.setState({ projects: resultJson, loading: false });
  }
  render() {
    let projects = [{ title: "Test Title", tech: "react" }];
    let projectsDiv = this.state.loading ? (
      <div className="projects-wrapper">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    ) : (
      <div className="projects-wrapper">
        {this.state.projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    );
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
          {projectsDiv}
        </div>
      </section>
    );
  }
}
