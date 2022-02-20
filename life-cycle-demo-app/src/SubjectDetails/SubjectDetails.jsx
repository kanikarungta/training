/** @format */

import React, { Component } from "react";

class SubjectDetails extends Component {
  constructor() {
    super();

    // debugger;
    this.state = {
      name: "Nikhil Jain",
      color: "black",
    };
  }

  static getDerivedStateFromProps(props, state) {
    // debugger;
    if (props.name !== state.name) {
      return { name: props.name };
    }

    return { name: state.name };
  }

  componentDidMount() {
    // debugger;
    this.setState({ color: "Green" });
  }

  render() {
    // debugger;
    return (
      <div>
        <h1> Subject Details</h1>
        <div style={{ color: this.state.color }}>
          Subject Name - {this.state.name}
        </div>
      </div>
    );
  }
}

export default SubjectDetails;
