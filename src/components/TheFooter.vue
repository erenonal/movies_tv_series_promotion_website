<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <p>Eren ONAL</p>
      </div>
      <div class="right">
        <div class="column">
          <a href="https://www.linkedin.com/in/onaleren/">LinkedIn</a>
        </div>
        <div class="column">
          <a href="https://github.com/erenonal">Github</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script setup logic required for this example
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  flex: 1;
  text-align: start;
}

.right {
  display: flex;
}

.column {
  margin-left: 20px; /* Adjust spacing between the columns */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
