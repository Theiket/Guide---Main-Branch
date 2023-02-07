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
      <select v-model="selectPlanet">
        <option disabled value="">Select Planet</option>
        <option v-for="planet in planets" :key="planet">{{ planet }}</option>
        </select>
      </va-card>
      <va-card
      color="#1B191E"
      class="harvestable">
      <h4>
        Deposit Type
      </h4>
      <select v-model="selectDeposit">
        <option disabled value="">Select Deposit</option>
        <option v-for="deposit in deposits" :key="deposit">{{ deposit }}</option>
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
    <div class="prospectorCard" v-if="prospector">
      <center>
      <button class="button Alternate" @click="prospector = !prospector">
      Prospector
      </button>
      <br><br>
      <p>Mining Laser</p>
      <br>
      <select v-model="prospectorLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s1lasers" :key="laser">{{ laser }}</option>
      </select>
      <br><br>
      <select v-model="laserModule">
        <option disabled value="">Select Module</option>
        <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
      </select>
      </center>
    </div>
    <div class="moleCard" v-else-if="mole">
      <center>
      <button class="button Alternate" 
      @click="mole = !mole">
      MOLE
      </button>
      <table>
      <tr>
      <td>
      <br><br>
      <p>Left Turret</p>
        <br>
        <select v-model="leftLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s2lasers" :key="laser">{{ laser }}</option>
        </select>
      </td>
      <td>
      <br><br>
      <p>Central Turret</p>
        <br>
        <select v-model="centralLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s2lasers" :key="laser">{{ laser }}</option>
        </select>
      </td>
      <td>
      <br><br>
      <p>Right Turret</p>
        <br>
        <select v-model="rightLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s2lasers" :key="laser">{{ laser }}</option>
        </select>
      </td>
      </tr>
      </table>
      </center>
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
      mole: false,
      leftLaser: '',
      centralLaser: '',
      rightLaser: '',
      s2lasers: ['Arbor S2','Lancet S2', 'Hofstede S2','Klein S2','Helix S2','Impact S2'],
      prospectorLaser: '',
      s1lasers: ['Arbor S1','Lancet S1', 'Hofstede S1','Klein S1','Helix S1','Impact S1'],
      selectPlanet: '',
      planets: ['Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe'],
      selectDeposit: '',
      deposits: ['C Type','E Type','M Type','P Type','Q Type','S Type','Atacamite','Felsic','Gneiss','Granite','Igneous','Obsidian','Quantanium','Quartzite','Shale','Aphorite','Dolivine','Hadanite'],
      laserModule: '',
      lasermodules: ['Brandt','Forel','Lifeline','Optimum','Rime','Stampede','Surge','Torpid','FLTR MK1','FLTR MK2','FLTR MK3','Focus MK1','Focus MK2','Focus MK3','Reiger MK1','Reiger MK2','Reiger MK3','Torrent MK1','Torrent MK2','Torrent MK3','Vaux MK1','Vaux MK2','Vaux MK3','XTR MK1','XTR MK2','XTR MK3'],
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
.Alternate {
  margin-block-start:15px;
}
.prospectorCard {
  animation: 1s appear;
}
.moleCard {
  animation: 1s appear;
}
.mainButtons {
  animation: 1s appear;
}

/*Select*/
select {
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
select option {
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
}
.moleCard select {
  width:100%;
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