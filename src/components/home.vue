<template>
  <v-row
    id="row"
    class="fill-height ma-0 justify-center align-content-center align-center w-75 mx-auto"
  >
    <v-col
      cols="12"
      sm="6"
      class="pa-0 d-flex flex-column"
    >
      <div class="d-flex flex-column align-center">
        <h1 class="text-h1 font-weight-bold mb-10 text-accent" id="title">
          <span class="text-text">Medi</span>Search
        </h1>
        <h2
          class="text-h6 font-weight-light mb-10 text-justify d-none d-sm-block"
        >
          Esta lista apresenta os preços dos medicamentos REGULADOS, nos termos
          da Resolução CMED nº 02, de 05 de março de 2004, e os preços dos
          medicamentos LIBERADOS, nos termos da Resolução CMED nº 02, de 20 de
          março de 2019.
        </h2>
        <homeButton class="d-none d-sm-block" />
      </div>
    </v-col>
    <v-col cols="12" sm="6" class="pa-0 align-center d-flex flex-column">
      <v-img src="@/assets/hero.svg" class="w-100" />
      <homeButton class="d-block d-sm-none mt-10" />
    </v-col>
  </v-row>
</template>

<script></script>

<style>
.max-height {
  height: calc(90vh - 128px);
}


@media (max-width: 960px) {
  #title {
    font-size: 60px !important;
    line-height: 75px;
  }
  #row {
    width: 100% !important;
  }
}
</style>
