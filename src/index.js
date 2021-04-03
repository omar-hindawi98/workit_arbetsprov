import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
