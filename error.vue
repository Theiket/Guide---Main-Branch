<template>
  <NuxtLayout name="default">
    <div class="pageError">
      <h1>{{ error.statusCode }}</h1>
      <p>Task failed successfully</p>
      <p>{{ error.message }}</p>
      <div class="errorbutton">
        <NuxtLink to="/">
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  defineProps(['error'])
</script>

<style scoped>
.pageError {
  display:flex;
  flex-direction:column;
  height:50vh;
  user-select:none;
  justify-content:center;
  text-align:center;
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
  font: bold 25px 'Segoe UI', sans-serif;
  border:2px solid var(--lightorange);
  margin: 2% 35%;
  padding:15px;
  border-radius:15px;
  background-color:var(--darkgray);
}

.errorbutton a {
  text-decoration:none;
  color:var(--lightorange);
  transition:color 0.3s ease;
}

.errorbutton a:hover {
  color:var(--orangehover);
}

/* Responsive font sizes */
@media screen and (max-width: 768px) {
  h1 {
    font: bold 50px 'Segoe UI', sans-serif;
  }
  p {
    font: bold 25px 'Segoe UI', sans-serif;
  }
  .errorbutton {
    font: bold 20px 'Segoe UI', sans-serif;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font: bold 35px 'Segoe UI', sans-serif;
  }
  p {
    font: bold 18px 'Segoe UI', sans-serif;
  }
  .errorbutton {
    font: bold 15px 'Segoe UI', sans-serif;
  }
}
</style>