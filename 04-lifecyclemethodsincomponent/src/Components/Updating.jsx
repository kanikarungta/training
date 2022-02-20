/** @format */

import React, { Component } from "react";
import UpdatingLifeCyclesOnChild from "./UpdatingOnChild";

class UpdatingLifeCycles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nikhil",
    };

    console.log("constructor is calling");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is calling");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is calling");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is calling");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is calling");
  }

  changeState = () => {
    this.setState({
      name: "Nikhil Jain",
    });
  };

  render() {
    console.log("render is calling");
    return (
      <div>
        <div>see the level of execution at the console </div>
        <div>Name - {this.state.name}</div>
        <button onClick={this.changeState}>Updating the name - </button>
        <UpdatingLifeCyclesOnChild />
      </div>
    );
  }
}

export default UpdatingLifeCycles;
