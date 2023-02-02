<template>
<div class="container">
  <div class="blocks">
  <table>
    <tr>
    <td>
      <div class="commodityInput">
        <h3>
        Commodity
        </h3>
        <br>
        <select name="selectCommodity" id="commodityType">
      <option value="agricium">Agricium</option>
      <option value="aluminium">Aluminium</option>
      <option value="beryl">Beryl</option>
      <option value="bexalite">Bexalite</option>
      <option value="borase">Borase</option>
      <option value="copper">Copper</option>
      <option value="corundum">Corundum</option>
      <option value="diamond">Diamond</option>
      <option value="gold">Gold</option>
      <option value="hephaestanite">Hephaestanite</option>
      <option value="laranite">Laranite</option>
      <option value="quantanium">Quantanium</option>
      <option value="quartz">Quartz</option>
      <option value="taranite">Taranite</option>
      <option value="titanium">Titanium</option>
      <option value="tungsten">Tungsten</option>
      <option value="aphorite">Aphorite</option>
      <option value="dolivine">Dolivine</option>
      <option value="hadanite">Hadanite</option>
      </select>
      </div>
    </td>
    <td>
      <div class="quantityInput">
      <h3>Quantity</h3>
      <br>
      <input 
      class="inputQuantity"
      type="number" 
      id="quantityInput" 
      placeholder="Input quantity"
      >
      </div>
    </td>
    </tr>
    <tr>
    <td>
    <div class="refineryLocation">
    <h3>Location</h3>
    </div>
    </td>
    <td>
    <div class="refineryLocation">
    <select 
    name="selectRefinery" 
    id="refineryStation"
    >
      <option value="stanton1L1">HUR-L1</option>
      <option value="stanton1L2">HUR-L2</option>
      <option value="stanton2L1">CRU-L1</option>
      <option value="stanton3L1">ARC-L1</option>
      <option value="stanton3L2">ARC-L2</option>
      <option value="stanton3L4">ARC-L4</option>
      <option value="stanton4L1">MIC-L1</option>
      <option value="stanton4L2">MIC-L2</option>
      <option value="stanton4L5">MIC-L5</option>
    </select>
    </div>
    </td>
    </tr>
  </table>
    <div class="outputBlock">
    <h3>Mass</h3>
    <br>
    <output 
    name="mass"
    id = "massOutput"
    >
    </output>
    </div>
  </div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Refinery'
  })


</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 85vh;
  display: flex;
  background-color:var(--backgray);
  align-items:center;
  justify-content:center;
  user-select:none;
}

.commodityInput {
  width:200px;
  text-align: center;
  padding-inline-start:40px;
  padding-block-start:10px;
}
.commodityInput select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:15px;
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
  margin-inline-start:50px;
}
.refineryLocation select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:15px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:200px;
  height:42px;
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:20px;
  text-align:center;
  margin-block-start:15px;
  margin-inline-start:20px;
}
.refineryLocation select option {
  font-weight:bold;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
}

.outputBlock {
  padding-inline-start:50px;
  padding-block-start:100px;
}

.blocks {
  animation: 1s appear;
  background-color:var(--darkgray);
  min-width:90%;
  height:82vh;
  margin-inline-end:20px;
  justify-items:center;
  align-items:center;
  color:var(--lightorange);
  font-size:24px;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  z-index:1;
}

h3 {
  animation: 1s appear;
  font: bold 28px/28px 'Segoe UI', sans-serif;
  color:var(--lightgray);
  letter-spacing:1px;
  margin-block-end:-15px;
  margin-inline-start:15px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>