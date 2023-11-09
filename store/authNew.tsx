import { defineStore } from 'pinia'
import type { UserInformation } from '~/hooks/use-query/profile'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      kwt: null as (string|null),
      user: null as (UserInformation|null)
    }
  },
  actions: {
    setKwt(token: string) {
        this.kwt = token
    },
    removeKwt() {
      this.kwt = null
    }
  },
  persist: true,
})