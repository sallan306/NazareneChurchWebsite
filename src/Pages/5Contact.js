import React, { Component } from "react";
import PastorImg from "../Resources/pastor.jpg";
import BKSunset from "../Resources/BKHoldingHands.jpg";
import { Parallax } from "react-parallax";
const contactList = [
  {
    role: "Lead Pastor",
    name: "Dan Martin",
    email: "dan@storypoint.info",
    phone: "509.619.5472",
    imgURL: PastorImg
  },
  {
    role: "Children’s Ministry Leader",
    name: "Sheri Martin",
    email: "sheri@storypoint.info",
    imgURL: PastorImg
  },
  {
    role: "Associate Pastor",
    name: "Patty Armstrong",
    email: "patty@storypoint.info",
    imgURL: PastorImg
  },
  {
    role: "Worship Ministry",
    name: "Larry Henderson & Nikki Perkins",
    email: "worship@storypoint.info",
    imgURL: PastorImg
  },
  {
    role: "Media/Web Ministry",
    name: "Tom Egelhoff",
    email: "tom@storypoint.info",
    imgURL: PastorImg
  }
];
class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  createContactList = () => {};
  render() {
    return (
      <div className="Contact">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">CONTACT</div>
          <div className="parallaxSpacePrimary"></div>
        </Parallax>
        <div className="content contentContact">
          <p>
            We define staff a little differently. Webster will give you a
            minimum of 17 definitions of the word staff. But at Story Point,
            these two are our favorites, a group of persons charged with
            carrying out the work of an establishment or executing some
            undertaking and something that supports or sustains. What supports
            and sustains us is the growing group of servant leaders. Story Point
            continues to grow, mature, frankly it continues to exist because of
            our dedicated un-paid “staff” that gives sacrificailly of their time
            and resources. But, if you must know more, below you can find out
            about our pastoral staff.
          </p>
          <div className="allContactsContainer">
            {contactList.map(contact => {
              return (
                <div className="contactContainer">
                  <div className="ContactImgAndName">
                    <img
                      alt="contactImg"
                      className="contactImg"
                      src={contact.imgURL}
                    ></img>
                    <p className="contactName">{contact.name}</p>
                  </div>
                  <div className="contactBio">
                    <p>{contact.role}</p>
                    <p>{contact.email}</p>
                    {contact.phone ? <p>{contact.phone}</p> : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
