<template>
  <!-- Container for the canvas -->
  <div class="asteroid-container">
    <!-- Canvas element -->
    <canvas ref="asteroidCanvas"></canvas>
  </div>
</template>

<script>
// Import Three.js
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

export default {
  mounted() {
    // Create the scene
    const scene = new THREE.Scene()

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      // Field of view (75 degrees)
      75,
      // Aspect ratio (width / height)
      this.$refs.asteroidCanvas.clientWidth / this.$refs.asteroidCanvas.clientHeight,
      // Near clipping plane (0.1 units from camera)
      0.1,
      // Far clipping plane (1000 units from camera)
      1000
    )
    // Set the initial camera position along the Z-axis
    camera.position.z = 1.75

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: this.$refs.asteroidCanvas
    })
    // Set the size of the renderer to match the canvas size
    const width = 400
    const height= 200
    renderer.setSize(
      width, height
    )
    // Set the background color to black
    renderer.setClearColor(0x24262B, 0)

    // Create the asteroid wireframe geometry
    const geometry = new THREE.TetrahedronGeometry(1, 4)

    // Create the asteroid wireframe material
    const material = new THREE.MeshStandardMaterial({
      color: 0x9DA1B2,
      wireframe: false,
      wireframeLinecap: "square",
      wireframeLinejoin: "miter",
      roughness: 0.8,
      flatShading: true,
    })

    // Create the asteroid wireframe mesh
    const mesh = new THREE.Mesh(geometry, material)
    // Add the asteroid to the scene
    scene.add(mesh)

    

    // Resize the renderer when the window is resized
    window.addEventListener('resize', () => {
      renderer.setSize(
        this.$refs.asteroidCanvas.clientWidth,
        this.$refs.asteroidCanvas.clientHeight
      )
    })

// Lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(10,10,10)
const ambientLight = new THREE.AmbientLight(0x24262B)

scene.add(pointLight, ambientLight)

// Create a new TrackballControls object
    const controls = new TrackballControls(camera, renderer.domElement)
    controls.noZoom = true;

    // Animation loop
    function animate() {
      // Request the next animation frame
      requestAnimationFrame(animate)

      // Update the x and y axis rotation of the mesh by chosen radians each frame
      mesh.rotation.y += 0.001
      mesh.rotation.x += 0.0004

      // Update the controls
      controls.update()

      // Render the scene and camera
      renderer.render(scene, camera)
    }

    // Start the animation loop
    animate()
  }
}
</script>

<style scoped>
.asteroid-container {
  width: 200px;
  height: 200px;
  z-index:-1;
}
</style>