<template>
<div class="container">
    <div>
      <div>
      <h1 class="title">
        Meet GUIDE
      </h1>
      </div>
      <br>
      <div style="border-top:1px solid var(--lightorange); border-radius:2%;">
      <h1 class="title">
        Your personal space companion
      </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:var(--backorange);
}

.title {
  width:1000px;
  animation: 1s appear;
  font: bold 64px/64px 'Segoe UI', sans-serif;
  display: inline;
  color: var(--lightorange);
  letter-spacing: 1px;
  user-select:none;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>