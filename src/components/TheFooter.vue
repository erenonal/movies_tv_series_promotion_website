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
</script>

<style scoped>
.footer {
  background-color: crimson;
  color: #fff;
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
  margin-left: 5rem ;
}

.right {
  display: flex;
}

.column {
  margin-left: 5rem;
  margin-right: 5rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
