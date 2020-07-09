import React, { Component } from "react";
export class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.className}>
        Loading spinner, coming soon to screens near you!{" "}
      </div>
    );
  }
}
