<template>
  <div class="bg-background pa-4 elevation-1 rounded">
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="name"
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
  { title: "Laboratory", value: "laboratory"},
  { title: "CNPJ", value: "cnpj" },
  { title: "Código", value: "code" },
  { title: "Preço" , value: "pf_19_percent"}
];

const itemsPerPage = ref(25);
const serverItems = ref([]);
const loading = ref(true);
const totalItems = ref(itemsPerPage);

const getMedicines = async () => {
  const limit = itemsPerPage.value;
  let url;
  const filters = {};
  if (search.value.trim() !== "") {
    filters["search"] = search.value.trim();

    if (filter.value.trim() !== "") {
      filters["laboratory__icontains"] = filter.value.trim();
    }
  }

  loading.value = true;
  if (search.value.trim() !== "") {
    url = new URL("http://localhost:8000/medicines/filter");

    for (const [key, value] of Object.entries(filters)) {
      url.searchParams.append(key, value);
    }
  } else {
    url = new URL("http://localhost:8000/medicines");
  }

  // url.searchParams.append("limit", limit);

  const response = await fetch(url);
  const data = await response.json();
  loading.value = false;
  serverItems.value = data;
};

defineExpose({
  defineSearch,
  defineFilter,
});
</script>
