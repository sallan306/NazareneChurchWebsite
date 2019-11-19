import React, { Component } from "react";
import BKSunset from "../Resources/BKCross2.jpg";
import { Parallax } from "react-parallax";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">ABOUT</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="contentAbout">
          <p className="aboutParagraph">
            The church of the Nazarine has been an upstanding member of the
            cumminity for more than 500 years, and has been a blessing for the
            lost and broken in the greater Kennewick area. Jesus loves you, and
            so does the Church of the Nazarine
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

export default About;
