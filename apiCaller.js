import axios from "axios";
import { authStore } from "@/store/auth";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
})

api.interceptors.request.use(
    (config) => {
    const authStores = authStore()
    if (authStores.token) {
        config.headers['Authorization'] = `KWT ${authStores.token}`
      }
  
      return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api