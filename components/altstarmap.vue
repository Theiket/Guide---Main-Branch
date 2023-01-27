<template>
  <div class="container">
  <table>
  <tbody>
  <tr>
  <td><starmapPyro /></td>
  </tr>
  <tr>
  </tr>
  <tr>
  <td><starmapStanton /></td>
  </tr>
  </tbody>
  </table>
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
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:var(--backgray);
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>