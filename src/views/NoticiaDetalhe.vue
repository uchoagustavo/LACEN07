<script>
  import noticias from '@/assets/data/noticias.json'
  import Libras from '@/components/Libras.vue'

  export default {
    name: 'NoticiaDetalhe',
    components: {
      Libras,
    },
    data() {
      return {
        noticia: null
      }
    },
    created() {
      const id = parseInt(this.$route.params.id)
      this.noticia = noticias.find(n => n.id === id)
    }
  }
</script>


<template>
  <Libras />

  <div class="noticia-container">
    <h1>{{ noticia.titulo }}</h1>
    <p class="meta">
      🖊️ Por: {{ noticia.autor }} 📅 {{ noticia.data }}
    </p>

    <img
      class="imagem-principal"
      :src="noticia.imagem.src"
      :alt="noticia.imagem.alt"
    />

    <div v-for="(item, index) in noticia.conteudo" :key="index">
      <p v-if="item.tipo === 'paragrafo'" class="paragrafo">
        {{ item.texto }}
      </p>
      <img
        v-else-if="item.tipo === 'imagem'"
        :src="item.src"
        :alt="item.alt"
        class="imagem-fluida"
        :class="item.posicao"
      />
    </div>
  </div>
</template>


<style scoped>
  .noticia-container {
    max-width: 930px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
    color: #000;
  }

  .meta {
    font-size: 14px;
    color: #444;
    margin-bottom: 20px;
  }

  .imagem-principal {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 20px;
  }

  .paragrafo {
    text-align: justify;
    margin-bottom: 15px;
  }

  .imagem-fluida {
    max-width: 300px;
    border-radius: 10px;
    margin: 10px;
    object-fit: cover;
  }

  .direita {
    float: right;
    margin-left: 20px;
  }

  .esquerda {
    float: left;
    margin-right: 20px;
  }
</style>
