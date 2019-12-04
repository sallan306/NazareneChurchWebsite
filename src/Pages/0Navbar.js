import React, { Component } from "react";
import Logo from "../Resources/logo.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      hoverAbout: false,
      hoverBeliefs: false,
      visionOpacity: 0.5,
      historyOpacity: 0.5,
      valuesOpacity: 0.5,
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
                  opacity:  this.state.hoverAbout ? this.state.visionOpacity : 0,
                  pointerEvents: this.state.hoverAbout ? "auto" : "none"
                }}
                onClick={() => this.props.changePage("about", "history")}
                className="button2 navButton"
                onMouseEnter={()=>this.setState({visionOpacity: 1})}
                onMouseLeave={()=>this.setState({visionOpacity: 0.5})}
              >
                VISION
              </button>
              <button
                style={{
                  opacity:  this.state.hoverAbout ? this.state.historyOpacity : 0,
                  pointerEvents: this.state.hoverAbout ? "auto" : "none"
                }}
                onClick={() => this.props.changePage("about", "history")}
                className="button2 navButton"
                onMouseEnter={()=>this.setState({historyOpacity: 1})}
                onMouseLeave={()=>this.setState({historyOpacity: 0.5})}
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
                onClick={() => this.props.changePage("mission", "beliefs")}
                className="button4 navButton"
              >
                BELIEFS
              </button>
              <button
                style={{
                  opacity:  this.state.hoverBeliefs ? this.state.valuesOpacity : 0,
                  pointerEvents: this.state.hoverBeliefs ? "auto" : "none"
                }}
                onMouseEnter={()=>this.setState({valuesOpacity: 1})}
                onMouseLeave={()=>this.setState({valuesOpacity: 0.5})}
                onClick={() => this.props.changePage("mission")}
                className="button4 navButton"
              >
                VALUES
              </button>
            </div>
            <div className="buttonContainer">
              <button
                onClick={() => this.props.changePage("events")}
                className="button5 navButton"
              >
                EVENTS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
