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
for (i = 0; i < particleCount; i++) {
  var p = new Particle();
  particles.push(p);
  points.push([p.x*c, p.y*c]);
}

//console.log(JSON.stringify(points));
function renderParticles() {
  p = "";
  // Render particles
  for (var i = 0; i < particleCount; i++) {
    px = particles[i]["x"];
    py = particles[i]["y"];
    pz = particles[i]["z"];
    size = particles[i]["size"];
    hsl = "hsl(" + particles[i]["hue"] + ", " + particles[i]["sat"] + "%, 90%)";
    tooltip = uuidv4();
      
    //console.log("px: " + px + ", py: " + py + ", pz: " + pz)
    p += '<div class="star" style="top:'+ px +'%; left:'+ py +'%; width:'+ size +'px; height:'+ size +'px; background:'+hsl+'" data-tooltip="' + tooltip + '"></div>';
  }
  $('#stars').html(p);
}

// init
renderParticles();