import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import New from './New';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ ()=>{
        return(
          <App />
        )
      }} />
      <Route exact path="/new" component={ ()=>{
        return(
          <New />
        )
      }} />
    </Switch>
</BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
