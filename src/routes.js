import axios from 'axios';

const get = url => axios.get(`${url}`)
.then(data => data.data.message[Math.floor(Math.random() * (data.data.message.length))]);

const getClickCount = url => axios.get(`${url}`)
.then(data => data.data.clicks);

const increment = url => axios.get(`${url}`)
.then((data) => {
  const clicks = data.data.clicks + 1;
  const message = data.data.message;
  return axios.put(`${url}`, {
    clicks,
    message,
  });
})
.then(newData => newData.data.clicks);

const decrement = url => axios.get(`${url}`)
.then((data) => {
  const clicks = data.data.clicks - 1;
  const message = data.data.message;
  return axios.put(`${url}`, {
    clicks,
    message,
  });
})
.then(newData => newData.data.clicks);


let timeout = 0;

const debounce = (func) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => func(), 200);
};

export {
  get,
  getClickCount,
  increment,
  decrement,
  debounce,
};
