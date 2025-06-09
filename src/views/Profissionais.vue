<script>
import Header from '../components/Header.vue'; // Verifique o caminho correto para Header.vue
import Footer from '../components/Footer.vue'; // Verifique o caminho correto para Footer.vue

// Imagens
import image1 from '@/assets/img/laborat-rio-de-biologia-molecular-1.png' // Fundo
import image2 from '@/assets/img/charles-leal-m-640-x-640-10.png' // Charles
import image3 from '@/assets/img/conrado-02-640-x-640-10.png' // Conrado
import image4 from '@/assets/img/luciana-deda-diretora-geral-da-fundacao-parreiras-horta-520-x-337-10.png' // Luciana

export default {
  name: 'Profissionais',
  components: { Header, Footer },
  data() {
    return {
      image1,
      image2,
      image3,
      image4
    }
  }
}
 
</script>

<template>
  <div class="profissionais" :style="{ backgroundImage: `url(${image1})` }">

    <section class="conteudo">
      <h2>CONHEÇA NOSSOS PROFISSIONAIS E SUAS HISTORIAS</h2>

      <div class="cards">
        <div class="card">
          <img class="foto" :src="image2" alt="Charles Leal Souza" />
          <h3>Charles Leal Souza</h3>
          <p class="cargo">Diretor Geral Interino e Diretor Administrativo e Financeiro</p>
          <p>Graduado em Gestão Pública pela Faculdade Estácio, possui experiência na gestão estadual e municipal, atuando em cargos de coordenação e planejamento.</p>
          <p><strong>Competências:</strong> Auxílio à Diretoria-Geral, gerência de recursos, planejamento financeiro e compras da FSPH, além de apoiar a administração do HEMOSE, LACEN/SE e Serviço de Verificação de Óbitos.</p>
          <button>Conheça mais</button>
        </div>

        <div class="card">
          <img class="foto" :src="image3" alt="Conrado Marques de Souza Neto" />
          <h3>Conrado Marques de Souza Neto</h3>
          <p class="cargo">Diretor Operacional</p>
          <p>Doutor e mestre em Biotecnologia Industrial, graduado em Enfermagem pela UNIT. Atua na pesquisa, ética e ensino em saúde.</p>
          <p><strong>Competências:</strong> Coordena atividades assistenciais e científicas da FSPH, integrando a rede de saúde e promovendo inovação e cooperação institucional.</p>
          <button>Conheça mais</button>
        </div>

        <div class="card">
          <img class="foto" :src="image4" alt="Luciana C. Déda Chagas de Melo" />
          <h3>Luciana C. Déda Chagas de Melo</h3>
          <p class="cargo">Diretor(a) Geral</p>
          <p>A gestora, graduada em Direito pela Universidade Tiradentes – Unit, tem experiência no advocacia civil e trabalhista, além de atuação na administração pública, incluindo a presidência do Detran/SE e a vice-presidência da Associação Nacional dos DETRANs – AND, regional Nordeste.</p>
          <button>Conheça mais</button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.profissionais {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 2rem;
  color: #000;
}

.conteudo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.conteudo h2 {
  color: white;
  font-size: 1.8rem;
  background-color: #003366;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  background-color: #003366;
  color: white;
  border-radius: 15px;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card .foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  margin-bottom: 1rem;
}

.card h3 {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card .cargo {
  font-style: italic;
  margin-bottom: 0.8rem;
}

.card button {
  background-color: #2d5ea0;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card button:hover {
  background-color: #1d4e8a;
}
</style>
