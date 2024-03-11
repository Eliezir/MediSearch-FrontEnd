<template>
  <div class="w-75 mx-auto fill-height container">
    <v-row class="mt-10">
      <v-col
        class="d-flex justify-center align-center justify-space-between flex-wrap"
      >
        <custom-input @search="updateSearch" class="filter-input" />

        <div class="d-flex ga-3 flex-wrap option-section">
          <custom-dropdown @change="updateFilter" />
          <v-btn
            variant="outlined"
            density="compact"
            class="cog-menu rounded"
            icon="mdi-cog"
            color="outlined"
          >
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <medicines-table ref="table" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const table = ref();

const updateSearch = (value) => {
  table.value.defineSearch(value);
};

const updateFilter = (value) => {
  table.value.defineFilter(value);
};
</script>

<style scoped>
.cog-menu {
  width: 40px !important;
  height: 40px !important;
}
@media screen and (max-width: 600px) {
  .container {
    width: 95% !important;
  }
  .option-section {
    justify-content: space-between !important;
    margin-top: 10px;
    width: 100%;
  }
  .filter-input {
    width: 100% !important;
  }
}
</style>
