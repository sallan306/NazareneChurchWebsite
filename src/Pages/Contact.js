import React, { Component } from "react";
import PastorImg from "../Resources/pastor.jpg";
import BKSunset from "../Resources/BKCross2.jpg";
import { Parallax } from "react-parallax";
const contactList = [
  {
    name: "pastor Gary",
    age: "27",
    favoriteScripture: "Isaac 25:5",
    email: "email@jesus.com",
    imgURL: PastorImg
  },
  {
    name: "henchmen 1",
    age: "27",
    favoriteScripture: "Isaac 25:5",
    email: "email@jesus.com",
    imgURL: PastorImg
  },
  {
    name: "henchmen 2",
    age: "27",
    favoriteScripture: "Isaac 25:5",
    email: "email@jesus.com",
    imgURL: PastorImg
  },
  {
    name: "henchmen 3",
    age: "27",
    favoriteScripture: "Isaac 25:5",
    email: "email@jesus.com",
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
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="Contact">
          Below are those responsible for this great humble ministries good
          deeds. We are blessed to have such creatures walk this earth.
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
                    <p>Age: {contact.age}</p>
                    <p>Favorite Passage: {contact.favoriteScripture}</p>
                    <p>{contact.email}</p>
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
