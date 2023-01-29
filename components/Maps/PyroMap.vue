<template>
<div class="container">
<div class="systemName">
<h1>
<NuxtLink to="/starmap">
PYRO
</NuxtLink>
</h1>
</div>
  <div class="solar-system">
  <div class="PyroVI-orbit orbit">
  <div class="planet PyroVI"></div>
  <div class="PyroV-orbit orbit">
  <div class="planet PyroV"></div>
    <div class="PyroIV-orbit orbit">
    <div class="planet PyroIV"></div>
      <div class="PyroIII-orbit orbit">
      <div class="planet PyroIII"></div>
        <div class="PyroII-orbit orbit">
        <div class="planet PyroII"></div>
          <div class="PyroI-orbit orbit">
          <div class="planet PyroI"></div>
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
  </div>
</div>
</template>

<script>
</script>

<style scoped>

.container {
  user-select:none;
}
/*Animations*/
.systemName {
  animation: 1.5s slideappear;
}
.solar-system {
  animation:5s appear;
}

.solar-system {
  max-width: 360px;
  max-height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  scale:150%;
  position:absolute;
  margin-block-start:15%;
  margin-inline-start:35%;
}

.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--lightorange);
	border-radius: 50%;
} 
.PyroI-orbit {
	width: 30px;
	height: 30px;
  rotate:10deg;
}
.PyroII-orbit {
	width: 50px;
	height: 50px;
  rotate:-20deg;
}
.PyroIII-orbit {
	width: 70px;
	height: 70px;
  rotate:90deg;
}
.PyroIV-orbit {
  width: 220px;
	height: 220px;
  rotate:6deg;
  border-color:transparent;
  border-style:hidden;
}
.PyroV-orbit {
  width: 210px;
	height: 210px;
  rotate:15deg;
}
.PyroVI-orbit {
  width: 360px;
	height: 360px;
  rotate:270deg;
}

.planet {
	position: absolute;
	top: -5px;
  width: 10px;
  height: 10px;
	border-radius: 50%;
  background-color: #3ff9dc;
}
.planet.PyroI {
  background-color:#CF3A2F;
}
.planet.PyroII {
  background-color:#2FCFA9;
}
.planet.PyroIII {
  background-color:#CF2F55;
}
.planet.PyroIV {
  background-color:white;
}
.planet.PyroV {
  background-color:green;
  z-index:1;
}
.planet.PyroVI {
  background-color:purple;
}
.planet:hover {
  background-color:var(--orangehover);
  box-shadow:0px 0px 5px black;
}

.sun {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #CF9A2F;
}
.sun:hover {
  background-color: var(--orangehover);
  box-shadow:0px 0px 5px black;
}

.systemName {
  color: var(--lightorange);
  letter-spacing:1px;
  margin-block-start:0px;
  text-decoration:none;
  display:inline-block;
  width:15%;
  position:absolute;
  margin-inline-start:20%;
  margin-block-start:5%;
  border-bottom-style:solid;
  border-width:2px;
  border-color:var(--lightgray)
}
.systemName h1 {
  font: 35px 'Segoe UI', sans-serif;
  font-weight:bold;
}
.systemName a {
  color:var(--lightorange);
}
.systemName a:hover {
  color:var(--orangehover);
}

@keyframes slideappear {
  0% {
    opacity: 0;
    left:-500px;
  }
  60% {
    opacity:0;
  }
  100% {
    opacity: 1;
    left:25px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>