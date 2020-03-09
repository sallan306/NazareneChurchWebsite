import React, { Component } from "react";
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
        <form
          onSubmit={event =>
            this.loginAttempt(this.state.username, this.state.password, event)
          }
        >
          <input
            onChange={e => this.onChange("username", e)}
            value={this.state.username}
            placeholder="username"
          />
          <input
            onChange={e => this.onChange("password", e)}
            value={this.state.password}
            placeholder="password"
          />
          <button>Submit</button>
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
