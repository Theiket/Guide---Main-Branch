<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('altstarmap')">PYRO</h1>
    </div>
    <div class="solar-system">
      <div class="orbit pyroVI-orbit">
        <div class="background pyroVI">
          <div class="planet pyroVI">
            <p>PYRO VI</p>
          </div>
        </div>
      </div>
      <div class="orbit pyroV-orbit">
        <div class="background pyroV">
          <div class="planet pyroV">
            <p>PYRO V</p>
          </div>
        </div>
        <div class="orbit pyroIV-orbit">
          <div class="background pyroIV">
          <div class="planet pyroIV">
            <p>PYRO IV</p>
          </div>
        </div>
        </div>
      </div>
      <div class="orbit pyroIII-orbit">
        <div class="background pyroIII">
          <div class="planet pyroIII">
            <p>PYRO III</p>
          </div>
        </div>
      </div>
      <div class="orbit pyroII-orbit">
        <div class="background pyroII">
          <div class="planet pyroII">
            <p>PYRO II</p>
          </div>
        </div>
      </div>
      <div class="orbit pyroI-orbit">
        <div class="background pyroI">
          <div class="planet pyroI">
            <p>PYRO I</p>
          </div>
        </div>
      </div>
      <div class="sunwrapper">
        <NuxtLink to="starmap">
          <div class="sun" @click="changeComponent('altstarmap')"></div>
        </NuxtLink>
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
    width: 360px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    scale:250%;
    position:absolute;
    margin-block-start:20%;
    margin-inline-start:35%;
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
  .pyroI-orbit {
    width: 30px;
    height: 30px;
    rotate:80deg;
    z-index:-1;
    }
  .pyroII-orbit {
    width: 50px;
    height: 50px;
    rotate:65deg;
    z-index:-1;
    }
  .pyroIII-orbit {
    width: 70px;
    height: 70px;
    rotate:90deg;
    z-index:-1;
    } 
  .pyroIV-orbit {
    width: 215px;
    height: 225px;
    rotate:3deg;
    border-color:transparent;
    border-style:hidden;
    z-index:-1;
    }
  .pyroV-orbit {
    width:210px;
    height:210px;
    rotate:335deg;
    z-index:-1;
    }
  .pyroVI-orbit {
    width:360px;
    height:360px;
    rotate:328deg;
    z-index:-1;
    }
/* Backgrounds */
  .background {
    background-color:var(--backgray);
    position:absolute;
    height:10px;
    width:10px;
    border:1px solid var(--lightorange);
    border-radius:50%;
    }
  .background:hover {
    animation: 0.5s scale2;
    scale:120%;
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
  .background.pyroI {
    top:-1px;
    left:0px;
    rotate:-80deg;
    }
  .background.pyroI p {
    margin-inline-start:-10px;
    margin-block-start:-7px;
    }
  .background.pyroII {
    top:4px;
    left:0px;
    rotate:-65deg;
    }
  .background.pyroII p {
    margin-inline-start:-47px;
    margin-block-start:-7px;
    }
  .background.pyroIII {
    top:10px;
    left:0px;
    rotate:-90deg;
    }
  .background.pyroIII p {
    margin-inline-start:-5px;
    margin-block-start:-7px;
    }
  .background.pyroIV {
    top:18px;
    left:40px;
    rotate:-338deg;
    }
  .background.pyroIV p {
    margin-inline-start:-28px;
    margin-block-start:-15px;
    }
  .background.pyroV {
    top:18px;
    left:33px;
    rotate:-335deg;
    }
  .background.pyroV p {
    margin-inline-start:-27px;
    margin-block-start:1px;
    }
  .background.pyroVI {
    top:50px;
    left:45px;
    rotate:-328deg;
    }
  .background.pyroVI p {
    margin-inline-start:-7px;
    margin-block-start:-7px;
    }
/* Planets */
  .planet {
    position: absolute;
    top:1px;
    left:1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    rotate:0deg;
    }
  .planet.pyroI {
    background-color:#CF3A2F;
    }
  .planet.pyroII {
    background-color:#2FCFA9;
    }
  .planet.pyroIII {
    background-color:#CF2F55;
    }
  .planet.pyroIV {
    background-color:white;
    }
  .planet.pyroV {
    background-color:green;
    z-index:2;
    }
  .planet.pyroVI {
    background-color:purple;
    }
  .planet:hover {
    cursor:pointer;
    }
  .planet p {
    visibility:hidden;
    z-index:1;
    width:50px;
    margin-block-start:-5px;
    letter-spacing:0.5px;
    padding-inline-start:12px;
    padding-block-start:7px;
    }
  .planet:hover p {
    visibility:visible;
    color:var(--lightgray);
    }
/* Sun */
  .sunwrapper {
    z-index:1;
    }
  .sun {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #CF9A2F;
    z-index:1;
    }
  .sun:hover {
    scale:120%;
    cursor:pointer;
    animation:1s scale2;
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
    margin-inline-start:12.5%;
    margin-block-start:5%;
    border-bottom-style:solid;
    border-width:2px;
    border-color:var(--lightgray);
    padding-inline-start:10px;
    z-index:2;
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
    font-size: 6px;
    font-weight:bold;
    letter-spacing:0.3px;
    color: var(--lightgray);
    }

/* Animations */
  .sunwrapper {
    }
  .pyroI-orbit {
    animation: 2s appear2;
    }
  .pyroII-orbit {
    animation: 2.5s appear3;
    }
  .pyroIII-orbit {
    animation: 3s appear4;
    }
  .pyroIV-orbit {
    animation: 3.5s appear5;
    }
  .pyroV-orbit {
    animation: 3.75s appear6;
    }
  .pyroVI-orbit {
    animation: 4s appear7;
    }

</style>