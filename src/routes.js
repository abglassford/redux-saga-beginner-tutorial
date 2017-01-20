import axios from 'axios';

const get = (url) => {
  return axios.get(`${url}`)
    .then(data => {
      console.log(data.data.message[Math.floor(Math.random() * (data.data.message.length + 1))])
      return data.data.message[Math.floor(Math.random() * (data.data.message.length + 1))]
    })
};

export {get};
