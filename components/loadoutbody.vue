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
      <va-select
        v-model="value"
        class="mb-6"
        placeholder="Select Planet"
        color="#CF6A2F"
        width="200px"
        :options="['Hurston', 'Arial', 'Aberdeen', 'Magda', 'Ita', 'Crusader', 'Cellin', 'Daymar', 'Yela', 'ArcCorp','Lyria', 'Wala', 'microTech', 'Calliope', 'Clio', 'Euterpe']"
      />
      </va-card>
      <va-card
      color="#1B191E"
      class="harvestable">
      <h4>
        Deposit Type
      </h4>
      <va-select
        v-model="value"
        class="mb-6"
        placeholder="Select Deposit"
        color="#CF6A2F"
        width="200px"
        :options="['C Type', 'E Type', 'M Type', 'P Type', 'Q Type', 'S Type', 'Atacamite', 'Felsic', 'Gneiss', 'Granite', 'Igneous', 'Obsidian', 'Quantanium', 'Quartzite', 'Shale', 'Aphorite', 'Dolivine', 'Hadanite']"
      />
      </va-card>
      <center>
        <button class="button Generate">
        Generate
        </button>
      </center>
  </div>
  <br>
    <Icon name="game-icons:rock" />
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
    <div class="col-md-3">
    <center>
    <button class="button Prospector">
    Prospector
    </button>
    <br>
    <button class="button MOLE">
    MOLE
    </button>
    </center>
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
  name: 'provider',
  data () {
    return {
      value:'',
    }
  },
}

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

.col-md-3 {
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
}

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
/* Dropdowns */
.va-select {
  --va-select-cursor: pointer;
  --va-select-dropdown-border-radius: 10px;
  --va-select-dropdown-background: var(--va-dropdown-secondary);
  --va-select-box-shadow: 0 4px 8px rgba(59, 63, 73, 0.15);
  --va-select-min-width: var(--va-form-element-min-width);
  --va-select-anchor-state-icon-margin-left: 0.25rem;
  letter-spacing:1px;
  word-spacing:0px;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
  color:var(--darkgray);
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
  margin-block-start:-10px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>