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
    const geometry = new THREE.WireframeGeometry(
      new THREE.SphereGeometry(1, 32, 32)
    )

    // Create the asteroid wireframe material
    const material = new THREE.LineBasicMaterial({
      color: 0x9DA1B2
    })

    // Create the asteroid wireframe mesh
    const mesh = new THREE.LineSegments(geometry, material)
    // Add the asteroid to the scene
    scene.add(mesh)

    // Resize the renderer when the window is resized
    window.addEventListener('resize', () => {
      renderer.setSize(
        this.$refs.asteroidCanvas.clientWidth,
        this.$refs.asteroidCanvas.clientHeight
      )
    })


// Variables for mouse movement
let mouseX = 0
let mouseY = 0

// Event listener for mouse movement
document.addEventListener("mousemove", (event) => {
  // Update the mouseX and mouseY values based on the mouse position
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
})

// Animation loop
function animate() {
  // Request the next animation frame
  requestAnimationFrame(animate)

  // Update the y-axis rotation of the mesh by 0.01 radians each frame
  mesh.rotation.y += 0.00

  // Update the x-axis and z-axis rotations of the mesh based on the mouseX and mouseY values
  mesh.rotation.x += mouseY * 0.005
  mesh.rotation.z += mouseX * 0.005

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
``

