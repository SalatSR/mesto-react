import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const body = ReactDOM.createRoot(document.getElementById('page'));
body.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
));

