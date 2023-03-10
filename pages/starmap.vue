<template>
  <div class="container">
    <stars />
      <transition name="zoom" mode="out-in">
        <component :is="currentComponent" 
        @component-changed="changeComponent" />
      </transition>
  </div>
</template>

<script>
// Import Statements
  import altstarmap from '/components/altstarmap.vue'
  import StantonMap from '/components/Maps/StantonMap.vue'
  import PyroMap from '/components/Maps/PyroMap.vue'
  import ArcCorpMap from '/components/Maps/Stanton/ArcCorpMap.vue'
  import CrusaderMap from '/components/Maps/Stanton/CrusaderMap.vue'
  import HurstonMap from '/components/Maps/Stanton/HurstonMap.vue'
  import MicroTechMap from '/components/Maps/Stanton/MicroTechMap.vue'

export default {
  components: {
    altstarmap,
    StantonMap,
    PyroMap,
    ArcCorpMap,
    CrusaderMap,
    HurstonMap,
    MicroTechMap
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
  .zoom-enter-from {
    transform: scale(0.3);
    opacity:0%
    }
  .zoom-enter-to {
    transform: scale(1);
    opacity:100%;
    }
  .zoom-leave-from {
    transform: scale(1);
    opacity:100%;
    }
  .zoom-leave-to {
     transform: scale(0.3);
     opacity:0%;
   }
  .zoom-enter-active {
    transition: all 2s ease;
    }
  .zoom-leave-active {
    transition: all 2s ease;
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
      transform: scale(1.5);
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