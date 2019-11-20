import React, { Component } from "react";
import {SocialIcon } from "react-social-icons"
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerAddresses">
          <div className="address">
            <h5>Physical Address</h5>
            <p>
              17 S. Rainier <br />
              Kennewick, WA 99336
            </p>
          </div>

          <div className="address">
            <h5>Mailing Address </h5>
            <p>
              6855 W Clearwater Ave. A101-217 <br />
              Kennewick, WA 99336
            </p>
          </div>
          <SocialIcon url="https://www.facebook.com/StoryPointComunityChurchOfTheNazarene" />
          <SocialIcon network="email"url="info@storypoint.info" />
        </div>
      </div>
    );
  }
}

export default Footer;