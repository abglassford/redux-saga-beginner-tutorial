import axios from 'axios';

const get = (url) => {
  return axios.get(`${url}`)
    .then(data => {
      return data.data.message[Math.floor(Math.random() * (data.data.message.length))]
    })
};

const increment = (url) => {
  return axios.get(`${url}`)
  .then(data => {
    return axios.put(`${url}`, {
      count: data.data.count += 1
    })
    .then(data => console.log(data.data))
  })
}

export {
  get,
  increment
};
