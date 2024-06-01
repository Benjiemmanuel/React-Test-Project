import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  hangleSubmi = (e) => {
    e.preventDefault();
    alert(`${this.state.username}, ${this.state.comments}`);
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.hangleSubmit}>
          <div>
            <label>Username</label>
            <input
              className="border"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              className="border"
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <button className="bg-blue-300" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
