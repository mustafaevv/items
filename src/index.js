import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobeStyle from './globeStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobeStyle/>
    <App />
  </React.StrictMode>
);
