import { defineStore } from 'pinia';

export const rouletteStore = defineStore({
    id: 'rouletteStore',
    state: () => ({
        animationState: null,
        caseId: null,
        winItem: null,
    })
});
