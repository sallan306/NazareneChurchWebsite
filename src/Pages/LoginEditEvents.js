import React, { Component } from "react";

class LoginEditEvents extends Component {
  constructor() {
    super();
    this.state = {
      newEvent: { name: "scott" },
      newEventName: "name of event"
    };
  }
  editState = event => {
    this.setState({ newEventName: event });
  };

  render() {
    return (
      <div className="loginEditEvents">
        Edit Events!!
        {this.props.eventsList.map(event => {
          return <div>{event.name}</div>;
        })}
        <div>
          <p>add event</p>
          <input
            onChange={e => this.editState(e)}
            className="inputEventName"
            value={this.state.newEventName}
          />
          <button onClick={() => this.props.addEvent(this.state.newEvent)}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default LoginEditEvents;
