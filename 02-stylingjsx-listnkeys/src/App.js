import './App.css';

const numbers = ['number 1', 'number 2', 'number 3', 'number 4'];

const numbersObject = numbers.map((num,i) => ({ id: i, number: num}) );

function App() {
  return (
    <div>
       <h1 style={{ color: 'red', textAlign: 'center'}}>Welcome to the very first page</h1>   {/* -----> styling in JSX  */}

       <div className="App"> {/* -----> List and Keys */}
           <h1>Display the number list</h1>
           <ul>{numbersObject.map((val) => <li key={val.id}>{val.number}</li>)}</ul>
       </div>

    </div>
  );
}

export default App;
