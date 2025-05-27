// src/stores/acessibilidade.js
import { defineStore } from 'pinia'

export const useAcessibilidadeStore = defineStore('acessibilidade', {
  state: () => ({
    niveisFonte: [100, 110, 120, 100],
    indiceAtual: 0
  }),
  actions: {
    alternarFonte() {
      this.indiceAtual = (this.indiceAtual + 1) % this.niveisFonte.length
      const novoTamanho = this.niveisFonte[this.indiceAtual]
      document.documentElement.style.fontSize = `${novoTamanho}%`
      localStorage.setItem('indiceFonte', this.indiceAtual)
    },
    aplicarFonteSalva() {
      const salva = localStorage.getItem('indiceFonte')
      if (salva !== null) {
        this.indiceAtual = parseInt(salva)
        const tamanho = this.niveisFonte[this.indiceAtual]
        document.documentElement.style.fontSize = `${tamanho}%`
      }
    }
  }
})
