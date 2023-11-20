import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { results } from './data/data'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App results={results}/>
  </React.StrictMode>
);
