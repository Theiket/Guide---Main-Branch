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
      <div class="prospectorCard" v-if="prospector">
        <center>
          <button class="button Alternate" @click="prospector = !prospector; prospectorLaser = ''; prospectorLaserModules = ['','',''];">
            Prospector
          </button>
          <br><br>
          <p>Mining Laser</p>
          <br>
          <select v-model="prospectorLaser">
            <option disabled value="">Select Laser</option>
            <option v-for="laser in s1lasers" :key="laser.name" :value="laser">
              {{ laser.name }}
            </option>
          </select>
          <br><br>
          <div v-if="prospectorLaser">
            <div v-for="n in prospectorLaser.consumables">
              <div class="moduleSelect">
                <select :id="'prospectorLaserModule' + n" v-model="prospectorLaserModules[n-1]">
                  <option disabled value="">Select Module</option>
                  <option v-for="module in laserModules" :key="module.name" :value="module">
                    {{ module.name }}
                  </option>
                </select>
              </div>
              <br>
            </div>
          </div>
        </center>
      </div>
      <div class="moleCard" v-else-if="mole">
        <center>
        <button class="button Alternate" @click="mole = !mole; leftLaser = ''; leftLaserModules = ['','','']; centralLaser = ''; centralLaserModules = ['','','']; rightLaser = ''; rightLaserModules = ['','',''];">
        MOLE
        </button>
        <span>
          <td style="padding-inline-end:5px;">
          <br><br>
          <p>Left Turret</p>
            <br>
            <select v-model="leftLaser">
              <option value="" disabled>Select Laser</option>
              <option v-for="laser in s2lasers" :key="laser.name" :value="laser">
              {{ laser.name }}
              </option>
            </select>
            <br><br>
            <span class="moduleSelect" v-if="leftLaser">
              <div v-for="n in leftLaser.consumables" style="padding-block-start:5px">
                <select :id="'leftLaserModule' + n" v-model="leftLaserModules[n-1]">
                  <option disabled value="">Select Module</option>
                  <option v-for="module in laserModules" :key="module.name" :value="module">
                  {{ module.name }}
                  </option>
                </select>
              </div>
            </span>
          </td>
          <td style="padding-inline-end:5px;">
          <br><br>
          <p>Central Turret</p>
            <br>
            <select v-model="centralLaser">
              <option value="" disabled>Select Laser</option>
              <option v-for="laser in s2lasers" :key="laser.name" :value="laser">
              {{ laser.name }}
              </option>
            </select>
            <br><br>
            <span class="moduleSelect" v-if="centralLaser">
              <div v-for="n in centralLaser.consumables" style="padding-block-start:5px">
                <select :id="'centralLaserModule' + n" v-model="centralLaserModules[n-1]">
                  <option disabled value="">Select Module</option>
                  <option v-for="module in laserModules" :key="module.name" :value="module">
                  {{ module.name }}
                  </option>
                </select>
              </div>
            </span>
          </td>
          <td style="padding-inline-end:0px;">
          <br><br>
          <p>Right Turret</p>
            <br>
            <select v-model="rightLaser">
              <option value="" disabled>Select Laser</option>
              <option v-for="laser in s2lasers" :key="laser.name" :value="laser">
              {{ laser.name }}
              </option>
            </select>
            <br><br>
            <span class="moduleSelect" v-if="rightLaser">
              <div v-for="n in rightLaser.consumables" style="padding-block-start:5px">
                <select :id="'rightLaserModule' + n" v-model="rightLaserModules[n-1]">
                  <option disabled value="">Select Module</option>
                  <option v-for="module in laserModules" :key="module.name" :value="module">
                  {{ module.name }}
                  </option>
                </select>
              </div>
            </span>
          </td>
        </span>
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
import * as math from 'mathjs';
import pdf  from '@stdlib/stats-base-dists-exponential-pdf';

export default {
  data() {
    return {
      prospector: false,
      mole: false,
      s1lasers: [
        { name:'Arbor S1',
          instability: 0,
          resistance: 0,
          consumables: 1,
          },
        { name:'Lancet S1',
          instability: -75,
          resistance: -0.75,
          consumables: 3,
          },
        { name:'Hofstede S1',
          instability: -30,
          resistance: -0.1,
          consumables: 1,
          },
        { name:'Klein S1',
          instability: 20,
          resistance: -0.2,
          consumables: 1,
          },
        { name:'Helix S1',
          instability: -30,
          resistance: -0.1,
          consumables: 3,
          },
        { name:'Impact S1',
          instability: 10,
          resistance: -0.25,
          consumables: 2,
          },
        ],
      s2lasers: [
        { name:'Arbor S2',
          instability: 0,
          resistance: 0,
          consumables: 1,
          },
        { name:'Lancet S2',
          instability: -75,
          resistance: -0.75,
          consumables: 3,
          },
        { name:'Hofstede S2',
          instability: -30,
          resistance: -0.1,
          consumables: 1,
          },
        { name:'Klein S2',
          instability: 20,
          resistance: -0.2,
          consumables: 1,
          },
        { name:'Helix S2',
          instability: -30,
          resistance: -0.1,
          consumables: 3,
          },
        { name:'Impact S2',
          instability: 10,
          resistance: -0.25,
          consumables: 2,
          },
        ],
      laserModules: [
        { name:'Brandt',
          instability: -75,
          resistance: 0,
          },
        { name:'Forel',
          instability: 10,
          resistance: -0.2,
          },
        { name:'Lifeline',
          instability: 0,
          resistance: 0,
          },
        { name:'Optimum',
          instability: 10,
          resistance: 0,
          },
        { name:'Rime',
          instability: 0,
          resistance: 0,
          },
        { name:'Stampede',
          instability: 10,
          resistance: 0,
          },
        { name:'Surge',
          instability: 0,
          resistance: 0,
          },
        { name:'Torpid',
          instability: 0,
          resistance: -0.2,
          },
        { name:'FLTR MK1',
          instability: 0,
          resistance: 0,
          },
        { name:'FLTR MK2',
          instability: 0,
          resistance: 0,
          },
        { name:'FLTR MK3',
          instability: 0,
          resistance: 0,
          },
        { name:'Focus MK1',
          instability: 6,
          resistance: -0.06,
          },
        { name:'Focus MK2',
          instability: 5,
          resistance: -0.08,
          },
        { name:'Focus MK3',
          instability: 4,
          resistance: -0.1,
          },
        { name:'Reiger MK1',
          instability: 0,
          resistance: 0.04,
          },
        { name:'Reiger MK2',
          instability: 0,
          resistance: 0.05,
          },
        { name:'Reiger MK3',
          instability: 0,
          resistance: 0.06,
          },
        { name:'Torrent MK1',
          instability: 5,
          resistance: 0,
          },
        { name:'Torrent MK2',
          instability: 4,
          resistance: 0,
          },
        { name:'Torrent MK3',
          instability: 3,
          resistance: 0,
          },
        { name:'Vaux MK1',
          instability: -6,
          resistance: 0,
          },
        { name:'Vaux MK2',
          instability: -8,
          resistance: 0,
          },
        { name:'Vaux MK3',
          instability: -10,
          resistance: 0,
          },
        { name:'XTR MK1',
          instability: 0,
          resistance: 0,
          },
        { name:'XTR MK2',
          instability: 0,
          resistance: 0,
          },
        { name:'XTR MK3',
          instability: 0,
          resistance: 0,
          },
        ],
      leftLaser: '',
      leftLaserModules: ['', '', ''],
      centralLaser: '',
      centralLaserModules: ['', '', ''],
      rightLaser: '',
      rightLaserModules: ['', '', ''],
      prospectorLaser: '',
      prospectorLaserModules: ['', '', ''],
      l1laserModule: '',
      l2laserModule: '',
      l3laserModule: '',
      c1laserModule: '',
      c2laserModule: '',
      c3laserModule: '',
      r1laserModule: '',
      r2laserModule: '',
      r3laserModule: '',
      locations: [
        'Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','Yela Belt','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe','Aaron Halo'
        ],
      deposits: [
        { name: 'C Type',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 2, 
              maxPercentage: 30,
              probability: 0.5,
              exponent: 1,
              instability: 0.01,
              resistance: -0.00125,
              },
            { name: 'Laranite',
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.125,
              exponent: 3,
              instability: 3.5,
              resistance: 0.55,
              },
            { name: 'Quantanium',
              minPercentage: 1,
              maxPercentage: 20,
              probability: 1,
              exponent: 4,
              instability: 10,
              resistance: 0.94,
              },
          ],
          minCount: 2,
          found:[
            'Lagrange B'
            ],
          },
        { name: 'E Type',
          minerals: [
            { name: 'Borase',
              minPercentage: 1.2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              instability: 3.5,
              resistance: 0.85,
              },
            { name: 'Corundum',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              instability: 0.018125,
              resistance: 0.02604167,
              },
            { name: 'Diamond',
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 2,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Gold',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              instability: 0.2184375,
              resistance: 0.2614583,
              },
          ],
          minCount: 3,
          found:[
            'Aaron Halo','Lagrange E','Lagrange F','Lagrange G','Lagrange Occupied','Yela Belt'
            ],
          },
        { name: 'M Type',
          minerals: [
            { name: 'Hephaestanite',
              minPercentage: 1.1,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 3,
              instability: 2.5,
              resistance: 0.6,
              },
            { name: 'Laranite',
              minPercentage: 1.2,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 5,
              instability: 3.5,
              resistance: 0.55,
              },
            { name: 'Tungsten',
              minPercentage: 3,
              maxPercentage: 45,
              probability: 0.5,
              exponent: 2,
              instability: 0.011875,
              resistance: 0.03958333,
              },
          ],
          minCount: 2,
          found:[
            'Aaron Halo','Lagrange A','Lagrange C','Lagrange Occupied','Yela Belt'
            ],
          },
        { name: 'P Type',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 3,
              maxPercentage: 55,
              probability: 0.5,
              exponent: 2,
              instability: 0.01,
              resistance: -0.00125,
              },
            { name: 'Bexalite', 
              minPercentage: 1.1,
              maxPercentage: 20,
              probability: 0.5,
              exponent: 5,
              instability: 3.5,
              resistance: 0.85,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 1.5,
              instability: 0.018125,
              resistance: 0.02604167,
              },
            { name: 'Diamond', 
              minPercentage: 1.15,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Titanium', 
              minPercentage: 5,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              instability: 1,
              resistance: 0.8333334,
              },
          ],
          minCount: 3,
          found:[
            'Aaron Halo','Lagrange B','Lagrange D','Lagrange F','Lagrange G','Lagrange Occupied','Yela Belt'
            ],
          },
        { name: 'Q Type',
          minerals: [
            { name: 'Beryl',
              minPercentage: 1.5,
              maxPercentage: 30,
              probability: 0.5,
              exponent: 2,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Borase', 
              minPercentage: 1.12,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 4,
              instability: 4,
              resistance: 0.8,
              },
            { name: 'Quantanium', 
              minPercentage: 2.1,
              maxPercentage: 50,
              probability: 1,
              exponent: 6,
              instability: 10,
              resistance: 0.94,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 40,
              probability: 0.7,
              exponent: 3,
              instability: 0.004375,
              resistance: 0.1145833,
              },
          ],
          minCount: 3,
          found:[
            'Aaron Halo','Lagrange A','Lagrange Occupied','Yela Belt'
            ],
          },
        { name: 'S Type',
          minerals: [
            { name: 'Borase',
              minPercentage: 1,
              maxPercentage: 20,
              probability: 0.0625,
              exponent: 4,
              instability: 4,
              resistance: 0.8,
              },
            { name: 'Copper', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 2,
              instability: 0.0175,
              resistance: 0.05833333,
              },
            { name: 'Titanium', 
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 2,
              instability: 1,
              resistance: 0.08333334,
              },
          ],
          minCount: 2,
          found:[
            'Lagrange C','Lagrange D','Lagrange E'
            ],
          },
        { name: 'Atacamite',
          minerals: [
            { name: 'Agricium',
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 5,
              instability: 3.125,
              resistance: 0.75,
              },
            { name: 'Beryl', 
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 1.5,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Diamond', 
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.25,
              exponent: 4,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Quartz', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 1.5,
              instability: 0.004375,
              resistance: 0.1145833,
              },
            { name: 'Taranite', 
              minPercentage: 1.16,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              instability: 4,
              resistance: 0.8,
              },
          ],
          minCount: 2,
          found:[
            'Wala'
            ],
          },
        { name: 'Felsic',
          minerals: [
            { name: 'Bexalite',
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 6,
              instability: 3.5,
              resistance: 0.85,
              },
            { name: 'Hephaestanite', 
              minPercentage: 2,
              maxPercentage: 25,
              probability: 0.25,
              exponent: 4,
              instability: 2.5,
              resistance: 0.6,
              },
            { name: 'Quartz', 
              minPercentage: 3,
              maxPercentage: 55,
              probability: 0.5,
              exponent: 1.5,
              instability: 0.004375,
              resistance: 0.1145833,
              },
            { name: 'Tungsten', 
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2.5,
              instability: 0.011875,
              resistance: 0.03958333,
              },
          ],
          minCount: 3,
          found:[
            'Arial',
            ],
          },
        { name: 'Gneiss',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              instability: 3.125,
              resistance: 0.75,
              },
            { name: 'Aluminium', 
              minPercentage: 3,
              maxPercentage: 65,
              probability: 0.5,
              exponent: 2,
              instability: 0.01,
              resistance: -0.00125,
              },
            { name: 'Beryl', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.5,
              exponent: 2,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Diamond', 
              minPercentage: 1,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 2,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Taranite', 
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 6,
              instability: 4,
              resistance: 0.8,
              },
            { name: 'Tungsten',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              instability: 0.011875,
              resistance: 0.03958333,
              },
          ],
          minCount: 3,
          found:[
            'Arial','Aberdeen','Ita','Wala','Daymar','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Granite',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              instability: 3.125,
              resistance: 0.75,
              },
            { name: 'Copper', 
              minPercentage: 3,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              instability: 0.0175,
              resistance: 0.05833333,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              instability: 0.018125,
              resistance: 0.02604167,
              },
            { name: 'Diamond', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Laranite', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              instability: 3.5,
              resistance: 0.55,
              },
            { name:'Tungsten',
              minPercentage: 3,
              maxPercentage: 45,
              probability: 0.5,
              exponent: 2,
              instability: 0.011875,
              resistance: 0.03958333,
              },
          ],
          minCount: 3,
          found:[
            'Aberdeen','Lyria','Cellin','Yela','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Igneous',
          minerals: [
            { name: 'Copper',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.5,
              exponent: 3,
              instability: 0.0175,
              resistance: 0.05833333,
              },
            { name: 'Gold',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              instability: 0.2184375,
              resistance: 0.2614583,
              },
            { name: 'Taranite',
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              instability: 4,
              resistance: 0.8,
              },
            { name: 'Titanium',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              instability: 1,
              resistance: 0.08333334,
              },
            { name: 'Tungsten',
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 3,
              instability: 0.011875,
              resistance: 0.03958333,
              },
          ],
          minCount: 3,
          found:[
            'Arial','Magda','Ita','Cellin','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Obsidian',
          minerals: [
            { name: 'Beryl',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.25,
              exponent: 2,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Bexalite', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 5,
              instability: 3.5,
              resistance: 0.85,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              instability: 0.018125,
              resistance: 0.02604167,
              },
            { name: 'Diamond',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.35,
              exponent: 3,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Hephaestanite', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 4,
              instability: 2.5,
              resistance: 0.6,
              },
          ],
          minCount: 3,
          found:[
            'Aberdeen','Magda','Ita','Cellin','Daymar','Lyria','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Quantanium',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 3,
              instability: 0.01,
              resistance: -0.00125,
              },
            { name: 'Beryl', 
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Borase', 
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.15,
              exponent: 4,
              instability: 4,
              resistance: 0.8,
              },
            { name: 'Quantanium', 
              minPercentage: 2.1,
              maxPercentage: 50,
              probability: 1,
              exponent: 5,
              instability: 10,
              resistance: 0.94,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 60,
              probability: 0.7,
              exponent: 2,
              instability: 0.004375,
              resistance: 0.1145833,
              },
          ],
          minCount: 3,
          found:[
            'Cellin','Daymar','Yela','Lyria','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Quartzite',
          minerals: [
            { name: 'Beryl',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              instability: 0.013125,
              resistance: 0.14375,
              },
            { name: 'Copper', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              instability: 0.0175,
              resistance: 0.05833333,
              },
            { name: 'Diamond', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              instability: 0.0625,
              resistance: 0.06875,
              },
            { name: 'Gold', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              instability: 0.2184375,
              resistance: 0.2614583,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 65,
              probability: 1,
              exponent: 2,
              instability: 0.004375,
              resistance: 0.1145833,
              },
            { name: 'Taranite',
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 4,
              instability: 4,
              resistance: 0.8,
              },
          ],
          minCount: 3,
          found:[
            'Arial','Ita','Cellin','Daymar','Yela','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Shale',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              instability: 3.125,
              resistance: 0.75,
              },
            { name: 'Aluminium', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              instability: 0.01,
              resistance: -0.00125,
              },
            { name: 'Gold', 
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 2,
              instability: 0.2184375,
              resistance: 0.2614583,
              },
            { name: 'Laranite', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              instability: 3.5,
              resistance: 0.55,
              },
            { name: 'Titanium', 
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              instability: 1,
              resistance: 0.08333334,
              },
          ],
          minCount: 3,
          found:[
            'Aberdeen','Magda','Daymar','Yela','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Aphorite',
          minerals: [
            { name: 'Aphorite',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              instability: 1,
              resistance: 0.5,
              },
          ],
          minCount: 1,
          found:[
            'Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','Yela Belt','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Dolivine',
          minerals: [
            { name: 'Dolivine',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              instability: 4,
              resistance: 0.3,
              },
          ],
          minCount: 1,
          found:[
            'Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','Yela Belt','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        { name: 'Hadanite',
		      minerals: [
            { name: 'Hadanite',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              instability: 2,
              resistance: 0.7,
              },
          ],
          minCount: 1,
          found:[
            'Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','Yela Belt','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe'
            ],
          },
        ],
      selectedLocation: '',
      selectedDeposit: '',
      generatedDeposit: [],
      generatedInstability: 0,
      generatedResistance: 0,
    }
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

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>