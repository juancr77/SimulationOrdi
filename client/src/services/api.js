import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
