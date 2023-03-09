<template>
  <div class="container">
    <stars />
      <transition name="zoom">
        <component :is="currentComponent" 
        @component-changed="changeComponent" />
      </transition>
  </div>
</template>

<script>
import altstarmap from '/components/altstarmap.vue'
import StantonMap from '/components/Maps/StantonMap.vue'
import PyroMap from '/components/Maps/PyroMap.vue'

export default {
  components: {
    altstarmap,
    StantonMap,
    PyroMap
  },
  data() {
    return {
      currentComponent: 'altstarmap'
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
};
</script>

<style scoped>
/* Container */
  .container {
      user-select:none;
      overflow:hidden;
      width:100%;
      height:90vh;
      margin-inline-start:-0.75%;
      position:relative;
      }
/* Animation */
  .zoom-enter-active {
  animation: zoomfade 1s reverse;
    }
  .zoom-leave-active {
    animation: zoomfade 1s;
    }
  .zoomout-enter-active {
  animation: zoomfade 1s;
    }
  .zoomout-leave-active {
    animation: zoomout 1s;
    }
  
  @keyframes zoomfade {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity:0;
    }
    }
  @keyframes zoomout {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity:0;
    }
    }
  
</style>