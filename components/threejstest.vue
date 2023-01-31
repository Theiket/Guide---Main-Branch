<template>
<div>
<ClientOnly>
  <canvas id="scene"></canvas>
    <template #fallback>
      <p>Loading...</p>
    </template>
</ClientOnly>
</div>
</template>

<script>
import * as THREE from 'three';

const scene = new THREE.Scene();

var ww = 1903,
  wh = 722;

function init(){
  renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene'), antialias: true,});
  renderer.setClearColor(0x000000);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(ww,wh);
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0005 );
  camera = new THREE.PerspectiveCamera(50, ww/wh, 5, 10000);
  camera.position.set(0, 0, 1000);
  scene.add(camera);
  // light = new THREE.DirectionalLight(0xffffff, 1);
  // light.position.set( 50, 250, 500 );
  
 var light = new THREE.PointLight( 0xff7f24, 6, 1000 );
light.position.set(250, 0, 750 );
light.castShadow = true;            // default false
light.shadow.mapSize.width = 1024;  // default 512
light.shadow.mapSize.height = 1024; // default 512
light.shadow.camera.near = 2;       // default 0.5
light.shadow.camera.far = 1500;  
  scene.add(light);
  
   var light2 = new THREE.PointLight( 0x6495ed, 6, 1000 );
light2.position.set(-250, -100, 0 );
light2.castShadow = true;            // default false
light2.shadow.mapSize.width = 1024;  // default 512
light2.shadow.mapSize.height = 1024; // default 512
light2.shadow.camera.near = 2;       // default 0.5
light2.shadow.camera.far = 1500;  
  scene.add(light2);


//  var obj = createBox(10);
  var material = new THREE.PointCloudMaterial({
      color: 0x555555
    });
    
    var geometry = new THREE.Geometry();
    var x, y, z;
    for(var i=0;i<2000;i++){
      x = (Math.random() * ww *2) - ww;
      y = (Math.random() * wh * 2) - wh;
      z = (Math.random() * 3000) - 1500;
      
      geometry.vertices.push(new THREE.Vector3(x, y, z));
    };
    
    var pointCloud = new THREE.PointCloud(geometry, material);
    scene.add(pointCloud);
  
  
  
  
  var asteroids = createAsteroids();
//  var obj = extrude();
//  var obj = extrude2();
  
  function update () {
  //  console.log(1);
    pointCloud.rotation.x -= 0.0001;
    //pointCloud.rotation.y -= 0.001;
    pointCloud.rotation.z -= 0.0001;
    asteroids.forEach(function(obj){
          obj.rotation.x -= obj.r.x;
          obj.rotation.y -= obj.r.y;
          obj.rotation.z -= obj.r.z;
    })

    renderer.render(scene, camera);
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
};

function createAsteroids(){
  var maxWidth = 1000;
  var maxHeight = 200;
  var maxDepth = 200;
  var asteroids = [];
  for(var i=0;i<7;i++){
    asteroids.push(createRock(5+Math.random()*50,200,maxWidth,300,400));
  }
  for(var i=0;i<30;i++){
    asteroids.push(createRock(5+Math.random()*10,500,maxWidth,200,600));
  }
  for(var i=0;i<160;i++){
    asteroids.push(createRock(2+Math.random()*5,1000,maxWidth,150,800));
  }
  return asteroids;
}



function createRock(size,spreadX,maxWidth,maxHeight,maxDepth){
  geometry = new THREE.DodecahedronGeometry(size, 1);
  geometry.vertices.forEach(function(v){
    v.x += (0-Math.random()*(size/4));
    v.y += (0-Math.random()*(size/4));
    v.z += (0-Math.random()*(size/4));
  })
  var color = '#111111';
  color = ColorLuminance(color,2+Math.random()*10);
  console.log(color);
  texture = new THREE.MeshStandardMaterial({color:color,
                                        shading: THREE.FlatShading,
                                     //   shininess: 0.5,
                                            roughness: 0.8,
                                            metalness: 1
                                        });

  cube = new THREE.Mesh(geometry, texture);
  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.scale.set(1+Math.random()*0.4,1+Math.random()*0.8,1+Math.random()*0.4);
  //cube.rotation.y = Math.PI/4;
  //cube.rotation.x = Math.PI/4;
  var x = spreadX/2-Math.random()*spreadX;
  var centeredness = 1-(Math.abs(x)/(maxWidth/2));
  var y = (maxHeight/2-Math.random()*maxHeight)*centeredness
  var z = (maxDepth/2-Math.random()*maxDepth)*centeredness
  cube.position.set(x,y,z)
  cube.r = {};
  cube.r.x = Math.random() * 0.005;
  cube.r.y = Math.random() * 0.005;
  cube.r.z = Math.random() * 0.005;
  scene.add(cube);
  return cube;
};

//Init our scene
init();

function ColorLuminance(hex, lum) {

  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i*2,2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00"+c).substr(c.length);
  }

  return rgb;
}
</script>

<style scoped>

body,html{
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  overflow: hidden;
}

</style>