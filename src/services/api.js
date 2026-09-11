import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})

const controller = new AbortController();

instance.interceptors.request.use(
  (config) => {
    // some interceptors
    // const whiteList = [
    //   'https://api.openweathermap.org/data/2.5/weather',
    // ]
    config.signal = controller.signal;

    // if (true) {
    //   controller.abort();
    // }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
)

instance.defaults.timeout = 30000;

instance.interceptors.response.use(
  // success
  (res) => {
    return res.data;
  },

  // error
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;