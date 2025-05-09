<script>
  export default{
    name:'Header',
  }
</script>

<template>
  <header class="cabecalho">
    <div class="container grid-header">
      <div class="info">
        <img src="/assets/img/telephone-fill.png" alt="Telefone">
        <p>+55 (79) 3234-6007</p>
      </div>
      <div class="info">
        <img src="/assets/img/Email_Icon.svg" alt="Email">
        <p>ouvidoria.lacen@fsph.se.gov.br</p>
      </div>
      <div class="info">
        <img src="/assets/img/Endereço_Icon%20(1).svg" alt="Endereço">
        <p>R. Campo do Brito, 551 - Salgado Filho, Aracaju - SE</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.cabecalho {
  background-color: #0291d3;
  color: #fff;
  padding: 6px 0;
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
