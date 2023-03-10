<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">CRUSADER</h1>
    </div>
    <div class="solar-system">
      <div class="orbit yela-orbit">
        <div class="planet yela">
        <br>
        <p>Yela</p>
        </div>
      </div>
      <div class="orbit daymar-orbit">
        <div class="planet daymar">
        <br>
        <p>Daymar</p>
        </div>
      </div>
      <div class="orbit cellin-orbit">
        <div class="planet cellin">
        <br>
        <p>Cellin</p>
        </div>
      </div>
      <div class="crusader" @click="changeComponent('StantonMap')"></div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      changeComponent(componentName) {
      this.$emit('component-changed', componentName);
      },
    },
  };
</script>

<style scoped>
/* General */
  .container {
    user-select:none;
    }
  .systemName {
    animation: 1.5s slideappear;
    }

  .solar-system {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    scale:285%;
    position:absolute;
    margin-block-start:20%;
    margin-inline-start:40%;
    }

/* Orbit */
  .orbit {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--lightorange);
    border-radius: 50%;
    z-index:-1;
    }  
  .yela-orbit {
    width: 230px;
    height: 230px;
    rotate:320deg;
    }
  .daymar-orbit {
    width: 180px;
    height: 180px;
    rotate:40deg;
    }
  .cellin-orbit {
    width: 150px;
    height: 150px;
    rotate:210deg;
    }
/* Moons */
  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    }
  .planet.cellin {
    background-color:#EEE3F1;
    rotate:-210deg;
    z-index:1;
    }
  .planet.daymar {
    background-color:#A2793A;
    rotate:-40deg;
    z-index:1;
    }
  .planet.yela {
    background-color:#6B6A6A;
    rotate:-320deg;
    }
  .planet:hover {
    box-shadow:0px 0px 5px black;
    top:-6.5px;
    width:13px;
    height:13px;
    cursor:pointer;
    }
  .planet p {
    visibility:hidden;
    rotate:0deg;
    margin-block-start:-3px;
    }
  .planet:hover p {
    color:var(--lightgray);
    visibility:visible;
    }
  .planet.cellin p {
    margin-inline-start:-15px;
    }
  .planet.daymar p {
    margin-inline-start:-20px;
    margin-block-start:-5px;
    }
  .planet.yela p {
    margin-inline-start:-14px;
    }
/* Crusader */
  .crusader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #6C4975;
    z-index:1;
    }
  .crusader:hover {
    box-shadow:0px 0px 5px black;
    width:35px;
    height:35px;
    cursor:pointer;
    }

/* Text */
  .systemName {
    color: var(--lightorange);
    letter-spacing:1px;
    margin-block-start:0px;
    text-decoration:none;
    display:inline-block;
    width:15%;
    position:absolute;
    margin-inline-start:20%;
    margin-block-start:5%;
    border-bottom-style:solid;
    border-width:2px;
    border-color:var(--lightgray);
    padding-inline-start:10px;
    z-index:1;
    }
  .systemName h1 {
    font: 35px 'Segoe UI', sans-serif;
    font-weight:bold;
    }
  .systemName a {
    color:var(--lightorange);
    }
  .systemName a:hover {
    color:var(--orangehover);
    }

  p {
    font-weight: 300;
    font-family: 'Segoe UI', sans-serif;
    font-size: 5px;
    font-weight:bold;
    letter-spacing:0.5px;
    color: var(--lightgray);
    padding-block-end: 15px;
    padding-inline-start:15px;
    padding-inline-end:15px;
    }

/* Animations */
  @keyframes slideappear {
    0% {
      opacity: 0;
      left:-500px;
      }
    75% {
      opacity:0;
      }
    100% {
      opacity: 1;
      left:25px;
      }
    }
  @keyframes appear1 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      }
    }
  @keyframes appear2 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  @keyframes appear3 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  @keyframes appear4 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  .crusader {
    animation: 1s appear1;
    }
  .cellin-orbit {
    animation: 2s appear2;
    }
  .daymar-orbit {
    animation: 3s appear3;
    }
  .yela-orbit {
    animation: 4s appear4;
    }
</style>