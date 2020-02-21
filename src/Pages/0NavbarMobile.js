import React, { Component } from "react";
import Logo from "../Resources/logo.png";
import { Link } from "react-router-dom";

class NavbarMobile extends Component {

  render() {
    return (
      <div className="Navbar">
        <div
          className={
            this.props.visible ? "navBanner" : "navBanner navBanner--hidden"
          }
        >
          <div className="navLogoAndTitle">
            <Link to="/">
              <img
                alt="logo"
                className="navLogo"
                src={Logo}
                onClick={() => this.props.closeNavAndChangePage("home")}
              ></img>
            </Link>
            <Link
              to="/"
              className="navTitle"
              onClick={() => this.props.closeNavAndChangePage("home")}
            >
              <p className="navTitleStorypoint">Storypoint</p>
              <p className="navTitleSubtext">A Church of the Nazarene</p>
            </Link>
            <div className="menuBarContainer" onClick={this.props.toggleNavMenu}>
              <div className={this.props.bar1Class}></div>
              <div className={this.props.bar2Class}></div>
              <div className={this.props.bar3Class}></div>
            </div>
          </div>

          <div
            className="navButtonsContainer"
            style={{
              height: this.props.mobileExpanded ? 400 : 0,
              backgroundColor: this.props.mobileExpanded ? "lightgray" : "white"
            }}
          >
            <Link
              to="/"
              className="buttonContainer navButton"
              onClick={() => this.props.closeNavAndChangePage("home")}
            >
              HOME
            </Link>
            <Link
              to="/vision"
              className="buttonContainer buttonGray navButton"
              onClick={() => this.props.closeNavAndChangePage("vision")}
            >
              VISION
            </Link>
            <Link
              to="/vision"
              className="buttonContainer navButton"
              onClick={() =>
                this.props.closeNavAndChangePage(
                  "vision",
                  "history",
                  this.props.historyRef
                )
              }
            >
              ► HISTORY
            </Link>
            <Link
              to="/sermons"
              className="buttonContainer buttonGray navButton"
              onClick={() => this.props.closeNavAndChangePage("sermons")}
            >
              SERMON
            </Link>
            <Link
              to="/beliefs"
              className="buttonContainer navButton"
              onClick={() => this.props.closeNavAndChangePage("beliefs")}
            >
              BELIEFS
            </Link>
            <Link
              to="/beliefs"
              className="buttonContainer buttonGray navButton"
              onClick={() =>
                this.props.closeNavAndChangePage(
                  "beliefs",
                  "values",
                  this.props.valuesRef
                )
              }
            >
              ► VALUES
            </Link>
            <Link
              to="/events"
              className="buttonContainer navButton"
              onClick={() => this.props.closeNavAndChangePage("events")}
            >
              EVENTS
            </Link>
            <Link
              to="/events"
              className="buttonContainer buttonGray navButton"
              onClick={() =>
                this.props.closeNavAndChangePage(
                  "events",
                  "contact",
                  this.props.contactRef
                )
              }
            >
              ► CONTACT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMobile;
