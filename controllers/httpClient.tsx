import axios from 'axios';
import { API_BASE } from '../constants/ApiConstants';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    'Cache-Control': 'no-store',
  },
});

export default client;
