import React, { Component } from "react";
import Logo from "../Resources/logo.png";

class LoginNavbar extends Component {
  constructor() {
    super();
    this.state = {
      hoverAbout: false,
      hoverBeliefs: false
    };
  }
  render() {
    return (
      <div className="Navbar">
        <div className="navBanner">
          <div
            className="navLogoAndTitle"
            onClick={() => this.props.changePage("home")}
          >
            <img alt="logo" className="navLogo" src={Logo}></img>
            <p className="navTitle">The Church of the Nazarine</p>
          </div>
          <div className="navButtonsContainer">
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("loginHome")}
                className="buttonHome navButton"
              >
                HOME
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("loginEditContacts")}
                className="button3 navButton"
              >
                EDIT CONTACTS
              </button>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() => this.setState({ hoverBeliefs: true })}
              onMouseLeave={() => this.setState({ hoverBeliefs: false })}
            >
              <button
                onClick={() => this.props.changePage("loginEditEvents")}
                className="button4 navButton"
              >
                EDIT EVENTS
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.logout()}
                className="button5 navButton"
              >
                LOG OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginNavbar;
