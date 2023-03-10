<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">CRUSADER</h1>
    </div>
    <div class="solar-system">
      <div class="orbit yela-orbit">
        <div class="background yela">
          <div class="planet yela">
            <br>
            <p>YELA</p>
          </div>
        </div>
      </div>
      <div class="orbit daymar-orbit">
        <div class="background daymar">
          <div class="planet daymar">
            <br>
            <p>DAYMAR</p>
          </div>
        </div>
      </div>
      <div class="orbit cellin-orbit">
        <div class="background cellin">
          <div class="planet cellin">
            <br>
            <p>CELLIN</p>
          </div>
        </div>
      </div>
      <div class="planetwrapper">
        <div class="crusader" @click="changeComponent('StantonMap')"></div>
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
    border: 1px solid var(--lightorange);
    border-radius: 50%;
    z-index:-1;
    }  
  .yela-orbit {
    width: 230px;
    height: 230px;
    rotate:20deg;
    }
  .daymar-orbit {
    width: 180px;
    height: 180px;
    rotate:100deg;
    }
  .cellin-orbit {
    width: 150px;
    height: 150px;
    rotate:280deg;
    }
/* Moons */
  .planet {
    position: absolute;
    top:2px;
    left:2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    }
  .planet.cellin {
    background-color:#EEE3F1;
    z-index:1;
    }
  .planet.daymar {
    background-color:#A2793A;
    z-index:1;
    }
  .planet.yela {
    background-color:#6B6A6A;
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
  .background.cellin {
    top:33px;
    left:0px;
    rotate:-280deg;
    }
  .background.cellin p {
    margin-inline-start:-21px;
    margin-block-start:-26px;
    }
  .background.daymar {
    top:45px;
    left:0px;
    rotate:-100deg;
    }
  .background.daymar p {
    margin-inline-start:-24px;
    margin-block-start:-25px;
    }
  .background.yela {
    top:64px;
    left:0px;
    rotate:-20deg;
    }
  .background.yela p {
    margin-inline-start:-17px;
    margin-block-start:-3px;
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
    animation: 2s appear1;
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