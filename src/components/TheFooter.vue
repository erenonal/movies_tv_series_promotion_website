<template>
  <footer
    class="footer"
    :style="{
      '--footer-background': props.colorArr['vitalen-dark-5'],
      '--vitalen-white': props.colorArr['vitalen-white'],
    }"
  >
    <div class="container">
      <div class="left">
        <p>Eren ONAL</p>
      </div>
      <div class="right">
        <div class="column">
          <a
            href="https://www.linkedin.com/in/onaleren/"
            style="text-decoration: none"
            >LinkedIn</a
          >
        </div>
        <div class="column">
          <a href="https://github.com/erenonal/vitalen/" style="text-decoration: none"
            >Github</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["colorArr"]);
</script>

<style scoped>
.footer {
  background-color: var(--footer-background);
  color: var(--vitalen-white);
  padding: 1rem 0;
  text-align: center;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  flex: 1;
  text-align: start;
  margin-left: 5rem;
}

.right {
  display: flex;
}

.column {
  margin-left: 5rem;
  margin-right: 5rem;
}
.column a {
  color: var(--vitalen-white);
  cursor: pointer;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .left {
    flex: 1;
    text-align: center;
    margin: auto;
  }

}
</style>
