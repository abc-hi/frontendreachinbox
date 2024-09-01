
import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import
import App from './App';
// import './index.css'; // Import your CSS file if needed

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root using createRoot

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

