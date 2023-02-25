<template>
<div>
<div class="topcontainer">
  <h3 class="blocktitle">
    ARCHIVE
  </h3>
  <input 
    class="inputSearch"
    type="text" 
    id="search" 
    name="searchInput"
    placeholder="Search..."
  >  
  <va-button-toggle
    toggle-color="#CF6A2F"
    active-button-text-color="#1B191E"
    text-color="#9DA1B2"
    color="#1B191E"
    v-model="model"
    :options="[
        { label: 'ALL', value: 'all' },
        { label: 'WEAPONS', value: 'weapons' },
        { label: 'CLOTHING', value: 'clothing' },
        { label: 'CONSUMABLES', value: 'consumables' },
        { label: 'SHIPS', value: 'ships' },
        { label: 'COMPONENTS', value: 'components' },
      ]"
  />
</div>
<div class="container">
  <table class="invlist">
  <tr class="invheading">
    <td>
    <p>Name</p>
    </td>
    <td>
    <p>Description</p>
    </td>
    <td>
    <p>Category</p>
    </td>
    <td>
    <p>Location</p>
    </td>
    <td>
    <p>Price</p>
    </td>
  </tr>
  <tr>

  </tr>
  </table>
</div>
</div>
</template>

<script>
  useHead({
    title: 'GUIDE | Archive'
  })

export default {
  data () {
    return {
      model: 'two',
    }
  },
}

</script>

<style scoped>

.topcontainer {
  margin: 0 auto;
  height: 50px;
  display: flex;
  background-color:var(--darkgray);
  user-select:none;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  margin-block-start:7px;
  margin-inline-end:7px;
  animation: 1s appear;
}

.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  background-color:var(--darkgray);
  user-select:none;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  margin-block-start:10px;
  margin-inline-end:7px;
  animation: 1s appear;
}

.container .invlist {
  margin-inline-start:50px;
  margin-block-start:10px;
}
.invlist td {
  border-right:solid;
  border-color:rgba(157, 161, 178, 0.4);
  border-width:1px;
  width:100px;
}
.invlist .invheading {
  text-align:center;
}


.blocktitle{
  animation: 1s appear;
  font: bold 34px/34px 'Segoe UI', sans-serif;
  color:var(--lightorange);
  letter-spacing:1px;
  margin-block-end:0px;
}
.topcontainer .blocktitle {
  text-align:left;
  padding-inline-start:30px;
  margin-block-start:3px;
}
.topcontainer .inputSearch {
  width:400px;
  height:42px;
  background-color:var(--darkgray);
  border-style:none;
  color:var(--lightgray);
  margin-inline-start:20px;
  margin-block-start:1px;
  padding-inline-start:15px;
  margin-inline-end:15px;
}
.topcontainer p {
  margin-inline-start:0px;
  margin-block-start:13px;
}
.topcontainer td {
  border-right:solid;
  border-color:rgba(157, 161, 178, 0.4);
  border-width:1px;
  width:50px;
}
.topcontainer {
  --va-button-toggle-border-radius:0px;
}
.topcontainer .va-button-toggle {
  position:relative;
}

/*Text*/

.title {
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end: 0px;
  padding-inline-start:15px;
  padding-inline-end:15px;
}

h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 22px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end:5px;
  padding-block-start:5px;
}

h2 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightorange);
  padding-block-end:5px;
  margin-block-start:-20px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>