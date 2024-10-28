import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </React.StrictMode>,
)
