import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent question='Are you getting along components?' />
      <ClassComponent text='I am sure, if you put in some efforts, you will!' />
    </div>
  );
}

export default App;
