import axios from 'axios';

const get = (url) => {
  return axios.get(`${url}`)
    .then(data => data.data)
};

export {get};
