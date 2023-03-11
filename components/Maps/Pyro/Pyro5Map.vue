<template>
  <div class="container">
    <div class="systemName">
        <h1 @click="changeComponent('PyroMap')">PYRO V</h1>
    </div>
    <div class="solar-system">
    <div class="orbit vuur-orbit">
        <div class="background vuur">
          <div class="planet vuur">
            <br>
            <p>VUUR</p>
          </div>
        </div>
      </div>
      <div class="orbit fuego-orbit">
        <div class="background fuego">
          <div class="planet fuego">
            <br>
            <p>FUEGO</p>
          </div>
        </div>
      </div>
      <div class="orbit fairo-orbit">
        <div class="background fairo">
          <div class="planet fairo">
            <br>
            <p>FAIRO</p>
          </div>
        </div>
      </div>
      <div class="orbit adir-orbit">
        <div class="background adir">
          <div class="planet adir">
            <br>
            <p>ADIR</p>
          </div>
        </div>
      </div>
      <div class="orbit vatra-orbit">
        <div class="background vatra">
          <div class="planet vatra">
            <br>
            <p>VATRA</p>
          </div>
        </div>
      </div>
      <div class="orbit ignis-orbit">
        <div class="background ignis">
          <div class="planet ignis">
            <br>
            <p>IGNIS</p>
          </div>
        </div>
      </div>
      <div class="planetwrapper">
        <div class="pyroV" @click="changeComponent('PyroMap')"></div>
      </div>
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
    overflow:hidden;
    width:100%;
    height:90vh;
    margin-inline-start:-0.75%;
    position:relative;
    }
  .systemName {
    animation: 1.5s slideappear;
    }

  .solar-system {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    scale:285%;
    position:absolute;
    margin-block-start:20%;
    margin-inline-start:40%;
    overflow:hidden;
    }

/* Orbit */
  .orbit {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 50%;
    z-index:-1;
    }  
  .vuur-orbit {
    width: 250px;
    height: 250px;
    rotate:300deg;
    }  
  .fuego-orbit {
    width: 230px;
    height: 230px;
    rotate:240deg;
    }  
  .fairo-orbit {
    width: 210px;
    height: 210px;
    rotate:180deg;
    }  
  .adir-orbit {
    width: 190px;
    height: 190px;
    rotate:130deg;
    }  
  .vatra-orbit {
    width: 170px;
    height: 170px;
    rotate:90deg;
    }
  .ignis-orbit {
    width: 150px;
    height: 150px;
    rotate:40deg;
    }
/* Moons */
  .planet {
    position: absolute;
    top: 2px;
    left:2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    }
  .planet.ignis {
    background-color:#EEE3F1;
    z-index:1;
    }
  .planet.vatra {
    background-color:#95b16c;
    z-index:1;
    }
  .planet.adir {
    background-color:#94b3a9;
    z-index:1;
    }
  .planet.fairo {
    background-color:#872c0f;
    z-index:1;
    }
  .planet.fuego {
    background-color:#874a0f;
    z-index:1;
    }
  .planet.vuur {
    background-color:#625450;
    z-index:1;
    }
/* Backgrounds */
  .background {
    background-color:var(--backgray);
    position:absolute;
    height:16px;
    width:16px;
    border:1px solid var(--lightorange);
    border-radius:50%;
    }
  .background:hover {
    animation: 0.5s scale1;
    scale:110%;
    cursor:pointer;
    }
  .background:hover p {
    color:var(--lightgray);
    visibility:visible;
    animation: 0.1s appear1;
    }
  .background p {
    visibility:hidden;
    z-index:2;
    letter-spacing:0.5px;
    text-align:center;
    }
  .background.ignis {
    top:45px;
    left:-45px;
    rotate:-40deg;
    }
  .background.ignis p {
    margin-inline-start:-18px;
    margin-block-start:-3px;
    }
  .background.vatra {
    top:43px;
    left:-15px;
    rotate:-90deg;
    }
  .background.vatra p {
    margin-inline-start:-20px;
    margin-block-start:-25px;
    }
  .background.adir {
    top:43px;
    left:2px;
    rotate:-130deg;
    }
  .background.adir p {
    margin-inline-start:-18px;
    margin-block-start:-4px;
    }
  .background.fairo {
    top:43px;
    left:6px;
    rotate:-180deg;
    }
  .background.fairo p {
    margin-inline-start:-19px;
    margin-block-start:-25px;
    }
  .background.fuego {
    top:43px;
    left:10px;
    rotate:-240deg;
    }
  .background.fuego p {
    margin-inline-start:-19px;
    margin-block-start:-3px;
    }
  .background.vuur {
    top:50px;
    left:10px;
    rotate:-300deg;
    }
  .background.vuur p {
    margin-inline-start:-18px;
    margin-block-start:-25px;
    }
/* Pyro V */
  .pyroV {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #2e5423;
    z-index:1;
    }
  .pyroV:hover {
    scale:110%;
    animation:1s scale1;
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
  .planetwrapper {
    }
  .ignis-orbit {
    animation: 2s appear2;
    }
  .vatra-orbit {
    animation: 2.25s appear3;
    }
  .adir-orbit {
    animation: 2.5s appear4;
    }
  .fairo-orbit {
    animation: 2.75s appear5;
    }
  .fuego-orbit {
    animation: 2.9s appear6;
    }
  .vuur-orbit {
    animation: 3.1s appear7;
    }


</style>