import React, { Component } from "react";
class EditSermons extends Component {
  constructor() {
    super();
    this.state = {
      showUserPass: false
    };
  }
  showUserPass = () => {
    if (this.state.showUserPass) {
      var username = "dan@storypoint.info";
      var password = "2Samuel1234";
      return (
        <div>
          <p>username: {username}</p>
          <p>password: {password}</p>
        </div>
      );
    } else {
      return (
        <button onClick={() => this.setState({ showUserPass: true })}>
          Click Here to show soundcloud login info
        </button>
      );
    }
  };
  render() {
    return (
      <div className="slideshowTutorialContent">
        <div className="whiteSpace" />
        <p>
          The sermons are on the Soundcloud account, which is{" "}
          <button
            onClick={() => {
              window.open("https://soundcloud.com/", "_blank");
            }}
          >
            HERE
          </button>
        </p>
        {this.showUserPass()}
        <p>
          Once logged in, head over to the upload section, and drag and drop the
          audio file onto the web page.
        </p>
        <p>
          When titling the podcast, please follow the naming conventions I have
          already started so that every audio file is in the proper order
        </p>
        <p>Format: YYYY/MM/DD NAME OF THE SERMON</p>
        <p>
          This naming convention is so that the sermons will automatically play
          from the newest one first
        </p>
        <p>
          Once you upload the sermon, make sure you add it to the playlist
          "Storypoint Sermons" so it shows up on the website
        </p>
      </div>
    );
  }
}

export default EditSermons;
