import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import localforage from 'localforage';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
  // Check if a service worker is already registered
  navigator.serviceWorker.getRegistration()
    .then(existingRegistration => {
      if (existingRegistration) {
        console.log('Service Worker is already registered: ', existingRegistration.scope);
        return existingRegistration;
      }
  
      // If no existing registration, register the service worker
      return navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered: ', registration.scope);
          return registration;
        });
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