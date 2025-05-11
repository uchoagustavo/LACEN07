<script>
  export default {
    name: 'Escorpiao',
  };
</script>


<template>
  <form class="capture-form">
            <!-- Primeira linha -->
            <div class="form-group span-4">
              <label for="regional">Regional de Saúde</label>
              <input type="text" id="regional" name="regional" />
            </div>

            <div class="form-group span-4">
              <label for="municipio">Município</label>
              <input type="text" id="municipio" name="municipio" />
            </div>

            <div class="form-group span-4">
              <label for="data-remessa">Data da Remessa</label>
              <input type="date" id="data-remessa" name="data-remessa" />
            </div>

            <!-- Segunda linha -->
            <div class="form-group span-3">
              <label for="num-casa">N° da Casa</label>
              <input type="text" id="num-casa" name="num-casa" />
            </div>

            <div class="form-group span-3">
              <label for="num-habitantes">N° de Habitantes</label>
              <input type="number" id="num-habitantes" name="num-habitantes" />
            </div>

            <div class="form-group span-3">
              <label for="num-comodos">N° de Cômodos</label>
              <input type="number" id="num-comodos" name="num-comodos" />
            </div>

            <div class="form-group span-3">
              <label for="num-anexos">N° de Anexos</label>
              <input type="number" id="num-anexos" name="num-anexos" />
            </div>

            <!-- Terceira linha -->
            <div class="form-group span-6">
              <label for="nome-captor">Nome do Captor (ou Informante)</label>
              <input type="text" id="nome-captor" name="nome-captor" />
            </div>

            <div class="form-group span-6">
              <div class="checkbox-group">
                <input type="checkbox" id="inseticida" name="inseticida" />
                <label for="inseticida">Uso de Insetifugo</label>
              </div>
            </div>

            <!-- Quarta linha -->
            <div class="form-group span-4">
              <label for="local-categoria">Local e Categoria</label>
              <input type="text" id="local-categoria" name="local-categoria" />
            </div>

            <div class="form-group span-4">
              <label for="teto">Teto</label>
              <input type="text" id="teto" name="teto" />
            </div>

            <div class="form-group span-4">
              <label for="piso">Piso</label>
              <input type="text" id="piso" name="piso" />
            </div>

            <!-- Quinta linha -->
            <div class="form-group span-3">
              <label for="data-captura">Data da Captura</label>
              <input type="date" id="data-captura" name="data-captura" />
            </div>

            <div class="form-group span-3">
              <label for="tipo-construcao">Tipo de Construção da casa - parede</label>
              <input type="text" id="tipo-construcao" name="tipo-construcao" />
            </div>

            <div class="form-group span-3">
              <label for="vestigios">Vestígios Encontrados</label>
              <select id="vestigios" name="vestigios">
                <option value="">Selecione</option>
                <option value="fezes">Fezes</option>
                <option value="exuvias">Exúvias</option>
                <option value="cascas-ovos">Cascas de ovos</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div class="form-group span-3">
              <div class="checkbox-group">
                <input type="checkbox" id="Acidente" name="Acidente" />
                <label for="Acidente">Acidente</label>
              </div>
            </div>

            <!-- N° de Exemplares capturados -->
            <fieldset class="span-6">
              <legend>N° de Exemplares capturados</legend>
              <div class="fieldset-grid">
                <div class="form-group">
                  <label for="intra-domicilio">Intra-domicílio (casa)</label>
                  <input type="number" id="intra-domicilio" name="intra-domicilio" />
                </div>
                <div class="form-group">
                  <label for="peri-domicilio">Peri-domicílio (anexos)</label>
                  <input type="number" id="peri-domicilio" name="peri-domicilio" />
                </div>
                <div class="form-group">
                  <label for="exemplares-total">Total</label>
                  <input type="number" id="exemplares-total" name="exemplares-total" />
                </div>
              </div>
            </fieldset>


            <!-- Condições e N° de Espécimes encaminhados -->
            <fieldset class="span-6">
              <legend>Condições e N° de Espécimes encaminhados</legend>
              <div class="fieldset-grid">
                <div class="form-group">
                  <label for="vivos">Vivos</label>
                  <input type="number" id="vivos" name="vivos" />
                </div>
                <div class="form-group">
                  <label for="mortos">Mortos</label>
                  <input type="number" id="mortos" name="mortos" />
                </div>
                <div class="form-group">
                  <label for="outros-condicoes">Outros</label>
                  <input type="number" id="outros-condicoes" name="outros-condicoes" />
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
                    <input type="number" id="quarto" name="quarto" />
                  </div>
                  <div class="form-group">
                    <label for="cozinha">Cozinha</label>
                    <input type="number" id="cozinha" name="cozinha" />
                  </div>
                  <div class="form-group">
                    <label for="outros-casa">Outros</label>
                    <input type="text" id="outros-casa" name="outros-casa" />
                  </div>
                </div>

                <div class="location-column">
                  <h4>Anexo (Tipo)</h4>
                  <div class="form-group">
                    <label for="galinheiro">Galinheiro</label>
                    <input type="number" id="galinheiro" name="galinheiro" />
                  </div>
                  <div class="form-group">
                    <label for="chiqueiro">Chiqueiro</label>
                    <input type="number" id="chiqueiro" name="chiqueiro" />
                  </div>
                  <div class="form-group">
                    <label for="outros-anexo">Outros</label>
                    <input type="text" id="outros-anexo" name="outros-anexo" />
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
                  <input type="number" id="lt" name="lt" />
                </div>
                <div class="form-group">
                  <label for="pav">PAV</label>
                  <input type="number" id="pav" name="pav" />
                </div>
                <div class="form-group">
                  <label for="ve">VE</label>
                  <input type="number" id="ve" name="ve" />
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
                value="Usuário Cadastrado"
                readonly
              />
            </div>

            <div class="form-actions span-12">
              <button type="submit" class="btn">ENVIAR</button>
            </div>
          </form>
</template>
