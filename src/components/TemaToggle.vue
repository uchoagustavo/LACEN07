<template>
  <div class="ClaroEscuro">
    <button @click="alternarTema">Alterar Tema</button>
  </div>
</template>

<script>
export default {
  name: "TemaToggle",
  mounted() {
    // Verifica se o modo escuro estava ativado anteriormente
    const temaSalvo = localStorage.getItem('tema') === 'escuro';
    if (temaSalvo) {
      document.body.classList.add('dark-theme');
    }
  },
  methods: {
    alternarTema() {
      const corpo = document.body;
      corpo.classList.toggle("dark-theme");

      const temaAtual = corpo.classList.contains("dark-theme") ? "escuro" : "claro";
      localStorage.setItem("tema", temaAtual);
    },
  },
};
</script>

<style scoped>
.ClaroEscuro {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.ClaroEscuro button {
  background-color: #ffcc00;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 25px;
  border: 2px solid #007bba;
  transition: background-color 0.3s ease;
  font-size: 0;
}

.ClaroEscuro button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: left 0.3s ease;
}

body.dark-theme .ClaroEscuro button {
  background-color: #000000;
  border-color: #fff;
}

body.dark-theme .ClaroEscuro button:before {
  left: 26px;
  background-color: #fff;
}
</style>

