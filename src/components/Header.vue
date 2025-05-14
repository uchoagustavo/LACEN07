<script>
export default {
  name: 'Header',
  mounted() {
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

<template>
  <nav class="menu">
    <div class="menu-toggle">
      <img src="/assets/img/bars.svg" class="icone-bars" alt="Menu" />
    </div>
    <ul class="contatos-menu">
      <li>
        <button class="botao-tema" @click="alternarTema()" aria-label="Alternar tema claro/escuro"></button>
      </li>
      <li><a href="#" aria-label="Página inicial">Aa(1/3)</a></li>

      <li class="infos-header">ENTRE EM CONTATO:</li>

      <li class="infos-header">
        <a href="https://wa.me/557932346007" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img class="img-contato" src="/assets/img/telephone-fill.png" alt="Telefone" />
          (79) 3234-6007
        </a>
      </li>

      <li class="infos-header">
        <a href="https://www.instagram.com/hemose_lacen_svo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img class="img-contato" src="/assets/img/instagram (1).svg" alt="Instagram" />
        </a>
      </li>

      <li class="infos-header">
        <a href="https://www.facebook.com/fsph.se/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img class="img-contato" src="/assets/img/facebook_Icone.svg" alt="Facebook" />
        </a>
      </li>

      <li class="infos-header">
        <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img class="img-contato" src="/assets/img/IN_Icone.svg" alt="LinkedIn" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  background-color: #0291d3;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
body.dark-theme .menu{
  background-color: #102d53;
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.icone-bars {
  width: 40px; /* aumente aqui como quiser */
  height: auto;
  cursor: pointer;
  flex-shrink: 0;
  align-self: center;
}



.contatos-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contatos-menu li a {
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;
  text-decoration: none;
  font-size: 14px;
}

.img-contato {
  width: 20px;
  height: 20px;
}

/* Botão de tema */
.botao-tema {
  background-color: #ffcc00;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border: 2px solid #007bba;
  transition: background-color 0.3s ease;
  font-size: 0;
  position: relative;
}

.botao-tema::before {
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

body.dark-theme .botao-tema {
  background-color: #000;
  border-color: #fff;
}

body.dark-theme .botao-tema::before {
  left: 26px;
  background-color: #fff;
}

@media (max-width: 595px) {
  .infos-header {
    display: none;
  }

  .contatos-menu li a {
    font-size: 12px;
  }
}
</style>
