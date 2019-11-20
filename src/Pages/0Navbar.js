import React, { Component } from "react";
import Logo from "../Resources/logo.png";

class Navbar extends Component {
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
                onClick={() => this.props.changePage("home")}
                className="buttonHome navButton"
              >
                HOME
              </button>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() => this.setState({ hoverAbout: true })}
              onMouseLeave={() => this.setState({ hoverAbout: false })}
            >
              <button
                onClick={() => this.props.changePage("about")}
                className="buttonAbout navButton"
              >
                ABOUT
              </button>
              <button
                style={{
                  display: this.state.hoverAbout ? "inline-block" : "none"
                }}
                onClick={() => this.props.changePage("about", "history")}
                className="button2 navButton"
              >
                HISTORY
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("podcast")}
                className="button3 navButton"
              >
                SERMONS
              </button>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() => this.setState({ hoverBeliefs: true })}
              onMouseLeave={() => this.setState({ hoverBeliefs: false })}
            >
              <button
                onClick={() => this.props.changePage("mission", "beliefs")}
                className="button4 navButton"
              >
                BELIEFS
              </button>
              <button
                style={{
                  display: this.state.hoverBeliefs ? "inline-block" : "none"
                }}
                onClick={() => this.props.changePage("mission")}
                className="button4 navButton"
              >
                VALUES
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("contact")}
                className="button5 navButton"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
