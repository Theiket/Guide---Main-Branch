<template>
  <div class="container">
    <canvas ref="canvas" />
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
    // Set up the renderer
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);

    // Set up the camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 70;

    // Set up the scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x24262B);

    // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      this.scene.add(directionalLight);
    
    // Create the sun
      const sunGeometry = new THREE.SphereGeometry(5, 128, 128);
      const sunMaterial = new THREE.MeshPhongMaterial({
        emissive: 0xfdb813,
        emissiveIntensity: 1,
        map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/lava/lavatile.jpg'),
        shininess: 10,
        specular: 0xfdb813
      });
      this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
      this.sun.position.set(0, 0, 0);
      this.scene.add(this.sun);

      // Add a point light to the sun
      const pointLight = new THREE.PointLight(0xfdb813, 1, 100);
      pointLight.position.set(0, 0, 0);
      this.sun.add(pointLight);

      // Create the sun glow effect
      const sunGlowGeometry = new THREE.SphereGeometry(6, 64, 64);
      const sunGlowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(0xfdb813) },
          viewVector: { value: new THREE.Vector3() }
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() 
          {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() 
          {
            float intensity = pow(0.4 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(glowColor * intensity, intensity);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });
      this.sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
      this.sunGlow.position.set(0, 0, 0);
      this.scene.add(this.sunGlow);

      // Create a solar flare
      const flareGeometry = new THREE.ConeGeometry(0.4, 4, 32);
      const flareMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const flare = new THREE.Mesh(flareGeometry, flareMaterial);
      flare.position.set(1, 0, 0);
      this.sun.add(flare);

      // Create a prominence
      const prominenceGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
      const prominenceMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.8 });
      const prominence = new THREE.Mesh(prominenceGeometry, prominenceMaterial);
      prominence.position.set(-2, 0, 0);
      this.sun.add(prominence);

    // Create planet #1
      const hurstonGeometry = new THREE.SphereGeometry(2, 32, 32);
      const hurstonMaterial = new THREE.MeshStandardMaterial({
      color: 0xCF3A2F,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: false,
    });
      this.hurston = new THREE.Mesh(hurstonGeometry, hurstonMaterial);
      this.hurston.position.x = 17;
      this.scene.add(this.hurston);

    // Create planet #2
      const crusaderGeometry = new THREE.SphereGeometry(2, 32, 32);
      const crusaderMaterial = new THREE.MeshStandardMaterial({
      color: 0x2FCFA9,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: false,
    });
      this.crusader = new THREE.Mesh(crusaderGeometry, crusaderMaterial);
      this.crusader.position.x = 25;
      this.crusader.position.z = 0;
      this.scene.add(this.crusader);

    // Create planet #3
      const arccorpGeometry = new THREE.SphereGeometry(2, 32, 32);
      const arccorpMaterial = new THREE.MeshStandardMaterial({
      color: 0xCF2F55,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: false,
    });
      this.arccorp = new THREE.Mesh(arccorpGeometry, arccorpMaterial);
      this.arccorp.position.x = 34;
      this.arccorp.position.z = 0;
      this.scene.add(this.arccorp);

    // Create planet #4
      const microtechGeometry = new THREE.SphereGeometry(2, 32, 32);
      const microtechMaterial = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: false,
    });
      this.microtech = new THREE.Mesh(microtechGeometry, microtechMaterial);
      this.microtech.position.x = 50;
      this.microtech.position.z = 0;
      this.scene.add(this.microtech);

    // Add interactivity
      this.controls = new OrbitControls(this.camera, this.$refs.canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.5;
      this.controls.maxDistance = 100;
      this.controls.minDistance = 10;
      this.controls.enableZoom = true;

    // Start animation loop
      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);

    // Animate solar system objects
      this.sun.rotation.y += 0.001;
      this.hurston.rotation.y += 0.005;
      this.crusader.rotation.y += 0.001;
      this.arccorp.rotation.y += 0.003;
      this.microtech.rotation.y += 0.002;

    // Update controls
      this.controls.update();

    // Render scene
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
    // Adjust canvas size on window resize
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
  mounted() {
    this.init();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>

<style scoped>
  .container {
    height:85vh;
    overflow:hidden;
  }


</style>