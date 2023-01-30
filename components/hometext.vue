<template>
<div class="container">
    <div>
      <h1 class="title">
        Meet GUIDE.<br>Your personal space companion.
      </h1>
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
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: flex;
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