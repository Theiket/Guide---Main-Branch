<template>
  <div ref="container">
    <canvas ref="canvas">
    </canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  data () {
    return {
      starSystems:[],
    };
  },
  mounted() {
      const canvas = this.$refs.canvas

    // Create the scene, camera, and renderer
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x24262B);
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 70;
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);

    // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      this.scene.add(directionalLight);

    // Create the star mesh
      const starGeometry = new THREE.SphereGeometry(1, 32, 32)
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const starMesh = new THREE.Mesh(starGeometry, starMaterial)
      this.scene.add(starMesh)

    // Add mouseover event listener to the star mesh
    starMesh.addEventListener('mouseover', () => {
      starMesh.material.color.set(0x0046F5);
    })

    // Add click event listener to the star mesh
    starMesh.addEventListener('click', () => {
      // TODO: Expand into solar system
    })
    // Render the scene
    this.animate = () => {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
    this.animate()
  }
}
</script>

<style scoped>
  div {
    width:100%;
    height:90vh;
    overflow:hidden;
  }
</style>