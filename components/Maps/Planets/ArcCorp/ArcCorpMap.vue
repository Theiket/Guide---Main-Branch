<template>
  <div class="container">
    <div class="systemName">
        <h1 @click="changeComponent('StantonMap')">ARCCORP</h1>
    </div>
    <div class="solar-system">
      <div class="orbit wala-orbit">
        <div class="planet wala">
        <br>
        <p>Wala</p>
        </div>
      </div>
      <div class="orbit lyria-orbit">
        <div class="planet lyria">
        <br>
        <p>Lyria</p>
        </div>
      </div>
        <div class="arccorp" @click="changeComponent('StantonMap')"></div>
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
  .wala-orbit {
    width: 180px;
    height: 180px;
    rotate:320deg;
    }
  .lyria-orbit {
    width: 100px;
    height: 100px;
    rotate:70deg;
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
  .planet.lyria {
    background-color:#EEE3F1;
    rotate:-70deg;
    z-index:1;
    }
  .planet.wala {
    background-color:#EFC2A1;
    rotate:-320deg;
    z-index:1;
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
  .planet.lyria p {
    margin-inline-start:-15px;
    }
  .planet.wala p {
    margin-inline-start:-15px;
    margin-block-start:-3px;
    }
/* ArcCorp */
  .arccorp {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CF2F55;
    z-index:1;
    }
  .arccorp:hover {
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
  .arccorp {
    animation: 1s appear1;
    }
  .lyria-orbit {
    animation: 2s appear2;
    }
  .wala-orbit {
    animation: 3s appear3;
    }
</style>