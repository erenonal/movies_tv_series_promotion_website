<template>
  <header>
    <div
      class="navbar"
      :class="{ fixed: isNavbarFixed, navbar: !isNavbarFixed }"
      :style="{
        '--navbar-light': props.colorArr['vitalen-light-5'],
        '--navbar-black': props.colorArr['vitalen-black'],
        '--vitalen-navbar-gradient': props.colorArr['vitalen-navbar-gradient'],
      }"
    >
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
    <div class="row movie-card">
      <ProductCard
        v-if="ctx.movie"
        :movie="ctx.movie[randomIndexMovie]"
        :contentType="contentType[0]"
      >
      </ProductCard>
      <div v-else>Loading</div>
      <div class="column header-motto">
        <p>Welcome to the</p>
        <p>
          <span class="bold-text">World of TV Series & Movies</span>
        </p>
      </div>
      <ProductCard
        v-if="ctx.tv"
        :movie="ctx.tv[randomIndexTv]"
        :contentType="contentType[1]"
      >
      </ProductCard>
      <div v-else>Loading</div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, reactive, defineProps, ref, watch, watchEffect } from "vue";
import ProductCard from "/src/components/ProductCard.vue";
const isNavbarFixed = ref(false);
const props = defineProps(["ids", "popularMoviesAndSeries", "colorArr"]);
const contentType = ["movie", "tv"];
const ctx = ref({});
let randomIndexMovie = ref(0);
let randomIndexTv = ref(0);
function handleScroll() {
  if (window.scrollY > 100) {
    isNavbarFixed.value = true;
  } else {
    isNavbarFixed.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
watchEffect(() => {
  ctx.value = props.popularMoviesAndSeries;
  if (ctx.value.tv && ctx.value.movie !== undefined) {
    randomIndexMovie = Math.floor(Math.random() * ctx.value.movie.length);
    randomIndexTv = Math.floor(Math.random() * ctx.value.tv.length);
  }
});

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
  overflow: hidden;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/background_image.png");
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
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: var(--vitalen-navbar-gradient);
  color: black;
}

.fixed {
  width: 93%;
  border-radius: 6px;
  margin: 2rem;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: var(--vitalen-navbar-gradient-mobile);
  color: black;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
}

.logo {
  font-size: 24px;
  color: var(--vitalen-black);
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
  color: var(--navbar-light);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

nav button:first-child {
  margin-left: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  margin-top: 8rem;
  scale: 0.95;
}

@media (max-width: 768px) {
  .row {
    display: flex;
    flex-wrap: nowrap;
    scale: 0.7;
    margin-left: -3rem;
    margin-top: -2rem;
  }
  .navbar {
    width: 85%;
  }
}
.column {
  flex: 1;
  max-width: 33%;
  padding: 10px;
  box-sizing: border-box;
}

.column img {
  max-width: 100%;
}

.column p {
  font-size: 1.5rem;
}
.header-motto {
  margin-top: -3rem;
  text-align: center;
}
@media (max-width: 768px) {
  .column {
    max-width: 100%;
  }
}
.bold-text {
  font-weight: bold;
}
</style>
