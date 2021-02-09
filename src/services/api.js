import axios from 'axios';

const api = axios.create({
  baseURL: 'https://growdevers-api-extt.herokuapp.com',
});

export default api;
