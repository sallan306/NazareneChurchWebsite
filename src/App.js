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
      isLoggedIn: false,
      screenWidth: 0,
      eventsList: [{ name: "contact1" }, { name: "contact2" }]
    };
    this.visionRef = React.createRef();
    this.historyRef = React.createRef();
    this.valuesRef = React.createRef();
    this.contactRef = React.createRef();
  }
  componentDidMount(){
    console.log(window.innerWidth)
    this.setState({
      screenWidth: window.innerWidth
    })
  }
  goToLogin = () => {
    this.setState({ currentPage: "login" });
  };
  login = () => {
    this.setState({ currentPage: "loginHome", isLoggedIn: true });
  };
  logout = () => {
    this.setState({ currentPage: "home", isLoggedIn: false });
  };
  changePage = (page, subpage = null, subpageRef = null) => {
    console.log(subpageRef);
    this.setState({ currentPage: page, currentSubPage: subpage });
    if (subpage !== null) {
      this.changeSubPage(subpageRef);
    }
  };
  changeSubPage = subpageRef => {
    // console.log(subpageRef)
    if (subpageRef.current !== null) {
      window.scrollTo(0, subpageRef.current.offsetTop + 100);
    }
  };

  addEvent = eventToAdd => {
    var tempEventArray = this.state.eventsList;
    tempEventArray.push(eventToAdd);
    this.setState(
      {
        eventsList: tempEventArray
      },
      () => console.log(this.state.eventsList)
    );
  };
  currentPage = () => {
    if (this.state.currentPage === "home") {
      return <Home {...this.state} />;
    } else if (this.state.currentPage === "about") {
      return (
        <About
          {...this.state}
          visionRef={this.visionRef}
          historyRef={this.historyRef}
        />
      );
    } else if (this.state.currentPage === "podcast") {
      return <Sermons {...this.state} />;
    } else if (this.state.currentPage === "beliefs") {
      return <Beliefs {...this.state} valuesRef={this.valuesRef} />;
    } else if (this.state.currentPage === "events") {
      return <Events {...this.state} contactRef={this.contactRef} />;
    } else if (this.state.currentPage === "login") {
      return <Login {...this.state} login={this.login} />;
    } else if (this.state.currentPage === "loginHome") {
      return <LoginHome {...this.state} />;
    } else if (this.state.currentPage === "loginEditEvents") {
      return <LoginEditEvents {...this.state} />;
    } else if (this.state.currentPage === "loginEditContacts") {
      return <LoginEditContacts {...this.state} addEvent={this.addEvent} />;
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <LoginNavbar changePage={this.changePage} logout={this.logout} />
        ) : (
          <Navbar
            screenWidth={this.state.screenWidth}
            changePage={this.changePage}
            visionRef={this.visionRef}
            historyRef={this.historyRef}
            valuesRef={this.valuesRef}
            contactRef={this.contactRef}
            
          />
        )}

        <div className="navbarSpacer"></div>
        {this.currentPage()}
        {this.state.isLoggedIn ? "" : <Footer goToLogin={this.goToLogin} />}
      </div>
    );
  }
}

export default App;
