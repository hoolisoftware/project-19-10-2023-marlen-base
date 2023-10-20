import { defineStore } from 'pinia';
import api from '@/apiCaller';

export const authStore = defineStore({
    id: 'authStore',
  state: () => ({
    token: (process.client && localStorage.getItem('KWT')) ? JSON.parse(localStorage.getItem('KWT')) : null,
    user: null,
    stats: null
  }),
  actions: {
    setToken(token) {
        this.token = token;
      if (process.client) {
        localStorage.setItem('KWT', JSON.stringify(token));
      }
    },
    setUser(user) {
      this.user = user;
    },
    setStats(stats) {
      this.stats = stats;
    },
    async getUser() {
      const response = await api.get('user/details', {
        headers: {
          Authorization: `KWT ${this.token}`
        }
      })
      this.setUser(response.data.data.user);
      return response;
    },
    async getStats(user) {
      const response = await api.get('user/stats/', {user});
      this.setStats(response.data.data.stats);
      return response;
    },
  },
});
