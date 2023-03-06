<template>
  <div>
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
      this.renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.85);
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

    // Create the star
      const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        emissive: 0xffff00,
        emissiveIntensity: 1.5
      });
      this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
      this.scene.add(this.sun);

      // Add a point light to simulate the star's emission of light
      const sunLight = new THREE.PointLight(0xffff00, 1.5, 100);
      this.sun.add(sunLight);

    // Create planet #1
      const hurstonGeometry = new THREE.SphereGeometry(2, 32, 32);
      const hurstonMaterial = new THREE.MeshStandardMaterial({
      color: 0xCF3A2F,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: true,
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
      flatShading: true,
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
      flatShading: true,
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
      flatShading: true,
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
