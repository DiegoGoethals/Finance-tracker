import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import localforage from 'localforage';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
  let registrationPromise;

  // Check if a service worker is already registered
  navigator.serviceWorker.getRegistration()
    .then(existingRegistration => {
      if (existingRegistration) {
        registrationPromise = Promise.resolve(existingRegistration);
      } else {
        // If no existing registration, register the service worker
        registrationPromise = navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered: ', registration.scope);
            return registration;
          });
      }
    })
    .catch(error => {
      console.log('Service Worker registration failed: ', error);
    });

  // Wait until the registration process is complete before continuing
  Promise.all([registrationPromise])
    .then(([registration]) => {
      // Perform any additional operations after registration
      // For example, you can start caching files or initializing other features.
    })
    .catch(error => {
      console.log('Error during service worker registration: ', error);
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