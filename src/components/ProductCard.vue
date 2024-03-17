<template>
  <div v-if="movie" class="movie-card">
    <div class="imdb-button">{{ movie.vote_average.toFixed(1) }} / 10</div>
    <img
      :src="`${startUrl}${movie.poster_path}`"
      :alt="`{{ movie.name ? movie.name : movie.title }} poster`"
      class="movie-poster"
    />
    <div class="movie-info-overlay">
      <div class="movie-info">
        <h1 class="movie-title">{{ movie.name ? movie.name : movie.title }}</h1>
      </div>
    </div>
  </div>
  <div v-else style="text-align: center; width: 30%;">
    <p>Loading...</p>
  </div>
</template>
<script setup>
import { watchEffect } from 'vue';

const props = defineProps(["movie"]);
const startUrl = "https://image.tmdb.org/t/p/original";

watchEffect(() => {
  if (props.movie !== undefined) {
    /*empty*/
  } else {
    /*empty*/
  }
});
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
  color: #fff;
  font-size: 1.25rem;
}
.movie-card:hover {
  /* box-shadow: 0px 10px 20px #000000; */
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
  background-color: blue;
  padding: 2px 12px;
  border-radius: 5px 5px 0 0;
  border: 3px solid transparent;
  color: white;
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
  background-color: rgba(168, 0, 194, 0.198); 
  opacity: 1; 
  transition: opacity 0.3s ease;
}
</style>
