<script setup>
import { useTemaStore } from '@/stores/tema'

const temaStore = useTemaStore()

function alternarTema() {
  temaStore.alternarTema()
}
</script>


<template>
  <nav class="menu">
    <!-- ESQUERDA: Logo -->
    <div class="logo-inicial">
      <router-link to="/">
        <picture>
          <source media="(max-width: 455px)" srcset="/assets/img/logo_FSPH_PEQUENA.png" />
          <img class="img-logo" src="/assets/img/logo_FSPH_GOVSE.png" alt="Logo" />
        </picture>
      </router-link>
    </div>

    <!-- CENTRO: Menu -->
    <div class="menu-links" id="menu-links-cima">
      <ul class="menu-inicial">
        <li class="dropdown">
          <a href="#">Institucional</a>
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
    </div>


    <!-- DIREITA: Botão tema e contatos -->
    <div class="contatos-wrapper">
      <button class="botao-tema" @click="alternarTema()" aria-label="Alternar tema claro/escuro"></button>
      <ul class="contatos-menu">
        <li class="aumento-letras">
          <a href="#" aria-label="Página inicial">Aa(1/3)</a>
        </li>
        <li class="infos-header">
          <a href="https://wa.me/557932346007" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"></a>
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
    </div>
  </nav>

  <nav class="menu-links" id="menu-links-baixo">
    <ul class="menu-inicial">
      <li class="dropdown">
        <a href="#">Institucional</a>
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
/* ========== MENU PRINCIPAL ========== */
.menu {
  background-color: #0291d3;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
}
body.dark-theme .menu {
  background-color: #102d53;
}

.logo-inicial {
  flex-shrink: 0;
}
.img-logo {
  height: 50px;
  width: auto;
}

/* ========== LINKS CENTRAIS ========== */
.menu-links {
  flex: 1;
  display: flex;
  justify-content: center;
}

#menu-links-cima {
  display: flex;
}

#menu-links-baixo {
  display: none;
}


.menu-inicial {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-inicial > li {
  position: relative;
}
.menu-inicial a {
  text-decoration: none;
  color: white;
  padding: 15px;
  display: block;
  transition: color 0.3s ease, background 0.3s ease;
}
.menu-inicial li a:hover {
  color: #003366;
  background: none;
}

/* ========== CONTATOS E ACESSIBILIDADE ========== */
.contatos-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.contatos-menu {
  display: flex;
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

.aumento-letras a:hover {
  color: #003366;
  background: none;
}

/* ========== BOTÃO TEMA ========== */
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
}

/* ========== SUBMENU (DROPDOWN) ========== */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
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

/* ========== RESPONSIVIDADE (TELAS PEQUENAS) ========== */
  @media (max-width: 1012px) {
    .menu {
      flex-wrap: nowrap;
    }

    .logo-inicial {
      justify-content: flex-start;
      order: 0;
    }

    .contatos-wrapper {
      justify-content: flex-end;
      order: 1;
      padding: 5px 0;
    }

    .menu-links {
      position: static;
      transform: none;
      margin-top: 0;
      justify-content: center;
    }

    #menu-links-cima {
      display: none;
    }
    #menu-links-baixo {
      display: block;
    }


    .menu-links .menu-inicial {
      gap: 10px;
    }

    .menu-inicial {
      justify-content: center;
      flex-wrap: nowrap;
      background-color: #017bb6;
      order: 2;
    }
    body.dark-theme .menu-inicial {
      background-color: #0e2643;
    }
  }
</style>

