<template>
<div class="topmenu">
  <header>
    <nav>
      <table>
      <td>
      <NuxtLink to="/">
        <h1 class="menu">
        GUIDE
        </h1>
      </NuxtLink>
      </td>
      <td>
        <div class="links">
        <div class="button">
          <NuxtLink to="/mining">
          <img src="~/assets/gem.svg">
          </NuxtLink>
        </div>
        <div class="button">
          <NuxtLink to="/trading">
          <img src="~/assets/twinarrows.svg">
          </NuxtLink>
        </div>
        <div class="button">
          <NuxtLink to="/spaceships">
          <img src="~/assets/rocket.svg">
          </NuxtLink>
        </div>
        <div class="button">
          <NuxtLink to="/starmap">
          <img src="~/assets/globe.svg">
          </NuxtLink>
        </div>
        <div class="button">
          <NuxtLink to="/info">
          <img src="~/assets/infoicon.svg">
          </NuxtLink>
        </div>
        </div>
        </td>
    </table>
  </nav>
</header>
</div>
</template>

<style scoped>

:root{
  --lightorange:#CF6A2F;
}
.topmenu {
  background-color:#24262B;
  padding-left:25px;
  letter-spacing:5px;
  text-decoration:none;
  padding-block-end:7px;;
}
.menu {
  color: #CF6A2F;
  padding-block-start:5px;
  font: bold 45px 'Segoe UI', sans-serif;
  text-decoration:none;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

.links {
  position:absolute;
  right:10px;
  padding-left:63%;
  margin-top: 7px;
  border-top: solid;
  border-bottom: solid;
  border-color:#CF6A2F;
}

.button {
  color:#CF6A2F;
  text-align:center;
  border-style:none;
  font: bold 15px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  display: inline-block;
  padding: 10px 10px;
  text-decoration:none;
  margin-inline-end:5px;
}
.button a:hover {
  color:#CF9A2F;
}

.nuxt-link-active {
  text-decoration:none;
}
</style>