/** @format */

import React, { Component } from "react";

class SubjectDetailsOnUpdate extends Component {
  constructor() {
    super();

    this.state = {
      name: "Nikhil Jain",
      isEdited: false,
    };
  }

  changeName = (e) => {
    this.setState({ name: e.target.value, isEdited: true });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name) {
      if (state.isEdited) {
        return { name: state.name };
      }
      return { name: props.name };
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.name.length === this.state.name.length) {
      let name = "Non Edited name";
      return name;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.name === this.state.name) {
      this.setState({ name: `${this.state.name} is a ${snapshot}` });
    }
  }

  render() {
    return (
      <div>
        <h1>Subject Details</h1>
        <div>Subject Name - {this.state.name}</div>
        <div>
          Edit Name -{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
          />
        </div>
      </div>
    );
  }
}

export default SubjectDetailsOnUpdate;
