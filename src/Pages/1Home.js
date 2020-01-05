import React, { Component } from "react";

import BKPrimary from "../Resources/BKCross.jpg";
import ParallaxCustom from "./ParallaxCustom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <ParallaxCustom
          title={"WELCOME"}
          parallaxStrength={this.props.parallaxStrength}
          BKIMGURL={BKPrimary}
          primary={true}
          bgStyle={{ top: 50 }}
        />
        <div className="content contentHome">
          <h3 className="centeredh3">Who</h3>
          <p>
            We are Story Point Community Church. This is a place where people
            from all walks of life can encounter the dangerous, life-changing
            message of Jesus Christ. We are committed to making the Tri-Cities a
            community where the wounded, the discouraged, the unfulfilled and
            the broken can find acceptance, encouragement and an authentic hope
            for a new and meaningful life.
          </p>
          <h3 className="centeredh3">When</h3>
          <p>
            Service begins at 10 a.m., but come early and enjoy breakfast on us.
          </p>
          {/* <div className="whiteSpace"/> */}
          <h3 className="centeredh3">Where</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.0872559164263!2d-119.14480915066825!3d46.20871919137661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5498791e2ba310b9%3A0x327567019dabed89!2s17%20S%20Rainier%20St%2C%20Kennewick%2C%20WA%2099336!5e0!3m2!1sen!2sus!4v1574149525434!5m2!1sen!2sus"
            title="googleMap"
            width="90%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>

        </div>
      </div>
    );
  }
}

export default Home;
