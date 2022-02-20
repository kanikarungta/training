import { Component } from "react";

class Decrement extends Component {

  render () {
    return (
      <>
        <button onClick={() => this.props.decHandler()}>Decrement</button>
      </>
    )
  }
}

export default Decrement;
