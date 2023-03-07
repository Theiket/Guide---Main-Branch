<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      starSystems: [],
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      isDragging: false,
      intersectedObject: null,
    };
  },
  mounted() {
    // Initialize the THREE.js scene
    this.init();
    this.createStarSystems();
    this.addEventListeners();
    this.render();
  },
  methods: {
    init() {
      // Initialize the THREE.js scene
      this.scene = new THREE.Scene();

      // Initialize the camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 0, 50);

      // Initialize the renderer
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(this.renderer.domElement);

      // Initialize the controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.5;
    },
    createStarSystems() {
      // Create the star systems
      const systemPositions = [
        { x: -20, y: 0, z: 0 },
        { x: 20, y: 0, z: 0 },
        { x: 0, y: -20, z: 0 },
        { x: 0, y: 20, z: 0 },
      ];

      const starGeometry = new THREE.CircleGeometry(10, 32);
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

      for (let i = 0; i < systemPositions.length; i++) {
        const { x, y, z } = systemPositions[i];

        const star = new THREE.Points(starGeometry, starMaterial);
        star.position.set(x, y, z);
        this.scene.add(star);

        // Store the star system position for later use
        const worldPos = new THREE.Vector3();
        worldPos.setFromMatrixPosition(star.matrixWorld);
        this.starSystemPositions.push(worldPos);
      }
    },
    addEventListeners() {
      // Add event listeners for interactivity
      window.addEventListener('resize', this.onWindowResize);
      this.$refs.container.addEventListener('mousedown', this.onMouseDown);
      this.$refs.container.addEventListener('mouseup', this.onMouseUp);
    },

    onWindowResize() {
      // Resize the renderer and update the camera aspect ratio
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },


    onMouseDown(event) {
      // Set the dragging flag to true and store the mouse position
      this.isDragging = true;
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Cast a ray from the camera's position in the direction of the mouse click
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = raycaster.intersectObjects(this.starSystems);

      // Check if a star system was clicked on
      if (intersects.length > 0) {
        const clickedStarSystem = intersects[0].object;
        const index = this.starSystems.indexOf(clickedStarSystem);
        const worldPos = this.starSystemPositions[index];

        // Zoom in on the clicked star system
        this.controls.target.copy(worldPos);
        this.controls.update();
      }
    },

    onMouseUp(event) {
      // Set the dragging flag to false
      this.isDragging = false;

      // Check if an object was intersected and zoom in if it was
      if (this.intersectedObject) {
        const position = this.intersectedObject.position.clone();
        const distance = this.camera.position.distanceTo(position);
        const duration = Math.min(Math.max(distance / 2000, 1), 2);

        this.camera.position.x = position.x;
        this.camera.position.y = position.y;
        this.camera.position.z = position.z;

        this.intersectedObject = null;
      }
    },

    render() {
      // Call render in a loop
      requestAnimationFrame(this.render);

      // Update the controls and render the scene
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
  };
}
</script>

<style scoped>
  div {
    max-width: 100%;
    max-height: 90vh;
    overflow:hidden;
  }
</style>
