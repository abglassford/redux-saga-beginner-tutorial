import axios from 'axios';

const get = (url) => {
  return axios.get(`${url}`)
    .then(data => {
      return data.data.message[Math.floor(Math.random() * (data.data.message.length))]
    })
};

const getClickCount = (url) => {
  return axios.get(`${url}`)
  .then(data => data.data.clicks)
}

const increment = (url) => {
  return axios.get(`${url}`)
  .then(data => {
    return axios.put(`${url}`, {
      clicks: data.data.clicks += 1,
      message: data.data.message
    })
    .then(data => data.data.clicks)
  })
}

const decrement = (url) => {
  return axios.get(`${url}`)
  .then(data => {
    return axios.put(`${url}`, {
      clicks: data.data.clicks -= 1,
      message: data.data.message
    })
    .then(data => {
      console.log(data);
      return data.data.clicks
    })
  })
}

let timeout = 0;

const debounce = (func) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => func(), 200);
}

export {
  get,
  getClickCount,
  increment,
  decrement,
  debounce
};
