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
      visible: true
    };
  }
  toggleNavMenu = () => {
    if (this.state.bar1Class === "bar1") {
      this.openNav();
    } else {
      this.closeNav();
    }
  };
  openNav = () => {
    this.setState({
      bar1Class: "bar1 bar1change",
      bar2Class: "bar2 bar2change",
      bar3Class: "bar3 bar3change",
      mobileExpanded: true
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
              height: this.state.mobileExpanded ? 200 : 0,
              backgroundColor: this.state.mobileExpanded ? "lightgray" : "white"
            }}
          >
            <div className="buttonContainer">
              <Link
                to="/editslideshow"
                className="buttonHome navButton"
                onClick={() => {
                  this.closeNavAndChangePage();
                }}
              >
                EDIT SLIDESHOW
              </Link>
            </div>
            <div className="buttonContainer">
              <Link
                to="/editevents"
                className="buttonHome navButton"
                onClick={() => {
                  this.closeNavAndChangePage();
                }}
              >
                EDIT EVENTS
              </Link>
            </div>
            <div className="buttonContainer">
              <Link
                to="/editsermons"
                className="buttonHome navButton"
                onClick={() => {
                  this.closeNavAndChangePage();
                }}
              >
                EDIT SERMONS
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

export default NavbarMobile;
