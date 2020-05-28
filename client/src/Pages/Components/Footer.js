import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      isRotating: false
    };
  }
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
            {/* <h5>
              For your convenience we offer tithe online, as well as
              automated monthly payments
            </h5> */}
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="VEK6YSLLRQXWU" />
              <input
                type="hidden"
                name="item_name"
                value="To support our great church ministry"
              />
              <input type="hidden" name="currency_code" value="USD" />
              <input
                className="paypalPicture"
                type="image"
                src="http://themtmoriahchurch.org/wp-content/uploads/2016/04/4418900_orig-300x150.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            {/* <SocialIcon url="https://www.facebook.com/StoryPointComunityChurchOfTheNazarene" /> */}
            {/* <SocialIcon network="email" url="info@storypoint.info" /> */}
            <div
              className="mySignature"
              style={{
                transition: "0.9s",
                color: this.state.isRotating ? "blue" : "black"
              }}
            >
              Website Built By Scott Allan
              <SocialIcon
                onMouseEnter={() => this.setState({ isRotating: true })}
                onMouseLeave={() => this.setState({ isRotating: false })}
                style={{
                  height: 15,
                  width: 15,
                  transition: "0.9s",
                  transform: this.state.isRotating
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)"
                }}
                network="email"
                url="sallan306@gmail.com"
              />
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
