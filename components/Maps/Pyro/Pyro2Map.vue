<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('PyroMap')">PYRO II</h1>
    </div>
    <div class="solar-system">
      <div class="planetwrapper">
        <div class="pyroII" @click="changeComponent('PyroMap')"></div>
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
  .wala-orbit {
    width: 180px;
    height: 180px;
    rotate:20deg;
    }
  .lyria-orbit {
    width: 100px;
    height: 100px;
    rotate:130deg;
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
  .planet.lyria {
    background-color:#EEE3F1;
    z-index:1;
    }
  .planet.wala {
    background-color:#EFC2A1;
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
  .background.lyria {
    top:15px;
    left:0px;
    rotate:-130deg;
    }
  .background.lyria p {
    margin-inline-start:-18px;
    margin-block-start:-3px;
    }
  .background.wala {
    top:43px;
    left:0px;
    rotate:-20deg;
    }
  .background.wala p {
    margin-inline-start:-20px;
    margin-block-start:-25px;
    }
/* Pyro II */
  .pyroII {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CF2F55;
    z-index:1;
    }
  .pyroII:hover {
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
  .lyria-orbit {
    animation: 2s appear2;
    }
  .wala-orbit {
    animation: 2.5s appear3;
    }


</style>