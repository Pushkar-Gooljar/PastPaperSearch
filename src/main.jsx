import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactGA from 'react-ga';

// const TrackingID = 'G-LDB7CFBSWK';
// ReactGA.initialize(TrackingID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
