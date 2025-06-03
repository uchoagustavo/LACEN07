<script setup>
import { useTemaStore } from '../stores/tema';

const temaStore = useTemaStore()

function alternarTema() {
  temaStore.alternarTema()
}
</script>

<template >
  <footer class="rodape">
    <div class="container">
      
      <div class="coluna">
        <div class="grupo-logos">
          <img class="logo-footer" src="../../public/assets/img/logo-FSPH-lacen-branco.png" alt="Logo FSPH" />
          <img class="logo-direita" src="../../public/assets/img/logogovernobranco.png" alt="Logo à direita" />
        </div>
        <p class="descricao">
          Fundação de Saúde Parreiras Horta<br />
          Laboratórios Centrais de Saúde Pública
        </p>
      </div>

      <div class="coluna">
        <h2>Endereço</h2>
        <div class="endereco">
          <img class="endereco-icon" src="/assets/img/Endereço_Icon%20(1).svg" alt="Logo localização"/>
          <p>R. Campo do Brito, 551</p>
        </div>
        <div class="endereco">
          <p>Salgado Filho, Aracaju - SE</p>
        </div>
        <div class="endereco">
          <p>CEP: 49020-590</p>
        </div>
      </div>

      <div class="coluna">
        <h2>Contato</h2>
        <div class="contato">
          <img class="email-icon" src="/assets/img/Email_Icon.svg" alt="Logo E-Mail"/>
          <p>Email: ouvidoria.lacen@fsph.se.gov.br</p>
        </div>
        <div class="contato">
          <img class="telefone-icon" src="/assets/img/telephone-fill.png" alt="Logo Telefone"/>
          <p>Telefone: +55 (79) 3234-6007</p>
        </div>
      </div>

      <div class="coluna">
        <h2>Links Úteis</h2>
        <ul class="lista-links">
          <li><a href="" target="_blank">Whatsapp</a></li>
          <li><a href="" target="_blank">@lacens ergipe</a></li>
          <li><a href="">Política de Privacidade</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.rodape {
  background:#004b87;
  color: white;
  padding: 40px 0;
}

.dark-theme .rodape{
  background-color: #002f5f;
}

.container {
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 90px;
  padding: 0 20px;
}

.coluna {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  overflow: visible; 
}

.coluna h2 {
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ffffff44;
  padding-bottom: 5px;
}

.coluna p,
.lista-links li {
  font-size: 14px;
  margin: 6px 0;
}

.logo-footer {
  width: 120px; 
  height: auto; 
  margin-left: -10px;
}

.logo-direita {
  width: 140px;
  height: auto;
}
.grupo-logos {
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-bottom: 8px; 
}

.endereco,
.contato {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}

.email-icon,
.telefone-icon,
.endereco-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.lista-links {
  list-style: none;
  padding: 0;
}

.lista-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

.lista-links a:hover {
  color: #0291d3;
}

.descricao {
  white-space: nowrap;
  overflow: hidden;
  padding-left: 3px; 
}

.logo-footer{
  max-width: 300px;
}


@media (max-width: 600px) {
  .rodape {
    background-color: #002f5f;
    color: white;
    padding: 30px 0;
    font-size: 14px;
    width: 100%;
  }
  body.dark-theme .rodape{
    background-color: #132E4C;
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
    /*text-align: center;*/ 

  }

  .coluna {
    margin-bottom: 20px;
  }

  .container {
    grid-template-columns: 1fr;
  }
}
</style>
