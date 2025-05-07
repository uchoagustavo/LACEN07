<template>

  <Header />

  <div>
    <TemaToggle />
  </div>

  <main class="container">
    <section class="titulo">
      <h1>Dr. Luís da Silva é homenageado durante ação de identificação de amostras animais no LACEN/SE</h1>
    </section>

    <section class="imagem-principal">
      <img src="/assets/img/Principal.png" alt="Imagem no topo" />
    </section>

    <section class="conteudo-flex">
      <div class="texto">
        <p>Na última sexta-feira (23), o Laboratório Central de Saúde Pública de Sergipe (LACEN/SE) realizou uma ação especial de identificação de amostras animais, reforçando o compromisso da instituição com a vigilância sanitária e epidemiológica do estado. Durante o evento, o renomado pesquisador Dr. Luís da Silva foi homenageado por sua dedicação e contribuições científicas na área da saúde pública.</p>

        <p>A iniciativa teve como objetivo aprimorar os processos de análise e diagnóstico de amostras biológicas, fundamentais para o monitoramento e controle de doenças zoonóticas. Profissionais da área de saúde, pesquisadores e estudantes participaram da ação, discutindo avanços tecnológicos e metodologias inovadoras para a identificação de agentes patogênicos.</p>

        <p>A homenagem ao Dr. Luís da Silva destacou sua trajetória de mais de duas décadas no campo da microbiologia e sua atuação essencial no desenvolvimento de técnicas que aprimoram a segurança sanitária em Sergipe. Emocionado, o pesquisador agradeceu o reconhecimento e enfatizou a importância da pesquisa contínua para a prevenção de surtos e epidemias.</p>
      </div>

      <div class="imagem-1">
        <img src="/assets/img/Imagem1.jpg" alt="Imagem de corpo 1" />
        <div class="creditos-compartilhar">
          <p><strong>📷 Por: Pedro Henrique 📅 29/04/2025</strong></p>
          <div class="icones-sociais">
            <p>Compartilhe através de: </p>
            <i class="ph ph-whatsapp-logo"></i>
            <i class="ph ph-instagram-logo"></i>
            <i class="ph ph-twitter-logo"></i>
            <i class="ph ph-linkedin-logo"></i>
          </div>
        </div>
      </div>
    </section>

    <section class="imagem-2">
      <img src="/assets/img/Imagem2.jpeg" alt="Imagem de corpo 2" />
    </section>

    <section class="texto-final">
      <p>O diretor do LACEN/SE, Dr. Marcelo Andrade, ressaltou a relevância do evento e enalteceu o legado do homenageado. “Dr. Luís sempre esteve à frente de importantes pesquisas que impactaram diretamente a saúde da população. Seu trabalho é inspiração para as novas gerações de cientistas e profissionais da área”, afirmou.</p>

      <p>A ação no LACEN/SE reafirma a importância da pesquisa aplicada à saúde pública e reforça o papel fundamental da identificação precisa de agentes infecciosos na proteção da população sergipana.</p>
    </section>
  </main>
  <Footer />

</template>

<script>

import TemaToggle from '@/components/TemaToggle.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

  export default {
    name: 'NoticiasView',

    components: {
      TemaToggle,
      Header,
      Footer,
    },

    mounted() {
      document.title = 'Notícia LACEN/SE';
    }
  }

</script>


<style scoped>
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    color: #000;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Modo escuro */
  body.dark-theme {
    background-color: #333;
    color: #fff;
  }

  /* Cabeçalho */


  .info i {
    font-size: 20px;
  }

  .info p {
    font-size: 14px;
  }

  /* Container principal */
  .container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
  }

  /* Título */
  .titulo h1 {
    font-size: 22px;
    font-weight: 700;
    text-align: left;
    margin: 20px 0;
  }

  /* Img Capa */
  .imagem-principal img {
    width: 100%;
    max-width: 700px;
    display: block;
    margin: 0 auto 20px;
    border-radius: 6px;
  }

  /* Texto */
  .texto p,
  .texto-final p {
    margin-bottom: 15px;
    font-size: 16px;
    text-align: justify;
  }

  .conteudo-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }

  .conteudo-flex .texto {
    flex: 1;
  }

  .conteudo-flex .imagem-1 {
    flex: 1;
  }

  /* Img corpo 1 */
  .imagem-1 img {
    width: 100%;
    max-width: 550px;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
  }

  /* Img corpo 2 */
  .imagem-2 img {
    width: 100%;
    max-width: 500px;
    height: auto;
    display: block;
    margin: 30px 0 30px 1px;
    border-radius: 6px;
  }

  /* Icones */
  .icones-sociais {
    display: flex;
    justify-content: left;
    margin-top: 10px;
  }

  .icones-sociais i {
    margin: 0 8px;
    color: #444;
    font-size: 24px;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .icones-sociais i:hover {
    transform: scale(1.2);
  }

  .icones-sociais i.ph-whatsapp-logo:hover {
    color: #25D366;
  }

  .icones-sociais i.ph-instagram-logo:hover {
    color: #C13584;
  }

  .icones-sociais i.ph-twitter-logo:hover {
    color: #1DA1F2;
  }

  .icones-sociais i.ph-linkedin-logo:hover {
    color: #0077b5;
  }

  body.dark-theme .icones-sociais i {
    color: white;
  }

  /* CLaro/Escuro*/

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
