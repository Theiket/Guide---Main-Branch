<template>
<div class="container">
<!-- Left + Center Area -->
  <div class="centercard">
    <div>
      <div class="harvestableGeneration">
        <va-card
          color="#1B191E" 
          class="provider">
        <h4>
          Celestial Body
        </h4>
        <select v-model="selectedLocation">
          <option disabled value="">Select Location</option>
          <option v-for="location in locations" :key="location">
          {{ location }}
          </option>
          </select>
        </va-card>
        <va-card
        color="#1B191E"
        class="harvestable">
          <h4>
            Deposit Type
          </h4>
          <select v-model="selectedDeposit">
            <option disabled value="">Select Deposit</option>
            <option v-for="deposit in filteredDeposits" :value="deposit">
            {{ deposit.name }}
            </option>
          </select>
        </va-card>
        <center>
        <button class="button Generate" @click="generateDeposit">
        Generate
        </button>
        </center>
      </div>
      <br>
      <div class="mineralList" 
        style="margin-block-start:15%;">
        <span style="position:absolute; display:flex; align-content:center; justify-content:space-between; left: 50%; transform: translateX(-50%);">
          <td v-for="(mineral, index) in generatedDeposit" :key="index" style="animation: 0.5s appear; position:relative; text-align:center; width:160px;">
            <h4>{{ mineral.name }}</h4>
            <br>
            <h3>{{ (mineral.percentage).toFixed(2) }}%</h3>
          </td>
        </span>
        <br>
        <div class="asteroid">
          <asteroidtest />
        </div>
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
          {{ totalInstability }}
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
          {{ totalResistance }}
          </h3>
        </va-card>
      </div>
      <br>
      <center>
        <p style="font-size:10px;">
        Generation is based on the mechanics of Star Citizen but may not be 100% accurate
        </p>
      </center>
    </div>
  </div>
<!-- Loadout Selection -->
  <div class="rightcard">
    <div class="rightcol">
      <div v-for="(ship, index) in ships" :key="index" class="shipCard" v-if="ship.active">
        <center>
          <button class="button Alternate" @click="toggleShip(ship)">
            {{ ship.name }}
          </button>
          <div v-for="(laser, laserIndex) in ship.lasers" :key="laserIndex">
            <p>Mining Laser {{ laserIndex + 1 }}</p>
            <br>
            <select v-model="laser.laser">
              <option disabled value="">Select Laser</option>
              <option v-for="laserOption in ship.availableLasers" :key="laserOption.name" :value="laserOption">
                {{ laserOption.name }}
              </option>
            </select>
            <br><br>
            <div v-if="laser.laser">
              <div v-for="n in laser.laser.consumables">
                <div class="moduleSelect">
                  <select v-model="laser.laserModules[n-1]">
                    <option disabled value="">Select Module</option>
                    <option v-for="module in laserModules" :key="module.name" :value="module">
                      {{ module.name }}
                    </option>
                  </select>
                </div>
                <br>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div class="mainButtons" v-if="!ships.some(ship => ship.active)">
        <center>
          <button v-for="(ship, index) in ships" :key="index" class="button" @click="toggleShip(ship)">
            {{ ship.name }}
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
import { reactive } from 'vue';
import * as math from 'mathjs';
import pdf  from '@stdlib/stats-base-dists-exponential-pdf';
import data from './mining.json';

export default {
  setup() {
    const s1lasers = reactive(data.s1lasers);
    const s2lasers = reactive(data.s2lasers);
    const ships = reactive(data.ships);
    const deposits = reactive(data.deposits);
    const locations = reactive(data.locations);
    const laserModules = reactive(data.laserModules);

    ships[0].availableLasers = s1lasers;
    ships[1].availableLasers = s2lasers;
    
    return {
      s1lasers,
      s2lasers,
      ships,
      deposits,
      locations,
      laserModules
    };
  },
  data() {
    return {
      selectedLocation: '',
      selectedDeposit: '',
      generatedDeposit: [],
      generatedInstability: 0,
      generatedResistance: 0,
    }
  },
  created() {
    this.ships = [
      { name: 'Prospector',
        active: false,
        lasers: [{laser: '', laserModules: ['', '', '']}],
        availableLasers: this.s1lasers,
        maxLasers: 1
      },
      { name: 'MOLE',
        active: false,
        lasers: [
          {laser: '', laserModules: ['', '', '']},
          {laser: '', laserModules: ['', '', '']},
          {laser: '', laserModules: ['', '', '']}
        ],
        availableLasers: this.s2lasers,
        maxLasers: 3
      }
    ];
  },
  computed : {
    totalInstability() {
      const lasers = [this.prospectorLaser, this.leftLaser, this.centralLaser, this.rightLaser];
      const laserInstabilities = lasers.map(laser => ((laser.instability ?? 0)/100)+1);
      
      const laserModules = [
        ...this.prospectorLaserModules,
        ...this.leftLaserModules,
        ...this.centralLaserModules,
        ...this.rightLaserModules
      ];
      const moduleInstabilities = laserModules.map(laserModule => ((laserModule.instability ?? 0)/100)+1);

      return (this.generatedInstability * laserInstabilities.reduce((a, b) => a * b, 1) * moduleInstabilities.reduce((a, b) => a * b, 1)).toFixed(2);
    },
    totalResistance() {
      const lasers = [this.prospectorLaser, this.leftLaser, this.centralLaser, this.rightLaser];
      const laserResistances = lasers.map(laser => ((laser.resistance ?? 0)+1));
      
      const laserModules = [
        ...this.prospectorLaserModules,
        ...this.leftLaserModules,
        ...this.centralLaserModules,
        ...this.rightLaserModules
      ];
      const moduleResistances = laserModules.map(laserModules => ((laserModules.resistance ?? 0)+1));

      return (this.generatedResistance * laserResistances.reduce((a, b) => a * b, 1) * moduleResistances.reduce((a, b) => a * b, 1)).toFixed(2);
    },
    filteredDeposits() {
      if (!this.selectedLocation) {
        return [{name:'Select Location'}];
      } else {
      return this.deposits.filter(deposit => deposit.found.includes(this.selectedLocation));
      }
    }
  },
  methods: {
    toggleShip(ship) {
    ship.active = !ship.active;
      if (!ship.active) {
        ship.laser = '';
        ship.laserModules = ['', '', ''];
      }
    },
    generateDeposit() {
      const minerals = this.selectedDeposit.minerals
      const minCount = this.selectedDeposit.minCount
      let includedMinerals = [];
      let totalPercentage = 0;
      let totalInstability = 0;
      let totalResistance = 0;

        // select minerals for the deposit based on their probabilities
          for (let mineral of minerals) {
            if (mineral.probability === 1) {
              includedMinerals.push(mineral);
            } else {
              const randomValueOverProbability = Math.random() / mineral.probability;
              if (randomValueOverProbability <= 1) {
                includedMinerals.push(mineral);
              }
            }
          }

        // if minimum number of minerals is not reached, push the mineral with the closest value to 1 but exceeding 1
          while (includedMinerals.length < minCount) {
            let closestMineral = null;
            let closestValue = Infinity;
            for (let mineral of minerals) {
              if (!includedMinerals.includes(mineral)) {
                const randomValueOverProbability = Math.random() / mineral.probability;
                const value = Math.abs(randomValueOverProbability - 1);
                if (value < closestValue) {
                  closestValue = value;
                  closestMineral = mineral;
                }
              }
            }
            includedMinerals.push(closestMineral);
          }
        
        // calculate percentage of each included mineral in the deposit
          for (let mineral of includedMinerals) {
            const percentage = pdf(Math.random(),mineral.exponent) * (mineral.maxPercentage - mineral.minPercentage) / mineral.exponent + mineral.minPercentage;
            
            totalPercentage += percentage;
            mineral.percentage = percentage;

          }

        // calculate instability and resistance values of the deposit
          for (let mineral of includedMinerals) {
            const instability = mineral.instability * (mineral.percentage / (mineral.maxPercentage - mineral.minPercentage));
            totalInstability += instability;
          }
          for (let mineral of includedMinerals) {
            const resistance = mineral.resistance * (mineral.percentage / (mineral.maxPercentage - mineral.minPercentage));
            totalResistance += resistance;
          }
        
        // if total percentage is over 100, regenerate percentages for included minerals
          if (totalPercentage > 100) {
            for (let mineral of includedMinerals) {
              mineral.percentage = null;
            }
            return this.generateDeposit();
          }

        // sort includedMaterials to be alphabetical
          includedMinerals.sort((a, b) => a.name.localeCompare(b.name));

        // if total percentage is less than 100, add inert material to the deposit
          if (totalPercentage < 100) {
            const inertPercentage = 100 - totalPercentage;
            includedMinerals.push({ name: 'Inert Material', percentage: inertPercentage });
          }
        
        this.generatedInstability = totalInstability
        this.generatedResistance = totalResistance
        this.generatedDeposit = includedMinerals
      },
  },
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
  align-items:center;
  justify-content:center;
  display:flex;
}
.centercard p {
  font-size:18px;
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
  margin-top:300px; 
}
.instability .provider {
  width:200px;
}
.instability .harvestable {
  width:150px;
}

/* Asteroid */
.asteroid {
  margin-inline-start:100px;
  padding-inline-end:400px;
  margin-block-start:100px;
  width:200px;
  height:200px;
  border-left:solid;
  border-right:solid;
  border-color:var(--lightorange);
  border-width:2px;
  border-radius:40px;
  position:relative;
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
  transition: border 0.3s ease, background-color 0.3s ease;
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
.shipCard {
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
.shipCard select {
  width:130px;
}
.moduleSelect {
  padding-block-end:5px;
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
  position:relative;
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

</style>