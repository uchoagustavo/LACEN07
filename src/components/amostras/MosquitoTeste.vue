<script setup>
  import { ref } from 'vue'

  const currentPage = ref(1)

  const formData = ref({
    // Página 1
    regionalDeSaude: '',
    unidadeDeSaude: '',
    municipio: '',
    dataRemessa: '',
    numeroCasa: '',
    numeroHabitantes: null,
    numeroComodos: null,
    numeroAnexos: null,
    nomeCaptor: '',
    usoInsetirugo: false,
    localCategoria: '',
    teto: '',
    piso: '',
    dataCaptura: '',
    tipoConstrucaoParede: '',
    vestigiosEncontrados: '',
    intraDomicilioCasa: null,
    total: null,
    periDomicilioAnexos: null,
    especimesVivos: null,
    especimesMortos: null,
    especimesOutros: null,
    casaComodo: '',
    quarto: '',
    anexoTipo: '',
    galinheiro: '',
    cozinha: '',
    chiqueiro: '',
    outros: '',
    lt: '',
    pav: '',
    ve: '',
    laboratoistaMunicipal: '',
    usuarioCadastrado: '',

    // Página 2
    vulneravelNaoReceptivo: false,
    vulneravelReceptivo: false,
    somenteCasosCaninos: false,
    registroPrimeiroCaso: false,
    surtoLV: false,
    transmissaoBaixa: false,
    transmissaoAlta: false,
    surtoLT: false,
    areaTransmissaoRecente: false,
    areaTransmissaoRecorrente: false,
    investigacaoEntomologica: false,
    levantamentoEntomologico: false,
    monitoramentoEntomologicoLV: false,
    pesquisaFoco: false,
    monitoramentoEntomologicoLT: false,

    // Captura intradomiciliar
    luminosaIntra: false,
    semIscaIntra: false,
    cdcIntra: false,
    castroIntra: false,
    adesivaIntra: false,

    // Captura extradomiciliar
    luminosaExtra: false,
    semIscaExtra: false,
    cdcExtra: false,
    castroExtra: false,
    adesivaExtra: false,

    // Captura peridomiciliar
    luminosaPeri: false,
    semIscaPeri: false,
    cdcPeri: false,
    castroPeri: false,
    adesivaPeri: false
  })

  const goToNextPage = () => {
    if (currentPage.value < 3) {
      currentPage.value++
    }
  }

  const goToPreviousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const submitForm = () => {
    console.log('Form submitted', formData.value)
  }
</script>


<template>
  <div class="capture-sheet">
    <div class="header">
      <h2>FICHA DE CAPTURA DE MOSQUITOS</h2>
      <div class="observation">
        Observação: Amostra deve ser enviada ao LACEN ainda frescas, em até 48 horas
      </div>
    </div>

    <div class="tab-content">
      <!-- Página 1 - Formulário original -->
      <div v-show="currentPage === 1" class="tab-pane">
        <div class="form-grid">
          <div class="grid-row">
            <div class="grid-cell">
              <label>Regional de Saúde</label>
              <input type="text" v-model="formData.regionalDeSaude" />
            </div>
            <div class="grid-cell">
              <label>Unidade de Saúde</label>
              <input type="text" v-model="formData.unidadeDeSaude" />
            </div>
            <div class="grid-cell">
              <label>Município</label>
              <input type="text" v-model="formData.municipio" />
            </div>
            <div class="grid-cell">
              <label>Data da Remessa</label>
              <input type="date" v-model="formData.dataRemessa" />
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>N° da Casa</label>
              <input type="text" v-model="formData.numeroCasa" />
            </div>
            <div class="grid-cell">
              <label>N° de Habitantes</label>
              <input type="number" v-model="formData.numeroHabitantes" />
            </div>
            <div class="grid-cell">
              <label>N° de Cômodos</label>
              <input type="number" v-model="formData.numeroComodos" />
            </div>
            <div class="grid-cell">
              <label>N° de Anexos</label>
              <input type="number" v-model="formData.numeroAnexos" />
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell wide-cell">
              <label>Nome do Captor (ou Informante)</label>
              <input type="text" v-model="formData.nomeCaptor" />
            </div>
            <div class="grid-cell checkbox-cell">
              <input type="checkbox" id="useInsetirugo" v-model="formData.usoInsetirugo" />
              <label for="useInsetirugo">Uso de Insetirugo</label>
            </div>
            <div class="grid-cell">
              <label>Local e Categoria</label>
              <input type="text" v-model="formData.localCategoria" />
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>Teto</label>
              <input type="text" v-model="formData.teto" />
            </div>
            <div class="grid-cell">
              <label>Piso</label>
              <input type="text" v-model="formData.piso" />
            </div>
            <div class="grid-cell">
              <label>Data da Captura</label>
              <input type="date" v-model="formData.dataCaptura" />
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>Tipo de Construção da Casa - Parede</label>
              <input type="text" v-model="formData.tipoConstrucaoParede" />
            </div>
            <div class="grid-cell">
              <label>Vestígios Encontrados</label>
              <select v-model="formData.vestigiosEncontrados">
                <option value="">Selecione</option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
              </select>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>N° de Exemplares Capturados</label>
              <div class="inline-group">
                <div>
                  <label>Intra-domicílio (casa)</label>
                  <input type="number" v-model="formData.intraDomicilioCasa" />
                </div>
                <div>
                  <label>Total</label>
                  <input type="number" v-model="formData.total" />
                </div>
              </div>
              <div>
                <label>Peri-domicílio (anexos)</label>
                <input type="number" v-model="formData.periDomicilioAnexos" />
              </div>
            </div>
            <div class="grid-cell">
              <label>Condições e N° de Espécimes encaminhados</label>
              <div class="inline-group">
                <div>
                  <label>Vivos</label>
                  <input type="number" v-model="formData.especimesVivos" />
                </div>
                <div>
                  <label>Mortos</label>
                  <input type="number" v-model="formData.especimesMortos" />
                </div>
                <div>
                  <label>Outros</label>
                  <input type="number" v-model="formData.especimesOutros" />
                </div>
              </div>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>Local da Captura</label>
              <div class="inline-group capture-locations">
                <div>
                  <label>Casa (Cômodo)</label>
                  <input type="text" v-model="formData.casaComodo" />
                </div>
                <div>
                  <label>Quarto</label>
                  <input type="text" v-model="formData.quarto" />
                </div>
                <div>
                  <label>Anexo (Tipo)</label>
                  <input type="text" v-model="formData.anexoTipo" />
                </div>
                <div>
                  <label>Galinheiro</label>
                  <input type="text" v-model="formData.galinheiro" />
                </div>
                <div>
                  <label>Cozinha</label>
                  <input type="text" v-model="formData.cozinha" />
                </div>
                <div>
                  <label>Chiqueiro</label>
                  <input type="text" v-model="formData.chiqueiro" />
                </div>
                <div>
                  <label>Outros</label>
                  <input type="text" v-model="formData.outros" />
                </div>
              </div>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>N° de Fase ou Atividade</label>
              <div class="inline-group">
                <div>
                  <label>LT</label>
                  <input type="text" v-model="formData.lt" />
                </div>
                <div>
                  <label>PAV</label>
                  <input type="text" v-model="formData.pav" />
                </div>
                <div>
                  <label>VE</label>
                  <input type="text" v-model="formData.ve" />
                </div>
              </div>
            </div>
            <div class="grid-cell">
              <label>Laboratorista Municipal</label>
              <input type="text" v-model="formData.laboratoistaMunicipal" />

              <label>Usuário Cadastrado</label>
              <input type="text" v-model="formData.usuarioCadastrado" />
            </div>
          </div>
        </div>
      </div>

      <!-- Página 2 - Classificações e tipos de captura -->
      <div v-show="currentPage === 2" class="tab-pane">
        <div class="form-grid">
          <div class="grid-row">
            <div class="grid-cell">
              <label>Classificação da área_LV</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" id="vulneravel-nao-receptivo" v-model="formData.vulneravelNaoReceptivo" />
                  <label for="vulneravel-nao-receptivo">Vulnerável não receptivo</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="vulneravel-receptivo" v-model="formData.vulneravelReceptivo" />
                  <label for="vulneravel-receptivo">Vulnerável receptivo</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="somente-casos-caninos" v-model="formData.somenteCasosCaninos" />
                  <label for="somente-casos-caninos">Somente com casos caninos autóctones</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="registro-primeiro-caso" v-model="formData.registroPrimeiroCaso" />
                  <label for="registro-primeiro-caso">Registro de primeiro caso autóctone no LV</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="surto-lv" v-model="formData.surtoLV" />
                  <label for="surto-lv">Surto</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="transmissao-baixa" v-model="formData.transmissaoBaixa" />
                  <label for="transmissao-baixa">Transmissão baixa ou média</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="transmissao-alta" v-model="formData.transmissaoAlta" />
                  <label for="transmissao-alta">Transmissão alta, intensa ou muito intensa</label>
                </div>
              </div>
            </div>
            <div class="grid-cell">
              <label>Classificação da área_LT</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" id="surto-lt" v-model="formData.surtoLT" />
                  <label for="surto-lt">Surto</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="area-transmissao-recente" v-model="formData.areaTransmissaoRecente" />
                  <label for="area-transmissao-recente">Área de transmissão recente</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="area-transmissao-recorrente" v-model="formData.areaTransmissaoRecorrente" />
                  <label for="area-transmissao-recorrente">Área de transmissão recorrente</label>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>Tipo de atividade_LV</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" id="investigacao-entomologica" v-model="formData.investigacaoEntomologica" />
                  <label for="investigacao-entomologica">Investigação entomológica</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="levantamento-entomologico" v-model="formData.levantamentoEntomologico" />
                  <label for="levantamento-entomologico">Levantamento entomológico</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="monitoramento-entomologico-lv" v-model="formData.monitoramentoEntomologicoLV" />
                  <label for="monitoramento-entomologico-lv">Monitoramento entomológico</label>
                </div>
              </div>
            </div>
            <div class="grid-cell">
              <label>Tipo de atividade_LT</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" id="pesquisa-foco" v-model="formData.pesquisaFoco" />
                  <label for="pesquisa-foco">Pesquisa de foco</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="monitoramento-entomologico-lt" v-model="formData.monitoramentoEntomologicoLT" />
                  <label for="monitoramento-entomologico-lt">Monitoramento entomológico</label>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell">
              <label>Captura Intradomiciliar</label>
              <div class="capture-data">
                <div class="capture-column">
                  <label>Tipo de captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="luminosa-intra" v-model="formData.luminosaIntra" />
                      <label for="luminosa-intra">Luminosa</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="sem-isca-intra" v-model="formData.semIscaIntra" />
                      <label for="sem-isca-intra">Sem isca</label>
                    </div>
                  </div>
                </div>
                <div class="capture-column">
                  <label>Instrum captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="cdc-intra" v-model="formData.cdcIntra" />
                      <label for="cdc-intra">CDC</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="castro-intra" v-model="formData.castroIntra" />
                      <label for="castro-intra">Castro</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="adesiva-intra" v-model="formData.adesivaIntra" />
                      <label for="adesiva-intra">Adesiva</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-cell">
              <label>Captura Extradomiciliar</label>
              <div class="capture-data">
                <div class="capture-column">
                  <label>Tipo de captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="luminosa-extra" v-model="formData.luminosaExtra" />
                      <label for="luminosa-extra">Luminosa</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="sem-isca-extra" v-model="formData.semIscaExtra" />
                      <label for="sem-isca-extra">Sem isca</label>
                    </div>
                  </div>
                </div>
                <div class="capture-column">
                  <label>Instrum captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="cdc-extra" v-model="formData.cdcExtra" />
                      <label for="cdc-extra">CDC</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="castro-extra" v-model="formData.castroExtra" />
                      <label for="castro-extra">Castro</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="adesiva-extra" v-model="formData.adesivaExtra" />
                      <label for="adesiva-extra">Adesiva</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-row">
            <div class="grid-cell wide-cell">
              <label>Captura Peridomiciliar</label>
              <div class="capture-data">
                <div class="capture-column">
                  <label>Tipo de captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="luminosa-peri" v-model="formData.luminosaPeri" />
                      <label for="luminosa-peri">Luminosa</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="sem-isca-peri" v-model="formData.semIscaPeri" />
                      <label for="sem-isca-peri">Sem isca</label>
                    </div>
                  </div>
                </div>
                <div class="capture-column">
                  <label>Instrum captura</label>
                  <div class="checkbox-group">
                    <div class="checkbox-item">
                      <input type="checkbox" id="cdc-peri" v-model="formData.cdcPeri" />
                      <label for="cdc-peri">CDC</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="castro-peri" v-model="formData.castroPeri" />
                      <label for="castro-peri">Castro</label>
                    </div>
                    <div class="checkbox-item">
                      <input type="checkbox" id="adesiva-peri" v-model="formData.adesivaPeri" />
                      <label for="adesiva-peri">Adesiva</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-footer">
      <div class="page-info">Pág {{ currentPage }} de 3</div>
      <div class="nav-buttons">
        <button v-if="currentPage > 1" type="button" class="nav-button back-button" @click="goToPreviousPage">Voltar</button>
        <button v-if="currentPage < 3" type="button" class="nav-button next-button" @click="goToNextPage">PRÓXIMA</button>
        <button v-if="currentPage === 3" type="submit" class="nav-button submit-button" @click="submitForm">Enviar</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #000000;
    --secondary-color: #3498db;
    --background-color: #f4f6f7;
    --text-color: #000000;
    --border-color: #e0e0e0;
  }

  .capture-sheet {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
  }

  .header {
    background-color: var(--background-color);
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  .header h2 {
    margin-bottom: 10px;
    color: #000000;
    font-weight: 600;
  }

  .observation {
    font-size: 12px;
    color: #000000;
    opacity: 0.7;
    text-align: right;
  }

  .form-grid {
    border: 1px solid var(--border-color);
    border-radius: 6px;
    overflow: hidden;
  }

  .grid-row {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.3s ease;
  }

  .grid-row:hover {
    background-color: rgba(52, 152, 219, 0.05);
  }

  .grid-row:last-child {
    border-bottom: none;
  }

  .grid-cell {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .grid-cell::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    background-color: var(--border-color);
  }

  .grid-cell:last-child::after {
    display: none;
  }

  .wide-cell {
    flex: 2;
  }

  .grid-cell label {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 12px;
    color: #000000;
  }

  .grid-cell input,
  .grid-cell select {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s ease;
  }

  .grid-cell input:focus,
  .grid-cell select:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .checkbox-cell {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .checkbox-cell input[type="checkbox"] {
    width: auto;
    margin-right: 6px;
  }

  .inline-group {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  .inline-group.capture-locations {
    flex-wrap: wrap;
  }

  .inline-group div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .inline-group label {
    font-size: 11px;
    margin-bottom: 4px;
    color: #000000;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 10px 0;
  }

  .page-info {
    font-size: 12px;
    color: #000000;
    opacity: 0.7;
  }

  .nav-buttons {
    display: flex;
    gap: 10px;
  }

  .nav-button {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
    border: none;
  }

  .next-button {
    background-color: var(--secondary-color);
    color: white;
  }

  .next-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  .back-button {
    background-color: #f1f1f1;
    color: #333;
  }

  .back-button:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }

  .submit-button {
    background-color: #27ae60;
    color: white;
  }

  .submit-button:hover {
    background-color: #219955;
    transform: translateY(-2px);
  }

  /* Estilos para checkbox groups na página 2 */
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 5px;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
  }

  .checkbox-item input[type="checkbox"] {
    width: 10px;
    height: 10px;
    margin-right: 8px;
  }

  .checkbox-item label {
    margin: 0;
    font-weight: normal;
  }

  /* Estilos para os grupos de captura */
  .capture-data {
    display: flex;
    gap: 15px;
  }

  .capture-column {
    flex: 1;
  }

  .tab-pane {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .grid-row {
      flex-direction: column;
    }

    .grid-cell {
      border-right: none;
      border-bottom: 1px solid var(--border-color);
    }

    .grid-cell::after {
      display: none;
    }

    .inline-group {
      flex-direction: column;
    }

    .capture-data {
      flex-direction: column;
    }
  }
</style>
