<template>
  <!-- Just a placeholder element, the actual rendering happens in StarMap -->
  <div />
</template>

<script>
export default {
  props: ['system', 'scene'],
  mounted() {
    // Add celestial bodies to the scene
    this.system.bodies.forEach(body => {
      const geometry = new THREE.SphereGeometry(body.size, 32, 32)
      const material = new THREE.MeshBasicMaterial({ color: body.color })
      const mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)
    })
  }
}
</script>
