import axios from 'axios';

export default axios.create({
  baseURL: 'http://battuta.medunes.net/api/region/eg/all/?key=80e11672f2bfa3b600f301828ee5564d',
})