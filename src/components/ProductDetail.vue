<template>
  <div
    class="product-detail"
    :style="{
      '--vitalen-primary': colorArr['vitalen-dark-5'],
      '--vitalen-var(--vitalen-white)':
        colorArr['vitalen-var(--vitalen-white)'],
    }"
  >
    <div class="closeButtonContainer">
      <div class="closeButtonIcon" @click="goBack(movieDetails.id)">X</div>
    </div>
    <div class="product-detail-header">
      <h1>{{ movieDetails.name ? movieDetails.name : movieDetails.title }}</h1>
    </div>
    <DetailPage
      :movieDetails="movieDetails"
      :movieCasting="movieCasting"
    ></DetailPage>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchMovieDetails, fetchCasting } from "../composables/tmdb";
import DetailPage from "/src/components/DetailPage.vue";
import { colorArr } from "../composables/colorPalette";

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
  width: 100%;
}
.overlay {
  margin-top: -20rem;
}
.product-detail-header {
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  padding-inline: 2rem;
  z-index: 1;
  color: var(--vitalen-white);
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
  color: var(--vitalen-white);
}

.overlay p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--vitalen-white);
}

.overlay ul {
  list-style-type: none;
  padding: 0;
  color: var(--vitalen-white);
}

.overlay ul li {
  font-size: 1rem;
  color: var(--vitalen-white);
}
.closeButtonIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: var(--vitalen-white);
  cursor: pointer;
  position: absolute;
  right: 2rem;
  z-index: 999;
  top: -0.5rem;
  color: var(--vitalen-white);
  border-radius: 0 0 5rem 5rem;
  border: solid 1px;
  backdrop-filter: blur(20px);
  box-shadow: 0px 10px 20px 10px rgb(5, 5, 5);
}
.closeButtonIcon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  top: -0.5rem;

  right: 2rem;
}

.closeButtonIcon:active {
  transform: scale(0.95);
  top: -0.5rem;

  right: 2rem;
}

.closeButtonContainer {
  position: relative;
  width: 100%;
}
@media (max-width: 768px) {
  .product-detail-header h1 {
    text-align: center;
    font-size: 2rem;
  }
}
</style>
