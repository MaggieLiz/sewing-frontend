// src/components/PatternForm.js
import React, { useState } from 'react';
import { addPattern } from '../services/api';

const PatternForm = ({ onPatternAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    difficulty: '',
    size: '',
    fabricRequired: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPattern(formData);
      onPatternAdded();
      setFormData({
        name: '',
        type: '',
        difficulty: '',
        size: '',
        fabricRequired: ''
      });
    } catch (error) {
      console.error('Error adding pattern:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
      <input type="text" name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} required />
      <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} required />
      <input type="text" name="fabricRequired" placeholder="Fabric Required" value={formData.fabricRequired} onChange={handleChange} required />
      <button type="submit">Add Pattern</button>
    </form>
  );
};

export default PatternForm;
