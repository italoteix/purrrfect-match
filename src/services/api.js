import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jason-cat-server.herokuapp.com/'
});

export default api;
