import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8000/api-users/"
})

export default api;