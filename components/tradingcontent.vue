<template>
<div class="container">
    <div>
      <h1 class="title">
        Trading goes here
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
  background-color:#24262B;
}

.title {
  width:1200px;
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: #CF6A2F;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>