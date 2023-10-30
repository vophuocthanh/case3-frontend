import axios from 'axios'

const BASE_URL = 'http://localhost:8081/users'

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true
})
