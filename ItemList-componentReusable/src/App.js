import { Component } from "react";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

import { sites, tasks } from './constants/sites'; 

// function App() {
  
// }



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemsList items={sites} header={'Existing Sites List'} />
        <ItemsList items={tasks} header={'Existing Tasks List'} />
      </div>
    );
  }
}

export default App;
