<template>
<div class="container">
<div class="systemName">
<NuxtLink to="/starmap">
<h1>
STANTON
</h1>
</NuxtLink>
</div>
  <div class="solar-system">
    <div class="microtech-orbit orbit">
    <div class="planet microtech">
      <br>
        <p>microTech</p>
    </div>
      <div class="arccorp-orbit orbit">
      <div class="planet arccorp">
        <br>
          <p>ArcCorp</p>
      </div>
        <div class="crusader-orbit orbit">
        <div class="planet crusader">
          <br>
            <p>Crusader</p>
        </div>
          <div class="hurston-orbit orbit">
          <div class="planet hurston">
            <br>
            <p>Hurston</p>
          </div>
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
  user-select:none;
}
.systemName {
  animation: 1.5s slide;
}
.solar-system {
  animation: 5s appear;
}

.solar-system {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  scale:285%;
  position:absolute;
  margin-block-start:20%;
  margin-inline-start:40%;
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
  rotate:50deg;
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
  box-shadow:0px 0px 5px black;
  top:-6.5px;
  width:13px;
  height:13px;
}

.sun {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #CF9A2F;
}
.sun:hover {
  box-shadow:0px 0px 5px black;
  width:35px;
  height:35px;
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
  border-color:var(--lightgray);
  padding-inline-start:10px;
  z-index:1;
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

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 5px;
  font-weight:bold;
  letter-spacing:0.3px;
  color: var(--lightgray);  
}
.planet p {
  color:transparent;
}
.planet:hover p {
  color:var(--lightgray);
  padding-block-end:5px;
  animation: 0.3s appear;
}
.planet.hurston p {
  rotate:-130deg;
}
.planet.crusader p {
  rotate:120deg;
}
.planet.arccorp p {
  rotate:225deg;
}
.planet.microtech p {
  rotate:-50deg;
}


/* Animations */
@keyframes slide {
  0% {
    opacity: 0;
    left:-500px;
  }
  75% {
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