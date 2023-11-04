import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
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