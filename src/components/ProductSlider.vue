<template>
  <div class="movie-container">
    <h1 class="main-header">{{ props.header }}</h1>
    <div class="movie-slider">
      <div class="movie-list">
        <div
          v-for="(movie, index) in props.movies"
          :key="index"
          class="movie-card"
        >
          <ProductCard
            :movie="movie"
            :contentType="props.header === 'Popular Movies' ? 'movie' : 'tv'"
          >
          </ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductCard from "/src/components/ProductCard.vue";
const props = defineProps(["movies", "header"]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.movie-container {
  padding-top: 5rem;
  margin-inline-end: 1rem;
}

.main-header {
  color: crimson;
  display: block;
  text-align: start;
  font-size: 1.5rem;
}

.movie-slider {
  position: relative;
}

.movie-slider::before {
  content: "";
  height: 25vh;
  display: block;
  position: absolute;
  left: 0;
  z-index: 1;
}

.movie-slider::after {
  content: "";
  height: 25vh;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.movie-list {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 3rem;
}

.movie-list::-webkit-scrollbar {
  width: 15px;
  height: 10px;
}

.movie-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.movie-list::-webkit-scrollbar-thumb {
  background-color: rgb(61, 61, 61);
  outline: 1px solid slategrey;
  border-radius: 50px;
}

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
