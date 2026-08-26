import axios from 'axios'

const apiUsers = axios.create({
    baseURL: "http://localhost:8000/api-users/"
})

apiUsers.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default apiUsers;