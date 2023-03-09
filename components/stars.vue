<template>
<div class="star-container">
      <div v-for="star in Array(300).fill(0).map(_ => [Math.random()*100, Math.random()*100])">
        <div class="star"
          :style="{
            left: `${star[0]}%`,
            top: `${star[1]}%`,
            animation: `${Math.random() * 10+2}s flash linear infinite`,
          }"
        ></div>
      </div>
    </div>
</template>

<style scoped>
  .star-container {
    position: absolute;
    top:-25%;
    left:-25%;
    width: 150vw;
    height: 150vh;
    overflow: hidden;
    background:var(--backgray);
    animation: 4.2s appear, gravity 1200s linear infinite;
    opacity:0.7;
    z-index:0;
    }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: white;
    border-radius: 100%;
    }

  @keyframes gravity {
    to {
      transform: rotate(360deg);
    }
    }
</style>