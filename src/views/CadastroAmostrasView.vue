<script>
  import Libras from '@/components/Libras.vue'
  import Triatomineo from '@/components/amostras/Triatomineo.vue'

  export default {
    name: 'CadastroAmostras',
    components: {
      Libras,
      Triatomineo
    },
    data() {
      return {
        selected: 'TRIATOMÍNEO'
      }
    }
  }
</script>


<template>
  <div class="azul-bar">
    <h1 class="titulo-amostras">Cadastro e Registro de Amostras para Análise no LACEN-SE</h1>
  </div>
  <div id="app">
    <Libras />
    <div class="insetos">
      <nav class="insetos-bar">
        <button
          class="inseto-button"
          :class="{ active: selected === 'TRIATOMÍNEO' }"
          @click="selected = 'TRIATOMÍNEO'"
        >
          TRIATOMÍNEO
        </button>
        <button
          class="inseto-button"
          :class="{ active: selected === 'ESCORPIÃO' }"
          @click="selected = 'ESCORPIÃO'"
        >
          ESCORPIÃO
        </button>
        <button
          class="inseto-button"
          :class="{ active: selected === 'CARAMUJO' }"
          @click="selected = 'CARAMUJO'"
        >
          CARAMUJO
        </button>
        <button
          class="inseto-button"
          :class="{ active: selected === 'MOSQUITO' }"
          @click="selected = 'MOSQUITO'"
        >
          MOSQUITO
        </button>
        <button
          class="inseto-button"
          :class="{ active: selected === 'LÂMINAS-PCE' }"
          @click="selected = 'LÂMINAS-PCE'"
        >
          LÂMINAS-PCE
        </button>
        <button
          class="inseto-button"
          :class="{ active: selected === 'LARVA' }"
          @click="selected = 'LARVA'"
        >
          LARVA
        </button>
      </nav>

      <div class="conteudo">
        <div v-if="selected === 'TRIATOMÍNEO'">
          <Triatomineo />
        </div>
        <div v-else-if="selected === 'ESCORPIÃO'">
          <p>Conteúdo do Escorpiãooo</p>
        </div>
        <div v-else-if="selected === 'CARAMUJO'">
          <p>Conteúdo do Caramujo</p>
        </div>
        <div v-else-if="selected === 'MOSQUITO'">
          <p>Conteúdo do Mosquito</p>
        </div>
        <div v-else-if="selected === 'LÂMINAS-PCE'">
          <p>Conteúdo das Lâminas-PCE</p>
        </div>
        <div v-else-if="selected === 'LARVA'">
          <p>Conteúdo da Larvas</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
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

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .menu{
    width: 100%;
    height: 60px;
    background-color: #0291D3;
    display: flex;
    justify-content: space-between;
  }
  .icone-bars{
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #0A3C79;
    padding: 5px;
    background-size: cover;
    border-radius: 50px;
  }
  .contatos-menu{
    display: flex;
    gap: 20px;
    padding-top: 20px;
    margin-right: 50px;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  li{
    list-style: none;
  }

  .img-contato{
    height: 20px;
  }

  #telefone-contato{
    position: relative;
    left: 15px;
    margin-left: 5px;
  }

  .azul-bar{
    background-color: #0A3C79;
    height: 200px;
    margin-top: 100px;
  }

  .titulo-amostras{
    color: white;
    font-size: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 30px;
    padding-left: 25px;
  }

  .insetos{
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 50px;
    }

  .insetos-bar{
    display: flex;
    border-radius: 9999px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
  }

  .inseto-button{
    flex: 1;
    padding: 12px 16px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    background-color: white;
    color: #374151;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .inseto-button:hover:not(.active){
    background-color: #f3f4f6;
  }

  .inseto-button.active {
    background-color: #1a56db;
    color: white;
  }

  /* Variáveis CSS para facilitar manutenção */
  :root {
    --primary-color: #0277bd;
    --secondary-color: #58a5f0;
    --light-color: #f5f5f5;
    --border-color: #e0e0e0;
    --text-color: #333;
    --error-color: #d32f2f;
    --success-color: #388e3c;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    --border-radius: 4px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --font-family: 'Roboto', Arial, sans-serif;
  }

  /* Reset e estilos base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    color: var(--text-color);
    background-color: #f9f9f9;
    line-height: 1.6;

  }

  /* Cabeçalho do formulário */
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: var(--spacing-md);
  }

  .form-header h1 {
    font-size: 1.8rem;
    color: var(--primary-color);
  }

  .form-observation {
    border: 1px solid var(--border-color);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    background-color: #fff9c4;
    font-size: 0.9rem;
    max-width: 400px;
  }

  /* Formulário principal com grid layout */
  .capture-form {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--spacing-md);
    background-color: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  /* Classes para definir largura dos elementos no grid */
  .span-4 {
    grid-column: span 4;
  }

  .span-3 {
    grid-column: span 3;
  }

  .span-6 {
    grid-column: span 6;
  }

  .span-12 {
    grid-column: span 12;
  }

  /* Estilos para campos do formulário */
  .form-group {
    margin-bottom: var(--spacing-md);
  }

  label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
    font-size: 0.9rem;
  }

  input[type="text"],
  input[type="number"],
  input[type="date"],
  select {
    width: 100%;
    padding: var(--spacing-sm);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: border-color 0.3s;
  }

  input[type="text"]:focus,
  input[type="number"]:focus,
  input[type="date"]:focus,
  select:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(2, 119, 189, 0.1);
  }

  /* Estilo para checkbox */
  .checkbox-group {
    display: flex;
    align-items: center;
    margin-top: var(--spacing-xs);
  }

  .checkbox-group input[type="checkbox"] {
    margin-right: var(--spacing-sm);
    width: 18px;
    height: 18px;
  }

  .checkbox-group label {
    margin-bottom: 0;
    cursor: pointer;
  }

  /* Fieldsets e legendas */
  fieldset {
    border: 1px solid var(--border-color);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-md);
  }

  legend {
    padding: 0 var(--spacing-sm);
    font-weight: 600;
    color: var(--primary-color);
    font-size: 0.9rem;
  }

  /* Grid para os subcampos dentro dos fieldsets */
  .fieldset-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-md);
  }

  /* Estilos para locais de captura */
  .capture-locations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
  }

  .location-column h4 {
    margin-bottom: var(--spacing-sm);
    color: var(--primary-color);
    font-size: 0.9rem;
  }

  /* Botão de envio */
  .form-actions {
    grid-column: span 12;
    display: flex;
    justify-content: flex-end;
    margin-top: var(--spacing-lg);
  }

  .btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: var(--secondary-color);
  }

  /* Status de página */
  .page-status {
    text-align: right;
    margin-top: var(--spacing-md);
    font-size: 0.9rem;
    color: #666;
  }

  /* Estilos responsivos */
  @media (max-width: 992px) {
    .span-4, .span-3 {
      grid-column: span 6;
    }
  }

  @media (max-width: 768px) {
    .capture-form {
      display: flex;
      flex-direction: column;
    }

    .form-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .form-observation {
      margin-top: var(--spacing-sm);
      max-width: 100%;
    }

    .capture-locations {
      grid-template-columns: 1fr;
    }
  }
</style>
