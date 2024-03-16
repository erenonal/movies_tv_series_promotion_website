<template>
  <TheHeader :ids="fieldNames"></TheHeader>
  <div v-for="(fieldName, index) in fieldNames" :key="index">
    <ProductSlider
      :id="fieldName"
      :movies="movies"
      :header="fieldName"
    ></ProductSlider>
  </div>
  <TheFooter></TheFooter>
</template>

<script setup>
import ProductSlider from "/src/components/ProductSlider.vue";
import TheHeader from "/src/components/TheHeader.vue";
import TheFooter from "/src/components/TheFooter.vue";
import { movies } from "/src/composables/movies";
const fieldNames = ["Popular Movies", "Popular TV Series"];
</script>

<style scoped></style>
