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
          </div>
          <div className="navButtonsContainer">
            <div className="buttonContainer">
              <Link
                to="/"
                className="buttonHome navButton"
                onClick={() => {
                  this.props.closeNavAndChangePage();
                }}
              >
                HOME
              </Link>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() =>
                this.props.handleChangeState("hoverAbout", true)
              }
              onMouseLeave={() =>
                this.props.handleChangeState("hoverAbout", false)
              }
            >
              <Link
                to="/vision"
                className="buttonAbout navButton"
                onClick={() => this.props.closeNavAndChangePage("vision")}
              >
                ABOUT
              </Link>
              <Link
                to="/vision"
                className="button2 navButton"
                onClick={() => {
                  this.props.closeNavAndChangePage(
                    "vision",
                    "history",
                    this.props.historyRef
                  );
                  console.log(this.props.historyRef);
                }}
                style={{
                  opacity: this.props.hoverAbout
                    ? this.props.historyOpacity
                    : 0,
                  pointerEvents: this.props.hoverAbout ? "auto" : "none"
                }}
                onMouseEnter={() =>
                  this.props.handleChangeState("historyOpacity", 1)
                }
                onMouseLeave={() =>
                  this.props.handleChangeState("historyOpacity", 0.5)
                }
              >
                HISTORY
              </Link>
            </div>
            <div className="buttonContainer">
              <Link
                to="/sermons"
                className="button3 navButton"
                onClick={() => this.props.closeNavAndChangePage("sermons")}
              >
                SERMON
              </Link>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() =>
                this.props.handleChangeState("hoverBeliefs", true)
              }
              onMouseLeave={() =>
                this.props.handleChangeState("hoverBeliefs", false)
              }
            >
              <Link
                to="/beliefs"
                className="button4 navButton"
                onClick={() => this.props.closeNavAndChangePage("beliefs")}
              >
                BELIEFS
              </Link>
              <Link
                to="/beliefs"
                className="button4 navButton"
                onClick={() =>
                  this.props.closeNavAndChangePage(
                    "beliefs",
                    "values",
                    this.props.valuesRef
                  )
                }
                style={{
                  opacity: this.props.hoverBeliefs
                    ? this.props.valuesOpacity
                    : 0,
                  pointerEvents: this.props.hoverBeliefs ? "auto" : "none"
                }}
                onMouseEnter={() =>
                  this.props.handleChangeState("valuesOpacity", 1)
                }
                onMouseLeave={() =>
                  this.props.handleChangeState("valuesOpacity", 0.5)
                }
              >
                VALUES
              </Link>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() =>
                this.props.handleChangeState("hoverEvents", true)
              }
              onMouseLeave={() =>
                this.props.handleChangeState("hoverEvents", false)
              }
            >
              <Link
                to="/events"
                className="button5 navButton"
                onClick={() => this.props.closeNavAndChangePage("events")}
              >
                EVENTS
              </Link>
              <Link
                to="/events"
                className="button5 navButton"
                onClick={() =>
                  this.props.closeNavAndChangePage(
                    "events",
                    "contact",
                    this.props.contactRef
                  )
                }
                style={{
                  opacity: this.props.hoverEvents
                    ? this.props.valuesOpacity
                    : 0,
                  pointerEvents: this.props.hoverEvents ? "auto" : "none"
                }}
                onMouseEnter={() =>
                  this.props.handleChangeState("valuesOpacity", 1)
                }
                onMouseLeave={() =>
                  this.props.handleChangeState("valuesOpacity", 0.5)
                }
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarDesktop;
