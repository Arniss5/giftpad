import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { ContextProvider } from './Context';
import Favicon from "react-favicon";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
        <Router>
        <Favicon url=""></Favicon>
          <App />
        </Router>
    </ContextProvider>
  </React.StrictMode>
);
