import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Coin from './components/Coin';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Route exact path="/App" component={ App }/>
    <Route path="/coin" component={ Coin } />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
