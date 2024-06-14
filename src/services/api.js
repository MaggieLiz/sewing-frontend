// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const getPatterns = () => axios.get(`${API_BASE_URL}/patterns`);
export const getPatternById = (id) => axios.get(`${API_BASE_URL}/patterns/${id}`);
export const addPattern = (pattern) => axios.post(`${API_BASE_URL}/patterns`, pattern);
export const updatePattern = (id, pattern) => axios.put(`${API_BASE_URL}/patterns/${id}`, pattern);
export const deletePattern = (id) => axios.delete(`${API_BASE_URL}/patterns/${id}`);
