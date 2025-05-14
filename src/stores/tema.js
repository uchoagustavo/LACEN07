import { defineStore } from 'pinia';

export const useTemaStore = defineStore('tema', {
  state: () => ({
    escuro: false,
  }),
  actions: {
    alternarTema() {
      this.escuro = !this.escuro;
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('tema', this.escuro ? 'escuro' : 'claro');
    },
    aplicarTemaSalvo() {
      const salvo = localStorage.getItem('tema') === 'escuro';
      this.escuro = salvo;
      if (salvo) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
  },
});
