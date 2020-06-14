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
      var password = "2Sam1234";
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
        <h1>Sermon Uploads</h1>
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
        {/* {this.showUserPass()} */}
        <ul style={{ textAlign: "left" }}>
          <li>Once logged in, head over to the upload section</li>
          <li>Drag and drop the audio file onto the web page</li>
          <li>Format for sermon title (important!): YYYY.MM.DD "NAME OF SERMON"</li>
          <li>go to the "your tracks" tab</li>
          <li>click the 3 dots ... next to the audio file</li>
          <li>chose "add to playlist,"</li>
          <li>click the orange "add" next to storypoint sermons</li>
        </ul>
      </div>
    );
  }
}

export default EditSermons;
