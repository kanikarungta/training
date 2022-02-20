/** @format */

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };

    this.usernameRef = React.createRef();
    this.commentsRef = React.createRef();
    this.topicRef = React.createRef();
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.usernameRef.current.value} ${this.commentsRef.current.value} ${this.topicRef.current.value}`
    );
    // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
    this.props.toggleShow(
      //   this.state.username,
      //   this.state.comments,
      //   this.state.topic
      this.usernameRef.current.value,
      this.commentsRef.current.value,
      this.topicRef.current.value
    );
  };

  handleReset = () => {
    this.setState({
      username: "",
      comments: "",
      topic: "react",
    });
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onReset={this.handleReset} onSubmit={this.handleSubmit}>
        <div className="form-contents">
          <label>Username</label>
          <input
            defaultValue={username}
            type="text"
            // value={username}
            ref={this.usernameRef}
            // onChange={this.handleUsernameChange}
          />
        </div>
        <div className="form-contents">
          <label>Comments</label>
          <textarea
            defaultValue={comments}
            ref={this.commentsRef}
            // value={comments}
            // onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div className="form-contents">
          <label>Topic</label>
          <select
            defaultValue={topic}
            ref={this.topicRef}
            //   value={topic} onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}

export default Form;
