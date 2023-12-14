import { defineStore } from 'pinia';

export const modalStore = defineStore({
    id: 'modalStore',
    state: () => ({
        modals: {
            signIn: false,
            deposit: false,
            review: false,
            caseOpen: false,
            order: false,
        }
    }),
    actions: {
        showModal(modalName) {
            console.log(modalName)
            this.setModal({ name: modalName, value: true });
        },
        hideModal(modalName) {
            this.setModal({ name: modalName, value: false });
        },
        setModal({ name, value }) {
            this.modals[name] = value;
        }
    },
    getters: {
        isModalShown: (state) => (modalName) => {
            return state.modals[modalName] || false;
        }
    }
});
