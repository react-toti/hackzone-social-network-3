import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60dfa7feabbdd9001722d44f.mockapi.io/hackzoneapi',
});

export default api;
