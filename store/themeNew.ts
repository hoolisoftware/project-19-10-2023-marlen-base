import { defineStore } from 'pinia'

export const useThemeStore = defineStore('store', {
  state: () => {
    return {
      darkTheme: false,
    }
  },
  actions: {
    toggleTheme() {
        this.darkTheme = !this.darkTheme
    }
  },
  persist: true,
})