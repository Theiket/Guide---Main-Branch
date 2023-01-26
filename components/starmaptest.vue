<template>
  <div id="stars">
  </div>
</template>

<script>
// Settings
var particleCount = 80,
	motion = 0.05,
	color = '#ffffff',
	particleSizeBase = 8,
	particleSizeMultiplier = 0.5,
  noiseLength = 1000,
	noiseStrength = 1,
  canvas = document.getElementById('stars'),
	mouse = { x: 0, y: 0 },
	m = {},
	r = 0,
  c = 1000,
	n = 0,
	nAngle = (Math.PI * 2) / noiseLength,
	nRad = 100,
	nScale = 0.5,
	nPos = {x: 0, y: 0},
	points = [],
	vertices = [],
	triangles = [],
	links = [],
	particles = [],
	flares = [],
  colorrange = [0,30,60,175,200,240,270];

// Particle class
var Particle = function() {
	this.x = random(0, 98.9);
	this.y = random(0, 98.9);
	this.z = random(0, 98.9);
  this.size = random(1, particleSizeBase) * particleSizeMultiplier;
  this.hue = colorrange[random(0,colorrange.length - 1)];
	this.sat = random(50,100);
	this.color = color;
	this.opacity = random(0.1,1,true);
	this.flicker = 0;
	this.neighbors = []; // placeholder for neighbors
};

// Utils
function noisePoint(i) {
	var a = nAngle * i,
		cosA = Math.cos(a),
		sinA = Math.sin(a),
		//value = simplex.noise2D(nScale * cosA + nScale, nScale * sinA + nScale),
		//rad = nRad + value;
		rad = nRad;
	return {
		x: rad * cosA,
		y: rad * sinA
	};
}

function position(x, y, z) {
	return {
		x: (x * canvas.width) + ((((canvas.width / 2) - mouse.x + ((nPos.x - 0.5) * noiseStrength)) * z) * motion),
		y: (y * canvas.height) + ((((canvas.height / 2) - mouse.y + ((nPos.y - 0.5) * noiseStrength)) * z) * motion)
	};
}

function sizeRatio() {
	return canvas.width >= canvas.height ? canvas.width : canvas.height;
}

function random(min, max, float) {
	return float ?
		Math.random() * (max - min) + min :
		Math.floor(Math.random() * (max - min + 1)) + min;
}
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

// Create particle positions
for (var i = 0; i < particleCount; i++) {
  var p = new Particle();
  particles.push(p);
  points.push([p.x*c, p.y*c]);
}

//console.log(JSON.stringify(points));
function renderParticles() {
  p = "";
  // Render particles
  for (var i = 0; i < particleCount; i++) {
    var px = particles[i]["x"];
    var py = particles[i]["y"];
    var pz = particles[i]["z"];
    var size = particles[i]["size"];
    var hsl = "hsl(" + particles[i]["hue"] + ", " + particles[i]["sat"] + "%, 90%)";
    var tooltip = uuidv4();
      
//console.log("px: " + px + ", py: " + py + ", pz: " + pz)
    p += '<div class="star" style="top:'+ px +'%; left:'+ py +'%; width:'+ size +'px; height:'+ size +'px; background:'+hsl+'" data-tooltip="' + tooltip + '"></div>';
  }
  $('#stars').html(p);
};

//init
renderParticles();
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
html,
body {
	margin: 0;
	padding: 0;
}

html{
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: relative;
  color: #5EFC8D;
  font-family: "Source Code Pro", mono;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

#stars {
	display: block;
	position: relative;
  overflow:hidden;
	width: 100%;
	height: 16rem;
	height: 100vh;
	z-index: 1;
}
.star {
  position:absolute;
  background:#fff;
  border-radius:50%;
  box-shadow: 0 0 10px rgba(255,255,255, 0.9);
  cursor:pointer;
}
.star:after {
  content: attr(data-tooltip);
  width:285px;
  display: block;
  position: absolute;
  background: #000;
  padding: 3px;
  border-radius: 3px;
  top: -100%;
  left: 300%;
  text-align: center;
  display: none;
  font-size: 0.8em;
  line-height: 1.3;
  border: 1px solid rgba(100, 100, 100, 0.3);
  z-index:9001;
}
.star:before {
  content: "";
  display: block;
  position: absolute;
  padding: 200%;
  width:0px;
  height:0px;
  bottom:-152%;
  left:-152%;
  margin-right:-50%;
  border-radius: 100%;
  box-shadow: none;
  background: rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 0px 0px #5EFC8D;
  transition: all 350ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
}

.star:hover:after{
  display: block;
}
.star:hover:before {
  display: block;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 4px #5EFC8D;
}

</style>