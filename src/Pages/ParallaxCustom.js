import React, { Component } from "react";

import BKSunset from "../Resources/BKCross.jpg";
import { Parallax } from "react-parallax";

class ParallaxCustom extends Component {
  constructor() {
    super();
    this.state = {
      parallaxStrength: 100,
      scriptureSpeed: 500,
      BKIMGURL: "",
      bgStyle: {opacity: 0.8},
      scripture: `
      hebrews 13:2
      Be not forgetful to entertain strangers: for thereby some have entertained angels unawares. 

      `
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div className="parallaxContainer">
        {this.props.primary ? (
          ""
        ) : (
          <div className="parallaxWhiteSpaceTop"></div>
        )}
        <Parallax
          strength={
            this.props.parallaxStrength
              ? this.props.parallaxStrength
              : this.state.parallaxStrength
          }
          bgImage={this.props.BKIMGURL ? this.props.BKIMGURL : BKSunset}
          bgImageStyle={
            this.props.bgStyle
              ? this.props.bgStyle
              : this.state.bgStyle
          }
          bgImageAlt="the cat"
        >
          <div className="parallaxContent">
            <div className="parallaxTitleContainer">
              <div className="parallaxTitle">{this.props.title}</div>
            </div>
            {this.props.primary ? (
              <div className="parallaxSizePrimary" />
            ) : (
              <div className="parallaxSizeSecondary" />
            )}
          </div>
        </Parallax>
        <div className="parallaxScripture">
          {/* <Parallax strength={this.state.scriptureSpeed}>
            <div>{this.state.scripture}</div>
          </Parallax> */}
        </div>
      </div>
    );
  }
}

export default ParallaxCustom;
