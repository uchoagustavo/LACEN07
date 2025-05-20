<script setup>
import { useTemaStore } from '@/stores/tema'

const temaStore = useTemaStore()

function alternarTema() {
  temaStore.alternarTema()
}
</script>


<template>
  <nav class="menu">
    <ul class="contatos-menu">
      <li>
        <button class="botao-tema" @click="alternarTema()" aria-label="Alternar tema claro/escuro"></button>
      <li class="logo-inicial">
        <img class="img-logo" src="/assets/img/logo_FSPH_GOVSE.png" alt="Logo" />
      </li>
      </li>
      <li class="aumento-letras">
        <a href="#" aria-label="Página inicial">Aa(1/3)</a>
      </li>
      <li class="infos-header">
        <a href="https://wa.me/557932346007" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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
    <ul class="menu-inicial">
      <li class="dropdown">
        <a href="#">Institucional</a>
        <ul class="submenu">
          <li><a href="#">Atividades</a></li>
          <li><a href="#">Estrutura Administrativa</a></li>
        </ul>
      </li>
      <li><a href="#">Notícias</a></li>
      <li><a href="#">Profissionais</a></li>
      <li class="dropdown">
        <a href="#">Amostras</a>
        <ul class="submenu">
          <li><a href="#">Envio de Amostras</a></li>
          <li><a href="#">Acompanhar Análises</a></li>
        </ul>
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

.contatos-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0; 
  margin-top: 8px;
  justify-content: flex-end;
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

.aumento-letras a:hover {
  color: #003366;
  background: none;
}
.logo-inicial {
  position: absolute;
  margin-left: -1150px;
  top: 5px
}

.img-logo {
  height: 50px;
  width: auto;
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
/* container do menu */
.menu-inicial {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  position: relative;
  background-color: transparent;
  margin-left: 650px;  
  margin-top: -45px;
}

.menu-inicial > li {
  position: relative;
}

.menu-inicial a {
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  display: block;
  background: none;
  transition: color 0.3s ease, background 0.3s ease;
}
.menu-inicial li a:hover {
  color: #003366;
  background: none;

}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease; 
  
}

.submenu li a {
  padding: 10px 15px;
  color: #333;
  white-space: nowrap;
}

.submenu li a:hover {
  color: #4288ce;
  background: none;
}

.dropdown:hover .submenu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
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
