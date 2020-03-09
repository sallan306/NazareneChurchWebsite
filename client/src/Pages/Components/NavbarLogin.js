import React, { Component } from "react";
import Logo from "../../Resources/logo.png";
import { Link } from "react-router-dom";

class NavbarDesktop extends Component {
  render() {
    return (
      <div className="Navbar">
        <div
          className={
            this.props.visible ? "navBanner" : "navBanner navBanner--hidden"
          }
        >
          <div className="navLogoAndTitle">
            <Link>
              <img
                alt="logo"
                className="navLogo"
                src={Logo}
                onClick={() => this.props.closeNavAndChangePage("home")}
              ></img>
            </Link>
            <Link
              className="navTitle"
              onClick={() => this.props.closeNavAndChangePage("home")}
            >
              <p className="navTitleStorypoint">Storypoint</p>
              <p className="navTitleSubtext">A Church of the Nazarene</p>
            </Link>
          </div>
          <div className="navButtonsContainer">
            <div className="buttonContainer">
              <Link
                to="/pictureupload"
                className="buttonHome navButton"
                onClick={() => {
                  this.props.closeNavAndChangePage();
                }}
              >
                SLIDESHOW
              </Link>
            </div>
            <div className="buttonContainer">
              <Link
                to="/editevents"
                className="buttonHome navButton"
                onClick={() => {
                  this.props.closeNavAndChangePage();
                }}
              >
                EDIT EVENTS
              </Link>
            </div>
            <div className="buttonContainer">
              <Link
                to="/"
                className="buttonHome navButton"
                onClick={() => {
                  this.props.logOut();
                }}
              >
                LOG OUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarDesktop;
