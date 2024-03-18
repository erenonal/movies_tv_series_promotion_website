<template>
  <div class="product-detail">
    <div class="closeButtonContainer">
      <div class="closeButtonIcon" @click="goBack">X</div>
    </div>

    <div class="product-detail-header">
      <h1>{{ movieDetails.name ? movieDetails.name : movieDetails.title }}</h1>
    </div>

    <TheBanner :movieDetails="movieDetails" :movieCasting="movieCasting"></TheBanner>

    <!-- <div v-if="movieDetails && movieCasting" class="overlay">
      <p>{{ movieDetails.overview }}</p>
      <h3>Casting:</h3>
      <ul>
        <li v-for="(actor, index) in movieCasting" :key="index">
          {{ actor.name }} / {{ actor.character }}
        </li>
      </ul>
    </div>
    <div v-else>Loading...</div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchMovieDetails, fetchCasting } from "../composables/tmdb";
import TheBanner from "/src/components/TheBanner.vue";

const movieDetails = ref({});
const movieCasting = ref({});
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  try {
    const contentId = route.params.id;
    const contentType = route.params.contentType;
    movieDetails.value = await fetchMovieDetails(contentId, contentType);
    movieCasting.value = await fetchCasting(contentId, contentType);
  } catch (error) {
    console.error("Error fetching movie details or casting:", error);
  }
});
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.product-detail {
  align-items: center;
  justify-content: center;
  width: 100% ;
}
.overlay {
  margin-top: -20rem;
}
.product-detail-header {

  position: absolute;
  top: 0; 
  left: 50%;
  transform: translateX(-50%);
  padding-inline: 2rem;
  z-index:1; 
  color: white;
  border-radius: 0 0 5rem 5rem;
  border: solid 1px;
  backdrop-filter: blur(20px);
  box-shadow: 0px 10px 20px 10px rgb(5, 5, 5);
}

.product-detail-header h1 {
  text-align: center;
  font-size: 3rem;
}
.overlay h2 {
  font-size: 2rem;
  color: white;
}

.overlay p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: white;
}

.overlay ul {
  list-style-type: none;
  padding: 0;
  color: white;
}

.overlay ul li {
  font-size: 1rem;
  color: white;
}
.closeButtonIcon {
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 0.5rem; 
  right: 2rem;
  z-index: 999;

  color: white;
  border-radius: 0 0 5rem 5rem;
  border: solid 1px;
  backdrop-filter: blur(20px);
  box-shadow: 0px 10px 20px 10px rgb(5, 5, 5);
}
.closeButtonIcon:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.2
  );

  top: 0.5rem; 
  right: 2rem; 
}

.closeButtonIcon:active {
  transform: scale(0.95);

  top: 0.75rem; 
  right: 2rem; 
}

.closeButtonContainer {
  position: relative;
  width: 100%;
}
</style>
