<script>
  import noticiasData from '@/assets/data/noticias.json'
  import Libras from '@/components/Libras.vue'

  export default {
    name: 'NoticiasView',
    components: {
      Libras,
    },
    data() {
      return {
        noticias: noticiasData,
        modoGrade: true
      }
    }
  }
</script>


<template>
  <Libras />

  <div class="noticias-view">
    <div class="header-opcoes">
      <h1 class="titulo-pagina">NOTÍCIAS</h1>
    </div>

    <div v-if="!modoGrade" class="grid-container">
      <div
        v-for="noticia in noticias"
        :key="noticia.id"
        class="card"
      >
        <img
          class="img-conteudo"
          :src="noticia.imagem?.src"
          :alt="noticia.imagem?.alt"
        />
        <h2 class="titulo">{{ noticia.titulo }}</h2>
        <RouterLink class="botao-card" :to="`/noticias/${noticia.id}`">Ler mais</RouterLink>
      </div>
    </div>

    <div v-else class="lista-container">
      <div
        v-for="noticia in noticias"
        :key="noticia.id"
        class="item-lista"
      >
        <img
          class="img-lista"
          :src="noticia.imagem?.src"
          :alt="noticia.imagem?.alt"
        />
        <div class="info-lista">
          <h2 class="titulo">{{ noticia.titulo }}</h2>
          <p class="meta">{{ noticia.data }} - {{ noticia.autor }}</p>
          <RouterLink class="botao-card" :to="`/noticias/${noticia.id}`">Ler mais</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .noticias-view {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }

  .header-opcoes {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .titulo-pagina {
    font-size: 35px;
    font-weight: bold;

  }

  .botoes-view button {
    margin-left: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background-color: #ddd;
    cursor: pointer;
    font-weight: bold;
  }

  .botoes-view .ativo {
    background-color: #555;
    color: white;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .card {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .img-conteudo {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .botao-card {
    margin-top: auto;
    display: inline-block;
    padding: 8px 16px;
    background-color: #1e88e5;
    color: white;
    text-align: center;
    border-radius: 6px;
    text-decoration: none;
  }

  .lista-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .item-lista {
    display: flex;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    align-items: center;
  }

  .img-lista {
    width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
  }

  .info-lista {
    flex: 1;
  }

  .meta {
    color: #666;
    font-size: 14px;
    margin: 5px 0 10px;
  }
</style>
