import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // FIXME: dev | product 구분
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
