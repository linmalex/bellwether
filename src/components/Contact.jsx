import React, { Component } from "react";
import { SocialLinks } from "./SocialLinks";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">Get in touch</p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {""}
                <span className="mail">
                  web
                  <i className="fas fa-at at" />
                  linmalex
                  <i className="fas fa-circle dot" />
                  com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input
              className="button"
              id="submit"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </section>
    );
  }
}
