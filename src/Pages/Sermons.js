import React, { Component } from "react";
import BKSunset from "../Resources/BKCross2.jpg";
import { Parallax } from "react-parallax";

class Sermons extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Sermons">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">SERMONS</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="contentSermons">
          <iframe
            title="SoundCloud"
            width="80%"
            height="400"
            scrolling="yes"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/735740470&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Sermons;
