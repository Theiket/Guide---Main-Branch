<template>
  <div class="container">
    <div class="systemName">
      <NuxtLink to="/starmap">
        <h1>STANTON</h1>
      </NuxtLink>
    </div>
    <div class="solar-system">
      <div class="orbit microtech-orbit">
        <NuxtLink to="/PlanetMaps/microtech">
          <div class="background microtech">
            <div class="planet microtech">
              <p>microTech</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="orbit arccorp-orbit">
        <NuxtLink to="/PlanetMaps/arccorp">
          <div class="background arccorp">
            <div class="planet arccorp">
              <p>ArcCorp</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="orbit crusader-orbit">
        <NuxtLink to="/PlanetMaps/crusader">
          <div class="background crusader">
            <div class="planet crusader">
              <p>Crusader</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="orbit hurston-orbit">
        <NuxtLink to="/PlanetMaps/hurston">
          <div class="background hurston">
            <div class="planet hurston">
              <p>Hurston</p>
            </div>
          </div>
        </NuxtLink>
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
  .microtech-orbit {
    width: 210px;
    height: 210px;
    rotate:90deg;
    }
  .arccorp-orbit {
    width: 165px;
    height: 165px;
    rotate:175deg;
    }
  .crusader-orbit {
    width: 120px;
    height: 120px;
    rotate:285deg;
    }
  .hurston-orbit {
    width: 90px;
    height: 90px;
    rotate:155deg;
    }

/* Planets */
  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    }
  .planet.hurston {
    background-color:#CF3A2F;
    top:2px;
    left:2px;
    }
  .planet.crusader {
    background-color:#2FCFA9;
    top:2px;
    left:2px;
    }
  .planet.arccorp {
    background-color:#CF2F55;
    top:2px;
    left:2px;
    }
  .planet.microtech {
    background-color:white;
    top:2px;
    left:2px;
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
    box-shadow:0px 0px 5px black;
    top:-2px;
    width:18px;
    height:18px;
    cursor:pointer;
    }
  .background:hover .planet {
    top:;
    left:;
    width:12px;
    height:12px;
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
    }
  .background.hurston {
    top:2px;
    left:8px;
    rotate:-155deg;
  }
  .background.hurston p {
    margin-inline-start:-20px;
    margin-block-start:-9px;
    }
  .background.crusader {
    top:0px;
    left:22px;
    rotate:-285deg;
  }
  .background.crusader p {
    margin-inline-start:-21px;
    margin-block-start:14px;
  }
  .background.arccorp {
    top:19px;
    left:13px;
    rotate:-175deg;
  }
  .background.arccorp p {
    margin-inline-start:-20px;
    margin-block-start:14px;
  }
  .background.microtech {
    top:33px;
    left:13px;
    rotate:-50deg;
  }
  .background.microtech p {
    margin-inline-start:-20px;
    margin-block-start:-9px;
  }
/* Sun */
  .sun {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CF9A2F;
    z-index:1;
    }
  .sun:hover {
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
  @keyframes scale1 {
    0% {
      scale:100%;
    }
    100% {
      scale:101%;
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

  .sun {
    animation: 1s appear1;
    }
  .hurston-orbit {
    animation: 2s appear2;
    }
  .crusader-orbit {
    animation: 3s appear3;
    }
  .arccorp-orbit {
    animation: 4s appear4;
    }
  .microtech-orbit {
    animation: 4.2s appear5;
    }

</style>