/** @format */

import React, { Component } from "react";

class MountingLifeCyclesOnChild extends Component {
  constructor() {
    super();

    this.state = {};
    console.log("Child constructor is calling");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps is  calling");
    return null;
  }

  componentDidMount() {
    console.log("Child componentDidMount is calling");
  }

  render() {
    console.log("Child render is calling");
    return (
      <div>
        <div>see the level of execution of child at the console</div>
      </div>
    );
  }
}

export default MountingLifeCyclesOnChild;
