import React, { Component } from "react";
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "1",
      password: "1",
      correctUsername: "1",
      correctPassword: "1"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = (toChange, input) => {
    this.setState({ [toChange]: input.target.value });
  };
  loginAttempt = (user, pass, event) => {
    event.preventDefault();
    if (
      toString(user) === toString(this.props.correctUsername) &&
      toString(pass) === toString(this.props.correctPassword)
    ) {
      console.log("match!");
      this.props.logIn();
    } else {
      console.log(user, pass);
      console.log("incorrect");
    }
  };
  render() {
    return !this.props.isLoggedIn ? (
      <div className="Login">
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
              className="loginUsername"
              onChange={e => this.onChange("username", e)}
              value={this.state.username}
              placeholder="username"
            />
          </div>
          <div>
            <input
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
