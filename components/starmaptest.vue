<template>
  <starmapStarMap />
</template>

<script setup>
  useHead({
    title: 'GUIDE | Starmap'
  })
</script>

  <style scoped>

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