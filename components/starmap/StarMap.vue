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
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted, ref, shallowRef, reactive } from 'vue';
import StarSystem from './StarSystem.vue';

export default {
  components: {
    StarSystem,
  },
  data() {
    return {
      scene: shallowRef(new THREE.Scene()),
    };
  },
  setup() {
    const container = ref(null);
    const scene = shallowRef(new THREE.Scene());
    const starSystems = reactive([
        { id: '1', name: 'Solar System',
          position: { x: 0, y: 0, z: 0 },
          bodies: [
            { id: '1-1', name: 'Sun',
              type: 'star',
              size: 1,
              color: 0xffff00,
            },
            { id: '1-2', name: 'Earth',
              type: 'planet',
              size: 0.1,
              color: 0x0000ff,
            },
            // Add more celestial bodies...
          ],
        },
        { id: '2', name: 'Alpha Centauri',
          position: { x: 3, y: 2, z: 1 },
          bodies: [
            { id: '2-1', name: 'Alpha Centauri A',
              type: 'star',
              size: 1.1,
              color: 0xff8800,
            },
            { id: '2-2', name: 'Alpha Centauri B',
              type: 'star',
              size: 0.9,
              color: 0xffaa00,
            },
            { id: '2-3', name: 'Proxima Centauri',
              type: 'star',
              size: 0.2,
              color: 0xffcc00,
            },
            // Add more celestial bodies...
          ],
        },
        // Add more star systems...
      ]);

    onMounted(() => {
      const camera = new THREE.PerspectiveCamera(
        75,
        container.value.clientWidth / container.value.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Star Geometry
      for (const starSystem of starSystems) {
        const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3()]);
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const points = new THREE.Points(geometry, material);
        points.position.set(starSystem.position.x, starSystem.position.y, starSystem.position.z);
        points.userData.starSystem = starSystem;
        scene.value.add(points);
      }

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        container.value.clientWidth,
        container.value.clientHeight
      );
      container.value.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      // Set the background color to black
      renderer.setClearColor(0x24262B, 0)

      // Lighting
      const pointLight = new THREE.PointLight(0xffffff)
      pointLight.position.set(10,10,10)
      const ambientLight = new THREE.AmbientLight(0x24262B)

      scene.value.add(pointLight, ambientLight)

      const animate = function() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene.value, camera);
      }
      // Hover Event Listener
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      let hoveredStarSystem = null;

      const onMouseMove = (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);
        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.value.children);
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          // If we're already hovering over a star system and it's not the one we just intersected, reset its color
          if (hoveredStarSystem && hoveredStarSystem !== intersectedObject) {
            hoveredStarSystem.material.color.set(0xffffff);
          }
          // Set the color of the intersected star system and update the hoveredStarSystem variable
          intersectedObject.material.color.set(0xff0000);
          hoveredStarSystem = intersectedObject;
        } else if (hoveredStarSystem) {
          // If we're not intersecting any star system but we were previously hovering over one, reset its color
          hoveredStarSystem.material.color.set(0xffffff);
          hoveredStarSystem = null;
        }
      };
      window.addEventListener('mousemove', onMouseMove);
      
      // Click Event Listener
      const onMouseClick = (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);
        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.value.children);
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          const starSystem = intersectedObject.userData.starSystem;
          // Now do something with the clicked star system, for example, log it to the console
          console.log(starSystem);
          // Move the camera to the clicked star system
          const distance = 5;  // Adjust this value as needed
          const direction = new THREE.Vector3().subVectors(camera.position, intersectedObject.position).normalize();
          camera.position.copy(intersectedObject.position).add(direction.multiplyScalar(distance));
          camera.lookAt(intersectedObject.position);
        }
      };

      window.addEventListener('mousedown', onMouseClick);


      animate();
    });

    onUnmounted(() => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseClick);
    });

    return { container, scene };
  },
};
</script>

<style scoped>
.star-map {
  display:flex;
  height: 85vh;
  width: 100vw;
  justify-content:center;
}
</style>
