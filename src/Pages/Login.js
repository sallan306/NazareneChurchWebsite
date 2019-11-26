import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      correctUsername: "1",
      correctPassword: "1"
    };
  }

  onChange = (toChange, input) => {
    this.setState({ [toChange]: input.target.value})
  }
  loginAttempt =(user, pass, event) => {
    event.preventDefault()
    if (user === this.state.correctUsername && pass === this.state.correctPassword) {
      console.log("match!")
      this.props.login()
    }
    else {
      console.log("incorrect")
    }
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={(event)=> this.loginAttempt(this.state.username, this.state.password, event)}>
          <input onChange={(e)=>this.onChange("username",e)} value={this.state.username}/>
          <input onChange={(e)=>this.onChange("password",e)} value={this.state.password}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
