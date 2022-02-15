import axios from 'axios';

const intance = axios.create({
  baseURL: 'http://192.168.1.206:3002',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default intance;
