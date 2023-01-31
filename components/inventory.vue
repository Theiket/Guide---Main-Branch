<template>
<div>
<div class="topcontainer">
  <h3 class="blocktitle">
    Catalogue
  </h3>
    <input 
    type="text" 
    id="search" 
    name="searchInput"
    placeholder="Search..."
    >
  <p>
    Filters Go Here
  </p>
</div>
<div class="container">
</div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Catalogue'
  })
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
}

.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  background-color:var(--darkgray);
  align-items:center;
  justify-content:center;
  user-select:none;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  margin-block-start:10px;
  margin-inline-end:7px;
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
  padding-inline-start:50px;
}
.topcontainer input {
  width:300px;
  height:42px;
  background-color:var(--darkgray);
  border-style:none;
  color:var(--lightgray);
  border-left:solid 2px var(--lightgray);
  border-right:solid 2px var(--lightgray);
  margin-inline-start:50px;
  margin-block-start:1px;
  padding-inline-start:15px;
}
.topcontainer p {
  margin-inline-start:50px;
  margin-block-start:13px;
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