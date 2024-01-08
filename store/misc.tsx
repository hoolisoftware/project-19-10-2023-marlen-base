import { defineStore } from 'pinia'

export const useMiscStore = defineStore('auth', {
  state: () => {
    return {
        balance: 0,
        extra_balance: 0
    }
  }
})