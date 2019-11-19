import React, { Component } from "react";
import BKSunset from "../Resources/BKCross2.jpg";
import { Parallax } from "react-parallax";

class Mission extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Mission">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">MISSION</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="missionBeliefs">
          <ol className="ourBeliefs">
            <li key="1">
              We belive that those tainted by the butthole demon Azkari the
              Demon Gaylord of Many Colors are not yet doomed to live in sin.
              These possessed souls have the opportunity to cleanse their dark
              holes with the thick righteous healing fist of Jesus Christ.
            </li>
            <li key="2">
              Prayers must be performed facing the starboard side of your spirit
              ship so that God may get your spirit text, as we all know his cell
              provider has spotty coverage
            </li>
            <li key="3">
              The growth of our spiritual community is very important to our
              Lord, and his will insists on the creation of life. Those fertile
              must bring children into Gods family until unable to do so.
            </li>
            <li key="4"></li>
            <li key="5"></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Mission;
