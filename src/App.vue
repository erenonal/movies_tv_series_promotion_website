<template>
  <Header
    v-if="isHomePage"
    :ids="fieldNames"
    :popularMoviesAndSeries="highRatingContext"
    :colorArr="colorArr"
    class="main-components"
  />
  <div class="main-components">
    <router-view></router-view>
  </div>
  <Footer :colorArr="colorArr" />
</template>

<script setup>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
import Home from "./views/Home.vue";
import { ref, watchEffect, toRaw, computed } from "vue";
import { fetchData } from "./composables/tmdb";
import { useRouter } from "vue-router";
import { colorArr } from "./composables/colorPalette";
const router = useRouter();

const fieldNames = ref(["Popular Movies", "Popular TV Series"]);
const movies = ref([]);
const tv = ref([]);
const highRatingContext = ref({});
const isHomePage = computed(() => router.currentRoute.value.path === "/");

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

<style>
#app {
  font-family: Arial, sans-serif;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
