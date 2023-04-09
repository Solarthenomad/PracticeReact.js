import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <App store = {store} />,
    document.getElementById('root')
  );
};



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

store.subscribe(listener);
listener();


