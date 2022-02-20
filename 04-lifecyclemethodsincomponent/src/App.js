/** @format */
import MountingLifeCycles from "./Components/Mounting";
import UpdatingLifeCycles from "./Components/Updating";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Life cycle methods</h1>
      <MountingLifeCycles />
      <UpdatingLifeCycles />
    </div>
  );
}

export default App;
