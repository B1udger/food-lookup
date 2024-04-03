// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddItemForm from './components/AddItemForm'; // Import AddItemForm
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddItemForm /> {/* Render AddItemForm instead of App */}
  </React.StrictMode>
);

reportWebVitals();