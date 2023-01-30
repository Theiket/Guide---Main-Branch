<template>
  <div style="max-width: 300px;">
    <va-select 
    placeholder="Select Planet"
    v-model="value"
    :options="options"  
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options:['Hurston', 'Arial', 'Aberdeen', 'Magda', 'Ita', 'Crusader', 'Cellin', 'Daymar', 'Yela', 'ArcCorp','Lyria', 'Wala', 'microTech', 'Calliope', 'Clio', 'Euterpe'],
    }
  },
}
</script>

<style scoped>
/* Dropdowns */
.va-select {
  --va-select-cursor: pointer;
  --va-select-dropdown-border-radius: 10px;
  --va-select-dropdown-background: var(--va-dropdown-secondary);
  --va-select-box-shadow: 0 4px 8px rgba(59, 63, 73, 0.15);
  --va-select-min-width: var(--va-form-element-min-width);
  --va-select-anchor-state-icon-margin-left: 0.25rem;
  letter-spacing:1px;
  word-spacing:0px;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
  color:var(--darkgray);
}
</style>