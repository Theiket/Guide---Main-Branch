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
        <select v-model="selectedDeposit">
          <option disabled value="">Select Deposit</option>
          <option v-for="deposit in deposits" :key="deposit.name" :value="deposit">{{ deposit.name }}</option>
        </select>
      </va-card>
      <center>
        <button class="button Generate" @click="generateDeposit">
        Generate
        </button>
      </center>
    </div>
    <br>
    <ul>
      <li v-for="(mineral, index) in generatedMinerals" :key="index">
        <h4>{{ mineral.name }}:</h4> <h3>{{ mineral.percentage }}%</h3>
      </li>
    </ul>
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
      <div class="moduleSelect" 
      v-if="prospectorLaser !== ''">
        <select v-model="p1laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
        </select>
      </div>
      <div class="moduleSelect" 
      v-if="prospectorLaser === 'Lancet S1' || prospectorLaser === 'Helix S1' || prospectorLaser === 'Impact S1' ">
        <select v-model="p2laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
        </select>
      </div>
      <div class="moduleSelect" 
      v-if="prospectorLaser === 'Lancet S1' || prospectorLaser === 'Helix S1'">
        <select v-model="p3laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
        </select>
      </div>
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
        <br><br>
        <span class="moduleSelect" 
        v-if="leftLaser !== ''">
          <select v-model="l1laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </span>
        <span class="moduleSelect" 
        v-if="leftLaser === 'Lancet S2' || leftLaser === 'Helix S2' || leftLaser === 'Impact S2' ">
          <select v-model="l2laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </span>
        <span class="moduleSelect" 
        v-if="leftLaser === 'Lancet S2' || leftLaser === 'Helix S2'">
          <select v-model="l3laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
        </select>
        </span>
      </td>
      <td>
      <br><br>
      <p>Central Turret</p>
        <br>
        <select v-model="centralLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s2lasers" :key="laser">{{ laser }}</option>
        </select>
        <br><br>
        <div class="moduleSelect" 
        v-if="centralLaser !== ''">
          <select v-model="c1laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
        <div class="moduleSelect" 
        v-if="centralLaser === 'Lancet S2' || centralLaser === 'Helix S2' || centralLaser === 'Impact S2' ">
          <select v-model="c2laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
        <div class="moduleSelect" 
        v-if="centralLaser === 'Lancet S2' || centralLaser === 'Helix S2'">
          <select v-model="c3laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
      </td>
      <td>
      <br><br>
      <p>Right Turret</p>
        <br>
        <select v-model="rightLaser">
        <option disabled value="">Select Laser</option>
        <option v-for="laser in s2lasers" :key="laser">{{ laser }}</option>
        </select>
        <br><br>
        <div class="moduleSelect" 
        v-if="rightLaser !== ''">
          <select v-model="c1laserModule">
          <option disabled value="">Select Module</option>
          <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
        <div class="moduleSelect" 
        v-if="rightLaser === 'Lancet S2' || rightLaser === 'Helix S2' || rightLaser === 'Impact S2' ">
          <select v-model="c2laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
        <div class="moduleSelect" 
        v-if="rightLaser === 'Lancet S2' || rightLaser === 'Helix S2'">
          <select v-model="c3laserModule">
            <option disabled value="">Select Module</option>
            <option v-for="lasermodule in lasermodules" :key="lasermodule">{{ lasermodule }}</option>
          </select>
        </div>
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
import generateDeposit from '~/utils/depositGenerator';

export default {
  data() {
    return {
      prospector: false,
      mole: false,
      leftLaser: '',
      centralLaser: '',
      rightLaser: '',
      s2lasers: [
        'Arbor S2','Lancet S2', 'Hofstede S2','Klein S2','Helix S2','Impact S2'
        ],
      prospectorLaser: '',
      s1lasers: [
        'Arbor S1','Lancet S1', 'Hofstede S1','Klein S1','Helix S1','Impact S1'
        ],
      selectPlanet: '',
      planets: [
        'Hurston','Arial','Aberdeen','Magda','Ita','Crusader','Cellin','Daymar','Yela','ArcCorp','Lyria','Wala','microTech','Calliope','Clio','Euterpe'
        ],
      selectedDeposit: '',
      deposits: [
        { name: 'C Type',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 2, 
              maxPercentage: 30,
              probability: 0.5,
              exponent: 1,
              },
            { name: 'Laranite',
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.125,
              exponent: 3,
              },
            { name: 'Quantanium',
              minPercentage: 1,
              maxPercentage: 20,
              probability: 1,
              exponent: 4,
              },
          ],
          minCount: 2,
          },
        { name: 'E Type',
          minerals: [
            { name: 'Borase',
              minPercentage: 1.2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              },
            { name: 'Corundum',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Diamond',
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 2,
              },
            { name: 'Gold',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              },
          ],
          minCount: 3,
          },
        { name: 'M Type',
          minerals: [
            { name: 'Hephaestanite',
              minPercentage: 1.1,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Laranite',
              minPercentage: 1.2,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 5,
              },
            { name: 'Tungsten',
              minPercentage: 3,
              maxPercentage: 45,
              probability: 0.5,
              exponent: 2,
              },
          ],
          minCount: 2,
          },
        { name: 'P Type',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 3,
              maxPercentage: 55,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Bexalite', 
              minPercentage: 1.1,
              maxPercentage: 20,
              probability: 0.5,
              exponent: 5,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 1.5,
              },
            { name: 'Diamond', 
              minPercentage: 1.15,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Titanium', 
              minPercentage: 5,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              },
          ],
          minCount: 3,
          },
        { name: 'Q Type',
          minerals: [
            { name: 'Beryl',
              minPercentage: 1.5,
              maxPercentage: 30,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Borase', 
              minPercentage: 1.12,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Quantanium', 
              minPercentage: 2.1,
              maxPercentage: 50,
              probability: 1,
              exponent: 6,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 40,
              probability: 0.7,
              exponent: 3,
              },
          ],
          minCount: 3,
          },
        { name: 'S Type',
          minerals: [
            { name: 'Borase',
              minPercentage: 1,
              maxPercentage: 20,
              probability: 0.0625,
              exponent: 4,
              },
            { name: 'Copper', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 2,
              },
            { name: 'Titanium', 
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 2,
              },
          ],
          minCount: 2,
          },
        { name: 'Atacamite',
          minerals: [
            { name: 'Agricium',
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 5,
              },
            { name: 'Beryl', 
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 1.5,
              },
            { name: 'Diamond', 
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Quartz', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 1.5,
              },
            { name: 'Taranite', 
              minPercentage: 1.16,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              },
          ],
          minCount: 2,
          },
        { name: 'Felsic',
          minerals: [
            { name: 'Bexalite',
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 6,
              },
            { name: 'Hephaestanite', 
              minPercentage: 2,
              maxPercentage: 25,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Quartz', 
              minPercentage: 3,
              maxPercentage: 55,
              probability: 0.5,
              exponent: 1.5,
              },
            { name: 'Tungsten', 
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2.5,
              },
          ],
          minCount: 3,
          },
        { name: 'Gneiss',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              },
            { name: 'Aluminium', 
              minPercentage: 3,
              maxPercentage: 65,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Beryl', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Diamond', 
              minPercentage: 1,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 2,
              },
            { name: 'Taranite', 
              minPercentage: 1,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 6,
              },
            { name: 'Tungsten',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              },
          ],
          minCount: 3,
          },
        { name: 'Granite',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              },
            { name: 'Copper', 
              minPercentage: 3,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Diamond', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Laranite', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 5,
              },
            { name:'Tungsten',
              minPercentage: 3,
              maxPercentage: 45,
              probability: 0.5,
              exponent: 2,
              },
          ],
          minCount: 3,
          },
        { name: 'Igneous',
          minerals: [
            { name: 'Copper',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.5,
              exponent: 3,
              },
            { name: 'Gold',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Taranite',
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Titanium',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Tungsten',
              minPercentage: 3,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 3,
              },
          ],
          minCount: 3,
          },
        { name: 'Obsidian',
          minerals: [
            { name: 'Beryl',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.25,
              exponent: 2,
              },
            { name: 'Bexalite', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 5,
              },
            { name: 'Corundum', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Diamond',
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.35,
              exponent: 3,
              },
            { name: 'Hephaestanite', 
              minPercentage: 3,
              maxPercentage: 30,
              probability: 0.2,
              exponent: 4,
              },
          ],
          minCount: 3,
          },
        { name: 'Quantanium',
          minerals: [
            { name: 'Aluminium',
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 3,
              },
            { name: 'Beryl', 
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Borase', 
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.15,
              exponent: 4,
              },
            { name: 'Quantanium', 
              minPercentage: 2.1,
              maxPercentage: 50,
              probability: 1,
              exponent: 5,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 60,
              probability: 0.7,
              exponent: 2,
              },
          ],
          minCount: 3,
          },
        { name: 'Quartzite',
          minerals: [
            { name: 'Beryl',
              minPercentage: 2,
              maxPercentage: 40,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Copper', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Diamond', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Gold', 
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 3,
              },
            { name: 'Quartz', 
              minPercentage: 20,
              maxPercentage: 65,
              probability: 1,
              exponent: 2,
              },
            { name: 'Taranite',
              minPercentage: 1,
              maxPercentage: 15,
              probability: 0.25,
              exponent: 4,
              },
          ],
          minCount: 3,
          },
        { name: 'Shale',
          minerals: [
            { name: 'Agricium',
              minPercentage: 2,
              maxPercentage: 30,
              probability: 0.25,
              exponent: 4,
              },
            { name: 'Aluminium', 
              minPercentage: 3,
              maxPercentage: 50,
              probability: 0.5,
              exponent: 2,
              },
            { name: 'Gold', 
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 2,
              },
            { name: 'Laranite', 
              minPercentage: 2,
              maxPercentage: 20,
              probability: 0.25,
              exponent: 5,
              },
            { name: 'Titanium', 
              minPercentage: 2,
              maxPercentage: 35,
              probability: 0.25,
              exponent: 3,
              },
          ],
          minCount: 3,
          },
        { name: 'Aphorite',
          minerals: [
            { name: 'Aphorite',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              },
          ],
          minCount: 1,
          },
        { name: 'Dolivine',
          minerals: [
            { name: 'Dolivine',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              },
          ],
          minCount: 1,
          },
        { name: 'Hadanite',
          minerals: [
            { name: 'Hadanite',
              minPercentage: 50,
              maxPercentage: 100,
              probability: 1,
              exponent: 1,
              },
          ],
          minCount: 1,
          },
        ],
      generatedMinerals: [],
      p1laserModule: '',
      p2laserModule: '',
      p3laserModule: '',
      l1laserModule: '',
      l2laserModule: '',
      l3laserModule: '',
      c1laserModule: '',
      c2laserModule: '',
      c3laserModule: '',
      r1laserModule: '',
      r2laserModule: '',
      r3laserModule: '',
      lasermodules: [
        'Brandt','Forel','Lifeline','Optimum','Rime','Stampede','Surge','Torpid','FLTR MK1','FLTR MK2','FLTR MK3','Focus MK1','Focus MK2','Focus MK3','Reiger MK1','Reiger MK2','Reiger MK3','Torrent MK1','Torrent MK2','Torrent MK3','Vaux MK1','Vaux MK2','Vaux MK3','XTR MK1','XTR MK2','XTR MK3'
        ],
    }
  },
  methods: {
    async generateDeposit() {
      try {
        if (!this.selectedDeposit) {
          throw new Error('No deposit selected');
        }
        const deposit = await generateDeposit(this.selectedDeposit.minerals, this.selectedDeposit.minCount);
        this.generatedMinerals = deposit.minerals;
        this.$emit('deposit-generated', deposit);
      } catch (error) {
        console.error(error);
      }
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
  margin-top:700px; 
}
.instability .provider {
  width:200px;
}
.instability .harvestable {
  width:150px;
}

/* Asteroid */
.asteroid {
  margin-block-start:15%;
  margin-inline-start:100px;
  padding-inline-end:400px;
  width:200px;
  height:200px;
  border-left:solid;
  border-right:solid;
  border-color:var(--lightorange);
  border-width:2px;
  border-radius:40px;
  position:absolute;
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