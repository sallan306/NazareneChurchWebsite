import React, { Component } from "react";

import BKSunset from "../Resources/BKCross2.jpg";
import BKHoldingHands from "../Resources/BKHoldingHands.jpg";
import { Parallax } from "react-parallax";

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="Home">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">WELCOME</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="contentHome">
          <p>
            Veniam laboris dolore magna voluptate esse ad velit velit cillum
            amet. Fugiat ullamco ea elit voluptate exercitation velit incididunt
            ut nostrud laboris incididunt ullamco. Ipsum ea reprehenderit aliqua
            eiusmod sint ea elit minim occaecat. Incididunt excepteur quis qui
            excepteur minim ullamco nisi commodo veniam ad tempor esse aute
            irure. Duis velit culpa ullamco ex velit.
          </p>
          <p>
            Veniam laboris dolore magna voluptate esse ad velit velit cillum
            amet. Fugiat ullamco ea elit voluptate exercitation velit incididunt
            ut nostrud laboris incididunt ullamco. Ipsum ea reprehenderit aliqua
            eiusmod sint ea elit minim occaecat. Incididunt excepteur quis qui
            excepteur minim ullamco nisi commodo veniam ad tempor esse aute
            irure. Duis velit culpa ullamco ex velit.
          </p>
          <p>
            Veniam laboris dolore magna voluptate esse ad velit velit cillum
            amet. Fugiat ullamco ea elit voluptate exercitation velit incididunt
            ut nostrud laboris incididunt ullamco. Ipsum ea reprehenderit aliqua
            eiusmod sint ea elit minim occaecat. Incididunt excepteur quis qui
            excepteur minim ullamco nisi commodo veniam ad tempor esse aute
            irure. Duis velit culpa ullamco ex velit.
          </p>
          <p>
            Veniam laboris dolore magna voluptate esse ad velit velit cillum
            amet. Fugiat ullamco ea elit voluptate exercitation velit incididunt
            ut nostrud laboris incididunt ullamco. Ipsum ea reprehenderit aliqua
            eiusmod sint ea elit minim occaecat. Incididunt excepteur quis qui
            excepteur minim ullamco nisi commodo veniam ad tempor esse aute
            irure. Duis velit culpa ullamco ex velit.
          </p>
          <p>
            Veniam laboris dolore magna voluptate esse ad velit velit cillum
            amet. Fugiat ullamco ea elit voluptate exercitation velit incididunt
            ut nostrud laboris incididunt ullamco. Ipsum ea reprehenderit aliqua
            eiusmod sint ea elit minim occaecat. Incididunt excepteur quis qui
            excepteur minim ullamco nisi commodo veniam ad tempor esse aute
            irure. Duis velit culpa ullamco ex velit.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
