<template>
<div>
  <div class="topcontainer">
    <h3 id="blocktitle" class="blocktitle">
      ARCHIVE
    </h3>
    <input 
      class="inputSearch"
      type="text" 
      id="search" 
      name="searchInput"
      placeholder="Search..."
      aria-label="Search through archives"
    >  
    <va-button-toggle
      toggle-color="#CF6A2F"
      active-button-text-color="#1B191E"
      text-color="#FFFFFF"
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
      aria-labelledby="blocktitle"
    />
  </div>
  <div class="container">
    <table class="invlist">
    <tr class="invheading">
      <th scope="col">
        <p>Name</p>
      </th>
      <th scope="col">
        <p>Description</p>
      </th>
      <th scope="col">
        <p>Category</p>
      </th>
      <th scope="col">
        <p>Location</p>
      </th>
      <th scope="col">
        <p>Price</p>
      </th>
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
  width: 100%;
  table-layout: fixed;
  text-align: left;
}
.invlist th, .invlist td {
  border-right:solid;
  border-color:rgba(157, 161, 178, 0.4);
  border-width:1px;
  padding: 15px;
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

/*Text*/

p, h2, h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  letter-spacing:1px;
  padding-block-end: 5px;
  color: var(--lightgray);
  padding-block-end:0px;
  padding-inline-start:15px;
  padding-inline-end:15px;
}

h2 {
  font-size: 28px;
  color: var(--lightorange);
  padding-block-end:5px;
  margin-block-start:-20px;
}

h4 {
  font-size: 22px;
}

.title {
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

p {
  font-size: 14px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .topcontainer {
    flex-direction: column;
    align-items: center;
  }

  .inputSearch {
    width: 90%;
    margin-top: 10px;
  }

  .va-button-toggle {
    margin-top: 10px;
  }

  .invlist {
    overflow-x: auto;
  }
}

</style>
