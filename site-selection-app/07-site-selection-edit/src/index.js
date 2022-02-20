import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IconContext} from "react-icons"

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: {fontSize: '12px', color: "rgb(160, 158, 158)"}}}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
