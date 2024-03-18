<template>
  <div
    class="movie-container"
    :style="{
      '--vitalen-primary': props.colorArr['vitalen-dark-5'],
      '--vitalen-secondary': props.colorArr['vitalen-light-1'],
      '--vitalen-white': props.colorArr['vitalen-white'],
      '--vitalen-opac-indigo': props.colorArr['vitalen-opac-indigo'],
    }"
  >
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
const props = defineProps(["movies", "header", "colorArr"]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.movie-container {
  padding-top: 5rem;
  margin-inline-end: 1rem;
}

.main-header {
  color: var(--vitalen-primary);
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
  padding-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

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
  background-color: var(--vitalen-primary);
  outline: 1px solid var(--vitalen-secondary);
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
  color: var(--vitalen-white);
  font-size: 1.25rem;
}
.movie-card:hover {
  transform: scale(1.08);
  border-radius: 10px 0px 10px 10px;
}
</style>
