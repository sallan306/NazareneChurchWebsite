import React, { Component } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sermons from "./Pages/Sermons";
import Mission from "./Pages/Mission";
import Contact from "./Pages/Contact";
import Navbar from "./Navbar";
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
      return <Mission {...this.state} />;
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
      </div>
    );
  }
}

export default App;
