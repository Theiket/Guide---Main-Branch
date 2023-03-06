<template>
  <div ref="canvasWrapper" @click="onSolarSystemClicked">
    <canvas ref="canvas"></canvas>
  </div>
</template>


<script>
import * as THREE from 'three';
import OrbitControls from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  data() {
    return {
      cameraPosition: new THREE.Vector3(0, 0, 50),
      isZoomedIn: false,
    };
  },
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

    // Create the scene
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x24262B);

    // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      scene.add(directionalLight);

    // Create the solar system sphere
      const solarSystemGeometry = new THREE.SphereGeometry(10, 32, 32);
      const solarSystemMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const solarSystemSphere = new THREE.Mesh(solarSystemGeometry, solarSystemMaterial);
      this.scene.add(solarSystemSphere);

    // Create the orbit lines for the planets
      const orbitLineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const orbitLineGeometry = new THREE.BufferGeometry();
      const orbitLineVertices = [];

      for (let i = 0; i < 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        orbitLineVertices.push(new THREE.Vector3(Math.cos(angle) * 10, 0, Math.sin(angle) * 10));
      }

      orbitLineGeometry.setFromPoints(orbitLineVertices);

      for (let i = 0; i < 4; i++) {
        const orbitLine = new THREE.LineLoop(orbitLineGeometry, orbitLineMaterial);
        orbitLine.position.z = -5 - i * 5;
        this.scene.add(orbitLine);
      }

    // Create the four planets
      const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
      const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const planetDistances = [3, 5, 7, 9];
      for (let i = 0; i < 4; i++) {
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.z = -5 - i * 5;
        planet.position.x = planetDistances[i];
        this.scene.add(planet);
      }

    // Add interactivity
      this.controls = new OrbitControls(this.camera, this.$refs.canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.5;
      this.controls.maxDistance = 100;
      this.controls.minDistance = 10;
      this.controls.enableZoom = true;

    // Update controls
      this.controls.update();

    // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate);
        if (this.isZoomedIn) {
          const targetPosition = new THREE.Vector3(0, 0, 20);
          const newPosition = this.camera.position.clone().lerp(targetPosition, 0.1);
          this.camera.position.copy(newPosition);
        }
        this.renderer.render(this.scene, this.camera);
      };

    onSolarSystemClicked() {
      // Zoom in on the solar system when it's clicked
      this.isZoomedIn = true;
      this.animateCamera();
    },

    animateCamera() {
      if (this.isZoomedIn) {
        requestAnimationFrame(this.animateCamera);
        const targetPosition = new THREE.Vector3(0, 0, 20);
        const newPosition = this.cameraPosition.clone().lerp(targetPosition, 0.1);
        this.cameraPosition.copy(newPosition);
      }
    },
  },
};
</script>
