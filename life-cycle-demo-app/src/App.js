/** @format */
import SubjectDetails from "./SubjectDetails/SubjectDetails";
import SubjectDetailsOnUpdate from "./SubjectDetails/SubjectDetailsOnUpdate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SubjectDetails name="Nikhil Jain" />
      <SubjectDetailsOnUpdate name="Kanika Rungta" />
    </div>
  );
}

export default App;
