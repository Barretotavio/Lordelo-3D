import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './pages/SignIn/index';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  </React.StrictMode>
);