<template>
  <div class="container">
    <div class="systemName">
        <h1 @click="changeComponent('altstarmap')">STANTON</h1>
    </div>
    <div>
      <div class="solar-system">
        <div class="orbit microtech-orbit">
            <div class="background microtech">
              <div class="planet microtech" @click="changeComponent('MicroTechMap')">
                <p>MICROTECH</p>
              </div>
            </div>
        </div>
        <div class="orbit arccorp-orbit">
            <div class="background arccorp">
              <div class="planet arccorp" @click="changeComponent('ArcCorpMap')">
                <p>ARCCORP</p>
              </div>
            </div>
        </div>
        <div class="orbit crusader-orbit">
            <div class="background crusader">
              <div class="planet crusader" @click="changeComponent('CrusaderMap')">
                <p>CRUSADER</p>
              </div>
            </div>
        </div>
        <div class="orbit hurston-orbit">
            <div class="background hurston">
              <div class="planet hurston" @click="changeComponent('HurstonMap')">
                <p>HURSTON</p>
              </div>
            </div>
        </div>
        <div class="sunwrapper">
          <div class="sun" @click="changeComponent('altstarmap')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        zoomed: false,
        selectedPlanet: null,
      };
    },
    methods: {
      changeComponent(componentName) {
      this.$emit('component-changed', componentName);
      },
    },
    computed: {
      planetSelected() {
        return this.selectedPlanet !== null;
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
    .microtech-orbit {
      width: 220px;
      height: 220px;
      rotate:90deg;
      }
    .arccorp-orbit {
      width: 170px;
      height: 170px;
      rotate:185deg;
      }
    .crusader-orbit {
      width: 120px;
      height: 120px;
      rotate:290deg;
      }
    .hurston-orbit {
      width: 90px;
      height: 90px;
      rotate:135deg;
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
    .background.hurston {
      top:2px;
      left:8px;
      rotate:-135deg;
      }
    .background.hurston p {
      margin-inline-start:-25px;
      margin-block-start:-9px;
        }
    .background.crusader {
      top:0px;
      left:22px;
      rotate:-290deg;
      }
    .background.crusader p {
      margin-inline-start:-25px;
      margin-block-start:14px;
      }
    .background.arccorp {
      top:20px;
      left:13px;
      rotate:-185deg;
      }
    .background.arccorp p {
      margin-inline-start:-23px;
      margin-block-start:14px;
      }
    .background.microtech {
      top:36px;
      left:13px;
      rotate:-90deg;
      }
    .background.microtech p {
      margin-inline-start:-26px;
      margin-block-start:-9px;
      }
  /* Sun */
    .sunwrapper {
      z-index:1;
    }
    .sun {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #CF9A2F;
      }
    .sun:hover {
      cursor:pointer;
      scale:110%;
      animation:1s scale1;
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
    .systemName:hover {
      color:var(--orangehover);
      cursor:pointer;
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

  /* Zoom Effect */
    .zoomed :deep(.planet:not(.selected)),
    .zoomed :deep(.background:not(.selected)),
    .zoomed :deep(.orbit:not(.selected)) {
      opacity: 0;
      animation:2s disappear;
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
        }
      }
    @keyframes scale1 {
      0% {
        scale:100%;
      }
      100% {
        scale:110%;
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


    .sunwrapper {
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