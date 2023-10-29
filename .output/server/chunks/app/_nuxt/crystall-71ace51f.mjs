import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { d as defineStore } from '../server.mjs';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true
});
api.interceptors.request.use(
  (config) => {
    const authStores = authStore();
    if (authStores.token) {
      config.headers["Authorization"] = `KWT ${authStores.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const authStore = defineStore({
  id: "authStore",
  state: () => ({
    token: null,
    user: null,
    stats: null
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUser(user) {
      this.user = user;
    },
    setStats(stats) {
      this.stats = stats;
    },
    async getUser() {
      const response = await api.get("user/details", {
        headers: {
          Authorization: `KWT ${this.token}`
        }
      });
      this.setUser(response.data.data.user);
      return response;
    },
    async getStats(user) {
      const response = await api.get("user/stats/", { user });
      this.setStats(response.data.data.stats);
      return response;
    }
  }
});
const _imports_0$1 = "" + publicAssetsURL("img/icons/moon.png");
const _imports_0 = "" + publicAssetsURL("img/icons/crystall.png");

export { _imports_0$1 as _, _imports_0 as a, authStore as b, api as c };
//# sourceMappingURL=crystall-71ace51f.mjs.map
