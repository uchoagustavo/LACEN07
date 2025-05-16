<script setup>
import Libras from '@/components/Libras.vue'
import noticiasJson from '@/assets/data/noticias.json'
import { useTemaStore } from '@/stores/tema'
import { ref } from 'vue'

const temaStore = useTemaStore()

function alternarTema() {
  temaStore.alternarTema()
}

const noticias = ref(noticiasJson)
</script>


<template>
  <Libras />

  <!-- Imagem de Fundo Separada -->
  <div class="imagem-fundo">
    <div class="quem-somos">
      <div class="quem-somos-info">
        <img class="quem-somos-lacen" id="hero-img" src="/assets/img/lacen_favicon_48x48.png" alt="">
        <h4 class="quem-somos-lacen">Laboratórios Centrais de Saúde Pública</h4>
      </div>
      <h1>QUEM SOMOS NÓS?</h1>
      <h4>O Lacen distribui kits de diagnóstico de baixa complexidade e
        desenvolve ainda a capacitação da rede laboratorial do Estado, que
        atua como agente notificador dos agravos em saúde pública para
        tomada de decisões por parte da Vigilância Epidemiológica,
        Sanitária, Ambiental e da Atenção Básica de Saúde.</h4>
    </div>
  </div>



  <!-- Cards Notícias-->
  <div class="main-card" >
    <div class="card" v-for="(noticia) in noticias.slice(0, 3)" :key="noticia.id">
      <h3 class="cabecalho-noticias">
        <img class="img-logo" src="/assets/img/favicon_48x48%201.svg" alt="Logo LACEN" />
        <span class="titulo">NOTÍCIAS</span>
      </h3>
      <div class="conteudo-container">
        <img class="img-conteudo" :src="noticia.imagem.src" :alt="noticia.imagem.alt" />
        <p class="conteudo-texto">
          {{ noticia.titulo.slice(0, 100) }}
        </p>
      </div>
      <RouterLink class="botao-card" :to="`/noticias/${noticia.id}`">SAIBA MAIS</RouterLink>
    </div>
  </div>

  <!-- Section sobre-->

  <div class="section-sobre">
    <div class="branco-bar"></div>
    <div class="azul-bar">
      <div class="conteudo-esquerda">
        <p class="descricao-section-sobre">O LACEN-SE é especializado no recebimento, acondicionamento e envio
          de amostras
          biológicas para análises laboratoriais. Seguindo protocolos rigorosos de biossegurança e qualidade,
          o LACEN-SE
          garante a integridade das amostras, possibilitando diagnósticos precisos e contribuindo para o
          monitoramento
          epidemiológico e a saúde pública no estado.</p>
        <div class="botoes-sobre">
          <button class="btn-enviar-amostras btn-custom" @click="$router.push('/cadastro-amostras')">ENVIAR AMOSTRAS</button>
          <button class="btn-acompanhar-analises btn-custom"> ACOMPANHAR ANÁLISES</button>
        </div>
      </div>
      <div class="conteudo-direita">
        <div class="container-horarios">
          <div class="horario-card">
            <div class="titulo-card">
              Horário <br>
              de Funcionamento:
            </div>
            <div class="divider"></div>
            <div class="horario-row">
              <div class="dia">Segunda-Feira:</div>
              <div class="hora">
                <img class="hora-icon" src="/assets/img/Icon_hora.svg">
                7:00 - 13:00
              </div>
            </div>
            <div class="divider"></div>
            <div class="horario-row">
              <div class="dia">Terça-Feira</div>
              <div class="hora">
                <img class="hora-icon" src="/assets/img/Icon_hora.svg">
                7:00 - 13:00
              </div>
            </div>
            <div class="divider"></div>
            <div class="horario-row">
              <div class="dia">Quarta-feira</div>
              <div class="hora">
                <img class="hora-icon" src="/assets/img/Icon_hora.svg">
                7:00 - 13:00
              </div>
            </div>
            <div class="divider"></div>
            <div class="horario-row">
              <div class="dia">Quinta-Feira</div>
              <div class="hora">
                <img class="hora-icon" src="/assets/img/Icon_hora.svg">
                7:00 - 13:00
              </div>
            </div>
            <div class="divider"></div>
            <div class="horario-row">
              <div class="dia">Sexta-Feira</div>
              <div class="hora">
                <img class="hora-icon" src="/assets/img/Icon_hora.svg">
                7:00 - 13:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branco-bar"></div>
  </div>
</template>


<style scoped>
  /* Reset Básico */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  /* Fundo da Página */
  .imagem-fundo {
    background-image: url('/assets/img/home_hero_background.png');
    background-size: cover;
    height: 500px;
    display: flex;
    flex-direction: column;
  }

  .dark-theme .imagem-fundo{
    background-image: url('/assets/img/img-heroDark-theme.png');
  }
  




  /* Menu de Navegação */
  .menu {
    background-color: #0a3c79;
    padding: 8px 0;
  }

  .grid-nav {
    margin-left: 8%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: 20px;
  }

  .logo img {
    max-width: 250px;
  }

  .nav-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style: none;
  }

  .nav-list a {
    text-decoration: none;
    color: #fff;
    font-weight: normal;
    transition: 0.3s;
    white-space: nowrap;
  }

  .nav-list a:hover {
    opacity: 0.7;
  }

  /* Hero */
  .quem-somos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-top: 132px;
    margin-left: 9%;
    margin-bottom: 20px;
    width: 90%;
    border-radius: 10px;
  }

  .quem-somos h1 {
    font-family: 'Rubik Doodle Shadow';
    font-weight: 500;
    font-size: 68px;
    color: #0a3c79;
    width: 100%;
    padding: 0;

  }

  .dark-theme .quem-somos h1{
    color: white;
  }

  .quem-somos h4 {
    margin-top: 7px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16.7px;
    color: #0a3c79;
    max-width: 505px;
    width: 100%;
    padding: 0;
  }

  .quem-somos-info {
    display: flex;
    align-items: center;
    /* Alinha a imagem e o h4 horizontalmente */
  }

  .quem-somos-lacen {
    width: 29px;
    /* Tamanho fixo para a imagem */
    margin-right: 7px;
    /* Espaçamento entre a imagem e o texto */
  }

  .quem-somos-lacen+h4 {
    font-family: 'Roboto';
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    color: #0a3c79;
    white-space: nowrap;
    /* Impede que o texto quebre a linha */
  }


  /* Container Padrão */
  .container {
    max-width: 5000px;
    padding: 0 15px;
  }


  .separador {
    display: flex;
    justify-content: center;
    /* Centraliza o texto horizontalmente */
    align-items: center;
    /* Centraliza o texto verticalmente */
    width: 100%;
    /* Ocupa toda a largura disponível */
    background-color: #0a3c79;
    /* Cor de fundo (pode ajustar conforme necessário) */
    padding: 15px 0;
    /* Espaçamento acima e abaixo */
  }

  .separador p {
    color: white;
    /* Cor do texto */
    font-weight: normal;
    /* Deixa o texto em negrito */
    font-size: 45px;
    /* Tamanho do texto */
  }


  .bar-container {
    width: 100%;
    display: flex;
  }

  .bar {
    flex: 1;
    height: 5px;
  }

  .green {
    background-color: #007c24;
  }

  .yellow {
    background-color: #f4b802;
  }

  .blue {
    background-color: #0291d3;
  }

  /* Cards Notícias */
  .main-card {
    display: flex;
    justify-content: center;
    background-color: #0a3c79;
  }
  
  body.dark-theme .main-card{
    background-color: #1E293B;
  }

  .card {
    margin: 10px;
    background-color: #0a3c79;
    width: 400px;
    height: 350px;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 8px 20px 30px -10px;
  }

  .dark-theme .card {
  margin: 10px;
  background-color: #1e293b; 
  width: 400px;
  height: 350px;
  border-radius: 10px;
  box-shadow: rgba(15, 23, 42, 0.6) 8px 20px 30px -10px; 
  color: #f1f5f9; 
  transition: background-color 0.3s, color 0.3s;
}


  .card:hover {
    transform: scale(1.1);
    transition: 300ms linear;
  }

  .dark-theme .botao-card:hover {
  background-color: #1e40af; 
}


  .card .img-conteudo {
    width: 200px;
    margin-top: 50px;
    margin-left: 10px;
    height: 150px;
    border-radius: 15px;
  }

  .card .img-logo {
    margin-left: 100px;
  }

  .cabecalho-noticias {
    display: flex;
  }

  .titulo {
    margin-top: 12px;
    margin-left: 8px;
    color: #fff;
  }

  .conteudo-container {
    display: flex;
  }

  .conteudo-texto {
    color: #fff;
    margin-left: 30px;
    margin-top: 50px;
  }

  .botao-card {
    text-decoration: none;
    background-color: #0291d3;
    border-radius: 4px;
    padding: 5px;
    margin-left: 250px;
    color: #fff;
  }

  .dark-theme .botao-card {
  text-decoration: none;
  background-color: #2563eb; 
  border-radius: 4px;
  padding: 5px;
  margin-left: 250px;
  color: #f1f5f9; 
  transition: background-color 0.3s, color 0.3s;
  }
  
  .dark-theme .section-sobre{
    background-color: #0D1B2A;
  }


  .branco-bar {
    width: 100%;
    height: 150px;
    background-color: white;
  }

  .dark-theme .branco-bar{
    width: 100%;
    height: 150px;
    background-color: #0D1B2A;
  }

  .dark-theme body{
    background-color: #0D1B2A;
  }

  .azul-bar {
    width: 100%;
    background-color: #0a3c79;
    color: white;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    height: 380px;
  }

  .dark-theme .azul-bar{
    background-color: #132E4C;
  }

  .coteudo-esquerda {
    grid-column: 1;
    padding-left: 100px;
    padding-right: 50px;
    align-items: center;
  }

  .descricao-section-sobre {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    align-content: center;
    margin-left: 100px;
    grid-column: 1;
    padding-top: 120px;

  }

  .botoes-sobre {
    grid-column: 1;
    margin-left: 100px;
    display: flex;
    gap: 100px;
    margin-top: 30px;
  }

  .botoes-sobre button {
    background-color: #0291d3;
    color: white;
    padding: 8px 10px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    white-space: nowrap;
    height: 50px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .botoes-sobre button:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .conteudo-direita {
    grid-column: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .container-horarios {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: end;
    margin-right: 50px;
    z-index: 10;
    position: relative;
    bottom: 100px;
  }

  .horario-card {
    background-color: #1a56a6;
    border-radius: 8px;
    color: white;
    padding: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 500px;
    width: 350px;
  }

  .dark-theme .horario-card{
    background-color: #132E4C;
  }

  .titulo-card {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .divider {
    border-bottom: 2px solid rgb(255, 255, 255);
    margin: 10px 0 20px;
  }

  .dark-theme .divider{
    background-color: #132E4C;
  }

  .horario-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  .hora-icon {
    width: 20px;
    height: 15px;
    margin-right: 10px;
  }

  .hora {
    display: flex;
    align-items: center;
  }




  /* Responsividade */
  @media (max-width: 768px) {
    .grid-nav {
      margin-left: 0;
      grid-template-columns: 1fr;
      text-align: center;
    }

    .nav-list {
      flex-direction: column;
      gap: 15px;
    }

    .quem-somos {
      margin-left: 2%;
      padding: 10px;
    }

    .quem-somos h1 {
      font-size: 30px;
      /* Ajuste o tamanho do h1 para telas pequenas */
    }

    .quem-somos h4 {
      font-size: 14px;
      /* Ajuste o tamanho do h4 para telas pequenas */
    }

    .quem-somos-lacen+h4 {
      margin-top: 1px;
      font-size: 14px;
      /* Ajuste o tamanho do h4 para telas pequenas */
    }

    .quem-somos-lacen {
      width: 18px;
      /* Ajuste o tamanho da imagem para telas pequenas */
    }
  }

  @media (max-width: 768px) {
    .azul-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;
      height: auto;
    }

    .descricao-section-sobre {
      padding-top: 20px;
      text-align: center;
      margin-left: 0;
    }

    .botoes-sobre {
      margin-left: 0;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .container-horarios {
      position: static;
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      width: 100%;
      align-items: center;
    }

    .horario-card {
      width: 100%;
      position: relative;
      left: 25px;
    }
  }
  @media(max-width:768px){
    .main-card {
      flex-direction: column;
      align-items: center;
    }

    .card {
      width: 90%;
      height: auto;
    }

    .card .img-conteudo {
      width: 100%;
      margin: 20px auto 10px;
    }

    .card .img-logo {
      margin-left: auto;
      margin-right: auto;
    }

    .cabecalho-noticias {
      justify-content: center;
      align-items: center;
      gap: 8px;

    }

    .img-logo {
      position: absolute;
      left: 80px;
      height: 30px;
    }

    .titulo {
      text-align: center;
    }

    .conteudo-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .conteudo-texto {
      margin: 20px;
    }

    .botao-card {
      margin: 15px auto;
      display: block;
      text-align: center;
    }
  }

</style>
