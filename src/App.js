import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItemForm from './components/AddItemForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-item" element={<AddItemForm />} />
      </Routes>
    </Router>
  );
}

export default App;
