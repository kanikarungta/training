import SiteList from './components/SiteList';
import SiteAdd from './components/SiteAdd';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Site Selection App</h1>
      <SiteAdd />
      <SiteList />
    </div>
  );
}

export default App;
