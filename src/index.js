import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // With these tags navigation didn't work
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
