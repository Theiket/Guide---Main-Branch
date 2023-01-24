<template>
  <nav>
  <div class="topmenu">
    <div>
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
        <div>
          <NuxtLink to="/mining">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          <img src="~/assets/gem.svg">
          </a>
          </NuxtLink>
          <NuxtLink to="/trading">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          <img src="~/assets/twinarrows.svg">
          </a>
          </NuxtLink>
          <NuxtLink to="/spaceships">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          <img src="~/assets/rocket.svg">
          </a>
          </NuxtLink>
          <NuxtLink to="/starmap">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          <img src="~/assets/globe.svg">
          </a>
          </NuxtLink>
          <NuxtLink to="/info">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          <img src="~/assets/infoicon.svg">
          </a>
          </NuxtLink>
          </div>
        </div>
        </td>
    </table>
    </div>
  </div>
  </nav>
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
  font-size: 45px;
  padding-block-start:5px;
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
}
.button a:hover {
  color:#CF9A2F;
}

.nuxt-link-active {
  text-decoration:none;
}
</style>