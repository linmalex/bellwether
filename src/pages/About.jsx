import React, { Component } from "react";
export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Placeholder title</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Lindsay.</h4>
              <p>I am a person who does things</p>
              <p>Here's some more description</p>
            </div>
            <div className="title">
              <h3>What does she do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>Front end stuff</p>
              <p> Back end stuff</p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a fiber artist </h4>
              <p> Love me some sheep and llama and bunnies and goats</p>
              <p> I like making things from other things</p>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
