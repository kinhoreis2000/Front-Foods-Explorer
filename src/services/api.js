import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3220/'
})

api.get('')
  .then(response => {
  })
  .catch(error => {
    console.error(error);
  });