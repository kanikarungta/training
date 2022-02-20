import './App.css';
import { Component } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 10
    }
  }

  incHandler = () => {
    console.log('before', this.state.count);
    // this.state.count= this.state.count + 1;
    this.setState({count: this.state.count + 1})
    console.log('after', this.state.count)
  }

  decHandler = () => {
    console.log('before', this.state.count);
    // this.state.count= this.state.count + 1;
    this.setState({count: this.state.count - 1})
    console.log('after', this.state.count)
  }

  render () {
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Count --- {this.state.count}</p>
       <Increment incHandler={this.incHandler} />
       <Decrement decHandler={this.decHandler} />
     </div>
    )
  }
}

export default App;
