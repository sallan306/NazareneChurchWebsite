import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerWhiteSpace" />
        <div className="Footer">
          <div className="footerAddresses">
            <div className="address">
              <h5 className="footerAddressType">Physical Address</h5>
              <p className="footerAddress">
                17 S. Rainier <br />
                Kennewick, WA 99336
              </p>
            </div>

            <div className="address">
              <h5 className="footerAddressType">Mailing Address </h5>
              <p className="footerAddress">
                6855 W Clearwater Ave. A101-217 <br />
                Kennewick, WA 99336
              </p>
            </div>
            <SocialIcon url="https://www.facebook.com/StoryPointComunityChurchOfTheNazarene" />

            <SocialIcon network="email" url="info@storypoint.info" />
            <div>
              <button
                onClick={() => this.props.goToLogin()}
                className="loginButton"
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
