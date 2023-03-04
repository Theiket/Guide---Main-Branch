<template>
<div class="container">
  <section>
    <span>
      <div class="blocks input">
        <center>
        <td>
          <div class="commodityInput">
            <h3>
            Commodity
            </h3>
            <br>
            <select v-model="selectedCommodity">
              <option disabled value="">Select Commodity</option>
              <option v-for="commodity in commodities" :key="commodity">{{ commodity.name }}</option>
            </select>
          </div>
        </td>
        <td>
          <div class="quantityInput">
            <h3>Quantity</h3>
            <br>
            <input v-model="MassValue"
            class="inputQuantity"
            type="number"
            min="0"
            placeholder="Input quantity"
            >
          </div>
        </td>
        <td>
          <div class="refineryLocation">
              <h3>Location</h3>
              <br>
              <select v-model="selectedRefinery">
              <option disabled value="">Select Refinery</option>
              <option v-for="refinery in refineries" :key="refinery">{{ refinery.name }}</option>
            </select>
          </div>
        </td>
        </center>
      </div>
    </span>
    <span>
      <div class="blocks method">
        <center>
          <h3>Refining Method</h3>
        <br>
        <span v-for="method in refmethods" :key="method">
          <td class="methodList">
            <center>
            <button :key="method.name" @click="updateInfo(method)" :class="{ 'clicked': method.clicked }">
            </button>
            <br>
            <p>{{method.name}}</p>
            </center>
          </td>
        </span>
        </center>
        <br>
      </div>
    </span>
  </section>
  <section>
    <span>
    <div class="blocks output">
      <div class="outputBlock">
        <center>
          <td>
            <h3>Yield</h3>
            <br>
            <p>{{ ( MassValue * (selectedCommodityYield - methodYield) * yieldModifier ).toFixed(2) }} cSCU</p>
          </td>
          <td>
            <h3>Refining Cost</h3>
            <br>
            <p>{{ ((MassValue * refiningCost) * methodCost).toFixed(0) }} aUEC</p>
          </td>
          <td>
            <h3>Refining Time</h3>
            <br>
            <p>{{ formatTime(((MassValue * refiningTime)*methodTime).toFixed(0)) }}</p>
          </td>
          <td>
            <h3>Net Value</h3>
            <br>
            <p>{{ (((MassValue * selectedCommodityYield * yieldModifier)* selectedCommodityValue) - ((MassValue * refiningCost))).toFixed(2) }} aUEC</p>
          </td>
        </center>
      </div>
    </div>
    </span>
  </section>
  <section>
    <span>
      <div class="blocks locations">
        <div class="purchaseLocations">
          <center>
            <h3>Locations Buying {{selectedCommodity}}</h3>
          <br>
          <span v-for="location in locations" :key="location">
            <td>
              <h4>{{location.name}}</h4>
              <p>{{ selectedCommodityValue }} aUEC</p>
            </td>
          </span>
          </center>
        </div>
      </div>
    </span>
  </section>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Refinery'
  })
</script>

<script>
import { ref } from 'vue';

const MassValue = ref('')

function handleInputChange(event) {
  MassValue.value = event.target.value
}

// Function to format time in seconds to HH:MM:SS format
function formatTime(totalSeconds) {
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = Math.floor(totalSeconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to pad single-digit numbers with a leading zero
function pad(num) {
  return (num < 10) ? `0${num}` : num;
}

export default {
  data() {
    return {
      selectedRefinery: '',
      refineries: [
        {name:'HUR-L1',
          yieldmodifier: [
            {
              agricium:'1.03',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1.03',
            },
            {
              bexalite:'1',
            },
            {
              borase:'1',
            },
            {
              copper:'1.1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1.04',
            },
            {
              quantanium:'0.94',
            },
            {
              quartz:'0.93',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1.02',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'HUR-L2',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1.02',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'0.97',
            },
            {
              borase:'1.04',
            },
            {
              copper:'1.03',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1.02',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'1',
            },
            {
              quartz:'1',
            },
            {
              taranite:'0.96',
            },
            {
              titanium:'0.97',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'CRU-L1',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'1.05',
            },
            {
              borase:'1',
            },
            {
              copper:'1',
            },
            {
              corundum:'0.96',
            },
            {
              diamond:'1',
            },
            {
              gold:'1.04',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'1.03',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1.04',
            },
            {
              tungsten:'1.05',
            },
            ],
          },
        { name:'ARC-L1',
          yieldmodifier: [
            {
              agricium:'1.02',
            },
            {
              aluminium:'1.04',
            },
            {
              beryl:'0.91',
            },
            {
              bexalite:'1',
            },
            {
              borase:'0.97',
            },
            {
              copper:'1',
            },
            {
              corundum:'1.02',
            },
            {
              diamond:'1.04',
            },
            {
              gold:'0.94',
            },
            {
              hephaestanite:'0.98',
            },
            {
              laranite:'1.04',
            },
            {
              quantanium:'1',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1.03',
            },
            {
              titanium:'1',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'ARC-L2',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'1',
            },
            {
              borase:'1',
            },
            {
              copper:'1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'0.8',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'ARC-L4',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'1',
            },
            {
              borase:'1',
            },
            {
              copper:'1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'0.8',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'MIC-L1',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'0.92',
            },
            {
              beryl:'1.03',
            },
            {
              bexalite:'1.04',
            },
            {
              borase:'1.04',
            },
            {
              copper:'1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1.05',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1.05',
            },
            {
              laranite:'0.94',
            },
            {
              quantanium:'1.02',
            },
            {
              quartz:'1.03',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1',
            },
            {
              tungsten:'0.97',
            },
            ],
          },
        { name:'MIC-L2',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'1',
            },
            {
              borase:'1',
            },
            {
              copper:'1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'0.8',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1',
            },
            {
              titanium:'1',
            },
            {
              tungsten:'1',
            },
            ],
          },
        { name:'MIC-L5',
          yieldmodifier: [
            {
              agricium:'1',
            },
            {
              aluminium:'1',
            },
            {
              beryl:'1',
            },
            {
              bexalite:'1',
            },
            {
              borase:'1',
            },
            {
              copper:'1',
            },
            {
              corundum:'1',
            },
            {
              diamond:'1',
            },
            {
              gold:'1',
            },
            {
              hephaestanite:'1',
            },
            {
              laranite:'1',
            },
            {
              quantanium:'0.75',
            },
            {
              quartz:'1',
            },
            {
              taranite:'1',
            },
            {
              titanium:'0.95',
            },
            {
              tungsten:'1',
            },
            ],
          },
        ],
      selectedCommodity: '',
      commodities: [
        { name:'Agricium',
          value:'27.5',
          yieldperunit:'0.95',
          timeperunit:'3',
          costperunit:'0.65',
          },
        { name:'Aluminium',
          value:'1.29',
          yieldperunit:'0.95',
          timeperunit:'2',
          costperunit:'0.03',
          },
        { name:'Beryl',
          value:'4.34',
          yieldperunit:'0.95',
          timeperunit:'2.3',
          costperunit:'0.1',
          },
        { name:'Bexalite',
          value:'44',
          yieldperunit:'0.95',
          timeperunit:'2.9',
          costperunit:'1',
          },
        { name:'Borase',
          value:'35.19',
          yieldperunit:'0.95',
          timeperunit:'2.8',
          costperunit:'0.8',
          },
        { name:'Copper',
          value:'6.15',
          yieldperunit:'0.95',
          timeperunit:'2.3',
          costperunit:'0.14',
          },
        { name:'Corundum',
          value:'2.7',
          yieldperunit:'0.95',
          timeperunit:'2.1',
          costperunit:'0.06',
          },
        { name:'Diamond',
          value:'7.35',
          yieldperunit:'0.95',
          timeperunit:'2.3',
          costperunit:'0.16',
          },
        { name:'Gold',
          value:'6.4',
          yieldperunit:'0.95',
          timeperunit:'2.5',
          costperunit:'0.15',
          },
        { name:'Hephaestanite',
          value:'15.83',
          yieldperunit:'0.95',
          timeperunit:'2.6',
          costperunit:'0.35',
          },
        { name:'Laranite',
          value:'30.98',
          yieldperunit:'0.95',
          timeperunit:'3.1',
          costperunit:'0.7',
          },
        { name:'Quantanium',
          value:'88',
          yieldperunit:'0.95',
          timeperunit:'4',
          costperunit:'2',
          },
        { name:'Quartz',
          value:'1.54',
          yieldperunit:'0.95',
          timeperunit:'2.7',
          costperunit:'0.03',
          },
        { name:'Taranite',
          value:'35.19',
          yieldperunit:'0.95',
          timeperunit:'3.2',
          costperunit:'0.8',
          },
        { name:'Titanium',
          value:'8.9',
          yieldperunit:'0.95',
          timeperunit:'2.2',
          costperunit:'0.2',
          },
        { name:'Tungsten',
          value:'4.05',
          yieldperunit:'0.95',
          timeperunit:'2.1',
          costperunit:'0.1',
          },
        ],
      selectedMethod:'',
      methodTime:'',
      methodCost:'',
      methodYield:'',
      refmethods: [
        { name:'Cormack',
          clicked:false,
          timemultiplier:'0.25',
          costmultiplier:'2',
          yieldadditive:'0.27',
          },
        { name:'Dinyx Solventation',
          clicked:false,
          timemultiplier:'12',
          costmultiplier:'1',
          yieldadditive:'0',
          },
        { name:'Electrostarolysis',
          clicked:false,
          timemultiplier:'1.05',
          costmultiplier:'2',
          yieldadditive:'0.145',
          },
        { name:'Ferron Exchange',
          clicked:false,
          timemultiplier:'4',
          costmultiplier:'2',
          yieldadditive:'0',
          },
        { name:'Gaskin Process',
          clicked:false,
          timemultiplier:'0.5',
          costmultiplier:'6',
          yieldadditive:'0.145',
          },
        { name:'Kazen Winnowing',
          clicked:false,
          timemultiplier:'0.75',
          costmultiplier:'1',
          yieldadditive:'0.27',
          },
        { name:'Pyrometric Chromalysis',
          clicked:false,
          timemultiplier:'2',
          costmultiplier:'6',
          yieldadditive:'0',
          },
        { name:'Thermonatic Deposition',
          clicked:false,
          timemultiplier:'3',
          costmultiplier:'1',
          yieldadditive:'0.145',
          },
        { name:'XCR Reaction',
          clicked:false,
          timemultiplier:'0.125',
          costmultiplier:'6',
          yieldadditive:'0.27',
          },
        ],
      locations: [
        { name:'Lorville',
          },
        { name:'Orison',
          },
        { name:'Area 18',
          },
        { name:'New Babbage',
          },
        ],
    };
  },
  methods: {
    updateInfo(method) {
      this.methodTime = method.timemultiplier
      this.methodCost = method.costmultiplier
      this.methodYield = method.yieldadditive
      this.selectedMethod = method.name;
      this.refmethods.forEach((m) => {
        if (m.name !== method.name) {
          m.clicked = false;
        }
      });
      method.clicked = true;
    },
  },
  computed: {
    selectedCommodityValue() {
      const selectedCommodityObject = this.commodities.find(commodity => commodity.name === this.selectedCommodity);
      return selectedCommodityObject ? selectedCommodityObject.value : '';
    },
    selectedCommodityYield() {
      const selectedCommodityObject = this.commodities.find(commodity => commodity.name === this.selectedCommodity);
      return selectedCommodityObject ? selectedCommodityObject.yieldperunit : '';
    },
    refiningCost() {
      const selectedCommodityObject = this.commodities.find(commodity => commodity.name === this.selectedCommodity);
      return selectedCommodityObject ? selectedCommodityObject.costperunit : '';
    },
    refiningTime() {
      const selectedCommodityObject = this.commodities.find(commodity => commodity.name === this.selectedCommodity);
      return selectedCommodityObject ? selectedCommodityObject.timeperunit : '';
    },
    yieldModifier() {
      if (this.selectedRefinery && this.selectedCommodity) {
        const refinery = this.refineries.find(r => r.name === this.selectedRefinery);
        const commodity = this.commodities.find(c => c.name === this.selectedCommodity);
        const yieldModifierObj = refinery.yieldmodifier.find(ym => ym.hasOwnProperty(commodity.name.toLowerCase()));
        return yieldModifierObj[commodity.name.toLowerCase()];
      } else {
      return '1';
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-height: 85vh;
  background-color:var(--backgray);
  justify-content:center;
  user-select:none;
  display:table;
}

.blocks {
  animation: 1s appear;
  background-color:var(--darkgray);
  margin-block-start:15px;
  margin-inline-end:20px;
  height:auto;
  color:var(--lightorange);
  font-size:24px;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  z-index:1;
}
.blocks.input {

}
.blocks.methods {

}

hr {
  color:transparent;
}

.commodityInput {
  width:200px;
  text-align: center;
  padding-inline-start:40px;
  padding-block-start:10px;
  padding-block-end:10px;
}
.commodityInput select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:25px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:200px;
  height:42px;
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:20px;
  text-align:center;
}
.commodityInput select option {
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
}

.quantityInput {
  width:200px;
  text-align: center;
  padding-inline-start:80px;
  padding-block-start:10px;
  padding-block-end:10px;
}
.quantityInput h3 {
  margin-inline-start:25px;
}

.quantityInput .inputQuantity {
  width:200px;
  height:42px;
  background-color:var(--darkgray);
  border-style:solid;
  border-color:var(--lightorange);
  border-width:2px;
  border-radius:15px;
  color:var(--lightgray);
  margin-inline-start:-10px;
  margin-block-start:1px;
  padding-inline-start:15px;
  padding-inline-end:5px;
  margin-inline-end:0px;
}

.refineryLocation {
  text-align: center;
  padding-inline-start:80px;
  padding-block-start:10px;
  padding-inline-end:40px;
  padding-block-end:10px;
}
.refineryLocation select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:25px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:200px;
  height:42px;
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:20px;
  text-align:center;
  margin-inline-start:20px;
}
.refineryLocation select option {
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
}

.method {
  padding-block-start:10px;
}
.method button {
  border-style:solid;
  border-radius:50%;
  border-width:15px;
  border-color:var(--lightgray);
  cursor:pointer;
  display:inline-flex;
  padding:5px 5px;
  background-color:var(--lightgray);
  margin-block-start:5px;
}
.method button:hover {
  background-color:var(--orangehover);
  border-color:var(--orangehover);
}
.methodList {
  width:100px;
}
button.clicked {
  background-color:var(--lightorange);
  border-color:var(--lightorange);
}

.outputBlock {
  padding-block-start:10px;
  padding-block-end:10px;
  padding-inline-start:20px;
  padding-inline-end:20px;
}
.outputBlock td {
  padding-inline-end:15px;
  text-align:center;
}
.outputBlock p {
  color:var(--lightorange);
  font-size:20px;
}

.purchaseLocations {
  padding-block-end:15px;
}
.purchaseLocations h4 {
  text-decoration-line:underline;
  text-decoration-color:var(--lightorange);
}
.purchaseLocations td {
  padding-inline-end:10px;
}

h3 {
  animation: 1s appear;
  font: bold 28px/28px 'Segoe UI', sans-serif;
  color:var(--lightgray);
  letter-spacing:1px;
  margin-block-end:-15px;
  margin-inline-start:15px;
}

h4 {
  animation: 1s appear;
  font: bold 20px/24px 'Segoe UI', sans-serif;
  color:var(--lightgray);
  letter-spacing:1px;
  margin-block-end:5px;
  margin-inline-start:15px;
}

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>