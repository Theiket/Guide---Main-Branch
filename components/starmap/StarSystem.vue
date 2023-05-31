<template>
  <!-- Just a placeholder element, the actual rendering happens in StarMap -->
  <div />
</template>

<script>
import * as THREE from 'three';

export default {
  props: ['system', 'scene'],
  setup(props) {
    const { system, scene } = props;

    onMounted(() => {
      // Add celestial bodies to the scene
      system.bodies.forEach((body) => {
        const geometry = new THREE.SphereGeometry(body.size, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: body.color });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      });
    });
  },
};
</script>
