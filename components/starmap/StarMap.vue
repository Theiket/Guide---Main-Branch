<template>
  <div ref="container" class="star-map">
    <StarSystem
      v-for="system in starSystems"
      :key="system.id"
      :system="system"
      :scene="scene"
    />
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref } from 'vue'
import StarSystem from './StarSystem.vue'

export default {
  components: {
    StarSystem
  },
  data() {
    return {
      scene: new THREE.Scene(),
      starSystems: [ /* ... */ ]
    }
  },
  setup() {
    const container = ref(null)

    onMounted(() => {
      const camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
      camera.position.z = 5

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(container.value.clientWidth, container.value.clientHeight)
      container.value.appendChild(renderer.domElement)

      const controls = new OrbitControls(camera, renderer.domElement)

      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(this.scene, camera)
      }

      animate()
    })

    return { container }
  }
}
</script>

<style scoped>
.star-map {
  /* Adjust styling as necessary */
}
</style>
