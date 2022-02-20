/** @format */

import React, { Component } from "react";

class DisplayForm extends Component {
  render() {
    const { username, comments, topic } = this.props;
    return (
      <div className="display-submitted">
        <div>{`show details - ${username}, ${comments}, ${topic}`}</div>
        <button onClick={this.props.backTopPrev}>Fill again</button>
      </div>
    );
  }
}

export default DisplayForm;
