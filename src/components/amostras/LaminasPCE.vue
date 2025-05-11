<script>
  export default {
    name: 'LaminasPCE',
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
              <label for="num-laminas">N° de lâminas</label>
              <input type="number" id="num-laminas" name="num-laminas" />
            </div>


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
