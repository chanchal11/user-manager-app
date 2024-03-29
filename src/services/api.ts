// services/api.ts
import axios from 'axios';

const BASE_URL = 'https://660160fd87c91a11641ab523.mockapi.io/users';

export const fetchUsers = () => {
  return axios.get(BASE_URL);
};

export const deleteUser = (userId: string) => {
  return axios.delete(`${BASE_URL}/${userId}`);
};

export const updateUser = (userId: string, data: any) => {
  return axios.put(`${BASE_URL}/${userId}`, data);
};
