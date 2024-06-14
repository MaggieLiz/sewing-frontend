// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatternList from './components/PatternList';
import PatternDetail from './components/PatternDetail';
import PatternForm from './components/PatternForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Sewing Patterns Tracker</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patterns" element={<PatternList />} />
          <Route path="/patterns/:id" element={<PatternDetail />} />
          <Route path="/add-pattern" element={<PatternForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

