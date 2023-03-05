<template>
  <div class="container">
      <div>
        <h1 class="title">
          Trading will come soon
        </h1>
      </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Trading'
  })
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:var(--backgray);
  user-select:none;
}

.title {
  width:1000px;
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>