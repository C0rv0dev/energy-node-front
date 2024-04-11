import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import config from './config/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.title = config.app_name;
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
