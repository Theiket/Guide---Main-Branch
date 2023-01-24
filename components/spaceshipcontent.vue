<template>
<div class="container">
    <div>
      <h1 class="title">
        Spaceships go here
      </h1>
    </div>
  </div>
</template>

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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-block-end: 15px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>