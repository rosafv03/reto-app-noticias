import React from 'react';
import ReactDOM from 'react-dom/client';//version 18
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigation } from './Routes/Navigation';
import './Components/Arc-Identity/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//version 18
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>

);

reportWebVitals();
