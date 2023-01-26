<template>
  <div class="container">
    <NuxtLink to="/starmap">
    <div class="systemStanton">
    <br>
    <br>
    <p class="planetText">Visit Stanton</p>
    </div>
    </NuxtLink>
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
  animation: 1s appear;
}

.systemStanton {
  height: 50px;
  width: 50px;
  background-color: var(--lightgray);
  border-radius: 50%;
}
.systemStanton:hover {
  background-color: var(--orangehover);
}
.systemStanton .planetText {
  font: bold 15px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  text-transform:capitalize;
  opacity:0;
  position:relative;
  color:var(--lightorange);
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  width:100px;
}
.systemStanton:hover .planetText{
  opacity:1;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>