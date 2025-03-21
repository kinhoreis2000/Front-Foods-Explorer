import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://backend-service:5000'
})

api.get('')
  .then(response => {
  })
  .catch(error => {
    console.error(error);
  });