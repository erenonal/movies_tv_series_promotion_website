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
          <div class="imdb-button">{{ movie.rating }}</div>
          <img
            :src="movie.poster"
            :alt="movie.title + ' poster'"
            class="movie-poster"
          />
          <div class="movie-info-overlay">
            <div class="movie-info">
              <h1 class="movie-title">{{ movie.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["movies", "header"]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.movie-container {
  margin-inline-end: 1rem;
}

.main-header {
  color: crimson;
  display: block;
}

.movie-slider {
  position: relative;
}

.movie-slider::before {
  content: "";
  height: 25vh;
  display: block;
  /*  width: 100px;
 background: linear-gradient(to right, black, transparent); */
  position: absolute;
  left: 0;
  z-index: 1;
}

.movie-slider::after {
  content: "";
  height: 25vh;
  display: block;
  /*  width: 100px;
 background: linear-gradient(to left, black, transparent); */
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

/* Apply styles only to the first .movie-card element */
.movie-card:first-child {
  margin-left: 0;
}

/* Apply styles only to the last .movie-card element */
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
  background-color: rgba(168, 0, 194, 0.198); /* Adjust the opacity as needed */
  opacity: 1; /* Initially hidden */
  transition: opacity 0.3s ease;
}
</style>
