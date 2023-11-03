import { defineStore } from 'pinia';


interface State
{
    kwtToken: String|null
}


export const useAuthStore = defineStore({
    id: 'authStoreFix',
  state: () => ({
    kwtToken: null,
  } as State),
  actions: {
    setKwtToken(token: string) {
        this.kwtToken = token
    }
  }
});
