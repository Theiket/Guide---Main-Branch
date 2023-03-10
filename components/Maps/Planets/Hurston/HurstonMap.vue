<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">HURSTON</h1>
    </div>
    <div class="solar-system">
      <div class="orbit ita-orbit">
        <div class="background ita">
          <div class="planet ita">
            <br>
            <p>ITA</p>
          </div>
        </div>
      </div>
      <div class="orbit magda-orbit">
        <div class="background magda">
          <div class="planet magda">
            <br>
            <p>MAGDA</p>
          </div>
        </div>
      </div>
      <div class="orbit aberdeen-orbit">
        <div class="background aberdeen">
          <div class="planet aberdeen">
            <br>
            <p>ABERDEEN</p>
          </div>
        </div>
      </div>
      <div class="orbit arial-orbit">
        <div class="background arial">
          <div class="planet arial">
            <br>
            <p>ARIAL</p>
          </div>
        </div>
      </div>
      <div class="planetwrapper">
        <div class="hurston" @click="changeComponent('StantonMap')"></div>
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
      background:transparent;
      z-index:0;
      } 
    .ita-orbit {
      width: 220px;
      height: 220px;
      rotate:345deg;
      }
    .magda-orbit {
      width: 170px;
      height: 170px;
      rotate:230deg;
      }
    .aberdeen-orbit {
      width: 120px;
      height: 120px;
      rotate:55deg;
      }
    .arial-orbit {
      width: 90px;
      height: 90px;
      rotate:125deg;
      }
/* Moons */
  .planet {
    position: absolute;
    width: 10px;
    height: 10px;
    top:2px;
    left:2px;
    border-radius: 50%;
    background-color: #3ff9dc;
    z-index:1;
    }
  .planet.arial {
    background-color:#C5703B;
    z-index:1;
    }
  .planet.aberdeen {
    background-color:#D2BC61;
    z-index:1;
    }
  .planet.magda {
    background-color:#C9B090;
    }
  .planet.ita {
    background-color:#D2A061;
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
  .background.arial {
    top:2px;
    left:8px;
    rotate:-125deg;
    }
  .background.arial p {
    margin-inline-start:-18px;
    margin-block-start:-3px;
    }
  .background.aberdeen {
    top:0px;
    left:22px;
    rotate:-55deg;
    }
  .background.aberdeen p {
    margin-inline-start:-25px;
    margin-block-start:-26px;
    }
  .background.magda {
    top:20px;
    left:13px;
    rotate:-230deg;
    }
  .background.magda p {
    margin-inline-start:-21px;
    margin-block-start:-3px;
    }
  .background.ita {
    top:36px;
    left:13px;
    rotate:-345deg;
    }
  .background.ita p {
    margin-inline-start:-14px;
    margin-block-start:-3px;
    }
/* Hurston */
  .planetwrapper {
    z-index:1;
  }
  .hurston {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CF3A2F;
    z-index:1;
    }
  .hurston:hover {
    scale:110%;
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
    animation:2s appear1;
  }
  .hurston:hover {
    animation: 1s scale1;
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