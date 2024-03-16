<template>
  <header>
    <div class="navbar">
      <div class="logo">LOGO</div>
      <nav>
        <button
          v-for="(id, index) in props.ids"
          :key="index"
          @click="navigateTo(id)"
        >
          {{ id }}
        </button>
      </nav>
    </div>
    <div class="row">
      <div class="column movie-card">
        <img :src="movies[0].poster" alt="Image 1" />
      </div>
      <div class="column header-motto">
        <p>Welcome to the</p>
        <p>
          <span class="bold-text">World of TV Series & Movies</span>
        </p>
      </div>
      <div class="column movie-card">
        <img :src="movies[1].poster" alt="Image 2" />
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps(["ids"]);

const movies = [
  {
    title: "I am not okay with this",
    rating: "7.8/10",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title: "I am not okay with this",
    rating: "7.8/10",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
];
const navigateTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
header {
  min-height: 500px;
  height: 40vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  overflow: hidden; /* Ensure that the pseudo-element doesn't overflow */
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/Users/eren/Desktop/vitalen/vitalen/src/assets/background_image.png");
  background-size: cover;
  background-position: center;
  filter: hue-rotate(280deg);
  z-index: -1;
}

.navbar {
  border-radius: 6px;
  margin: 2rem;
  position: absolute;
  top: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(to right, #888, #222, transparent);
  color: black;
}

.logo {
  font-size: 24px;
}

nav button {
  padding: 8px 16px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

nav button:first-child {
  margin-left: 0;
}
nav button {
  padding: 8px 16px;
  margin-left: 10px;
  background-color: transparent;
  color: crimson;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

nav button:first-child {
  margin-left: 0;
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
  position: absolute;
  left: 0;
  z-index: 1;
}

.movie-slider::after {
  content: "";
  height: 25vh;
  width: 20%;
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
  padding: 2rem;
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
  margin: 0 2rem -5rem;
  height: 25vh;
  cursor: pointer;
  position: relative;
  transition: all 1s;
}
.movie-card h1 {
  padding-top: 1rem;
  text-align: center;
  color: #fff;
}
.movie-card:hover {
  /* box-shadow: 0px 10px 20px #000000; */
  transform: scale(1.08);
}

.movie-poster {
  height: 25vh;
  border-radius: 10px 10px 0px 0px;
}

.movie-info {
  height: 100%;
  padding: 0px 10px;
}

.movie-title {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -1px;
  margin-bottom: 38px;
}

.imdb-button {
  font-weight: 700;
  background-color: blue;
  padding: 2px 12px;
  border-radius: 5px 5px 0 0;
  border: 3px solid transparent;
  color: white;
  position: absolute;
  z-index: 999;
  right: 0;
  top: -10.5%;
}

.movie-info-overlay {
  backdrop-filter: blur(5px);
  text-align: center;
  justify-content: center;
  align-content: center;
  height: 30%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(168, 0, 194, 0.198); /* Adjust the opacity as needed */

  opacity: 1; /* Initially hidden */
  transition: opacity 0.3s ease;
}

.row {
  display: flex;
  flex-wrap: wrap; /* Allows the columns to wrap to the next line if necessary */
  width: 100%;
}

.column {
  flex: 1; /* Each column takes up an equal amount of space */
  max-width: 33%; /* Each column can take up to 33% of the parent container */
  padding: 10px;
  box-sizing: border-box; /* Ensures padding is included in the width */
}

.column img {
  max-width: 100%; /* Ensures images don't exceed the column width */
}

.column p {
  font-size: 1.5rem;
}
.header-motto {
  margin-top: -3rem;
}
@media (max-width: 768px) {
  .column {
    max-width: 100%; /* Each column takes up 100% of the parent container on smaller screens */
  }
}
.bold-text {
  font-weight: bold; /* Makes the text bold */
}
</style>
