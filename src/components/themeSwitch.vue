<template>
  <v-switch
    v-model="darkMode"
    @click="toggleTheme"
    hide-details
    inline
    inset
    focused
    :color="darkMode ? 'blue-grey-darken-4' : 'white'"
  >
    <template #thumb>
      <img v-if="darkMode" src="@/assets/moon.svg" style="width: 125%" />
      <div v-else class="bg-yellow-darken-2 w-100 h-100" elevation-1 />
    </template>
    <template #track-false>
      <v-icon color="white" class="w-100 h-100">mdi-clouds</v-icon>
    </template>
    <template #track-true>
      <v-icon color="white" class="w-100 h-100" size="small"
        >mdi-creation</v-icon
      >
    </template>
  </v-switch>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
let storedTheme = localStorage.getItem("darkMode");
const darkMode = ref(storedTheme !== null ? storedTheme === "true" : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

onMounted(() => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
  emit("toggleTheme", darkMode.value);
});

const emit = defineEmits(["toggleTheme"]);

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  theme.global.name.value = darkMode.value ? "dark" : "light";
  localStorage.setItem("darkMode", darkMode.value);
  emit("toggleTheme", darkMode.value);
};
</script>

<style>
.v-switch--inset .v-switch__thumb {
  transform: scale(1) !important;
}

.v-switch--inset .v-switch__track {
  background-color: #27a4c3;
  width: 60px;
}
</style>
