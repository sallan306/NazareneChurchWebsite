import React, { Component } from "react";
import Logo from "../../Resources/logo.png";
import { Link } from "react-router-dom";

class NavbarMobile extends Component {
  constructor() {
    super();
    this.state = {
      mobileExpanded: false,
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3",
      visible: true,
      navOpen: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (this.state.mobileExpanded) {
      this.closeNav();
    }
  };
  toggleNavMenu = () => {
    if (this.state.bar1Class === "bar1") {
      this.openNav();
    } else {
      this.closeNav();
    }
    this.setState({ mobileExpanded: !this.state.mobileExpanded });
  };
  openNav = () => {
    this.setState({
      bar1Class: "bar1 bar1change",
      bar2Class: "bar2 bar2change",
      bar3Class: "bar3 bar3change",
      mobileExpanded: true,
      navOpen: true
    });
  };
  closeNav = () => {
    this.setState({
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3",
      mobileExpanded: false
    });
  };
  closeNavAndChangePage = (page, subpage = null, ref = null) => {
    this.setState({
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3",
      mobileExpanded: false
    });
    this.props.changePage(page, subpage, ref);
  };
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
                onClick={() => this.closeNavAndChangePage("home")}
              ></img>
            </Link>
            <Link
              to="/"
              className="navTitle"
              onClick={() => this.closeNavAndChangePage("home")}
            >
              <p className="navTitleStorypoint">Storypoint</p>
              <p className="navTitleSubtext">A Church of the Nazarene</p>
            </Link>
            <div className="menuBarContainer" onClick={this.toggleNavMenu}>
              <div className={this.state.bar1Class}></div>
              <div className={this.state.bar2Class}></div>
              <div className={this.state.bar3Class}></div>
            </div>
          </div>

          <div
            className="navButtonsContainer"
            style={{
              height: this.state.mobileExpanded ? 400 : 0,
              backgroundColor: this.state.mobileExpanded ? "lightgray" : "white"
            }}
          >
            <Link
              to="/"
              className="buttonContainer navButton"
              onClick={() => this.closeNavAndChangePage("home")}
            >
              HOME
            </Link>
            <Link
              to="/vision"
              className="buttonContainer buttonGray navButton"
              onClick={() => this.closeNavAndChangePage("vision")}
            >
              ABOUT
            </Link>
            <Link
              to="/vision"
              className="buttonContainer navButton"
              onClick={() =>
                this.closeNavAndChangePage(
                  "vision",
                  "history",
                  this.props.historyRef
                )
              }
            >
              HISTORY
            </Link>
            <Link
              to="/sermons"
              className="buttonContainer buttonGray navButton"
              onClick={() => this.closeNavAndChangePage("sermons")}
            >
              SERMON
            </Link>
            <Link
              to="/beliefs"
              className="buttonContainer navButton"
              onClick={() => this.closeNavAndChangePage("beliefs")}
            >
              BELIEFS
            </Link>
            <Link
              to="/beliefs"
              className="buttonContainer buttonGray navButton"
              onClick={() =>
                this.closeNavAndChangePage(
                  "beliefs",
                  "values",
                  this.props.valuesRef
                )
              }
            >
              VALUES
            </Link>
            <Link
              to="/events"
              className="buttonContainer navButton"
              onClick={() => this.closeNavAndChangePage("events")}
            >
              EVENTS
            </Link>
            <Link
              to="/events"
              className="buttonContainer buttonGray navButton"
              onClick={() =>
                this.closeNavAndChangePage(
                  "events",
                  "contact",
                  this.props.contactRef
                )
              }
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMobile;
