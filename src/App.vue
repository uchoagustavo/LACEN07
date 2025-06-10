<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Libras from '@/components/Libras.vue';
import { useTemaStore } from '@/stores/tema';
import { useRoute } from 'vue-router'
import { computed } from 'vue' // <-- ESSENCIAL

const route = useRoute()

const isLoginPage = computed(() => route.path === '/login')

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Libras,
  },
  mounted() {
    const tema = useTemaStore();
    tema.aplicarTemaSalvo();
  },
};
</script>


<template>
  <div id="app">
    <Header v-if="$route.path !== '/login'" />
    <Libras />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
