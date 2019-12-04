import React, { Component } from "react";
import Home from "./Pages/1Home";
import About from "./Pages/2About";
import Sermons from "./Pages/3Sermons";
import Beliefs from "./Pages/4Beliefs";
import Events from "./Pages/5Events";
import Navbar from "./Pages/0Navbar";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import LoginHome from "./Pages/LoginHome";
import LoginNavbar from "./Pages/LoginNavbar";
import LoginEditContacts from "./Pages/LoginEditContacts";
import LoginEditEvents from "./Pages/LoginEditEvents";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
      currentSubPage: null,
      parallaxStrength: 500,
      isLoggedIn: false
    };
  }

  goToLogin = () => {
    this.setState({ currentPage: "login" });
  };
  login = () => {
    this.setState({ currentPage: "loginHome", isLoggedIn: true });
  };
  logout = () => {
    this.setState({ currentPage: "home", isLoggedIn: false });
  }
  changePage = (page, subpage = null) => {
    this.setState({ currentPage: page, currentSubPage: subpage });
  };

  currentPage = () => {
    if (this.state.currentPage === "home") {
      return <Home {...this.state} />;
    } else if (this.state.currentPage === "about") {
      return <About {...this.state} />;
    } else if (this.state.currentPage === "podcast") {
      return <Sermons {...this.state} />;
    } else if (this.state.currentPage === "mission") {
      return <Beliefs {...this.state} />;
    } else if (this.state.currentPage === "events") {
      return <Events {...this.state} />;
    } else if (this.state.currentPage === "login") {
      return <Login {...this.state} login={this.login} />;
    } else if (this.state.currentPage === "loginHome") {
      return <LoginHome {...this.state} />;
    } else if (this.state.currentPage === "loginEditEvents") {
      return <LoginEditEvents {...this.state} />;
    } else if (this.state.currentPage === "loginEditContacts") {
      return <LoginEditContacts {...this.state} />;
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <LoginNavbar changePage={this.changePage} logout={this.logout} />
        ) : (
          <Navbar changePage={this.changePage} />
        )}

        <div className="navbarSpacer"></div>
        {this.currentPage()}
        {this.state.isLoggedIn ? "" : <Footer goToLogin={this.goToLogin} />}
      </div>
    );
  }
}

export default App;
