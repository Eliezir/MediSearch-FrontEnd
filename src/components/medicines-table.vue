<template>
  <div class="bg-background pa-4 elevation-1 rounded">
    <v-data-table-server
      class="bg-background"
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      items-length="1000"
      :loading="loading"
      :search="search"
      :page="activePage"
      @update:options="getMedicines"
    ></v-data-table-server>
  </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref("");
const filter = ref("laboratory");

const defineSearch = (value) => {
  search.value = value;
};

const defineFilter = (value) => {
  filter.value = value;
};

const headers = [
  { title: "Substância", value: "substance" },
  { title: "Laboratory", value: "laboratory" },
  { title: "CNPJ", value: "cnpj" },
  { title: "Preço", value: "pf_19_percent" },
];

const itemsPerPage = ref(25);
const serverItems = ref([]);
const loading = ref(true);
const activePage = ref(1);

const getMedicines = async () => {
  let url = new URL("http://localhost:8000/medicines/");

  loading.value = true;
  if (search.value.trim() !== "") {
    url = new URL(
      `http://localhost:8000/medicines/filter/?${filter.value}__contains=${search.value}&page=${activePage.value}`
    );

  } else {
    url = new URL(
      `http://localhost:8000/medicines/?limit=${itemsPerPage.value}&page=${activePage.value}`
    );
  }

  const response = await fetch(url);
  const data = await response.json();
  loading.value = false;
  serverItems.value = data.results;
};

getMedicines();

defineExpose({
  defineSearch,
  defineFilter,
});
</script>
