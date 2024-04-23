import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://rocketnotes-api-xftf.onrender.com'
});
