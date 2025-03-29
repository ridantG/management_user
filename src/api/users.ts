import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const getUsers = async (page: number = 1) => {
  const response = await axios.get(`${API_URL}/users`, {
    params: { page },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const updateUser = async (id: number, userData: { first_name: string; last_name: string; email: string }) => {
  const response = await axios.put(`${API_URL}/users/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};