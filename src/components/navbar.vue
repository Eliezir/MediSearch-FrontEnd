<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar
    id="navbar"
    elevation="0"
    class="elevation-0 flat align-self-center d-flex bg-background"
  >
    <div class="d-none d-sm-flex align-center justify-space-between w-100">
      <div class="d-flex align-center">
        <router-link to="/">
          <img :src="logoImage" :width="150" />
        </router-link>
      </div>

      <div class="d-flex justify-center align-center ga-1">
        <router-link
          class="nav-link px-2 mx-5 text-text"
          v-for="page in pages"
          :key="page.name"
          :to="page.path"
          >{{ page.name }}</router-link
        >
        <span class="text-h5 mr-7"> | </span>
        <themeSwitch @toggleTheme="(e) => (darkMode = e)" />
      </div>
    </div>

    <div class="d-flex d-sm-none justify-space-between w-100 align-center">
      <v-app-bar-nav-icon
        color="text"
        class="d-flex d-sm-none"
        size="70"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link to="/">
        <img :src="logoImage" :width="125" />
      </router-link>
      <themeSwitch class="mr-3" @toggleTheme="(e) => (darkMode = e)" />
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    temporary
    elevation="0"
    class="bg-background d-flex d-sm-none"
  >
    <v-list>
      <v-list-item v-for="page in pages" :key="page.name" :to="page.path">
        <v-list-item-title class="font-weight-bold text-uppercase text-text">
          {{ page.name }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
const darkMode = ref(localStorage.getItem("darkMode") === "true");
const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Medicamentos",
    path: "/medicines",
  },
];

const drawer = ref(false);

const logoImage = computed(() => {
  return darkMode.value ? logoDark : logoLight;
});
</script>

<style>
:root {
  --primary: #0e2f42;
  --secondary: #0086c7;
  --background: #fff;
  --text: #1e1e1e;
}
</style>

<style scoped>
a {
  text-decoration: none;
  transition: all ease 0.5s;
  font-weight: bold;
}

.nav-link {
  display: inline-block;
  list-style: none;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
}

.nav-link::after {
  content: "";
  width: 0;
  height: 3px;
  background: var(--secondary);
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0.5s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #1e1e1e;
}

#navbar {
  left: 12.5% !important;
  width: 75% !important;
}

@media screen and (max-width: 960px) {
  #navbar {
    left: 0 !important;
    width: 100% !important;
  }
}
</style>
