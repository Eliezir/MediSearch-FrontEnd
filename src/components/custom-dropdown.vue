<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        variant="outlined"
        color="outlined"
        v-bind="props"
        prepend-icon="mdi-filter-variant"
        class="dropdown font-weight-bold"
      >
        Filtros
      </v-btn>
    </template>
    <div class="bg-background elevation-1 rounded">
      <v-radio-group class="pa-2" v-model="filters" @change="change">
        <v-radio label="Substância" value="substance"></v-radio>
        <v-radio label="CNPJ" value="cnpj"></v-radio>
        <v-radio label="Laboratório" value="laboratory"></v-radio>
      </v-radio-group>
    </div>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";
const filters = ref("laboratory");

const emit = defineEmits(["change"]);

const change = () => {
  emit("change", filters.value);
};
</script>

<style scoped>
.dropdown {
  height: 40px !important;
}
</style>
