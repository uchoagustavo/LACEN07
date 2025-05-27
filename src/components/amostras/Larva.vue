<template>
  <div class="capture-sheet">
    <div class="header">
      <h2>FICHA DE CAPTURA DE LARVAS</h2>
        <div class="observation">
            Observação: Amostra devem ser conservadas em frascos com álcool a 70% e o envio ao LACEN deve ocorrer assim que a análise for realizada pelo município.      
        </div>
    </div>
    </div>
  
  
  <form @submit.prevent="submitForm">
    <!-- Página 1 -->
    <div v-if="paginaAtual === 1">
      <div class="capture-form">
            <!-- Primeira linha -->
            <div class="form-group span-4">
              <label for="regional">Regional de Saúde</label>
              <input type="text" id="regional" name="regional" v-model="formData.regionalDeSaude" />
            </div>

            <div class="form-group span-4">
              <label for="municipio">Município</label>
              <input type="text" id="municipio" name="municipio" v-model="formData.municipio" />
            </div>

            <div class="form-group span-4">
              <label for="data-remessa">Data da Remessa</label>
              <input type="date" id="data-remessa" name="data-remessa" v-model="formData.dataRemessa" />
            </div>

            <!-- Segunda linha -->
            <div class="form-group span-3">
              <label for="num-casa">N° da Casa</label>
              <input type="text" id="num-casa" name="num-casa" v-model="formData.numeroCasa" />
            </div>

            <div class="form-group span-3">
              <label for="num-habitantes">N° de Habitantes</label>
              <input type="number" id="num-habitantes" name="num-habitantes" v-model.number="formData.numeroHabitantes" />
            </div>

            <div class="form-group span-3">
              <label for="num-comodos">N° de Cômodos</label>
              <input type="number" id="num-comodos" name="num-comodos" v-model.number="formData.numeroComodos" />
            </div>

            <div class="form-group span-3">
              <label for="num-anexos">N° de Anexos</label>
              <input type="number" id="num-anexos" name="num-anexos" v-model.number="formData.numeroAnexos" />
            </div>

            <!-- Terceira linha -->
            <div class="form-group span-6">
              <label for="nome-captor">Nome do Captor (ou Informante)</label>
              <input type="text" id="nome-captor" name="nome-captor" v-model="formData.nomeCaptor" />
            </div>

            <div class="form-group span-6">
              <div class="checkbox-group">
                <input type="checkbox" id="inseticida" name="inseticida" v-model="formData.usoInsetifugo" />
                <label for="inseticida">Uso de Insetifugo</label>
              </div>
            </div>

            <!-- Quarta linha -->
            <div class="form-group span-4">
              <label for="local-categoria">Local e Categoria</label>
              <input type="text" id="local-categoria" name="local-categoria" v-model="formData.localCategoria" />
            </div>

            <div class="form-group span-4">
              <label for="teto">Teto</label>
              <input type="text" id="teto" name="teto" v-model="formData.teto" />
            </div>

            <div class="form-group span-4">
              <label for="piso">Piso</label>
              <input type="text" id="piso" name="piso" v-model="formData.piso" />
            </div>

            <!-- Quinta linha -->
            <div class="form-group span-4">
              <label for="data-captura">Data da Captura</label>
              <input type="date" id="data-captura" name="data-captura" v-model="formData.dataCaptura" />
            </div>

            <div class="form-group span-4">
              <label for="tipo-construcao">Tipo de Construção da casa - parede</label>
              <input type="text" id="tipo-construcao" name="tipo-construcao" v-model="formData.tipoConstrucaoParede" />
            </div>

            <div class="form-group span-4">
              <label for="vestigios">Vestígios Encontrados</label>
              <select id="vestigios" name="vestigios" v-model="formData.vestigiosEncontrados">
                <option value="">Selecione</option>
                <option value="fezes">Fezes</option>
                <option value="exuvias">Exúvias</option>
                <option value="cascas-ovos">Cascas de ovos</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            
            <!-- N° de Exemplares capturados -->
            <fieldset class="span-6">
              <legend>N° de Exemplares capturados</legend>
              <div class="fieldset-grid">
                <div class="form-group">
                  <label for="intra-domicilio">Intra-domicílio (casa)</label>
                  <input type="number" id="intra-domicilio" name="intra-domicilio" v-model.number="formData.intraDomicilio" />
                </div>
                <div class="form-group">
                  <label for="peri-domicilio">Peri-domicílio (anexos)</label>
                  <input type="number" id="peri-domicilio" name="peri-domicilio" v-model.number="formData.periDomicilio" />
                </div>
                <div class="form-group">
                  <label for="exemplares-total">Total</label>
                  <input type="number" id="exemplares-total" name="exemplares-total" v-model.number="formData.exemplaresTotal" />
                </div>
              </div>
            </fieldset>
            
            <!-- Condições e N° de Espécimes encaminhados -->
            <fieldset class="span-6">
              <legend>Condições e N° de Espécimes encaminhados</legend>
              <div class="fieldset-grid">
                <div class="form-group">
                  <label for="vivos">Vivos</label>
                  <input type="number" id="vivos" name="vivos" v-model.number="formData.vivos" />
                </div>
                <div class="form-group">
                  <label for="mortos">Mortos</label>
                  <input type="number" id="mortos" name="mortos" v-model.number="formData.mortos" />
                </div>
                <div class="form-group">
                  <label for="outros-condicoes">Outros</label>
                  <input type="number" id="outros-condicoes" name="outros-condicoes" v-model.number="formData.outrosCondicoes" />
                </div>
              </div>
            </fieldset>
            
            <!-- Local da Captura -->
            <fieldset class="span-6">
              <legend>Local da Captura</legend>
              <div class="capture-locations">
                <div class="location-column">
                  <h4>Casa (Cômodo)</h4>
                  <div class="form-group">
                    <label for="quarto">Quarto</label>
                    <input type="number" id="quarto" name="quarto" v-model.number="formData.quarto" />
                  </div>
                  <div class="form-group">
                    <label for="cozinha">Cozinha</label>
                    <input type="number" id="cozinha" name="cozinha" v-model.number="formData.cozinha" />
                  </div>
                  <div class="form-group">
                    <label for="outros-casa">Outros</label>
                    <input type="text" id="outros-casa" name="outros-casa" v-model="formData.outrosCasa" />
                  </div>
                </div>
                
                <div class="location-column">
                  <h4>Anexo (Tipo)</h4>
                  <div class="form-group">
                    <label for="galinheiro">Galinheiro</label>
                    <input type="number" id="galinheiro" name="galinheiro" v-model.number="formData.galinheiro" />
                  </div>
                  <div class="form-group">
                    <label for="chiqueiro">Chiqueiro</label>
                    <input type="number" id="chiqueiro" name="chiqueiro" v-model.number="formData.chiqueiro" />
                  </div>
                  <div class="form-group">
                    <label for="outros-anexo">Outros</label>
                    <input type="text" id="outros-anexo" name="outros-anexo" v-model="formData.outrosAnexo" />
                  </div>
                </div>
              </div>
            </fieldset>
            
            <!-- N° de Fase ou Atividade -->
            <fieldset class="span-6">
              <legend>N° de Fase ou Atividade</legend>
              <div class="fieldset-grid">
                <div class="form-group">
                  <label for="lt">LT</label>
                  <input type="number" id="lt" name="lt" v-model.number="formData.lt" />
                </div>
                <div class="form-group">
                  <label for="pav">PAV</label>
                  <input type="number" id="pav" name="pav" v-model.number="formData.pav" />
                </div>
                <div class="form-group">
                  <label for="ve">VE</label>
                  <input type="number" id="ve" name="ve" v-model.number="formData.ve" />
                </div>
              </div>
            </fieldset>

            <!-- Laboratorista -->
            <div class="form-group span-6">
              <label for="laboratorista">Laboratorista Municipal</label>
              <input
                type="text"
                id="laboratorista"
                name="laboratorista"
                v-model="formData.laboratorista"
                readonly
              />
            </div>
      </div>
    </div>

    <!-- Página 2 -->
    <div v-if="paginaAtual === 2">
      <fieldset class="span-6">
        <legend>Aedes aegypti</legend>
        <div class="fieldset-grid">
          <div class="form-group">
            <label for="aedes-larva">Larva</label>
            <input type="number" id="aedes-larva" name="aedes-larva" v-model.number="formData.aedesLarva" />
          </div>
          <div class="form-group">
            <label for="aedes-pupa">Pupa</label>
            <input type="number" id="aedes-pupa" name="aedes-pupa" v-model.number="formData.aedesPupa" />
          </div>
        </div>
      </fieldset>
    </div>

    <!-- Footer com Botões de Navegação -->
    <div class="form-footer">
      <div class="page-info">Pág {{ paginaAtual }} de 2</div>
      <div class="nav-buttons">
        <button v-if="paginaAtual > 1" type="button" class="nav-button back-button" @click="voltarPagina">Voltar</button>
        <button v-if="paginaAtual < 2" type="button" class="nav-button next-button" @click="avancarPagina">Próxima</button>
        <button v-if="paginaAtual === 2" type="submit" class="nav-button submit-button">Enviar</button>
      </div>
    </div>
  </form>
</template>

<script>
    export default {
        name: 'Larva',
  data() {
    return {
      paginaAtual: 1,
      formData: {
        regionalDeSaude: '',
        municipio: '',
        dataRemessa: '',
        numeroCasa: '',
        numeroHabitantes: null,
        numeroComodos: null,
        numeroAnexos: null,
        nomeCaptor: '',
        usoInsetifugo: false,
        localCategoria: '',
        teto: '',
        piso: '',
        dataCaptura: '',
        tipoConstrucaoParede: '',
        vestigiosEncontrados: '',
        intraDomicilio: null,
        periDomicilio: null,
        exemplaresTotal: null,
        vivos: null,
        mortos: null,
        outrosCondicoes: null,
        quarto: null,
        cozinha: null,
        outrosCasa: '',
        galinheiro: null,
        chiqueiro: null,
        outrosAnexo: '',
        lt: null,
        pav: null,
        ve: null,
        laboratorista: 'Usuário Cadastrado',
        aedesLarva: null,
        aedesPupa: null,
      }
    };
  },
  methods: {
    avancarPagina() {
      if (this.paginaAtual < 2) this.paginaAtual++;
    },
    voltarPagina() {
      if (this.paginaAtual > 1) this.paginaAtual--;
    },
    submitForm() {
      console.log('Dados do formulário Larva:', this.formData);
      alert('Formulário enviado com sucesso!');
    }
  },
};
</script>

<style>
.dark-theme .header{
  color: #E0E0E0;
  background-color: #0D1B2A;
  border-radius: 4px;
  padding: 10px;
}
</style>
