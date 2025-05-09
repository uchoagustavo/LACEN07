<template>
  <div class="noticia-detalhe" v-if="noticia">
    <div class="imagem-cabecalho" :style="{ backgroundImage: `url(${noticia.imagem})` }"></div>
    <h1>{{ noticia.titulo }}</h1>
    <p>{{ noticia.conteudo }}</p>
  </div>
</template>

<script>
import noticias from '@/assets/data/noticias.json';

export default {
  name: 'NoticiaDetalhe',
  props: ['id'],
  data() {
    return {
      noticia: null
    };
  },
  created() {
    this.noticia = noticias.find(n => n.id === this.id);
  }
};
</script>

<style scoped>
.imagem-cabecalho {
  height: 300px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
}
</style>
