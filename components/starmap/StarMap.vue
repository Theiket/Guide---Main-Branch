<template>
  <div ref="container"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import starSystemData from './starSystemData.json'
import { WebGLRenderer, Scene, PerspectiveCamera, SphereGeometry, Mesh, Raycaster, Vector2, MeshPhongMaterial, PointLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default {
  setup() {
    const container = ref(null)
    const raycaster = new Raycaster()
    const mouse = new Vector2()
    let renderer, scene, camera, animationFrameId

    onMounted(() => {
      // set up the THREE.js scene
      scene = new Scene()
      camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new WebGLRenderer()

      // Set the size of the renderer to match the canvas size
      const width = 1200
      const height= 900
      renderer.setSize(
        width, height
      )

      // add the renderer's canvas to the container
      container.value.appendChild(renderer.domElement)

      // position the camera
      camera.position.z = 5

      // load orbit controls
      const controls = new OrbitControls(camera, renderer.domElement)

      // load the 3D objects
      loadObjects()

      // load event listener for mouse hover/click
      window.addEventListener('click', (event) => {
        // update the mouse vector
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        // find intersections
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(scene.children, true)

        // if there's an intersection, the first one is the closest object
        if (intersects.length > 0) {
          const object = intersects[0].object
          console.log(`You selected ${object.name}`)
        }
      })

      // start the animation loop
      animate()
    })

    onBeforeUnmount(() => {
      // clean up the animation loop
      cancelAnimationFrame(animationFrameId)

      // remove the renderer's canvas from the container
      container.value.removeChild(renderer.domElement)

      // dispose of the scene, camera, and renderer
      scene.dispose()
      camera.dispose()
      renderer.dispose()
    })

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    function loadObjects() {
      // loop over each star system in the data
      for (const starSystem of starSystemData) {
        // create a 3D object for the star system
        const starSystemObject = createObject(starSystem)
        scene.add(starSystemObject)

        // loop over each object in the star system
        for (const object of starSystem.objects) {
          // create a 3D object for this object
          const object3D = createObject(object)
          starSystemObject.add(object3D)
        }
      }
    }

    function createObject(data) {
      // create a sphere geometry with a size based on the object's type
      const size = getSizeForObjectType(data.type)
      const geometry = new SphereGeometry(size, 32, 32)

      // create a material with a color based on the object's type
      const color = getColorForObjectType(data.type)
      const material = new MeshPhongMaterial({ color })

      // create a 3D mesh for this object
      const object3D = new Mesh(geometry, material)

      // set the object's name, so we can identify it later
      object3D.name = data.name

      // if this object is a star, add a point light
      if (data.type === 'star') {
        const light = new PointLight(0xffffff, 1, 100)
        object3D.add(light)
      }

      return object3D
    }


    function getColorForObjectType(type) {
      // return a color based on the object's type
      switch (type) {
        case 'star':
          return 0xffff00 // yellow
        case 'planet':
          return 0x0000ff // blue
        case 'moon':
          return 0xaaaaaa // grey
        case 'outpost':
          return 0x00ff00 // green
        case 'lagrange station':
          return 0xff00ff // magenta
        case 'asteroid belt':
          return 0x555555 // dark grey
        default:
          return 0xffffff // white
      }
    }

    function getSizeForObjectType(type) {
      // return a size based on the object's type
      switch (type) {
        case 'star':
          return 5
        case 'planet':
          return 3
        case 'moon':
          return 1
        case 'outpost':
        case 'lagrange station':
        case 'asteroid belt':
          return 0.5
        default:
          return 1
      }
    }

    return { container }
  }
}
</script>