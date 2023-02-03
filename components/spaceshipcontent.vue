<template>
<div class="container">
<!-- Ship Selection Card -->
  <div class="leftcard">
    <div class="col-md-3">
    <h4>
    Manufacturer
    </h4>
    <br>
    <center>
    <select v-model="selectedCompany">
      <option disabled value="">Choose a manufacturer</option>
      <option v-for="company in companies" :key="company">{{ company }}</option>
    </select>
    <br><br><br>
  <div class="aegis" v-if="selectedCompany === 'Aegis Dynamics'">
    <button value="stalker"></button><button value="titan"></button><button value="warlock"></button><br>
    <label for="stalker">
    <p>Avenger Stalker</p>
    </label>
    <label for="titan">
    <p>Avenger Titan</p>
    </label>
    <label for="warlock">
    <p>Avenger Warlock</p>
    </label>
    <br>
    <button value="eclipse"></button>
    <button value="gladius"></button>
    <button value="hammerhead"></button>
    <br>
    <label for="eclipse"><p>Eclipse</p></label>
    <label for="gladius"><p>Gladius</p></label>
    <label for="hammerhead"><p>Hammerhead</p></label>
    <br>
    <button value="idris-k"></button>
    <button value="idris-m"></button>
    <button value="idris-p"></button>
    <br>
    <label for="idris-k"><p>Idris-K</p></label>
    <label for="idris-m"><p>Idris-M</p></label>
    <label for="idris-p"><p>Idris-P</p></label>
    <br>
    <button value="javelin"></button>
    <button value="nautilus"></button>
    <button value="reclaimer"></button>
    <br>
    <label for="javelin"><p>Javelin</p></label>
    <label for="nautilus"><p>Nautilus</p></label>
    <label for="reclaimer"><p>Reclaimer</p></label>
    <br>
    <button value="redeemer"></button>
    <button value="retaliatorbase"></button>
    <button value="retaliatorbomber"></button>
    <br>
    <label for="redeemer"><p>Redeemer</p></label>
    <label for="retaliatorbase"><p>Retaliator Base</p></label>
    <label for="retaliatorbomber"><p>Retaliator Bomber</p></label>
    <br>
    <button value="sabre"></button>
    <button value="comet"></button>
    <button value="raven"></button>
    <br>
    <label for="sabre"><p>Sabre</p></label>
    <label for="comet"><p>Sabre Comet</p></label>
    <label for="raven"><p>Sabre Raven</p></label>
    <br>
    <button value="harbinger"></button>
    <button value="hoplite"></button>
    <button value="sentinel"></button>
    <br>
    <label for="harbinger"><p>Vanguard Harbinger</p></label>
    <label for="hoplite"><p>Vanguard Hoplite</p></label>
    <label for="sentinel"><p>Vanguard Sentinel</p></label>
    <br>
    <button value="warden"></button>
    <button value="vulcan"></button>
    <br>
    <label for="warden"><p>Vanguard Warden</p></label>
    <label for="vulcan"><p>Vulcan</p></label>
  </div>
  <div class="shipSelect">
  </div>
    </center>
    </div>
  </div>
<!-- Component Selection Card -->
  <div class="centercard">
      <p>
      Weapons
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Shields
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Power Plants
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Coolers
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Quantum Drives
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      </p>
  </div>
<!-- Ship Information Card -->
  <div class="rightcard">
    <div class="col-md-3">
    <h4>
    Vehicle Name
    </h4>
    <p>
    Vehicle information can go here, there's quite a lot of it to be fair, but it still belongs here.
    </p>
      <va-divider />
      <table class="infoCard">
      <tr>
        <td class="shipRole">
        <h4>Role</h4><br><p>Value</p>
        </td>
        <td class="shipSize">
        <h4>Size</h4><br><p>Value</p>
        </td>
      </tr>
      <tr>
        <td class="shipDimensions">
        <h4>Dimensions</h4><br><p>Length x<br>Width x<br>Height x</p>
        </td>
        <td class="shipFuel">
        <h4>Fuel Capacity</h4>
        <br>
        <p>Quantum Value<br>Hydrogen Value</p>
        </td>
      </tr>
      <tr>
      <td class="shipShields">
      <h4>Shield Capacity</h4>
      <br>
      <p>Shield Value</p>
      </td>
      <td class="shipHealth">
      <h4>Hull Health</h4>
      <br>
      <p>Hitpoint Value</p>
      </td>
      </tr>
      <tr>
      <td class="shipPower">
      <h4>Power</h4>
      <br>
      <p>Power Value</p>
      </td>
      <td class="shipCooling">
      <h4>Cooling Capacity</h4>
      <br>
      <p>Cooling Value</p>
      </td>
      </tr>
      <tr>
      <td class="shipEM">
      <h4>EM Emissions</h4>
      <br>
      <p>EM Value</p>
      </td>
      <td class="shipIR">
      <h4>IR Emissions</h4>
      <br>
      <p>IR Value</p>
      </td>
      </tr>
    </table>
    </div>
  </div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Vehicle Loadouts'
  })

</script>

<script>
export default {
  data() {
    return {
      selectedCompany: '',
      companies: ['Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outlands', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems', 'Vanduul']
    };
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  min-height: 85vh;
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

.leftcard {
  position: relative;
  width: 30%;
  height: auto;
  padding-inline-end:25px;
  margin-inline-start:-15px;
}

.centercard {
  position: relative;
  width: 40%;
  height: auto;
  padding-block-start:30px;
}

.centercard p {
  font-size:18px;
}

.rightcard {
  position: relative;
  width: 30%;
  height: auto;
}

.infoCard {
  text-align:center;
  margin-inline-start:0px;
}
.infoCard td {
  width:300px;
}

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
}

h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end:5px;
  text-align:center;
  padding-block-start:10px;
}

.infoCard p {
  margin-block-start:-15px;
  color:var(--lightorange);
}
.infoCard h4 {
  font-size:20px;
  margin-block-start:-10px;
}

.dropdown .icon {
  scale:200%;
  padding-block-start:5px;
  color:var(--lightgray);
}

.aegis {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.aegis button {
  border-style:solid;
  border-radius:50%;
  border-width:15px;
  border-color:var(--lightgray);
  cursor:pointer;
  display:inline-flex;
  margin-inline-end:30px;
  padding:10px 10px;
  background-color:var(--lightgray);
}
.aegis button:hover {
  background-color:var(--lightorange);
  border-color:var(--lightorange);
}
.aegis label {
  width:100px;
  display:inline-flex;
  margin-inline-start:0px;
  margin-inline-end:0px;
  margin-block-start:2px;
  margin-block-end:2px;

}

.leftcard .va-select {
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
  width:300px;
}

.rightcard .va-divider {
  color:var(--lightgray);
}

.leftcard select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:20px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:300px;
  font-weight:bold;
  font-size:18px;
  text-align:center;
  height:40px;
  margin-block-start:-20px;
}
.leftcard select option:hover {
  color:var(--orangehover);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>