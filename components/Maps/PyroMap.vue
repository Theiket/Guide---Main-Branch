<template>
  <div class="container">
    <div class="systemName">
      <NuxtLink to="/starmap">
        <h1>PYRO</h1>
      </NuxtLink>
    </div>
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
    <div class="solar-system">
      <div class="orbit pyroVI-orbit">
        <div class="planet pyroVI">
          <p>Pyro VI</p>
        </div>
      </div>
      <div class="orbit pyroV-orbit">
        <div class="planet pyroV">
          <p>Pyro V</p>
        </div>
        <div class="orbit pyroIV-orbit">
          <div class="planet pyroIV">
            <p>Pyro IV</p>
          </div>
        </div>
      </div>
      <div class="orbit pyroIII-orbit">
        <div class="planet pyroIII">
          <p>Pyro III</p>
        </div>
      </div>
      <div class="orbit pyroII-orbit">
        <div class="planet pyroII">
          <p>Pyro II</p>
        </div>
      </div>
      <div class="orbit pyroI-orbit">
        <div class="planet pyroI">
          <p>Pyro I</p>
        </div>
      </div>
      <NuxtLink to="starmap">
        <div class="sun"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
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
    rotate:10deg;
    z-index:-1;
    }
  .pyroII-orbit {
    width: 50px;
    height: 50px;
    rotate:-20deg;
    z-index:-1;
    }
  .pyroIII-orbit {
    width: 70px;
    height: 70px;
    rotate:20deg;
    z-index:-1;
    } 
  .pyroIV-orbit {
    width: 215px;
    height: 215px;
    rotate:4deg;
    border-color:transparent;
    border-style:hidden;
    z-index:-1;
    }
  .pyroV-orbit {
    width:210px;
    height:210px;
    rotate:290deg;
    z-index:-1;
    }
  .pyroVI-orbit {
    width:360px;
    height:360px;
    rotate:267deg;
    z-index:-1;
    }

/* Planets */
  .planet {
    position: absolute;
    top: -3px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    rotate:0deg;
    }
  .planet.pyroI {
    background-color:#CF3A2F;
    rotate:-10deg;
    }
  .planet.pyroII {
    background-color:#2FCFA9;
    rotate:20deg;
    }
  .planet.pyroIII {
    background-color:#CF2F55;
    rotate:-20deg;
    }
  .planet.pyroIV {
    background-color:white;
    rotate:-294deg;
    }
  .planet.pyroV {
    background-color:green;
    rotate:-290deg;
    z-index:2;
    }
  .planet.pyroVI {
    background-color:purple;
    rotate:-267deg;
    }
  .planet:hover {
    box-shadow:0px 0px 5px black;
    top:-5.5px;
    width:10px;
    height:10px;
    cursor:pointer;
    }
  .planet p {
    visibility:hidden;
    z-index:1;
    width:50px;
    rotate:0deg;
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
    box-shadow:0px 0px 5px black;
    width:13px;
    height:13px;
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
/* Stars */
  .star-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
      scale:0.3;
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
  @keyframes appear6 {
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
  @keyframes appear7 {
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
  @keyframes gravity {
      to {
        transform: rotate(360deg);
      }
      }


  .sun {
    animation: 1s appear1;
    }
  .pyroI-orbit {
    animation: 2s appear2;
    }
  .pyroII-orbit {
    animation: 3s appear3;
    }
  .pyroIII-orbit {
    animation: 4s appear4;
    }
  .pyroIV-orbit {
    animation: 4.5s appear5;
    }
  .pyroV-orbit {
    animation: 4.5s appear6;
    }
  .pyroVI-orbit {
    animation: 5s appear7;
    }

</style>