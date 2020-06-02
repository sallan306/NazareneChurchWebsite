import React, { Component } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarLogin from "./NavbarLogin";
import NavbarLoginMobile from "./NavbarLoginMobile"

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
      bar3Class: "bar3",
      visible: true
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleChangeState = (state, newState) => {
    this.setState({
      [state]: newState
    });
  };
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    if (!visible) {
      this.closeNav();
    }
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

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

  isLoggedIn = () => {
    if (!this.props.isLoggedIn && this.props.screenWidth < 600) {
      //not logged in and mobile
      return (
        <NavbarMobile
          changePage={this.props.changePage}
          screenWidth={this.props.screenWidth}
          changeSubPage={this.changeSubPage}
          visionRef={this.props.visionRef}
          historyRef={this.props.historyRef}
          valuesRef={this.props.valuesRef}
          contactRef={this.props.contactRef}
          currentPage={this.props.currentPage}
          currentSubPage={this.props.currentSubPage}
          handleScroll={this.handleScroll}
          closeNavAndChangePage={this.closeNavAndChangePage}
          {...this.state}
        />
      );
    } else if (!this.props.isLoggedIn && this.props.screenWidth > 600) {
      //not logged in and desktop
      return (
        <NavbarDesktop
          changePage={this.changePage}
          screenWidth={this.props.screenWidth}
          changeSubPage={this.changeSubPage}
          visionRef={this.props.visionRef}
          historyRef={this.props.historyRef}
          valuesRef={this.props.valuesRef}
          contactRef={this.props.contactRef}
          currentPage={this.props.currentPage}
          currentSubPage={this.props.currentSubPage}
          handleScroll={this.handleScroll}
          toggleNavMenu={this.toggleNavMenu}
          openNav={this.openNav}
          closeNav={this.closeNav}
          closeNavAndChangePage={this.closeNavAndChangePage}
          handleChangeState={this.handleChangeState}
          {...this.state}
        />
      );
    } else if (this.props.isLoggedIn && this.props.screenWidth < 600) {
      //logged in and mobile
      return (
        <NavbarLoginMobile
          changePage={this.props.changePage}
          screenWidth={this.props.screenWidth}
          changeSubPage={this.changeSubPage}
          currentPage={this.props.currentPage}
          currentSubPage={this.props.currentSubPage}
          handleScroll={this.handleScroll}
          closeNavAndChangePage={this.closeNavAndChangePage}
          handleChangeState={this.handleChangeState}
          logOut={this.props.logOut}
          {...this.state}
        />
      );
    } else if (this.props.isLoggedIn && this.props.screenWidth > 600) {
      //logged in and desktop
      return (
        <NavbarLogin
          changePage={this.changePage}
          screenWidth={this.props.screenWidth}
          changeSubPage={this.changeSubPage}
          currentPage={this.props.currentPage}
          currentSubPage={this.props.currentSubPage}
          handleScroll={this.handleScroll}
          toggleNavMenu={this.toggleNavMenu}
          openNav={this.openNav}
          closeNav={this.closeNav}
          closeNavAndChangePage={this.closeNavAndChangePage}
          handleChangeState={this.handleChangeState}
          logOut={this.props.logOut}
          {...this.state}
        />
      );
    }
  };

  render() {
    return this.isLoggedIn();
  }
}
export default Navbar;
