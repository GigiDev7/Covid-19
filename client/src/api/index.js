import axios from 'axios';

const url = 'http://localhost:5000';

export const signup_post = (formData) => axios.post(`${url}/signup`, formData);
export const logout_get = () => axios.get(`${url}/logout`);
export const login_post = (formData) => axios.post(`${url}/login`, formData);
