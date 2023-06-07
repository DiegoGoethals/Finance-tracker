import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import localforage from 'localforage';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered: ', registration.scope);
    })
    .catch(error => {
      console.log('Service Worker registration failed: ', error);
    });
}

localforage.getItem('accounts').then(accounts => {
  if (!accounts) {
    localforage.setItem('accounts', []);
  }
});

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);