import React, { Component } from "react";
import Home from "./Pages/1Home";
import About from "./Pages/2About";
import Sermons from "./Pages/3Sermons";
import Beliefs from "./Pages/4Beliefs";
import Contact from "./Pages/5Contact";
import Navbar from "./Pages/0Navbar";
import Footer from "./Pages/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
      parallaxStrength: 500
    };
  }

  changePage = input => {
    this.setState({ currentPage: input });
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
    } else if (this.state.currentPage === "contact") {
      return <Contact {...this.state} />;
    }
  };
  render() {
    return (
      <div className="app">
        <Navbar changePage={this.changePage} />
        <div className="navbarSpacer"></div>
        {this.currentPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
