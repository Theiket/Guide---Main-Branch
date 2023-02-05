<template>
<div class="container">
<!-- Left + Center Area -->
  <div class="centercard">
  <div class="harvestableGeneration">
        <va-card
    color="#1B191E" 
    class="provider">
      <h4>
        Planetary Body
      </h4>
      <select name="selectPlanet" id="planetaryBody">
        <option value="hurston">Hurston</option>
        <option value="arial">Arial</option>
        <option value="aberdeen">Aberdeen</option>
        <option value="magda">Magda</option>
        <option value="ita">Ita</option>
        <option value="crusader">Crusader</option>
        <option value="cellin">Cellin</option>
        <option value="daymar">Daymar</option>
        <option value="yela">Yela</option>
        <option value="arccorp">ArcCorp</option>
        <option value="lyria">Lyria</option>
        <option value="wala">Wala</option>
        <option value="microtech">microTech</option>
        <option value="calliope">Calliope</option>
        <option value="clio">Clio</option>
        <option value="euterpe">Euterpe</option>
      </select>
      </va-card>
      <va-card
      color="#1B191E"
      class="harvestable">
      <h4>
        Deposit Type
      </h4>
      <select name="selectDeposit" id="depositType">
        <option value="c-type">C Type</option>
        <option value="e-type">E Type</option>
        <option value="m-type">M Type</option>
        <option value="p-type">P Type</option>
        <option value="q-type">Q Type</option>
        <option value="s-type">S Type</option>
        <option value="atacamite">Atacamite</option>
        <option value="felsic">Felsic</option>
        <option value="gneiss">Gneiss</option>
        <option value="granite">Granite</option>
        <option value="igneous">Igneous</option>
        <option value="obsidian">Obsidian</option>
        <option value="quantanium">Quantanium</option>
        <option value="quartzite">Quartzite</option>
        <option value="shale">Shale</option>
        <option value="aphorite">Aphorite</option>
        <option value="dolivine">Dolivine</option>
        <option value="hadanite">Hadanite</option>
      </select>
      </va-card>
      <center>
        <button class="button Generate">
        Generate
        </button>
      </center>
  </div>
  <br>
  <div class="asteroid">
    <asteroidtest />
  </div>
  <br>
  <div class="instability">
    <va-card
    color="#1B191E" 
    class="provider">
    <h4>
    Instability
    </h4>
    <br>
    <h3>
    00.00
    </h3>
    </va-card>
    <va-card
    color="#1B191E"
    class="harvestable">
    <h4>
    Resistance
    </h4>
    <br>
    <h3>
    00.00
    </h3>
    </va-card>
  </div>
  </div>
<!-- Loadout Selection -->
  <div class="rightcard">
  <div class="rightcol">
    <div v-if="prospector">
      <center>
      <button class="button Alternate" @click="prospector = !prospector">
      Prospector
      </button>
      </center>
      <br>
      <p>Text Goes Here</p>
    </div>
    <div v-else-if="mole">
      <center>
      <button class="button Alternate" 
      @click="mole = !mole">
      MOLE
      </button>
      </center>
      <br>
      <p>Text Goes Here</p>
    </div>
    <div class="mainButtons" v-else>
      <center>
      <button class="button Prospector" @click="prospector = !prospector">
      Prospector
      </button>
      <br>
      <button class="button MOLE" @click="
      mole = !mole">
      MOLE
      </button>
      </center>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Mining Loadouts'
  })
</script>

<script>
export default {
  data() {
    return {
      prospector: false,
      mole: false
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  max-height: 85vh;
  display: flex;
  min-width:90vw;
  background-color:var(--backgray);
  animation: 1s appear;
  padding-block-start:15px;
  user-select:none;
}

.rightcol {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  min-height:85vh;
}

.centercard {
  position: absolute;
  width: 70%;
  height: auto;
  padding-block-start:5px;
  padding-inline-start:75px;
}
.centercard p {
  font-size:18px;
}
.centercard .icon {
  scale:1000%;
  color:var(--lightgray);
  position:absolute;
  left:450px;
  top:350px;
}

.rightcard {
  position: absolute;
  width: 30%;
  height: auto;
  vertical-align:center;
  right:20px;
}
/*Top Card*/
.harvestableGeneration {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  padding-inline-start:15px;
  padding-block-end:5px;
  position:relative;
  left:100px;
}
.harvestableGeneration .provider {
  width:200px;
}
.harvestableGeneration .harvestable {
  width:200px;
  padding-inline-start:10px;
}
.harvestableGeneration select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:15px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:150px;
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
  text-align:center;
}
.harvestableGeneration select option {
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
}

/*Bottom Card*/
.instability {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  padding-inline-start:15px;
  padding-block-end:5px;
  position:relative;
  left:100px;
  top:500px; 
}
.instability .provider {
  width:200px;
}
.instability .harvestable {
  width:150px;
}

/* Asteroid */
.asteroid {
  margin-block-start:90px;
  margin-inline-start:200px;
  padding-inline-end:400px;
  width:200px;
  height:200px;
  border-left:solid;
  border-right:solid;
  border-color:var(--lightorange);
  border-width:2px;
  border-radius:40px;
}

/* Buttons */
.button {
  width:300px;
  height:70px;
  background-color:var(--lightorange);
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  font-weight:bold;
  color:var(--darkgray);
  font-size:25px;
  font-family:'Segoe UI', sans-serif;
  cursor:pointer;
}
.button:hover {
  border-color:var(--orangehover);
  background-color:var(--orangehover);
}
.Prospector {
  margin-block-start:50%;
}
.MOLE {
  margin-block-start:20%;
}
.Generate {
  margin-block-start:5px;
  height:30px;
  width:150px;
  font-size:20px;
}

/* Cards */
.harvestableGeneration {
  --va-card-display: inline-block;
  --va-card-position: relative;
  --va-card-overflow: visible;
  --va-card-box-shadow: var(--va-box-shadow);
  --va-card-border-radius: 0.375rem;
  --va-card-color: #34495e;
  --va-card-background-color: var(--va-background-secondary);
  --va-card-padding: 1.25rem;
  width:600px;
}
.provider {
  position:relative;
  left:50px;
  text-align:center;
}
.harvestable {
  margin-inline-start:13%;
  position:relative;
  left:50px;
  text-align:center;
}

.instability {
  --va-card-display: inline-block;
  --va-card-position: relative;
  --va-card-overflow: visible;
  --va-card-box-shadow: var(--va-box-shadow);
  --va-card-border-radius: 0.375rem;
  --va-card-color: #34495e;
  --va-card-background-color: var(--va-background-secondary);
  --va-card-padding: 1.25rem;
  width:600px;
  margin-block-start:100px;
  margin-inline-start:80px;
  position:absolute;
  padding-block-end:;
}

/*Text*/

.title {
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end: 15px;
  padding-inline-start:15px;
  padding-inline-end:15px;
}

h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 22px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end:5px;
  padding-block-start:5px;
}

h3 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightorange);
  padding-block-end:5px;
  margin-block-start:-20px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>