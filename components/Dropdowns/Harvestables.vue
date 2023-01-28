<template>
<div>
      <va-select
        v-model="value"
        class="mb-6"
        placeholder="Select Deposit"
        color="#CF6A2F"
        width="180px"
        :options="options"
      />
</div>
</template>

<script>
export default {
  name: 'harvestable',
  data () {
    return {
      value:'',
      options: ['C Type', 'E Type', 'M Type', 'P Type', 'Q Type', 'S Type', 'Atacamite', 'Felsic', 'Gneiss', 'Granite', 'Igneous', 'Obsidian', 'Quantanium', 'Quartzite', 'Shale', 'Aphorite', 'Dolivine', 'Hadanite'],
    }
  },
}
</script>

<style scoped>

</style>