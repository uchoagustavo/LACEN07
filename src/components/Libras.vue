<template>
  <div
    vw
    class="enabled"
  >
    <div
      vw-access-button
      class="active"
    ></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Libras',
  mounted() {
    // Evita carregar o script mais de uma vez
    if (!document.getElementById('vlibras-script')) {
      const script = document.createElement('script');
      script.id = 'vlibras-script';
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      };
      document.body.appendChild(script);
    }
  }
}
</script>

