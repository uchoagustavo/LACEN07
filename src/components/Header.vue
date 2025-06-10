<script setup>

import { useTemaStore } from '@/stores/tema'
import { useAcessibilidadeStore } from '@/stores/acessibilidade'
import { computed, onMounted } from 'vue'


  const acessibilidadeStore = useAcessibilidadeStore()

  onMounted(() => {
    acessibilidadeStore.aplicarFonteSalva()
  })
  const textoBotao = computed(() => {
    const nivel = acessibilidadeStore.indiceAtual
    const exibicao = nivel === 3 ? 1 : nivel + 1
    return `Aa(${exibicao}/3)`
  })

  const temaStore = useTemaStore()

  function alternarTema() {
    temaStore.alternarTema()
  }
import { ref } from 'vue'

const mostrarMenu = ref(false)

const submenus = ref({
  institucional: false,
  amostras: false
})

function toggleSubmenu(item) {
  submenus.value[item] = !submenus.value[item]
}


</script>


<template>
  <nav class="menu">
    <button class="hamburguer" @click="mostrarMenu = !mostrarMenu" aria-label="Abrir menu">
    ☰
    </button>
    <!-- ESQUERDA: Logo -->
    <div class="logo-inicial">
      <router-link to="/">
        <picture>
          <source media="(max-width: 455px)" srcset="../../public/assets/img/logo-FSPH-lacen-branco.png" />
          <img class="img-logo" src="../../public/assets/img/logo-FSPH-lacen-branco.png" alt="Logo" />
        </picture>
      </router-link>
    </div>
      <div class="logo-secundaria">
    <router-link to="/">
      <picture>
        <source media="(max-width: 455px)" srcset="../../public/assets/img/logogovernobranco.png"/>
        <img class="img-logo" src="../../public/assets/img/logogovernobranco.png" alt="Outra Logo" />
      </picture>
    </router-link>
  </div>

    <!-- CENTRO: Menu -->
    <div class="menu-links" id="menu-links-cima">
      <ul class="menu-inicial">
        <li class="dropdown">
           <router-link to="/institucional">Institucional</router-link>
        </li>
        <li><router-link to="/noticias">Notícias</router-link></li>
        <li><router-link to="/profissionais">Profissionais</router-link></li>
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
        <a href="#" @click.prevent="acessibilidadeStore.alternarFonte()" aria-label="Aumentar tamanho da fonte">
          {{ textoBotao }}
        </a>
      </li>
        <li class="infos-header">
          <a href="https://wa.me/557932346007" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"></a>
        </li>
        <li class="infos-header">
          <a href="https://www.instagram.com/hemose_lacen_svo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img class="img-contato" src="/assets/img/instagram (1).svg" alt="Instagram" />
          </a>
        </li>
        <li class="telefone-contato">
          <a href="tel:+557932346000" aria-label="Telefone">
            <img class="img-contato" src="../../public/assets/img/telephone-fill.png" alt="Telefone" />
            <span class="numero-telefone">(79) 3234-6007</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <nav class="menu-links" :class="{ 'ativo': mostrarMenu }" id="menu-links-baixo">
    <ul class="menu-inicial">
      <li class="dropdown">
        <router-link to="/institucional">Institucional</router-link>
      </li>
      <li><router-link to="/noticias">Notícias</router-link></li>
      <li><router-link to="/profissionais">Profissionais</router-link></li>
      <li class="dropdown">
        <a href="#">Amostras</a>
        <ul class="submenu">
          <li><router-link to="/cadastro-amostras">Envio de Amostras</router-link></li>
          <li><a href="#">Acompanhar Análises</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- MENU MOBILE (hambúrguer) -->
<nav class="menu-links-mobile" :class="{ 'ativo': mostrarMenu }">
  <ul class="mobile-menu">

    <!-- Item: Institucional -->
    <li><a href="#">Institucional</a></li>

    <!-- Item: Notícias -->
    <li><a href="#">Notícias</a></li>

    <!-- Item: Profissionais -->
    <li><a href="#">Profissionais</a></li>

    <!-- Item: Amostras -->
    <li>
      <div @click="toggleSubmenu('amostras')" class="menu-item">
        <span class="seta" :class="{ aberto: submenus.amostras }">▸</span>
        Amostras
      </div>
      <ul v-if="submenus.amostras" class="submenu aberta">
        <li><a href="#">Envio de Amostras</a></li>
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
  transform: translateY(-3px);
}
.logo-secundaria {
  display: flex;
  align-items: center;
}

.logo-secundaria .img-logo {
  height: 60px; 
  width: auto;
  transform: translateY(-3px);
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
  background-color: #028fcc; /* cor do submenu */
  list-style: none;
  padding-left: 25px;
  min-width: 180px;
  margin: 0;
  z-index: 1000;

  /* estado inicial - submenu oculto */
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
.hamburguer {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 2000;
}

.menu-links-mobile {
  display: none;
}

.menu-links-desktop ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.menu-links-desktop li {
  position: relative;
}

.menu-links-desktop a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.submenu-desktop {
  display: none;
  position: absolute;
  background-color: #017bb6;
  list-style: none;
  margin: 0;
  padding: 0;
  top: 100%;
  left: 0;
  z-index: 1000;
}

.dropdown:hover .submenu-desktop {
  display: block;
}

.submenu-desktop li a {
  padding: 10px;
  display: block;
  white-space: nowrap;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: white;
}

.seta {
  transition: transform 0.3s ease;
}

.seta.aberto {
  transform: rotate(90deg); /* muda de ▸ para ▾ */
}



.submenu li {
  padding: 8px 0;
}

.submenu li a {
  color: white;
  text-decoration: none;
}

/* Transição suave ao exibir submenu */
.submenu[style*="display: block"] {
  display: block;
  animation: aparecer 0.2s ease-in-out;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* ========== RESPONSIVIDADE (TELAS PEQUENAS) ========== */
  @media (max-width: 1012px) {
    .menu {
      flex-wrap: nowrap;
    }

    .logo-inicial {
      justify-content: flex-start;
      order: 0;
      margin-top: auto;
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

    @media (max-width: 455px) {
    .infos-header {
      display: none;
    }

    .menu-inicial a {
      gap: 5px;
      font-size: 14px;
      padding-right: 10px;
      padding-left: 10px;
    }
    .menu-inicial {
      display: none;
    }
    .telefone-contato {
      display: none;
    }
    .aumento-letras {
      display:none;
    }
    .botao-tema {
      display: none;
    }
    nav.menu {
    display: flex;
    justify-content: flex-end; /* joga tudo para a direita */
    align-items: center;
    gap: 10px; /* espaço entre as duas logos */
    padding-right: 10px; /* espaço da borda direita */
    
    }

    .logo-inicial,
    .logo-secundaria {
    display: inline-flex; /* para ficarem lado a lado */
    margin-top: 5px;
    }

  .logo-inicial img {
    height: 50px; /* tamanho da logo inicial */
    width: auto;
    display: block;
  }

  .logo-secundaria img {
    height: 31px; /* tamanho da logo secundária, menor que a inicial */
    width: auto;
    display: block;
  }
    .hamburguer {
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .menu-links-desktop {
    display: none;
  }

  .menu-links-mobile {
    display: none;
    position: static;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #017bb6;
    z-index: 1500;
  }

  .menu-links-mobile.ativo {
    display: block;
  }

  .mobile-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-menu > li {
    padding: 10px;
    border-bottom: 1px solid #fff;
    color: white;
  }

  .mobile-menu > li > span,
  .mobile-menu > li > a {
    color: white;
    text-decoration: none;
    display: block;
  }

  .submenu {
    list-style: none;
    padding-left: 15px;
    background-color: #028fcc;
  }

  .submenu li {
    padding: 8px 10px;
  }

  .submenu li a {
    color: white;
    text-decoration: none;
  }
  .submenu.aberta {
  display: block;
  opacity: 1 !important;
  transform: translateY(0) !important;
  pointer-events: auto !important;
}
.menu-links-mobile .submenu.aberta {
  background-color: #028fcc;
  padding: 0 15px;
  margin-left: 20px;
  border-left: 2px solid #fff;
  animation: aparecer 0.3s ease;
}
.menu-links-mobile .submenu {
  position: static; /* ou relative */
  top: auto;
  left: auto;
  opacity: 1 !important;
  transform: none !important;
  pointer-events: auto !important;
  padding-left: 15px;
  background-color: #028fcc;
  margin-left: 20px;
  border-left: 2px solid #fff;
  animation: aparecer 0.3s ease;
}

.menu-links-mobile .submenu.aberta li a {
  color: white;
  padding: 10px 0;
  display: block;
}

    }

  

  @media (max-width: 380px) {
    .menu-inicial a {
      font-size: 13px;
      padding-right: 5px;
      padding-left: 5px;
    }

  }

  @media (max-width: 330px) {
    .menu-inicial a {
      font-size: 12px;
      padding-right: 3px;
      padding-left: 3px;
    }
  }

    @media (max-width: 300px) {
    .menu-inicial a {
      font-size: 10px;
      padding-right: 1px;
      padding-left: 1px;
    }
  }
</style>



