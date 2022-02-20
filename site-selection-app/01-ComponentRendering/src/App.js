import './App.css';
import { sites } from './constants/sites';

function App() {
  return (
    <div className="App">
      <h1>Site Selection App</h1>
      <ul>
      {
        sites.map(site => <li key={site.id}>{site.name}</li>
        )
      }
      </ul>
    </div>
  );
}

export default App;
