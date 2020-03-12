import React, { Component } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class EditEvents extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      eventDate: "2020-03-06",
      eventTime: "",
      eventDescription: "",
      eventImgURL: "https://via.placeholder.com/500x300",
      eventsList: []
    };
  }
  editSuccessNotification = () => {
    NotificationManager.success("Success", "Event added!");
  };
  deleteSuccessNotification = () => {
    NotificationManager.success("Success", "Event Deleted!");
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios.get("/api/getList").then(res => {
      this.setState({ eventsList: res.data });
    });
  }
  addListItem = e => {
    e.preventDefault();
    let newListItem = {
      key: this.state.eventsList.length + 1,
      name: this.state.eventName,
      date: this.state.eventDate,
      time: this.state.eventTime,
      imgURL: this.state.eventImgURL,
      description: this.state.eventDescription
    };
    axios.post("/api/addListItem", newListItem).then(
      axios.get("/api/getList").then(res => {
        this.setState({ eventsList: res.data });
      })
    );

    this.setState({
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventDescription: "",
      eventImgURL: ""
    });

    this.editSuccessNotification();
  };

  onChange = (e, itemToChange) => {
    this.setState({
      [itemToChange]: e.target.value
    });
  };
  DeleteItem = index => {
    console.log(index);
    axios.post("/api/deleteListItem", index).then(
      axios.get("/api/getList").then(res => {
        this.setState({ eventsList: res.data });
      })
    );
    this.deleteSuccessNotification();
  };
  render() {
    return (
      <div className="EditEvents">
        <NotificationContainer />
        <h1>Event Editor</h1>
        <p>Events should automatically format by the soonest one first</p>
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
            className="eventFormItem eventFormTime"
            onChange={e => this.onChange(e, "eventTime")}
            value={this.state.eventTime}
            placeholder="Event Time"
          ></input>

          <input
            className="eventFormItem eventFormImgURL"
            onChange={e => this.onChange(e, "eventImgURL")}
            value={this.state.eventImgURL}
            placeholder="Image URL (ex https://via.placeholder.com/500x300) Recommended size is 500x300"
          ></input>
          <textarea
            className="eventFormItem eventFormDescription"
            onChange={e => this.onChange(e, "eventDescription")}
            value={this.state.eventDescription}
            placeholder="Event Description"
          ></textarea>
          <div>
            <button
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
          <h1>Preview Card</h1>
          <div className="eventCard">
            <img
              alt={this.state.eventName}
              className="eventImg"
              src={this.state.eventImgURL}
            />
            <h1 className="eventName">{this.state.eventName}</h1>
            <h2 className="eventDate">{this.state.eventDate}</h2>
            <h2 className="eventTime">{this.state.eventTime}</h2>
            <p className="eventDescription">{this.state.eventDescription}</p>
          </div>
        </div>
        <div className="eventCardContainer">
          {this.state.eventsList.map((event, index) => {
            return (
              <div className="eventCard" key={event.key}>
                <img alt={event.name} className="eventImg" src={event.imgURL} />
                <h1 className="eventName">{event.name}</h1>
                <h2 className="eventDate">{event.date}</h2>
                <h2 className="eventTime">{event.time}</h2>
                <p className="eventDescription">{event.description}</p>
                <button onClick={() => this.DeleteItem({ index: index })}>
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
