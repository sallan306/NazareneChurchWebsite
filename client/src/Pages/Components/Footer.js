import React, { Component } from "react";
import FooterDonation from "../../Resources/FooterDonation.png";
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
          </div>
          <div className="footerLogin">
            <Link className="adminLoginLink" to="/login">
              Admin Login
            </Link>
          </div>
          <div className="footerScott">
            <a
              href="mailto:sallan306@gmail.com"
              onMouseEnter={() => this.setState({ isRotating: true })}
              onMouseLeave={() => this.setState({ isRotating: false })}
              className="mySignature"
              style={{
                textDecoration: "none",
                transition: "0.9s",
                color: this.state.isRotating ? "blue" : "black"
              }}
            >
              Website Built By Scott Allan
              <SocialIcon
                style={{
                  height: 15,
                  width: 15,
                  transition: "0.9s",
                  transform: this.state.isRotating
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)"
                }}
                network="email"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
