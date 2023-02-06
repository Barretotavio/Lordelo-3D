import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './pages/Main/index';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);