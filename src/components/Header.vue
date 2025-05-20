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
      </li>
      <li><a href="#" aria-label="Página inicial">Aa(1/3)</a></li>
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
        <router-link to="/institucional">Institucional</router-link>
        <ul class="submenu">
          <li><a href="#">Atividades</a></li>
          <li><a href="#">Estrutura Administrativa</a></li>
        </ul>
      </li>
      <li><router-link to="/noticias">Notícias</router-link></li>
      <li><a href="#">Profissionais</a></li>
      <li class="dropdown">
        <a href="#">Amostras</a>
        <ul class="submenu">
          <li><router-link to="/cadastro-amostras">Envio de Amostras</router-link></li>
          <li><a href="#">Acompanhar Análises</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .menu {
    background-color: #0291d3;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
  body.dark-theme .menu{
    background-color: #102d53;
  }

  .contatos-menu,
  .menu-inicial {
    display: flex;
    align-items: center;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;

  }

  .contatos-menu {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
    height: auto;
  }

  .contatos-menu li:first-child {
    align-self: center;
    display: flex;
    align-items: center;
  }

  .menu-inicial {
    justify-content: flex-end;
    flex: 1;
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
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 180px;
    max-width: 90vw;
    z-index: 1000;
    overflow-wrap: break-word;
    word-break: break-word;
  }



  .submenu li a {
    padding: 10px 15px;
    color: #333;
    white-space: nowrap;
  }

  .dropdown:hover .submenu {
    display: block;
  }

  .menu-inicial a:hover {
    background-color: #ddd;
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

  @media (max-width: 768px) {
  .menu {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;
    min-height: 300px; /* <-- força altura mínima para caber os itens */
  }

  .contatos-menu {
    justify-content: center;
    gap: 15px;
    flex-wrap: nowrap;
    width: auto;
  }

  .contatos-menu li:first-child,
  .contatos-menu li:nth-child(2) {
    display: inline-flex;
    align-items: center;
  }

  .menu-inicial {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .menu-inicial > li {
    width: 100%;
    text-align: center;
    position: relative;
  }

  .menu-inicial a {
    display: block;
    width: 100%;
    padding: 10px;
    color: white;
    text-decoration: none;
  }

  .submenu {
    display: none;
    position: relative; /* importante para não sair do fluxo */
    background-color: #ffffff;
    border: 1px solid #ccc;
    width: 100%;
    z-index: 1000;
  }

  .dropdown:hover .submenu {
    display: block;
  }

  .submenu li a {
    padding: 10px;
    font-size: 14px;
    display: block;
    color: #333;
    text-align: left;
  }

  .infos-header {
    display: none;
  }
}


  @media (min-width: 1000px) {
    .menu-inicial > li:last-child .submenu {
      left: auto;
      right: 0;
    }
  }
</style>
