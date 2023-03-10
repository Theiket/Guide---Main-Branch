<template>
  <div class="container">
    <stars />
      <transition name="pull-in" mode="out-in">
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
      currentComponent: 'altstarmap',
      transitionName:'zoom',
    };
  },
  methods: {
    changeComponent(componentName) {
      const prevComponent = this.currentComponent;
      this.currentComponent = componentName;
      if (prevComponent === 'StantonMap' || prevComponent ==='PyroMap' || prevComponent === 'HurstonMap' || prevComponent === 'CrusaderMap' || prevComponent === 'ArcCorpMap' || prevComponent === 'MicroTechMap') {
        this.transitionName = 'pull-out';
      } else if (componentName === 'StantonMap' || componentName === 'PyroMap' || componentName === 'HurstonMap' || componentName === 'CrusaderMap' || componentName === 'ArcCorpMap' || componentName === 'MicroTechMap') {
        this.transitionName = 'pull-in';
      } else {
        this.transitionName = 'pull-in';
      }
    },
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
  /* Pull In */
    .pull-in-enter-from {
      transform: scale(0.3);
      opacity:0%
      }
    .pull-in-enter-to {
      transform: scale(1);
      opacity:100%;
      }
    .pull-in-leave-from {
      transform: scale(1);
      opacity:100%;
      }
    .pull-in-leave-to {
      transform: scale(0.3);
      opacity:0%;
    }
    .pull-in-enter-active {
      transition: all 2s ease;
      }
    .pull-in-leave-active {
      transition: all 2s ease;
      }
  /* Pull Out */
    .pull-out-enter-from {
      transform: scale(0.3);
      opacity:0%
      }
    .pull-out-enter-to {
      transform: scale(1);
      opacity:100%;
      }
    .pull-out-leave-from {
      transform: scale(1);
      opacity:100%;
      }
    .pull-out-leave-to {
      transform: scale(3);
      opacity:0%;
    }
    .pull-out-enter-active {
      transition: all 2s ease;
      }
    .pull-out-leave-active {
      transition: all 2s ease;
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