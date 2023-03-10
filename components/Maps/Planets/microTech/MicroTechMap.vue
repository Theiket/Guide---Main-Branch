<template>
  <div class="container">
    <div class="systemName">
      <h1 @click="changeComponent('StantonMap')">MICROTECH</h1>
    </div>
    <div class="solar-system">
      <div class="orbit euterpe-orbit">
        <div class="background euterpe">
          <div class="planet euterpe">
            <br>
            <p>EUTERPE</p>
          </div>
        </div>
      </div>
      <div class="orbit clio-orbit">
        <div class="background clio">
          <div class="planet clio">
            <br>
            <p>CLIO</p>
          </div>
        </div>
      </div>
      <div class="orbit calliope-orbit">
        <div class="background calliope">
          <div class="planet calliope">
            <br>
            <p>CALLIOPE</p>
          </div>
        </div>
      </div>
      <div class="planetwrapper">
        <div class="microtech" @click="changeComponent('StantonMap')"></div>
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
  .euterpe-orbit {
    width: 250px;
    height: 250px;
    rotate:232deg;
    }
  .clio-orbit {
    width: 225px;
    height: 225px;
    rotate:240deg;
    }
  .calliope-orbit {
    width: 150px;
    height: 150px;
    rotate:315deg;
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
  .planet.calliope {
    background-color:grey;
    z-index:1;
    }
  .planet.clio {
    background-color:#bd986f;
    z-index:1;
    }
  .planet.euterpe {
    background-color:#debf9d;
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
  .background.calliope {
    top:33px;
    left:0px;
    rotate:-315deg;
    }
  .background.calliope p {
    margin-inline-start:-25px;
    margin-block-start:-25px;
    }
  .background.clio {
    top:62px;
    left:0px;
    rotate:-240deg;
    }
  .background.clio p {
    margin-inline-start:-17px;
    margin-block-start:-25px;
    }
  .background.euterpe {
    top:71px;
    left:0px;
    rotate:-232deg;
    }
  .background.euterpe p {
    margin-inline-start:-21px;
    margin-block-start:-2px;
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
  .calliope-orbit {
    animation: 2s appear2;
    }
  .clio-orbit {
    animation: 2.5s appear3;
    }
  .euterpe-orbit {
    animation: 3s appear4;
    }

</style>