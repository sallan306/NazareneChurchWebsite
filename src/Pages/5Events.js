import React, { Component } from "react";
import PastorImg from "../Resources/pastor.jpg";
import BKContact from "../Resources/BKHoldingHands.jpg";
import ParallaxCustom from "./ParallaxCustom";
const contactList = [
  {
    role: "Lead Pastor",
    name: "Dan Martin",
    email: "dan@storypoint.info",
    phone: "509.619.5472",
    imgURL: PastorImg,
    index: 1
  },
  {
    role: "Children’s Ministry Leader",
    name: "Sheri Martin",
    email: "sheri@storypoint.info",
    imgURL: PastorImg,
    index: 2
  },
  {
    role: "Associate Pastor",
    name: "Patty Armstrong",
    email: "patty@storypoint.info",
    imgURL: PastorImg,
    index: 3
  },
  {
    role: "Worship Ministry",
    name: "Larry Henderson & Nikki Perkins",
    email: "worship@storypoint.info",
    imgURL: PastorImg,
    index: 4
  },
  {
    role: "Media/Web Ministry",
    name: "Tom Egelhoff",
    email: "tom@storypoint.info",
    imgURL: PastorImg,
    index: 5
  }
];
class Events extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    if (this.props.currentSubPage === "contact") {
      window.scrollTo(0, this.props.contactRef.current.offsetTop + 100);
    }
  }
  createContactList = () => {};
  render() {
    return (
      <div className="eventsPage">
        <div className="Events">
          <ParallaxCustom
            title={"EVENTS"}
            parallaxStrength={this.props.parallaxStrength}
            BKIMGURL={BKContact}
            primary={true}
            bgStyle={{ top: 100 }}
          />
          <div className="content contentFacebook">
            <h2>Social</h2>
            <iframe
              title="facebook"
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/StoryPointComunityChurchOfTheNazarene&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="500"
              height="400"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="encrypted-media"
            />
          </div>
        </div>
        <div className="Contact" ref={this.props.contactRef}>
          <ParallaxCustom
            title={"CONTACT"}
            parallaxStrength={this.props.parallaxStrength}
            BKIMGURL={BKContact}
            primary={false}
            bgStyle={{ top: 100 }}
          />
          <div className="content contentContact">
            <h2>Our Staff</h2>
            <p>
              We define staff a little differently. Webster will give you a
              minimum of 17 definitions of the word staff. But at Story Point,
              these two are our favorites, a group of persons charged with
              carrying out the work of an establishment or executing some
              undertaking and something that supports or sustains. What supports
              and sustains us is the growing group of servant leaders. Story
              Point continues to grow, mature, frankly it continues to exist
              because of our dedicated un-paid “staff” that gives sacrificailly
              of their time and resources. But, if you must know more, below you
              can find out about our pastoral staff.
            </p>
            <div className="allContactsContainer">
              {contactList.map(contact => {
                return (
                  <div className="contactContainer" key={contact.index}>
                    <img
                      alt="contactImg"
                      className="contactImg"
                      src={contact.imgURL}
                    ></img>
                    <div className="contactInfo">
                      <h2 className="contactName">{contact.name}</h2>
                      <div className="contactBio">
                        <p>{contact.role}</p>
                        <p>{contact.email}</p>
                        {contact.phone ? <p>{contact.phone}</p> : ""}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
