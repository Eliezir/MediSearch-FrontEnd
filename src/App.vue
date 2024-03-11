<template>
  <v-app>
    <v-main>
      <navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import navbar from './components/navbar.vue';
</script>
