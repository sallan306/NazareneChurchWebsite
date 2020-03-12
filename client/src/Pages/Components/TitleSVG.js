import React, { Component } from "react";

class TitleSVG extends Component {
  render() {
    return (
      <svg width="100vw" height="75" viewBox="0 0 350 75">
        <title>MultiStroke</title>
        <g
          style={{
            overflow: "hidden",
            textAnchor: "middle",
            fontSize: this.props.screenWidth > 600 ? 80 : 40,
            fontWeight: "bold",
            fontFamily: "Monospace"
          }}
        >
          <text
            x="175"
            y="55"
            style={{ fill: "white", stroke: "black", strokeWidth: 1 }}
          >
            {this.props.title}
          </text>
        </g>
      </svg>
    );
  }
}
export default TitleSVG;
