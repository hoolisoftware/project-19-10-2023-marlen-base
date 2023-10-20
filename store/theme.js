import { defineStore } from 'pinia';

export const themeStore = defineStore({
    id: 'themeStore',
    state: () => ({
        darkTheme: false
    }),
    getters: {
        isDarkTheme: (state) => state.darkTheme
    },
    actions: {
        toggleTheme() {
            this.darkTheme = !this.darkTheme;
            if (process.client) {
                localStorage.setItem('darkTheme', this.darkTheme);
            }
        },
        getTheme() {
            if (process.client) {
                let theme = localStorage.getItem('darkTheme', this.darkTheme);
                this.darkTheme = theme==='true'? true : false
                console.log(this.darkTheme)
            }
        },
    },

    mutations: {
        toggleTheme() {
            this.darkTheme = !this.darkTheme;
            if (process.client) {
                localStorage.setItem('darkTheme', this.darkTheme);
            }
        }
    }
});
