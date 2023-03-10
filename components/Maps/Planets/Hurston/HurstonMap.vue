<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">HURSTON</h1>
    </div>
    <div class="solar-system">
      <div class="orbit ita-orbit">
        <div class="planet ita">
        <br>
        <p>Ita</p>
        </div>
      </div>
      <div class="orbit magda-orbit">
        <div class="planet magda">
        <br>
        <p>Magda</p>
        </div>
      </div>
      <div class="orbit aberdeen-orbit">
        <div class="planet aberdeen">
        <br>
        <p>Aberdeen</p>
        </div>
      </div>
      <div class="orbit arial-orbit">
        <div class="planet arial">
        <br>
        <p>Arial</p>
        </div>
      </div>
      <div class="hurston" @click="changeComponent('StantonMap')"></div>
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
  .ita-orbit {
    width: 240px;
    height: 240px;
    rotate:-10deg;
    }
  .magda-orbit {
    width: 180px;
    height: 180px;
    rotate:225deg;
    }
  .aberdeen-orbit {
    width: 120px;
    height: 120px;
    rotate:60deg;
    }
  .arial-orbit {
    width: 90px;
    height: 90px;
    rotate:125deg;
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
  .planet.arial {
    background-color:#C5703B;
    rotate:-125deg;
    z-index:1;
    }
  .planet.aberdeen {
    background-color:#D2BC61;
    rotate:-60deg;
    z-index:1;
    }
  .planet.magda {
    background-color:#C9B090;
    rotate:-225deg;
    }
  .planet.ita {
    background-color:#D2A061;
    rotate:10deg;
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
  .planet.arial p {
    margin-inline-start:-15px;
    }
  .planet.aberdeen p {
    margin-inline-start:-22px;
    margin-block-start:-22px;
    }
  .planet.magda p {
    margin-inline-start:-17px;
    }
  .planet.ita p {
    margin-inline-start:-12px;
    }
/* Hurston */
  .hurston {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CF3A2F;
    z-index:1;
    }
  .hurston:hover {
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
  @keyframes appear5 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    80% {
      opacity:0;
      scale:0.8;
      rotate:0deg;
      }
    }

  .hurston {
    animation: 1s appear1;
    }
  .arial-orbit {
    animation: 2s appear2;
    }
  .aberdeen-orbit {
    animation: 3s appear3;
    }
  .magda-orbit {
    animation: 4s appear4;
    }
  .ita-orbit {
    animation: 4.2s appear5;
    }

</style>