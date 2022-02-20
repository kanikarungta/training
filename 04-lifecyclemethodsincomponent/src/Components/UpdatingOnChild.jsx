/** @format */

import React, { Component } from "react";

class UpdatingLifeCyclesOnChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kanika",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps is calling");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Child shouldComponentUpdate is calling");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child getSnapshotBeforeUpdate is calling");
    return null;
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate is calling");
  }

  changeState = () => {
    this.setState({
      name: "Kanika Rungta",
    });
  };

  render() {
    console.log("Child render is calling");
    return (
      <div>
        <div>see the level of execution at the console </div>
        <div>Name - {this.state.name}</div>
        <button onClick={this.changeState}>Updating the name - </button>
      </div>
    );
  }
}

export default UpdatingLifeCyclesOnChild;
