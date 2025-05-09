import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DetailsProvider } from './DetailsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DetailsProvider> {/* Wrap the App with DetailsProvider */}
      <App />
    </DetailsProvider>
  </React.StrictMode>
);