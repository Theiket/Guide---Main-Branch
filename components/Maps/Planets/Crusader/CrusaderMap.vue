<template>
  <div ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  data() {
    return {
      objects: [
        { name: 'Stanton', planets: ['Hurston', 'Crusader', 'ArcCorp', 'microtech'] },
        { name: 'Pyro', planets: ['Pyro I', 'Pyro II', 'Pyro III', 'Pyro IV', 'Pyro V', 'Pyro VI'] },
        { name: 'Nyx', planets: ['Delamar'] },
      ],
      camera: null,
      renderer: null,
      scene: null,
      spheres: [],
      solarSystem: null,
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
    // Create the scene, camera, and renderer
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x24262B)
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.z = 50
      this.camera.position.x = 0
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)

    // Add the renderer to the canvas element
      this.$refs.canvas.appendChild(this.renderer.domElement)

    // Create a container for the solar system
      this.solarSystem = new THREE.Object3D()

    // Add spheres to the scene based on the objects array
      this.objects.forEach((object, index) => {
        const geometry = new THREE.SphereGeometry(5, 32, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const sphere = new THREE.Mesh(geometry, material)
        sphere.position.set(-15 + index * 15, 0, 0)
        sphere.name = object.name
        sphere.userData.planets = object.planets // Store planets array as user data
        this.scene.add(sphere)
        this.spheres.push(sphere)
      })

    // Add event listener for clicking on spheres
      this.renderer.domElement.addEventListener('click', this.onClick.bind(this))
    },
    animate() {
      requestAnimationFrame(this.animate.bind(this))
      this.spheres.forEach((sphere) => {
        sphere.rotation.y += 0.01
      })
      this.renderer.render(this.scene, this.camera)
    },
    onClick(event) {
    // Check if a sphere was clicked
      const raycaster = new THREE.Raycaster()
      const mouse = new THREE.Vector2()
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, this.camera)
      const intersects = raycaster.intersectObjects(this.spheres)

      if (intersects.length > 0) {
      // Update the camera position to look at the clicked sphere
        const clickedSphere = intersects[0].object
        const distance = clickedSphere.position.distanceTo(this.camera.position)
        const direction = this.camera.position.clone().sub(clickedSphere.position).normalize()
        const offset = direction.multiplyScalar(distance * 0.5)
        this.camera.position.copy(clickedSphere.position.clone().add(offset))
        this.camera.lookAt(clickedSphere.position)

      // Remove the event listener for clicking on spheres
        this.renderer.domElement.removeEventListener('click', this.onClick.bind(this))

      // Remove the spheres from the scene
        this.solarSystem.remove(...this.spheres)

      // Create the solar system for the clicked object
        const planets = clickedSphere.userData.planets
        const sphereInstances = []
        const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })

        for (let i = 0; i < planets.length; i++) {
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
          sphere.position.set(10 * i, 0, 0)
          sphere.name = planets[i]
          sphereInstances.push(sphere)
        }

        const instanceGroup = new THREE.Group()
        instanceGroup.add(...sphereInstances)
        this.solarSystem.add(instanceGroup)

      // Add the solar system to the scene and the spheres array
        this.scene.add(this.solarSystem)
        this.spheres = sphereInstances
      }
    }
  },
</script>

<style scoped>
  div {
    max-height:90vh;
    margin:0;
    margin-inline-start:-1.5%;
    overflow:hidden;
  }
</style>