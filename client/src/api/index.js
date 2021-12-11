import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = (formData) => axios.post(`${url}/signup`, formData);
