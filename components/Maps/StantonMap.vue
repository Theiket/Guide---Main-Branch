<template>
<div class="container">
  <div class="solar-system">
    <div class="microtech-orbit orbit">
    <div class="planet microtech"></div>
      <div class="arccorp-orbit orbit">
      <div class="planet arccorp"></div>
        <div class="crusader-orbit orbit">
        <div class="planet crusader"></div>
          <div class="hurston-orbit orbit">
          <div class="planet hurston"></div>
          <NuxtLink to="starmap">
          <div class="sun">
          </div>
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>

.container {
  position:absolute;
  margin-block-start:20%;
  margin-inline-start:40%;
  animation: 1s appear;
}
.solar-system {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  scale:300%;
}

.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--lightorange);
	border-radius: 50%;
} 
.microtech-orbit {
  width: 210px;
	height: 210px;
  rotate:60deg;
}
.arccorp-orbit {
	width: 165px;
	height: 165px;
  rotate:85deg;
}
.crusader-orbit {
	width: 120px;
	height: 120px;
  rotate:105deg;
}
.hurston-orbit {
	width: 90px;
	height: 90px;
  rotate:-110deg;
}


.planet {
	position: absolute;
	top: -5px;
  width: 10px;
  height: 10px;
	border-radius: 50%;
  background-color: #3ff9dc;
}
.planet.hurston {
  background-color:#CF3A2F;
}
.planet.crusader {
  background-color:#2FCFA9;
}
.planet.arccorp {
  background-color:#CF2F55;
}
.planet.microtech {
  background-color:white;
}
.planet:hover {
  background-color:var(--orangehover);
  box-shadow:0px 0px 5px black;
}

.sun {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #CF9A2F;
}
.sun:hover {
  background-color: var(--orangehover);
  box-shadow:0px 0px 5px black;
}
</style>