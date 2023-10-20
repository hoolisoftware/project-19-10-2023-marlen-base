import { d as defineStore } from '../server.mjs';

const modalStore = defineStore({
  id: "modalStore",
  state: () => ({
    modals: {
      signIn: false,
      deposit: false,
      review: false,
      caseOpen: false
    }
  }),
  actions: {
    showModal(modalName) {
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

export { modalStore as m };
//# sourceMappingURL=modal-33f1e527.mjs.map
