// src/components/PatternList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPatterns, deletePattern } from '../services/api';

const PatternList = () => {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    fetchPatterns();
  }, []);

  const fetchPatterns = async () => {
    try {
      const response = await getPatterns();
      setPatterns(response.data);
    } catch (error) {
      console.error('Error fetching patterns:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePattern(id);
      fetchPatterns(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting pattern:', error);
    }
  };

  return (
    <div className="container">
      <h2>Sewing Patterns</h2>
      <ul className="list-group">
        {patterns.map((pattern) => (
          <li key={pattern._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/patterns/${pattern._id}`}>
              {pattern.name} - {pattern.type} - {pattern.difficulty} - {pattern.size} - {pattern.fabricRequired}
            </Link>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(pattern._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatternList;
