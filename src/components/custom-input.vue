<template>
  <div @click="isInputFocused = true">
    <div :class="isInputFocused ? 'grow-animation' : 'input'" class="d-flex">
      <v-text-field
        class="rounded-be-0 rounded-te-0"
        :class="isInputFocused ? 'input-field' : ''"
        variant="outlined"
        density="compact"
        placeholder="Pesquisar"
        :prepend-inner-icon="isInputFocused ? '' : 'mdi-magnify'"
        color="outlined"
        hide-details
        v-model="input"
      >
      </v-text-field>
      <v-btn
        v-show="isInputFocused"
        @click="search"
        icon="mdi-magnify"
        height="40px"
        width="40px"
        class="bg-accent rounded rounded-bs-0 rounded-ts-0 elevation-0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const input = ref("");

const emit = defineEmits(["search"]);

let isInputFocused = ref(false);

const search = () => {
  emit("search", input.value);
};

</script>

<style>
.input {
  width: 45px;
}

.input-field .v-field {
  border-radius: 4px 0 0 4px !important;
}

.grow-animation {
  animation: grow 1s ease-in-out forwards;
}

@keyframes grow {
  0% {
    width: 45px;
  }
  100% {
    width: 250px;
  }
}

@keyframes grow-all {
  0% {
    width: 45px;
  }
  100% {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .grow-animation {
    animation: grow-all 1s ease-in-out forwards;
  }
}
</style>
