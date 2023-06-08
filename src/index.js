import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import localforage from 'localforage';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  // Register the service worker only if it's not already registered
  if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered: ', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed: ', error);
      });
  }
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