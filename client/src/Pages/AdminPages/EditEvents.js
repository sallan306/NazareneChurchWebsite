import React, { Component } from "react";

class EditEvents extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="EditEvents">
        <div className="whiteSpace"/>
       <form>
         <input placeholder="Event Name"></input>
         <input placeholder="Event Date"></input>
         <input placeholder="Event Time"></input>
         <input placeholder="Event Image"></input>
       </form>
      </div>
    );
  }
}

export default EditEvents;
