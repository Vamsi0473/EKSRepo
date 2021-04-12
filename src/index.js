import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './Users';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
