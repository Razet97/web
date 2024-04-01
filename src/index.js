// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom
import App from './App';

ReactDOM.render(
  <Router> {/* Envuelve tu App con BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);