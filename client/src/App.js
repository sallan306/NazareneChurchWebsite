import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/GuestPages/1Home";
import Vision from "./Pages/GuestPages/2Vision";
import Sermons from "./Pages/GuestPages/3Sermons";
import Beliefs from "./Pages/GuestPages/4Beliefs";
import Events from "./Pages/GuestPages/5Events";
import Navbar from "./Pages/Components/NavbarMaster";
import Footer from "./Pages/Components/Footer";
import LogIn from "./Pages/AdminPages/Login";
import EditEvents from "./Pages/AdminPages/EditEvents";
import PictureUpload from "./Pages/AdminPages/PictureUpload";
import { Helmet } from "react-helmet";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
      currentSubPage: null,
      parallaxStrength: 500,
      screenWidth: 0,
      isLoggedIn: false,
      correctUsername: 1,
      correctPassword: 1
    };
    this.historyRef = React.createRef();
    this.valuesRef = React.createRef();
    this.contactRef = React.createRef();
  }
  logIn = () => {
    this.setState({ isLoggedIn: true });
  };
  logOut = () => {
    this.setState({ isLoggedIn: false });
  };
  componentDidMount() {
    window.addEventListener("resize", this.reportWindowSize);
    console.log(window.innerWidth);
    this.setState({
      screenWidth: window.innerWidth
    });
  }
  reportWindowSize = () => {
    this.setState({ screenWidth: document.documentElement.clientWidth });
  };
  changePage = (page = null, subpage = null, ref = null) => {
    this.setState({ currentPage: page }, () => {
      window.scrollTo(0, 0);
      if (subpage !== null && subpage !== this.state.currentSubPage) {
        this.goToSubPage(subpage, ref);
      }
    });
  };
  goToSubPage = (subpage, ref) => {
    this.setState(
      {
        currentSubPage: subpage
      },
      () => {
        if (ref.current !== null) {
          if (this.state.screenWidth < 600) {
            window.scrollTo(0, ref.current.offsetTop);
          } else {
            window.scrollTo(0, ref.current.offsetTop + 100);
          }
          console.log("changesubpage", ref);
        }
        this.setState({ currentSubPage: null });
      }
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>Storypoint: A Church of the Nazarene</title>
            <meta
              name="description"
              content="We are committed to making the Tri-Cities a community where the wounded, the discouraged, 
              the unfulfilled and the broken can find acceptance, encouragement and an authentic hope for a new and meaningful life."
            />
          </Helmet>
          <Navbar
            changePage={this.changePage}
            screenWidth={this.state.screenWidth}
            changeSubPage={this.changeSubPage}
            visionRef={this.visionRef}
            historyRef={this.historyRef}
            valuesRef={this.valuesRef}
            contactRef={this.contactRef}
            currentPage={this.state.currentPage}
            currentSubPage={this.state.currentSubPage}
            isLoggedIn={this.state.isLoggedIn}
          />
          <div className="navbarSpacer"></div>
          <Switch>
            <Route
              path="/(|NazareneChurchWebsite)"
              exact
              render={() => (
                <Home screenWidth={this.state.screenWidth} isAuthed={true} />
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LogIn
                  {...this.state}
                  logIn={this.logIn}
                  screenWidth={this.state.screenWidth}
                  isAuthed={true}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path="/vision"
              exact
              render={() => (
                <Vision
                  currentSubPage={this.state.currentSubPage}
                  screenWidth={this.state.screenWidth}
                  historyRef={this.historyRef}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/sermons"
              exact
              render={() => (
                <Sermons screenWidth={this.state.screenWidth} isAuthed={true} />
              )}
            />
            <Route
              path="/beliefs"
              exact
              render={() => (
                <Beliefs
                  currentSubPage={this.state.currentSubPage}
                  valuesRef={this.valuesRef}
                  screenWidth={this.state.screenWidth}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/events"
              exact
              render={() => (
                <Events
                  currentSubPage={this.state.currentSubPage}
                  screenWidth={this.state.screenWidth}
                  contactRef={this.contactRef}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/editevents"
              exact
              render={() => (
                <EditEvents
                  currentSubPage={this.state.currentSubPage}
                  screenWidth={this.state.screenWidth}
                  contactRef={this.contactRef}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/pictureupload"
              exact
              render={() =>
                this.state.isLoggedIn ? (
                  <PictureUpload
                    currentSubPage={this.state.currentSubPage}
                    screenWidth={this.state.screenWidth}
                    contactRef={this.contactRef}
                    isAuthed={true}
                  />
                ) : (
                  <LogIn
                    {...this.state}
                    logIn={this.logIn}
                    screenWidth={this.state.screenWidth}
                    isAuthed={true}
                    isLoggedIn={this.state.isLoggedIn}
                  />
                )
              }
            />
            <Route path="/" render={() => <div>404 Page Not Found</div>} />
          </Switch>
          <Footer {...this.state} goTologIn={this.goTologIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;