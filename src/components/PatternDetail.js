// src/components/PatternDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPatternById, updatePattern, deletePattern } from '../services/api';

const PatternDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pattern, setPattern] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    difficulty: '',
    size: '',
    fabricRequired: ''
  });

  useEffect(() => {
    fetchPattern();
  }, []);

  const fetchPattern = async () => {
    try {
      const response = await getPatternById(id);
      setPattern(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching pattern:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePattern(id, formData);
      navigate('/patterns');
    } catch (error) {
      console.error('Error updating pattern:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePattern(id);
      navigate('/patterns');
    } catch (error) {
      console.error('Error deleting pattern:', error);
    }
  };

  if (!pattern) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Pattern</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
        <input type="text" name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} required />
        <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} required />
        <input type="text" name="fabricRequired" placeholder="Fabric Required" value={formData.fabricRequired} onChange={handleChange} required />
        <button type="submit">Update Pattern</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PatternDetail;

