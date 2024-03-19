<template>
  <div
    v-if="movie"
    class="movie-card"
    @click="handleClick(movie.id, props.contentType)"
    :style="{
      '--vitalen-primary': colorArr['vitalen-dark-5'],
      '--vitalen-white': colorArr['vitalen-white'],
      '--vitalen-opac-indigo': colorArr['vitalen-opac-indigo'],
    }"
  >
    <div :id="movie.id" class="imdb-button">
      {{ movie.vote_average.toFixed(1) }} / 10
    </div>
    <img
      :src="`${startUrl}${movie.poster_path}`"
      :alt="`{{ movie.name ? movie.name : movie.title }} poster`"
      class="movie-poster"
    />
    <div class="movie-info-overlay">
      <div class="movie-info">
        <h1 class="movie-title">
          {{ movie.name ? movie.name : movie.title }}
        </h1>
      </div>
    </div>
  </div>
  <div v-else style="text-align: center; width: 30%">
    <p>Loading...</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { fetchMovieDetails, fetchCasting } from "../composables/tmdb";
import { useRouter } from "vue-router";
import { colorArr } from "../composables/colorPalette";
const props = defineProps(["movie", "contentType"]);
const startUrl = "https://image.tmdb.org/t/p/original";
const movieDetails = ref({});
const movieCasting = ref({});
const router = useRouter();

const handleClick = async (contentId, contentType) => {
  try {
    localStorage.setItem("clickedElementId", contentId);

    movieDetails.value = await fetchMovieDetails(contentId, contentType);
    movieCasting.value = await fetchCasting(contentId, contentType);
    router.push({
      name: "movieDetails",
      params: { id: contentId, contentType: contentType },
    });
  } catch (error) {
    console.error("Error fetching movie details or casting:", error);
  }
};

const scrollToClickedElement = () => {
  const clickedElementId = localStorage.getItem("clickedElementId");
  if (clickedElementId) {
    const clickedElement = document.getElementById(clickedElementId);
    if (clickedElement) {
      clickedElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

onMounted(scrollToClickedElement);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.movie-card {
  min-height: 250px;
  height: 30vh;
  cursor: pointer;
  margin: 1rem 2rem;
  position: relative;
  transition: all 1s;
}

.movie-card:first-child {
  margin-left: 0;
}

.movie-card:last-child {
  margin-right: 0;
}
.movie-card h1 {
  padding-top: 1rem;
  text-align: center;
  color: var(--vitalen-white);
  font-size: 1.25rem;
}
.movie-card:hover {
  transform: scale(1.08);
  border-radius: 10px 0px 10px 10px;
}

.movie-poster {
  min-height: 250px;
  height: 30vh;
  border-radius: 10px 0px 10px 10px;
}

.movie-info {
  height: 100%;
  padding: 0px 10px;
}

.movie-title {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -1px;
  padding-bottom: 1rem;
}

.imdb-button {
  font-weight: 700;
  background-color: var(--vitalen-primary);
  padding: 2px 12px;
  border-radius: 5px 5px 0 0;
  border: 3px solid transparent;
  color: var(--vitalen-white);
  font-size: 1rem;
  position: absolute;
  right: 0;
  height: 50px;
  top: -9%;
  z-index: -1;
}

.movie-info-overlay {
  border-radius: 10px 0px 10px 10px;
  height: max-content;
  backdrop-filter: blur(5px);
  text-align: center;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: var(--vitalen-opac-indigo);
  opacity: 1;
  transition: opacity 0.3s ease;
}
@media (max-width: 768px) {
  .movie-info-overlay {
    background-color: var(--vitalen-primary) !important;
    z-index: 5;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
