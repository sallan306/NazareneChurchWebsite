import React, { Component } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { base } from "../Components/Rebase";
import axios from "axios"

class EditEvents extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      eventDate: "2020-03-06",
      eventTime: "08:00",
      eventDescription: "",
      eventImgURL: "",
      showEventsList: false,
      imageToUpload: null,
      eventsList: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.deleteOldEvents();
    this.eventsRef = base.syncState("events", {
      context: this,
      state: "eventsList",
      asArray: true
    });
  }
  editSuccessNotification = () => {
    NotificationManager.success("Success", "Event added!");
  };
  deleteSuccessNotification = () => {
    NotificationManager.success("Success", "Event Deleted!");
  };
  onChange = (e, itemToChange) => {
    this.setState({
      [itemToChange]: e.target.value
    });
  };

  getTodaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "/" + mm + "/" + dd;

    return today;
  };
  fileSelectHandler = event => {
    this.setState({
      imageToUpload: event.target.files[0]
    });
  };
  fileUploadHandler = () => {
    // axios.post;
  };
  deleteOldEvents = () => {
    let allEvents = [];
    base.fetch("events", {
      context: this,
      asArray: true,
      then(data) {
        allEvents = data;
      }
    });
    console.log(allEvents);
  };
  addEvent = e => {
    e.preventDefault();
    console.log(this.state.eventTime);
    let tempdate = this.state.eventDate.replace("-", "");
    let tempdate2 = tempdate.replace("-", "");
    let temptime = this.state.eventTime.replace(":", "");
    let uniqueID = tempdate2 + temptime;
    base.post("events/" + uniqueID, {
      data: {
        key: uniqueID,
        name: this.state.eventName,
        date: this.state.eventDate,
        time: this.state.eventTime,
        description: this.state.eventDescription,
        imgURL: this.state.eventImgURL
      }
    });
    this.getTime(temptime);
    this.setState({
      eventName: "",
      eventDate: "2020-03-06",
      eventTime: "08:00",
      eventDescription: "",
      eventImgURL: ""
    });

    this.editSuccessNotification();
  };

  deleteEvent = id => {
    base.remove("/events/" + id);
    this.deleteSuccessNotification();
  };

  getTime = time => {
    var hours = time.slice(0, 2);
    var minutes = time.slice(3, 5);

    if (parseInt(hours) > 12) {
      return parseInt(hours) - 12 + ":" + minutes + " PM";
    } else {
      return parseInt(hours) + ":" + minutes + " AM";
    }
  };
  openInNewTab = url => {
    var win = window.open(url, "_blank");
  };
  render() {
    return (
      <div className="EditEvents">
        <NotificationContainer />
        <h1>Event Editor</h1>
        <input
          type="file"
          className="eventFormItem eventFormFile"
          onChange={this.fileSelectHandler}
        ></input>
        <button onClick={this.fileUploadHandler}>Upload File</button>
        <p>
          Events will automatically sort by the soonest one first. <br />
          For the image URL you need to:
          <ul style={{ textAlign: "left" }}>
            <li>
              {" "}
              upload it to{" "}
              <button
                onClick={() => this.openInNewTab("https://photos.google.com/")}
              >
                google photos
              </button>
              and click on that photo
            </li>
            <li>
              click this image{" "}
              <img
                src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/share-512.png"
                style={{ width: 25, height: 25 }}
              />
            </li>
            <li> click "Create Link" in the bottom left and copy that link</li>
            <li>
              go to this website{" "}
              <button
                onClick={() =>
                  this.openInNewTab(
                    "https://www.labnol.org/embed/google/photos/"
                  )
                }
              >
                HERE
              </button>
            </li>
            <li>
              Copy and paste that link into the website, then copy the new
              "Direct Image Link"
            </li>
            <li>Copy this final link into this website</li>
          </ul>
          Sorry for all these steps, google makes it a pain in the butt to get
          direct image links but at least its free! You can use any image URL
          you want, or even get an image URL from a google search <br />
          Please chose or make an image close to 500x300 or at least something
          with that widescreen ratio (e.g. 1000x600, 750x450) or the image will
          be stretched and look weird.
        </p>
        <form className="eventForm" onSubmit={e => this.addListItem(e)}>
          <input
            className="eventFormItem eventFormName"
            onChange={e => this.onChange(e, "eventName")}
            value={this.state.eventName}
            placeholder="Event Name"
          ></input>
          <input
            type="date"
            className="eventFormItem eventFormDate"
            onChange={e => this.onChange(e, "eventDate")}
            value={this.state.eventDate}
            placeholder="Event Date"
          ></input>
          <input
            type="time"
            className="eventFormItem eventFormTime"
            onChange={e => this.onChange(e, "eventTime")}
            value={this.state.eventTime}
            placeholder="Event Time"
          ></input>

          <input
            className="eventFormItem eventFormImgURL"
            onChange={e => this.onChange(e, "eventImgURL")}
            value={this.state.eventImgURL}
            placeholder="Image URL"
          ></input>
          <textarea
            className="eventFormItem eventFormDescription"
            onChange={e => this.onChange(e, "eventDescription")}
            value={this.state.eventDescription}
            placeholder="Event Description"
          ></textarea>
          <div>
            <button
              onClick={e => this.addEvent(e)}
              disabled={
                !this.state.eventName &&
                !this.state.eventDate &&
                !this.state.eventDescription &&
                !this.state.eventImgURL
              }
            >
              Submit
            </button>
          </div>
        </form>
        <div className="previewCard">
          <h1>Below is a preview of the event you're making</h1>

          <div className="eventCard">
            <h1 className="eventName">{this.state.eventName}</h1>
            <img
              alt={this.state.eventName}
              className="eventImg"
              src={
                this.state.eventImgURL.length > 0
                  ? this.state.eventImgURL
                  : "https://www.clearbox.co.uk/wp-content/uploads/2014/01/Sunrise-500x300.jpg"
              }
            />

            <h2 className="eventDate">
              {this.state.eventDate +
                " at " +
                this.getTime(this.state.eventTime)}
            </h2>
            <p className="eventDescription">{this.state.eventDescription}</p>
          </div>
        </div>

        <div className="eventCardContainer">
          {this.state.eventsList.length > 0 ? (
            <h1>
              Below is exactly the order and appearance of the events on the
              Event main page
            </h1>
          ) : (
            <h1>There are no events posted yet!</h1>
          )}
          {this.state.eventsList.map(event => {
            return (
              <div>
                <div className="eventCard">
                  <h1 className="eventName">{event.name}</h1>
                  <img
                    alt={event.name}
                    className="eventImg"
                    src={
                      event.imgURL === "" || null || undefined
                        ? "https://www.clearbox.co.uk/wp-content/uploads/2014/01/Sunrise-500x300.jpg"
                        : event.imgURL
                    }
                  />

                  <h2 className="eventDate">
                    {event.date + " at " + this.getTime(event.time)}
                  </h2>
                  <p className="eventDescription">{event.description}</p>
                </div>
                <button onClick={() => this.deleteEvent(event.key)}>
                  Delete this event
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EditEvents;
