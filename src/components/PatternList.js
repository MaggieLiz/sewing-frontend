// src/components/PatternList.js
import React, { useEffect, useState } from 'react';
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
    <div>
      <h1>Sewing Patterns</h1>
      <ul>
        {patterns.map((pattern) => (
          <li key={pattern._id}>
            {pattern.name} - {pattern.type} - {pattern.difficulty} - {pattern.size} - {pattern.fabricRequired}
            <button onClick={() => handleDelete(pattern._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatternList;
