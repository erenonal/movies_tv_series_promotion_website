<template>
      <h2>{{ details.name ? details.name : details.title }}</h2>
      <p>{{ details.overview }}</p>
      <h3>Casting:</h3>
      <ul>
        <li v-for="actor in casting.cast" :key="actor.id">{{ actor.name }}</li>
      </ul>
      <button>Close</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["details", "casting"]);

</script>

<style scoped>


.overlay h2 {
  font-size: 24px;
}

.overlay p {
  font-size: 16px;
  margin-bottom: 10px;
}

.overlay ul {
  list-style-type: none;
  padding: 0;
}

.overlay ul li {
  font-size: 14px;
}

</style>
