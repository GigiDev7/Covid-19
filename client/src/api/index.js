import axios from 'axios';

const url = 'http://localhost:5000';

export const signup_post = (formData) => axios.post(`${url}/signup`, formData);
export const login_post = (formData) => axios.post(`${url}/login`, formData);
export const summary_get = (token) =>
  axios.get(`${url}/summary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
