<template>
  <div
    class="banner-background"
    :style="{
      '--vitalen-white': colorArr['vitalen-white'],
      '--vitalen-light': colorArr['vitalen-light-1'],
    }"
  >
    <div style="backdrop-filter: blur(5px); min-height: 100vh">
      <div v-if="movieDetails" class="banner" ref="bannerElement">
        <div class="column">
          <p>
            {{ movieDetails.name }}
          </p>
        </div>
      </div>
      <div class="detail-container">
        <div class="detail-item">
          <div class="detail-item-subtitle">Release Date</div>

          {{ formatDateWithSlashes(movieDetails.release_date) }}
        </div>
        <div class="detail-item">
          <div class="detail-item-subtitle">Genres</div>

          <div v-for="(genre, index) in movieDetails.genres" :key="index">
            <span>{{ genre.name }}</span>
            <span v-if="index !== movieDetails.genres.length - 1">
              <span>{{ "\n" }}</span>
            </span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-item-subtitle">Status</div>
          <div>
            {{ movieDetails.status }}
          </div>
        </div>

        <div
          v-if="movieDetails.production_companies !== undefined"
          class="detail-item"
        >
          <div class="detail-item-subtitle">ProductionCompanie(s)</div>

          <div
            v-for="(prodCompany, index) in movieDetails.production_companies"
            :key="index"
          >
            <div>
              <span>{{ prodCompany.name }}</span>
              <span
                v-if="index !== movieDetails.production_companies.length - 1"
              >
                <span>{{ "\n" }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="detail-item" v-if="movieDetails.vote_average !== undefined">
          <div class="detail-item-subtitle">IMDB</div>
          <div>{{ movieDetails.vote_average.toFixed(1) }} / 10</div>
        </div>
      </div>
      <div class="responsive-paragraph">
        <div class="cast-header">Overview</div>
        <p>{{ movieDetails.overview }}</p>
      </div>

      <div class="cast-header">Cast</div>
      <div class="slider-container">
        <div class="slider">
          <div class="slide" v-for="(item, index) in movieCasting" :key="index">
            <CastSlider :character="item.character" :realName="item.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  ref,
  onMounted,
  watchEffect,
  onBeforeUnmount,
  watch,
} from "vue";
import CastSlider from "./CastSlider.vue"; 
import { colorArr } from "../composables/colorPalette";
const props = defineProps(["movieDetails", "movieCasting"]);
const startUrl = "https://image.tmdb.org/t/p/original";
watchEffect(() => {
  setBannerBackground();
});

function setBannerBackground() {
  const backdropPath = props.movieDetails?.backdrop_path;
  const bannerElement = document.querySelector(".banner");
  const bannerElementBackground = document.querySelector(".banner-background ");

  if (bannerElement && bannerElementBackground && backdropPath) {
    bannerElement.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%), url(${startUrl}/${backdropPath})`;
    bannerElement.style.backgroundSize = "cover";
    bannerElement.style.backgroundPosition = "end";
    bannerElement.style.position = "relative";
    bannerElement.style.zIndex = "2";
    bannerElement.style.overflow = "hidden";
    bannerElement.innerHTML = "";
    bannerElementBackground.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%), url(${startUrl}/${backdropPath})`;
    bannerElementBackground.style.backgroundSize = "cover";
    bannerElementBackground.style.overflow = "auto";
    bannerElementBackground.zIndex = "-1";
  }
}
function formatDateWithSlashes(dateString) {
  try {
    const parts = dateString.split("-");
    if (parts.length === 3) {
      return parts.join("/");
    } else {
      return dateString;
    }
  } catch {
    /*empty*/
  }
}
const screenWidth = ref(window.innerWidth);
const bannerElement = ref(null);

console.log(screenWidth.value);
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

watchEffect(() => {
  if (bannerElement.value) {
    if (screenWidth.value <= 768) {
      console.log(bannerElement.value.style.backgroundSize);
      bannerElement.value.style.backgroundSize = "100%";
      bannerElement.value.style.backgroundPosition = "30% 60%";
      console.log(bannerElement.value.style.backgroundSize);
    } else {
      bannerElement.value.style.backgroundSize = "";
      bannerElement.value.style.backgroundPosition = "";
    }
  }
});
</script>

<style scoped>
.banner-background {
  background-color: black;
  height: 100%;
}
.banner {
  width: 96%;
  margin: auto;
  border-radius: 0 0 5rem 5rem;
  box-shadow: 0px 20px 50px 10px rgba(0, 0, 0, 0.483);
  min-height: 500px;
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vitalen-white);
  overflow: hidden;
}
.detail-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 80%;
  margin: auto;
  margin-top: -2rem;
}

.detail-item {
  color: var(--vitalen-white);
  line-height: 1.5;
  border: solid 1px var(--vitalen-white);
  border-radius: 0 0 5rem 5rem;
  backdrop-filter: blur(200px);
  margin-top: -2rem;
  padding: 20px;
  text-align: center;
  z-index: 3;
  box-shadow: 0px 20px 50px 10px rgb(0, 0, 0);
}
.detail-item-subtitle {
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  font-weight: 900;
}
.cast-header {
  width: 50%;
  margin: auto;
  font-size: 3rem;
  text-align: center;
  color: var(--vitalen-white);
  padding: 2rem;
}
@media (max-width: 768px) {
  .detail-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
  .detail-item {
    font-size: 0.8rem;
    margin: 0;
    border-radius: 0 0 2rem 2rem;
    scale: 0.8;
  }
  .detail-container > div:nth-child(3) {
    grid-column: 1 / -1;
  }
}
.responsive-paragraph {
  color: var(--vitalen-white);
  max-width: 80%;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

.responsive-paragraph p {
  margin: 0;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .responsive-paragraph p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
.slider-container {
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
}

.slider {
  display: inline-flex;
}

.slide {
  flex: 0 0 auto;
  width: 15vh;
  margin-right: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .slide {
    width: 10vh;
  }

}
.slider-container::-webkit-scrollbar {
  width: 10rem;
  height: 0.5rem;
}

.slider-container::-webkit-scrollbar-track {
  background-color: var(--vitalen-white);
}

.slider-container::-webkit-scrollbar-thumb {
  background-color: var(--vitalen-light);
  border-radius: 2rem;
}
</style>
