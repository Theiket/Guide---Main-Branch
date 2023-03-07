<template>
  <div ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      starSystems: [],
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      intersectedObject: null,
    }
  },
  mounted() {
  // Create the scene, camera, and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x24262B)
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 70
    this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

  // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    this.scene.add(directionalLight)

  // Create the star mesh
    const starGeometry = new THREE.SphereGeometry(1, 32, 32)
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    this.starMesh = new THREE.Mesh(starGeometry, starMaterial)
    this.scene.add(this.starMesh)

  // Add click event listener to the star mesh
    this.$refs.canvas.addEventListener('click', () => {
    // TODO: Expand into solar system
    })

  // Add mousemove event listener to the canvas
    this.$refs.canvas.addEventListener('mousemove', (event) => {
    // Get canvas size
      const canvasRect = this.$refs.canvas.getBoundingClientRect();
      const canvasWidth = canvasRect.width;
      const canvasHeight = canvasRect.height;

    // Calculate normalized device coordinates
      this.mouse.x = (event.clientX / canvasWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / canvasHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
      this.raycaster.setFromCamera(this.mouse, this.camera);

    // Check for intersections
      const intersects = this.raycaster.intersectObject(this.starMesh);

      if (intersects.length > 0) {
        if (this.intersectedObject !== intersects[0].object) {
        // Mouse entered a new object
          if (this.intersectedObject) {
            this.intersectedObject.material.color.set(0xffffff);
          }

          this.intersectedObject = intersects[0].object;
          this.intersectedObject.material.color.set(0x0046F5);
        }
      } else {
      // Mouse left the object
        if (this.intersectedObject) {
          this.intersectedObject.material.color.set(0xffffff);
          this.intersectedObject = null;
        }
      }
    });

  // Render the scene
    this.animate = () => {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
    this.animate()
  },
}
</script>

<style scoped>
  div {
    max-height:90vh;
    margin:0;
    margin-inline-start:-1.5%;
    overflow:hidden;
  }
</style>