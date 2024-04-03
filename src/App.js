import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/main/Main';
import { AddItemForm } from './components/AddItemForm';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItemForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;