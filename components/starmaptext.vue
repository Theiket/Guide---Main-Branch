<template>
  <div class="container">
    <div>
      <h1 class="title">
        Starmap goes here
      </h1>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Starmap'
  })
</script>

  <style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:var(--backgray);
}

.title {
  width:1200px;
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