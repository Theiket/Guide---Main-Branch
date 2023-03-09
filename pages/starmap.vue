<template>
  <div class="container">
    <stars />
      <transition name="zoom">
        <component :is="currentComponent" @component-changed="changeComponent"></component>
      </transition>
  </div>
</template>

<script>
import altstarmap from '/components/altstarmap.vue'
import StantonMap from '/components/Maps/Planets/StantonMap.vue'
import PyroMap from '/components/Maps/Planets/PyroMap.vue'

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
  animation: bounce-in 1s;
  }
  .zoom-leave-active {
    animation: bounce-in 1s reverse;
    }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
    }
</style>