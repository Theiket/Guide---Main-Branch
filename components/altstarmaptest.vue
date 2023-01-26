<template>
<div id="mynetwork">
</div>
</template>

<script setup>
// create an array with nodes
var nodes = new vis.DataSet([
  { id: "Uedama", label: "<b>Uedama</b>\n<i>The Citadel</i>", color: "#38EEE3", group: "The Citadel" },
  { id: "Haatomo", label: "<b>Haatomo</b>\n<i>The Citadel</i>\n0.6", value: 6, color: "red", group: "The Citadel" },
  { id: "Juunigaish", label: "<b>Juunigaish</b>\n<i>The Citadel</i>", group: "The Citadel" },
  { id: "Kusononma", label: "<b>Kusononma</b>\n<i>The Citadel</i>", color: 'purple', group: "The Citadel" },
  { id: "Suroken", label: "<b>Suroken</b>\n<i>The Citadel</i>\ni:Drones", value: 3, color: "red", group: "The Citadel" },
  { id: "Caslemon", label: "<b>Caslemon</b>\n<i>Essence</i>", value: 3, color: "red", group: "Essence" },
  { id: "Kubinen", label: "<b>Kubinen</b>\n<i>The Citadel</i>", value: 3, color: "purple", group: "The Citadel" },
  { id: "Jolevier", label: "<b>Jolevier</b>\n<i>Gallent</i>", group: "Essence" },
  { id: "Yashunen", label: "<b>Yashunen</b>\n<i>The Citadel</i>", group: "The Citadel" },
  { id: "Hatakani", label: "<b>Hatakani</b>\n<i>The Citadel</i>", group: "The Citadel", color: "red", value: 3 },
  { id: "Sivala", label: "<b>Sivala</b>\n<i>The Citadel</i>", group: "The Citadel" },
  
  { id: "Ikao", label: "<b>Ikao</b>\n<i>The Citadel</i>", group: "The Citadel" },
  { id: "Kamio", label: "<b>Kamio</b>\n<i>The Citadel</i>", group: "The Citadel" },
  { id: "Halaima", label: "<b>Halaima</b>\n<i>The Citadel</i>", color: "blue", group: "The Citadel" },
  
  { id: "Jita", label: "<b>Jita</b>\n<i>The Forge</i>", value: 4, color: "#F7DE30", group: "The Forge" },
  
  
  { id: "Perimeter", label: "<b>Perimeter</b>\n<i>The Forge</i>", group: "The Forge", color: "blue" },
  { id: "Urlen", label: "<b>Urlen</b>\n<i>The Forge</i>", group: "The Forge" },
  { id: "Sirppala", label: "<b>Urlen</b>\n<i>The Citadel</i>", group: "The Citadel" },
  { id: "Anttiri", label: "<b>Anttiri</b>\n<i>The Citadel</i>", group: "The Citadel" },
  
  { id: "Mesybier", label: "<b>Mesybier</b>\n<i>Essence</i>\n0.5", group: "Essence", color: "red" },
  { id: "Myrethand", label: "<b>Myrethand</b>\n<i>Verge Vendor</i>\n0.3", group: "Verge Vendor", color: "red" },
  { id: "Indregulle", label: "<b>Indregulle</b>\n<i>Essence</i>\n0.2", group: "Essence", color: "#FF61C8" },
  
  { id: "Amarr", label: "<b>Amarr</b>\n<i>Gallent</i>", value: 4, color: "#F7DE30" },
  
  
   { id: "Amoderia", label: "<b>Amoderia</b>\n<i>Verge Vendor</i>\n0.3", group: "Verge Vendor", color: "red" },
   { id: "Pemene", label: "<b>Pemene</b>\n<i>Essence</i>\n0.3", group: "Essence", color: "white" },
  // Agents
  // Leya Mabey
  
  { id: "Sarekuva", label: "<b>Sarekuwa</b>\n<i>The Citadel</i>", group: "The Citadel", color: "white" },
  { id: "Tunttaras", label: "<b>Tunttaras</b>\n<i>The Citadel</i>", group: "The Citadel", color: "white" },
  { id: "Ahynada", label: "<b>Ahynada</b>\n<i>The Citadel</i>", group: "The Citadel", color: "white" },
  { id: "Oiniken", label: "<b>Oiniken</b>\n<i>The Citadel</i>", group: "The Citadel", color: "white" },
 
  { id: "Isaziwa", label: "<b>Isaziwa</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
   { id: "Hogimo", label: "<b>Hogimo</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
   { id: "Airkio", label: "<b>Airkio</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
   { id: "Korama", label: "<b>Korama</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
   { id: "Kamokor", label: "<b>Kamokor</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
   { id: "Inaro", label: "<b>Inaro</b>\n<i>The Citadel</i>", group: "The Citadel", color: "violet" },
  

]);

// create an array with edges
var edges = new vis.DataSet([
  
  { from: "Mesybier", to: "Myrethand" },
   { from: "Indregulle", to: "Myrethand" },
  { from: "Mesybier", to: "Caslemon" },
  
  { from: "Jita", to: "Perimeter" },
  { from: "Urlen", to: "Perimeter" },
  { from: "Urlen", to: "Sirppala" },
  { from: "Anttiri", to: "Sirppala" },
  { from: "Anttiri", to: "Juunigaish" },
  
  { from: "Uedama", to: "Juunigaish" },
  { from: "Uedama", to: "Haatomo", value: 3},
  { from: "Haatomo", to: "Kusononma" },
  { from: "Haatomo", to: 5 },
  { from: "Caslemon", to: "Jolevier" },
  { from: "Suroken", to: "Juunigaish"},
  //{ from: "Suroken", to: "Juunigaish", 
  // label: "hostal",
  // font: { color: "#ff000"}, },
  { from: "Suroken", to: "Kusononma" },
  
  { from: "Ikao", to: "Sarokuwa" },
  { from: "Tunttaras", to: "Sarokuwa" },
  { from: "Tunttaras", to: "Ahynada" },
  { from: "Ahynada", to: "Oiniken" },
  { from: "Isaziwa", to: "Oiniken" },

  
  { from: "Tunttaras", to: "Sarekuva" },
  
  { from: "Ikao", to: "Kamio" },
  { from: "Ikao", to: "Sarekuva" },
  
  
  { from: "Halaima", to: "Kamio" },
  { from: "Ikao", to: "Uedama" },
  
  { from: "Yashunen", to: "Jolevier" },
  { from: "Yashunen", to: "Hatakani" },
  { from: "Hatakani", to: "Sivala" },
  { from: "Uedama", to: "Sivala" },
  { from: "Kubinen", to: "Sivala" },
  
  { from: "Uedama", to: "Amarr", value: 4 },
  { from: "Kusononma", to: "Urlen" },
  
  { from: "Mesybier", to: "Pemene" },
  { from: "Pemene", to: "Amoderia" },
]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes: {
    shape: "dot",
    size: 20,
    color: "#509F75",
    font: {
      size: 14,
      color: "#509F75",
      multi: true,
      bold: {
        size: 18,
        color: "#ffffff",
      },
      italic: {
        color: "red",
      },
    },
    //shadow: true,
    borderWidth: 2,
    scaling: {
        customScalingFunction: function (min, max, total, value) {
          return value;
        },
        min: 1,
        max: 10,
    },
  },
  edges: {
    width: 1,
    //color: "#767676"
    color: "#EFEFB4", // EVE
    //shadow: true,
  },
  physics: {
    enabled: true,
  },
};
var network = new vis.Network(container, data, options);
</script>

<style scoped>
body {
  background-color: #090909;
  background-color: #1D1E22;
  /*background-color: #fff; shadow */
  color: #fff;
}

#mynetwork {
  width: 1200px;
  height: 1200px;
  border: 1px solid lightgray;
}

.research {
  background: "#9A06F5"
}

.pi {
  background: "#38EEE3"
}
</style>