import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/1Home";
import Vision from "./Pages/2Vision";
import Sermons from "./Pages/3Sermons";
import Beliefs from "./Pages/4Beliefs";
import Events from "./Pages/5Events";
import Navbar from "./Pages/0Navbar";
import Footer from "./Pages/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
      currentSubPage: null,
      parallaxStrength: 500,
      screenWidth: 0
    };
    this.historyRef = React.createRef();
    this.valuesRef = React.createRef();
    this.contactRef = React.createRef();
  }
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
          if(this.state.screenWidth < 600) {
            window.scrollTo(0, ref.current.offsetTop);
          }
          else {
            window.scrollTo(0, ref.current.offsetTop+100);
          }
          console.log("changesubpage", ref);
        }
        this.setState({currentSubPage: null})
      }
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
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
          />
          <div className="navbarSpacer"></div>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home screenWidth={this.state.screenWidth} isAuthed={true} />
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
            <Route path="/sermons" exact component={Sermons} />
            <Route
              path="/beliefs"
              exact
              render={() => (
                <Beliefs
                  currentSubPage={this.state.currentSubPage}
                  screenWidth={this.state.screenWidth}
                  valuesRef={this.valuesRef}
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
            <Route path="/" render={() => <div>404 Page Not Found</div>} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
