<script>
import Header from '../components/Header.vue'; 
import Footer from '../components/Footer.vue';
export default {
  name: 'Competências',
}; 
</script>

<template>
  <section class="container">
    <div class="card">
      <img class="photo" src="@/assets/img/charles-leal-m-640-x-640-10x.png" alt="Charles Leal Souza" />
      <div class="info">
        <h2 class="name">Charles Leal Souza</h2>
        <p class="position">Diretor Geral Interino e Diretor Administrativo e Financeiro</p>
        <p class="description">
          Graduado em Gestão Pública pela Faculdade Estácio. Acumula experiência na gestão pública estadual e municipal, onde desempenhou função de gerente na Secretaria de Estado da Casa Civil e na Secretaria de Estado da Mulher, da Inclusão e Assistência Social, do Trabalho e dos Direitos Humanos. Na esfera municipal, exerceu atividades de coordenador na Secretaria Municipal de Esporte e chefe da Assessoria de Planejamento da Secretaria Municipal da Família e da Assistência Social.
        </p>
      </div>
    </div>

    <div class="skills">
      <h2 class="skills-title">COMPETÊNCIAS</h2>
      <p class="skills-text">
       I. Auxiliar o Diretor-Geral no desempenho do seu cargo e substituí-lo em suas faltas e impedimentos legais, ocasionais, temporários e coordenar atividades administrativas, econômicas e financeiras da FSPH;
        <br /><br />
        II. Difundir os objetivos e ideias da FSPH perante órgãos públicos e privados;
        <br /><br />
        III. Estimular e manter intercâmbio com pessoas e entidade;
        <br /><br />
        IV. Colaborar com os responsáveis no desenvolvimento de atividades administrativas do Hemocentro de Sergipe - HEMO/SE, Laboratório Central de Saúde Pública de Sergipe - LACEN/SE e Serviço de Verificação de Óbito - SVO/SE;
        <br /><br />
        V. Propor medidas e programas visando à captação para o desenvolvimento da FSPH, incluindo doações, patrocínios de programas e investimentos;
        <br /><br />
        VI. Colaborar na preparação da prestação de contas anual e outras específicas e na administração, econômico-financeira do Hemocentro de Sergipe - HEMO/SE, Laboratório Central de Saúde Pública de Sergipe - LACEN/SE e o Serviço de Verificação de Óbtos - SVO/SE;
        <br /><br />
        VII. Colaborar na preparação da prestação de contas anuais e outras específicas e na administração econômico-financeira das UNIDADES.
      </p>
    </div>
  </section>
</template>



<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 3rem 2rem;
  background: #f5f7fa;
  font-family: 'Inter', 'Segoe UI', Tahoma, sans-serif;
  justify-content: center;
}

.card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 1.8rem;
  max-width: 360px;
  text-align: center;
}

.photo {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.name {
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 500;
  color: #222;
  margin: 0;
}

.position {
  font-size: 0.95rem;
  color: #666;
  margin-top: 0.3rem;
  margin-bottom: 0.8rem;
}

.description {
  font-size: 0.9rem;
  color: #555;
  text-align: justify;
  line-height: 1.6;
  padding: 0.8rem 1rem 0 1rem;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

.skills {
  flex: 1;
  max-width: 620px;
  min-width: 300px;
}

.skills-title {
  font-size: 2rem;
    text-align: center;
  font-weight: 800;
  color: #14396d;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 1.8rem;
  font-family: 'Montserrat', sans-serif;
}

.skills-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  text-align: justify;
  white-space: pre-line;
}
</style>


