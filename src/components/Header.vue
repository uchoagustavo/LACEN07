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
    <img src="/assets/img/bars.svg" class="icone-bars" alt="Menu" />

    <ul class="contatos-menu">
      <li>
        <button class="botao-tema" @click="alternarTema" aria-label="Alternar tema claro/escuro"></button>
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
    color: inherit;
    text-decoration: none;
  }

  a:visited,
  a:hover {
    color: inherit;
  }

  .grid-header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    text-align: center;
  }

  .contatos-menu li a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: inherit;
    text-decoration: none;
  }

  .img-contato {
    width: 20px;
    height: 20px;
  }


  /* Estilo do botão de troca de tema */
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
    background-color: #000000;
    border-color: #fff;
  }

  body.dark-theme .botao-tema::before {
    left: 26px;
    background-color: #fff;
  }
</style>
