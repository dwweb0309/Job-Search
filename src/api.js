import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_SERVER_API_ENDPOINT,
  timeout: 60000
})

API.interceptors.request.use(async (config) => {
  config.headers = {
    'X-RapidAPI-Key': process.env.VUE_APP_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.VUE_APP_X_RAPIDAPI_HOST,
    ...config.headers
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

API.interceptors.response.use((response) => {
  return response
}, (error) => {
  // let code;
  // let url;

  // if (error instanceof AxiosError) {
  //   code = error.response?.status ?? 0
  //   url = error.config.url ?? '?'
  // } else {
  //   code = 0
  //   url = '?'
  // }

  // console.error(`http:res(${url}, ${code})`, error);

  // if (code === 503) {
  //   window.location = '/maintenance'
  // }

  console.log(error)

  return Promise.reject(error)
})

export default API
