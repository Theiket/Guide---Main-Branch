<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">MICROTECH</h1>
    </div>
    <div class="solar-system">
      <div class="orbit euterpe-orbit">
        <div class="planet euterpe">
        <br>
        <p>Euterpe</p>
        </div>
      </div>
      <div class="orbit clio-orbit">
        <div class="planet clio">
        <br>
        <p>Clio</p>
        </div>
      </div>
      <div class="orbit calliope-orbit">
        <div class="planet calliope">
        <br>
        <p>Calliope</p>
        </div>
      </div>
      <div class="microtech" @click="changeComponent('StantonMap')"></div>
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
  .euterpe-orbit {
    width: 250px;
    height: 250px;
    rotate:165deg;
    }
  .clio-orbit {
    width: 225px;
    height: 225px;
    rotate:170deg;
    }
  .calliope-orbit {
    width: 150px;
    height: 150px;
    rotate:250deg;
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
  .planet.calliope {
    background-color:grey;
    rotate:-250deg;
    z-index:1;
    }
  .planet.clio {
    background-color:#bd986f;
    rotate:-170deg;
    z-index:1;
    }
  .planet.euterpe {
    background-color:#debf9d;
    rotate:-165deg;
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
  .planet.calliope p {
    margin-inline-start:-18px;
    }
  .planet.clio p {
    margin-inline-start:-13px;
    margin-block-start:-3px;
    }
  .planet.euterpe p {
    margin-inline-start:-18px;
    }
/* microTech */
  .microtech {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    z-index:1;
    }
  .microtech:hover {
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
  .microtech {
    animation: 1s appear1;
    }
  .calliope-orbit {
    animation: 2s appear2;
    }
  .clio-orbit {
    animation: 3s appear3;
    }
  .euterpe-orbit {
    animation: 4s appear4;
    }
</style>