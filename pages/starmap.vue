<template>
  <div class="container">
    <stars />
      <transition :name="transitionName" mode="out-in">
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
  import Pyro1Map from '/components/Maps/Pyro/Pyro1Map.vue'
  import Pyro2Map from '/components/Maps/Pyro/Pyro2Map.vue'
  import Pyro3Map from '/components/Maps/Pyro/Pyro3Map.vue'
  import Pyro4Map from '/components/Maps/Pyro/Pyro4Map.vue'
  import Pyro5Map from '/components/Maps/Pyro/Pyro5Map.vue'
  import Pyro6Map from '/components/Maps/Pyro/Pyro6Map.vue'


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
      transitionName:'pull-in',
    };
  },
  methods: {
    changeComponent(componentName) {
      const prevComponent = this.currentComponent;
      this.currentComponent = componentName;
      if (prevComponent === 'StantonMap' && (componentName === 'HurstonMap' || componentName === 'CrusaderMap' || componentName === 'ArcCorpMap' || componentName === 'MicroTechMap')) {
        this.transitionName = 'pull-in';
      } else if ((prevComponent === 'HurstonMap' || prevComponent === 'CrusaderMap' || prevComponent === 'ArcCorpMap' || prevComponent === 'MicroTechMap') && componentName === 'StantonMap') {
        this.transitionName = 'pull-out';
      } else if (prevComponent === 'PyroMap' && (componentName === 'Pyro1Map' || componentName === 'Pyro2Map' || componentName === 'Pyro3Map' || componentName === 'Pyro4Map' || componentName === 'Pyro5Map' || componentName === 'Pyro6Map')) {
        this.transitionName = 'pull-in';
      } else if ((prevComponent === 'Pyro1Map' || prevComponent === 'Pyro2Map' || prevComponent === 'Pyro3Map' || prevComponent === 'Pyro4Map' || prevComponent === 'Pyro5Map' || prevComponent === 'Pyro6Map') && componentName === 'PyroMap') {
        this.transitionName = 'pull-out';
      } else if (componentName === 'altstarmap') {
        this.transitionName = 'pull-out';
      } else if (prevComponent === 'altstarmap'){
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
      transform: scale(3);
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
      transform: scale(3);
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
      transform: scale(0.3);
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