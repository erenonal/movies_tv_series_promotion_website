<template>
  <div class="content-container">
    <div class="image-row">
      <img src="../assets/anonim_pp.png" />
    </div>
    <div class="text-row">
      <p>{{ props.realName }}</p>
    </div>
    <div class="context-row">
      <p>({{ props.character }})</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["character", "realName"]);

const imageUrl = ref("");
const text = ref("");
const context = ref("");
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .content-container {
    scale: 0.75;
  }
  .text-row,
  .context-row p {
    text-align: center;
    color: white;
    font-weight: 900;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide any overflow */
  }
}
.image-row {
  margin-bottom: 10px;
}

.content-container img {
  max-height: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
}
.text-row,
.context-row {
  text-align: center;
  color: white;
  font-weight: 900;
  white-space: nowrap; /* Prevent text from wrapping */
}
</style>
