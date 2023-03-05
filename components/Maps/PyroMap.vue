<template>
  <div class="container">
    <div class="systemName">
      <NuxtLink to="/starmap">
        <h1>PYRO</h1>
      </NuxtLink>
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
    }
  .pyroII-orbit {
    width: 50px;
    height: 50px;
    rotate:-20deg;
    }
  .pyroIII-orbit {
    width: 70px;
    height: 70px;
    rotate:20deg;
    } 
  .pyroIV-orbit {
    width: 215px;
    height: 215px;
    rotate:4deg;
    border-color:transparent;
    border-style:hidden;
    }
  .pyroV-orbit {
    width:210px;
    height:210px;
    rotate:290deg;
    }
  .pyroVI-orbit {
    width:360px;
    height:360px;
    rotate:267deg;
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
    color:transparent;
    z-index:2;
    rotate:0deg;
    margin-block-start:-5px;
    letter-spacing:0.5px;
    }
  .planet:hover p {
    color:var(--lightgray);
    }
/* Sun */
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