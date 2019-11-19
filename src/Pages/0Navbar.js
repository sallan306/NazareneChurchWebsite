import React, { Component } from "react";
import Logo from "../Resources/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="navBanner">
          <img alt="logo" className="navLogo" src={Logo}></img>
          <p className="navTitle">The Church of the Nazarine</p>
          <div className="navButtonsContainer">
            <button
              onClick={() => this.props.changePage("home")}
              className="button1 navButton"
            >
              HOME
            </button>
            <button
              onClick={() => this.props.changePage("about")}
              className="button2 navButton"
            >
              ABOUT
            </button>
            <button
              onClick={() => this.props.changePage("podcast")}
              className="button3 navButton"
            >
              SERMONS
            </button>
            <button
              onClick={() => this.props.changePage("mission")}
              className="button4 navButton"
            >
              BELIEFS
            </button>
            <button
              onClick={() => this.props.changePage("contact")}
              className="button5 navButton"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
