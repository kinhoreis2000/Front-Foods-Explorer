import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://backend-foodsexplorer.onrender.com/'
})

api.get('')
  .then(response => {
  })
  .catch(error => {
    console.error(error);
  });