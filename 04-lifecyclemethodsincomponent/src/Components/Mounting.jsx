/** @format */

import React, { Component } from "react";
import MountingLifeCyclesOnChild from "./MountingOnChild";

class MountingLifeCycles extends Component {
  constructor() {
    super();

    this.state = {};
    console.log("constructor is calling");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is  calling");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount is calling");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is calling");
  }

  render() {
    console.log("render is calling");
    return (
      <div>
        <div>see the level of execution at the console</div>
        <MountingLifeCyclesOnChild />
      </div>
    );
  }
}

export default MountingLifeCycles;
