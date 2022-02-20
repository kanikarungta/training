/** @format */

import "./App.css";
import Form from "./components/Form";
import DisplayForm from "./components/DisplayForm";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
      show: false,
    };
  }

  toggleShow = (a, b, c) => {
    this.setState({ show: true, username: a, comments: b, topic: c });
  };

  backTopPrev = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Event Handling and Forms</header>
        <div className="show-events">
          {this.state.show ? (
            <DisplayForm
              username={this.state.username}
              comments={this.state.comments}
              topic={this.state.topic}
              backTopPrev={this.backTopPrev}
            />
          ) : (
            <Form toggleShow={this.toggleShow} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
