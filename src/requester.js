import axios from "axios";


export const requester = axios.create({
    baseURL: 'http://159.89.2.247:8000',

})

requester.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('access'));
        console.log(config.headers);
        if (token) {
            config.headers['Authorization'] = 'Bearer' + token.access;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
  });
  