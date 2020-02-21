import React, { Component } from "react";
import BKSermons from "../Resources/BKWorshipService.jpg";
import ParallaxCustom from "./ParallaxCustom";

class Sermons extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Sermons">
        <ParallaxCustom
          title={"SERMONS"}
          parallaxStrength={this.props.parallaxStrength}
          BKIMGURL={BKSermons}
          primary={true}
          bgStyle={{ top: 0 }}
        />
        <div className="content contentSermons">
          <h3 className="centeredh3">Sermon Podcast</h3>
          <iframe
            title="SoundCloud"
            width={this.props.screenWidth > 600 ? "85%" : "95%"}
            height={this.props.screenWidth > 600 ? 400 : 600}
            scrolling="yes"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/735740470&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Sermons;
