import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

let posts = [
    {id: 1, post: 'Hi'},
    {id: 2, post: 'How are you'},
    {id: 3, post: 'I\'m happy'},
    {id: 4, post: 'ghbdtn  asdasdasdasdasdaaaa aaaaaaaaaaaaaaaaasd '},
    {id: 5, post: 'привет от нас'},
];

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App posts={ posts } />
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
