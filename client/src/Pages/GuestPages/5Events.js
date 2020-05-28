import React, { Component } from "react";
import DanMartin from "../../Resources/DanMartin.jpg";
import SheriMartin from "../../Resources/SheriMartin.jpg";
import PattyArmstrong from "../../Resources/PattyArmstrong.jpg";
import RuthTodd from "../../Resources/RuthTodd.jpg";
import NikkiHouston from "../../Resources/NikkiHouston.jpg";
import BKEvents from "../../Resources/BKHoldingHands.jpg";
import BKContact from "../../Resources/BKDearGodSepia.jpg";
import ParallaxCustom from "../Components/ParallaxCustom";
import { base } from "../Components/Rebase";

const contactList = [
  {
    role: "Lead Pastor",
    name: "Dan Martin",
    email: "dan@storypoint.info",
    phone: "509.619.5472",
    imgURL: DanMartin,
    index: 1
  },
  {
    role: "Children’s Ministry Leader",
    name: "Sheri Martin",
    email: "sheri@storypoint.info",
    imgURL: SheriMartin,
    index: 2
  },
  {
    role: "Associate Pastor",
    name: "Patty Armstrong",
    email: "patty@storypoint.info",
    imgURL: PattyArmstrong,
    index: 3
  },
  {
    role: "Outreach Pastor",
    name: "Ruth Todd",
    email: "ruthtodd28@gmail.com",
    imgURL: RuthTodd,
    index: 4
  },
  {
    role: "Worship Leader",
    name: "Nikki Houston",
    email: "worship@storypoint.info",
    imgURL: NikkiHouston,
    index: 5
  }
];
class Events extends Component {
  constructor() {
    super();
    this.state = {
      eventsList: [],
      speed: 10
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("hi")
    this.eventsRef = base.syncState("events", {
      context: this,
      state: "eventsList",
      asArray: true
    });
  }
  // componentWillUnmount() {
  //   base.removeBinding(this.eventsRef);
  // }
  renderList = () => {};
  render() {
    return (
      <div className="eventsPage">
        <div className="Events">
          <ParallaxCustom
            title={"EVENTS"}
            parallaxStrength={this.props.parallaxStrength}
            BKIMGURL={BKEvents}
            primary={true}
            bgStyle={{ top: 0 }}
            screenWidth={this.props.screenWidth}
          />
          <div className="content contentFacebook">
            <h2>Events</h2>
            {
            this.state.eventsList.map(event => {
              return (
                <div className="eventCard" key={event.key}>
                  <img
                    alt={event.name}
                    className="eventImg"
                    src={event.imgURL}
                  />
                  <h1 className="eventName">{event.name}</h1>
                  <h2 className="eventDate">{event.date}</h2>
                  <h2 className="eventTime">{event.time}</h2>
                  <p className="eventDescription">{event.description}</p>
                </div>
              );
            })
            }

          </div>
        </div>
        <div className="Contact" ref={this.props.contactRef}>
          <ParallaxCustom
            title={"CONTACT"}
            parallaxStrength={this.props.parallaxStrength}
            BKIMGURL={BKContact}
            primary={false}
            bgStyle={{ top: 0 }}
            screenWidth={this.props.screenWidth}
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
                        <a href={"mailto:" + contact.email}>{contact.email}</a>
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
