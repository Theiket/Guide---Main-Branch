<template>
    <div>
    <body>
    <center>
      <h1>{{ error.statusCode }}</h1>
      <p>Your credentials are insufficient.</p>
      <p>{{ error.message }}</p>
    <div class="errorbutton">
    <NuxtLink to="/">
      Back to Home
    </NuxtLink>
    </div>
    </center>
    </body>
    </div>
</template>

<script setup>
+ definePageMeta({ layout: 'default' })
  defineProps(['error'])
</script>

<style scoped>

 body {
  background-color:var(--backgray);
  justify-content:center;
  vertical-align:center;
}

h1 {
  color: var(--lightorange);
  margin-block-start:0px;
  font: bold 75px 'Segoe UI', sans-serif;
  text-decoration:none;
  display:inline-block;
  animation: 1s appear;
  user-select:none;
}

p {
  color:var(--lightgray);
  font: bold 35px 'Segoe UI', sans-serif;
}

.errorbutton {  
  color:var(--lightorange);
  font: bold 25px 'Segoe UI', sans-serif;
  border:2px solid;
  margin:0px 500px 0px 500px;
  padding:15px 15px 15px 15px;
  border-radius:15px;
}

.errorbutton a {
  text-decoration:none;
  color:var(--lightorange);

}
.errorbutton a:hover {
  color:var(--orangehover);
}
</style>