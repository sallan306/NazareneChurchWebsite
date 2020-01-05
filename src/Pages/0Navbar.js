import React, { Component } from "react";
import Logo from "../Resources/logo.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      hoverAbout: false,
      hoverBeliefs: false,
      hoverEvents: false,
      visionOpacity: 0.5,
      historyOpacity: 0.5,
      valuesOpacity: 0.5,
      mobileExpanded: false,
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3"
    };
  }
  openNavMenu = () => {
    if (this.state.bar1Class === "bar1") {
      this.setState({
        bar1Class: "bar1 bar1change",
        bar2Class: "bar2 bar2change",
        bar3Class: "bar3 bar3change",
        mobileExpanded: true
      });
    } else {
      this.setState({
        bar1Class: "bar1",
        bar2Class: "bar2",
        bar3Class: "bar3",
        mobileExpanded: false
      });
    }
  };
  closeNav = (pageLocation, subpage = null, ref = null) => {
    this.setState({
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3",
      mobileExpanded: false
    });
    this.props.changePage(pageLocation, subpage, ref);
  };
  renderDesktop = () => {
    return (
      <div className="Navbar">
        <div className="navBanner">
          <div
            className="navLogoAndTitle"
            onClick={() => this.props.changePage("home")}
          >
            <img alt="logo" className="navLogo" src={Logo}></img>
            <div className="navTitle">
              <p className="navTitleStorypoint">Storypoint</p>
              <p className="navTitleSubtext">A Church of the Nazarine</p>
            </div>
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
                  opacity: this.state.hoverAbout ? this.state.visionOpacity : 0,
                  pointerEvents: this.state.hoverAbout ? "auto" : "none"
                }}
                onClick={() =>
                  this.props.changePage("about", "vision", this.props.visionRef)
                }
                className="button2 navButton"
                onMouseEnter={() => this.setState({ visionOpacity: 1 })}
                onMouseLeave={() => this.setState({ visionOpacity: 0.5 })}
              >
                VISION
              </button>
              <button
                style={{
                  opacity: this.state.hoverAbout
                    ? this.state.historyOpacity
                    : 0,
                  pointerEvents: this.state.hoverAbout ? "auto" : "none"
                }}
                onClick={() =>
                  this.props.changePage(
                    "about",
                    "history",
                    this.props.historyRef
                  )
                }
                className="button2 navButton"
                onMouseEnter={() => this.setState({ historyOpacity: 1 })}
                onMouseLeave={() => this.setState({ historyOpacity: 0.5 })}
              >
                HISTORY
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("podcast")}
                className="button3 navButton"
              >
                SERMON
              </button>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() => this.setState({ hoverBeliefs: true })}
              onMouseLeave={() => this.setState({ hoverBeliefs: false })}
            >
              <button
                onClick={() => this.props.changePage("beliefs")}
                className="button4 navButton"
              >
                BELIEFS
              </button>
              <button
                style={{
                  opacity: this.state.hoverBeliefs
                    ? this.state.valuesOpacity
                    : 0,
                  pointerEvents: this.state.hoverBeliefs ? "auto" : "none"
                }}
                onMouseEnter={() => this.setState({ valuesOpacity: 1 })}
                onMouseLeave={() => this.setState({ valuesOpacity: 0.5 })}
                onClick={() =>
                  this.props.changePage(
                    "beliefs",
                    "values",
                    this.props.valuesRef
                  )
                }
                className="button4 navButton"
              >
                VALUES
              </button>
            </div>
            <div
              className="buttonContainer"
              onMouseEnter={() => this.setState({ hoverEvents: true })}
              onMouseLeave={() => this.setState({ hoverEvents: false })}
            >
              <button
                onClick={() => this.props.changePage("events")}
                className="button5 navButton"
              >
                EVENTS
              </button>
              <button
                style={{
                  opacity: this.state.hoverEvents
                    ? this.state.valuesOpacity
                    : 0,
                  pointerEvents: this.state.hoverEvents ? "auto" : "none"
                }}
                onMouseEnter={() => this.setState({ valuesOpacity: 1 })}
                onMouseLeave={() => this.setState({ valuesOpacity: 0.5 })}
                onClick={() =>
                  this.props.changePage(
                    "events",
                    "contact",
                    this.props.contactRef
                  )
                }
                className="button5 navButton"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  renderMobile = () => {
    return (
      <div className="Navbar">
        <div
          className="navBanner"
          style={{
            height: this.state.mobileExpanded ? 300 : 100,
            backgroundColor: this.state.mobileExpanded ? "lightgray" : "white"
          }}
        >
          <div className="navLogoAndTitle">
            <img
              alt="logo"
              className="navLogo"
              src={Logo}
              onClick={() => this.closeNav("home")}
            ></img>
            <div className="navTitle">
              <p className="navTitleStorypoint">Storypoint</p>
              <p className="navTitleSubtext">A Church of the Nazarine</p>
            </div>
            <div className="menuBarContainer" onClick={this.openNavMenu}>
              <div className={this.state.bar1Class}></div>
              <div className={this.state.bar2Class}></div>
              <div className={this.state.bar3Class}></div>
            </div>
          </div>

          <div
            className="navButtonsContainer"
            style={{
              opacity: this.state.mobileExpanded ? 0.9 : 0
            }}
          >
            <div className="buttonContainer">
              <button
                onClick={() => this.closeNav("home")}
                className="buttonHome navButton"
              >
                HOME
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.closeNav("about")}
                className="buttonAbout navButton"
              >
                ABOUT
              </button>
              <button
                style={{
                  pointerEvents: "auto"
                }}
                onClick={() =>
                  this.closeNav("about", "vision", this.props.visionRef)
                }
                className="button2 navButton"
              >
                VISION
              </button>
              <button
                style={{
                  pointerEvents: "auto"
                }}
                onClick={() =>
                  this.closeNav("about", "history", this.props.historyRef)
                }
                className="button2 navButton"
              >
                HISTORY
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.closeNav("podcast")}
                className="button3 navButton"
              >
                SERMON
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.closeNav("beliefs")}
                className="button4 navButton"
              >
                BELIEFS
              </button>
              <button
                style={{
                  pointerEvents: "auto"
                }}
                onClick={() =>
                  this.closeNav("beliefs", "values", this.props.valuesRef)
                }
                className="button4 navButton"
              >
                VALUES
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.closeNav("events")}
                className="button5 navButton"
              >
                EVENTS
              </button>
              <button
                style={{
                  pointerEvents: "auto"
                }}
                onClick={() =>
                  this.closeNav("events", "contact", this.props.contactRef)
                }
                className="button5 navButton"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return this.props.screenWidth > 600
      ? this.renderDesktop()
      : this.renderMobile();
  }
}

export default Navbar;
