import axios from 'axios';
import setting from './settings'

class Service {
  constructor() {
    let service = axios.create({
        baseURL: setting.env.server,
        headers: { Pragma: 'no-cache' }
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    //service.interceptors.request.use(authorizationInterceptor)
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/')
        break;
      case 404:
        this.redirectTo(document, '/404')
        break;
      default:
        this.redirectTo(document, '/500')
        break;
    }
    return Promise.reject(error)
  }
  
  get(path) {
    return this.service.get(path)
  }

  delete(path) {
    return this.service.delete(path)
  }

  post(path, payload) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    })
  }

  put(path, payload) {
    return this.service.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload
    })
  }

   redirectTo = (document, path) => {
    console.log(path)
  }
}

function authorizationInterceptor(config) {
  const token = sessionStorage.getItem('token')
  config.headers.Authorization = token || ''
  return config
}

export default new Service();