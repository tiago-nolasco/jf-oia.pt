import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store"

// ACTION -> Describes what we want to do (e.g. increment, addUser, setI18n) 

// REDUCER -> How an ACTION transform the state into the next (e.g. i++, user.push({}), i18n = {})

// STORE -> Globalized state

// DISPATCH -> Distatch an ACTION to the REDUCER

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
