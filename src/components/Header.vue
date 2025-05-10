<script>
import TemaToggle from '@/components/TemaToggle.vue'

  export default{
    name:'Header',
    components: {
      TemaToggle
    }
  };
</script>

<template>
<nav class="menu">
  <img src="/assets/img/bars.svg" class="icone-bars" alt="Menu" />

  <ul class="contatos-menu">
    <li>
      <TemaToggle />
    </li>

    <li><a href="#" aria-label="Página inicial">Aa(1/3)</a></li>
    <li>ENTRE EM CONTATO:</li>

    <li>
      <a href="https://wa.me/557932346007" target="_blank" rel="noopener noreferrer" aria-label="Contato pelo WhatsApp">
        <img class="img-contato" src="/assets/img/telephone-fill.png" alt="Telefone" />
        (79) 3234-6007
      </a>
    </li>

    <li>
      <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img class="img-contato" src="/assets/img/instagram (1).svg" alt="Instagram" />
      </a>
    </li>

    <li>
      <a href="https://facebook.com/seupagina" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img class="img-contato" src="/assets/img/facebook_Icone.svg" alt="Facebook" />
      </a>
    </li>

    <li>
      <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img class="img-contato" src="/assets/img/IN_Icone.svg" alt="LinkedIn" />
      </a>
    </li>
  </ul>
</nav>
</template>

<style scoped>
.cabecalho {
  background-color: #0291d3;
  color: #fff;
  padding: 6px 0;
}

a {
  color: inherit; /* herda a cor do pai */
  text-decoration: none; /* remove o sublinhado */
}

a:visited {
  color: inherit; /* mesma cor para links visitados */
}

a:hover {
  color: inherit; /* evita alteração de cor no hover */
}

.grid-header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  text-align: center;
}

.info {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: bold;
  font-size: 12px;
  justify-content: center;
}

.info img {
  width: 23px;
}
</style>
