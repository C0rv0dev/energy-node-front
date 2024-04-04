import axios from 'axios';
import config from './config/config';

const api = axios.create({
  baseURL: config.api_base_url,
});

export default api;
