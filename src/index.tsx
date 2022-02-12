import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if( "serviceWorker" in navigator ) {
  window.addEventListener("load", ()=> {
    navigator.serviceWorker.register('/sw.js').then( res => {
      console.log("Succesfully registered a service worker");
    }).catch( e => {
      console.log("No Service Worker Available")
    })
  })
}

if(Worker && indexedDB) {
    const worker = new Worker("w.js");
    worker.postMessage("Start working")
    worker.onmessage = (payload) => {
      console.log(payload)
    }
}