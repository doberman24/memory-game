import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { images, results } from './data/data'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App images={images} results={results}/>
  </React.StrictMode>
);
