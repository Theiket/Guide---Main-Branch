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
              <option v-for="commodity in commodities" :key="commodity">{{ commodity }}</option>
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
              <option v-for="refinery in refineries" :key="refinery">{{ refinery }}</option>
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
            <p>Value</p>
          </td>
          <td>
            <h3>Refining Cost</h3>
            <br>
            <p>Value</p>
          </td>
          <td>
            <h3>Refining Time</h3>
            <br>
            <p>Value</p>
          </td>
          <td>
            <h3>Net Value</h3>
            <br>
            <p>Value</p>
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
          </center>
          <br>
          <span v-for="location in locations" :key="location">
            <td>
              <h4>{{location.name}}</h4>
              <p>{{selectedCommodity}}</p>
            </td>
          </span>
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

export default {
  data() {
    return {
      selectedRefinery: '',
      refineries: ['HUR-L1','HUR-L2','CRU-L1','ARC-L1','ARC-L2','ARC-L4','MIC-L1','MIC-L2','MIC-L5'],
      selectedCommodity: '',
      commodities: ['Agricium','Aluminium','Beryl','Bexalite','Borase','Copper','Corundum','Diamond','Gold','Hephaestanite','Laranite','Quantanium','Quartz','Taranite','Titanium','Tungsten','Aphorite','Dolivine','Hadanite'],
      selectedMethod:'',
      refmethods: [
        {
          name:'Cormack',
          clicked:false,
        },
        {
          name:'Dinyx Solventation',
          clicked:false,
        },
        {
          name:'Electrostarolysis',
          clicked:false,
        },
        {
          name:'Ferron Exchange',
          clicked:false,
        },
        {
          name:'Gaskin Process',
          clicked:false,
        },
        {
          name:'Kazen Winnowing',
          clicked:false,
        },
        {
          name:'Pyrometric Chromalysis',
          clicked:false,
        },
        {
          name:'Thermonatic Deposition',
          clicked:false,
        },
        {
          name:'XCR Reaction',
          clicked:false,
        },
      ],
      locations: [
        {
          name:'Lorville',
        },
        {
          name:'Orison',
        },
        {
          name:'Area 18',
        },
        {
          name:'New Babbage',
        },
      ],
    };
  },
  methods: {
    updateInfo(method) {
      this.selectedMethod = method;
      this.refmethods.forEach((m) => {
        if (m.name !== method.name) {
          m.clicked = false;
        }
      });
      method.clicked = true;
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