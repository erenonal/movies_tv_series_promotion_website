<template>
    <div v-for="(fieldName, index) in fieldNames" :key="index">
    <ProductSlider
      :id="fieldName"
      :movies="fieldName === 'Popular Movies' ? movies : tv"
      :header="fieldName"
    ></ProductSlider>
  </div>
</template>



<script setup>
import ProductSlider from "/src/components/ProductSlider.vue";
import { ref, watchEffect, toRaw } from "vue";
import { fetchData } from "/src/composables/tmdb";
import { useRouter } from 'vue-router';

const router = useRouter();
const fieldNames = ["Popular Movies", "Popular TV Series"];
const movies = ref([]);
const tv = ref([]);
const highRatingContext = ref({});

watchEffect(async () => {
  try {
    const response = await fetchData();
    movies.value = response.movie.allResults;
    tv.value = response.tv.allResults;
    highRatingContext.value.movie = toRaw(response.movie.highRatingResults);
    highRatingContext.value.tv = toRaw(response.tv.highRatingResults);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>