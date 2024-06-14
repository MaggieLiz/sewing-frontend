// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Sewing Patterns Tracker</h2>
      <p>Manage all your sewing patterns in one place.</p>
      <Link to="/patterns">View Patterns</Link>
      <br />
      <Link to="/add-pattern">Add New Pattern</Link>
    </div>
  );
};

export default HomePage;
