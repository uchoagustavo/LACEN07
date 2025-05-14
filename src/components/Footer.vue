<script setup>
import { useTemaStore } from '../stores/tema';

const temaStore = useTemaStore()

function alternarTema() {
  temaStore.alternarTema()
}
</script>


<template>
  <footer class="rodape">
    <div class="container">
      <div class="institucional">
        <img class="logo21" src="/assets/img/logoSemFundo.png" alt="Logo FSPH"/>
        <p class="institucional-texto">Fundação de Saúde Parreiras Horta <br />
          Laboratórios Centrais de Saúde Pública</p>
        <div class="endereco">
          <img class="endereco-icon" src="/assets/img/Endereço_Icon%20(1).svg" alt="Logo localização"/>
          <p class="endereco-texto">R. Campo do Brito, 551 - Salgado Filho, Aracaju - SE, 49020-590</p>
        </div>
      </div>
      <div class="fale-conosco">
        <h1 class="titulo-fale-conosco">Fale Conosco:</h1>
        <div class="contatos-email">
          <img class="email-icon" src="/assets/img/Email_Icon.svg" alt="Logo E-Mail"/>
          <p class="email-texto">Email: ouvidoria.lacen@fsph.se.gov.br</p>
        </div>
        <div class="contatos-telefone">
          <img class="telefone-icon" src="/assets/img/telephone-fill.png" alt="Logo Telefone"/>
          <p class="telefone-texto">Telefone: +55 (79) 3234-6007</p>
        </div>
        <div class="contato-instagram">
          <img class="instagram-icon" src="/assets/img/instagram%20(1).svg" alt="Logo Instagram"/>
          <p class="instagram-texto">@lacensergipe</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
  .rodape {
    background-color: #002f5f;
    color: white;
    padding: 30px 0;
    font-size: 14px;
    width: 100%;
  }
  body.dark-theme .rodape{
    background-color: #102d53;
  }
  .rodape .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .institucional,
  .fale-conosco {
    flex: 1 1 300px;
  }

  .institucional-texto {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .logo21 {
    width: 100%;
    max-width: 350px;
    margin-bottom: 10px;
  }

  .endereco {
    display: flex;
    align-items: start;
    gap: 10px;
  }

  .endereco-icon {
    width: 18px;
    height: 18px;
  }

  .titulo-fale-conosco {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .contatos-email,
  .contatos-telefone,
  .contato-instagram {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .email-icon,
  .telefone-icon,
  .instagram-icon {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    .rodape .container {
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }

    .institucional,
    .fale-conosco {
      text-align: center;
      flex: 1 1 auto;
    }

    .endereco {
      justify-content: center;
    }

    .contatos-email,
    .contatos-telefone,
    .contato-instagram {
      justify-content: center;
    }

    .logo21 {
      margin: 0 auto 20px;
    }
  }
</style>
