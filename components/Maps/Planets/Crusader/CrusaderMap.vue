<template>
  <div ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  data() {
    return {
      starSystems: [
        { name: 'STANTON',
          position: new THREE.Vector3(0, 0, 0),
          color: 0xffffff
          },
        { name: 'PYRO',
          position: new THREE.Vector3(-5, 10, 0),
          color: 0xffffff
          },
        ],
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      intersectedObject: null,
    }
  },
  methods: {
    createLabel(text, color) {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const width = 256
      const height = 64
      canvas.width = width
      canvas.height = height
      // Text
      context.font = 'bold 48px Segoe UI'
      context.fillStyle = '#CF6A2F'
      context.textAlign = 'center'
      context.fillText(text, width / 2, height / 1.5)
      // Canvas texture
      const texture = new THREE.CanvasTexture(canvas)
      texture.minFilter = THREE.LinearFilter
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping
      // Label mesh
      const geometry = new THREE.PlaneGeometry(width / 32, height / 32)
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      const mesh = new THREE.Mesh(geometry, material)
      // Return mesh
      return mesh
    }
  },
  mounted() {
  // Create the scene, camera, and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x24262B)
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 50
    this.camera.position.x = 0
    this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
  // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    this.scene.add(directionalLight)
  // Create the star mesh objects and their name labels
    this.starSystems.forEach(starSystem => {
      // Create the stars for each object in starSystem
      const starGeometry = new THREE.SphereGeometry(1, 32, 32)
      const starMaterial = new THREE.PointsMaterial({
        size: 0.5,
        sizeAttenuation: true,
        color: starSystem.color,
        alphaTest: 0.5
      })
      const starMesh = new THREE.Mesh(starGeometry, starMaterial)
      starMesh.position.copy(starSystem.position)
      starMesh.name = starSystem.name
      this.scene.add(starMesh)
    // Create the name labels
      const nameLabel = this.createLabel(starSystem.name, 0x000000)
      nameLabel.position.copy(starSystem.position)
      nameLabel.position.y += 2
      nameLabel.visible = false
      starMesh.nameLabel = nameLabel
      this.scene.add(nameLabel)
    });
  // Functions for eventListeners
    function handleIntersection(event, camera, raycaster, scene, intersectedObject, mouse) {
    // Get the canvas position
      const canvasBounds = event.currentTarget.getBoundingClientRect()
    // Calculate normalized device coordinates
      mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1
      mouse.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
    // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera)
    // Check for intersections
      const intersects = raycaster.intersectObjects(scene.children.filter(child => child.nameLabel))
      if (intersects.length > 0) {
        if (intersectedObject !== intersects[0].object) {
        // Mouse entered a new object
          if (intersectedObject) {
            intersectedObject.material.color.set(0xffffff)
            intersectedObject.nameLabel.visible = false
          }
          intersectedObject = intersects[0].object
          intersectedObject.material.color.set(0x0046F5)
          intersectedObject.nameLabel.visible = true
        }
      } else {
      // Mouse left the object
        if (intersectedObject) {
          intersectedObject.material.color.set(0xffffff)
          intersectedObject.nameLabel.visible = false
          intersectedObject = null
        }
      }
      return intersectedObject
    }

  // Add click event listener to the canvas
    this.$refs.canvas.addEventListener('click', (event) => {
      this.intersectedObject = handleIntersection(event, this.camera, this.raycaster, this.scene, this.intersectedObject, this.mouse)
      // TODO: Expand into solar system
    })

  // Add mousemove event listener to the canvas
    this.$refs.canvas.addEventListener('mousemove', (event) => {
      this.intersectedObject = handleIntersection(event, this.camera, this.raycaster, this.scene, this.intersectedObject, this.mouse)
    })

  // Add interactivity
      this.controls = new OrbitControls(this.camera, this.$refs.canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.5;
      this.controls.maxDistance = 1000;
      this.controls.minDistance = 10;
      this.controls.enableZoom = true;

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