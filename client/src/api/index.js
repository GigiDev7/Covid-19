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

export const countries_get = (token) =>
  axios.get(`${url}/countries-stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const get_sorted_countries = (token, query, value) =>
  axios.get(`${url}/countries-stats?${query}=${value}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const get_by_field = (token, query) =>
  axios.get(`${url}/countries-stats?field=${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
