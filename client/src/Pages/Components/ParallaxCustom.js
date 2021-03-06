import React, { Component } from "react";
import BKSunset from "../../Resources/BKCross.jpg";
import { Parallax } from "react-parallax";
import TitleSVG from "./TitleSVG.js";

class ParallaxCustom extends Component {
  constructor() {
    super();
    this.state = {
      parallaxStrength: 100,
      BKIMGURL: "",
      bgStyle: { opacity: 0.8 }
    };
  }
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
            this.props.bgStyle ? this.props.bgStyle : this.state.bgStyle
          }
          bgImageAlt="parallaxIMG"
        >
          <div className="parallaxContent">
            <div className="parallaxTitleContainer">
              <div className={"parallaxTitle"}>
                <TitleSVG
                  screenWidth={this.props.screenWidth}
                  title={this.props.title}
                />
              </div>
            </div>
            {this.props.primary ? (
              <div className="parallaxSizePrimary" />
            ) : (
              <div className="parallaxSizeSecondary" />
            )}
          </div>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxCustom;
