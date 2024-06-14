// src/App.js
import React from 'react';
import PatternList from './components/PatternList';
import PatternForm from './components/PatternForm';

function App() {
  const handlePatternAdded = () => {
    // You can add more logic here if needed when a pattern is added
  };

  return (
    <div className="App">
      <h1>Sewing Patterns Tracker</h1>
      <PatternForm onPatternAdded={handlePatternAdded} />
      <PatternList />
    </div>
  );
}

export default App;
