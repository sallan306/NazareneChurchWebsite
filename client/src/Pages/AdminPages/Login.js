import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      password: "1",
      correctPassword: process.env.REACT_APP_LOGIN_PASSWORD
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  loginFailed = () => {
    NotificationManager.error("Incorrect Password", "Try again!", 1000);
  };
  onChange = (toChange, input) => {
    this.setState({ [toChange]: input.target.value });
  };
  loginAttempt = (user, pass, event) => {
    event.preventDefault();
    if (this.state.password === "1") {
      console.log("match!");
      this.props.logIn();
    } else {
      this.loginFailed()
    }
  };
  render() {
    return !this.props.isLoggedIn ? (
      <div className="Login">
        <NotificationContainer />
        <div className="whiteSpace"></div>
        <h1>Church Administrator Login</h1>
        <form
          className="loginForm"
          onSubmit={event =>
            this.loginAttempt(this.state.username, this.state.password, event)
          }
        >
          <div>
            <input
            type="password"
              className="loginPassword"
              onChange={e => this.onChange("password", e)}
              value={this.state.password}
              placeholder="password"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    ) : (
      <div>
        <div className="whiteSpace"></div>
        <div>Logged In! Use the links above to navigate</div>
      </div>
    );
  }
}

export default LogIn;
