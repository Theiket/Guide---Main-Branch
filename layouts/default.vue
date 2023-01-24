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
    <!-- Output the page content-->
    <div>
      <slot />
    </div>

    <div class="bottomcontainer">
    <div>
      <h3 class="footer">
      <table class="cells">
      <td class="copyright">
        Copyright 2023 Grindstone Mining Co.
      </td>
      <td class="version">
        GUIDE v0.1-HADES | Updated for Star Citizen Alpha v3.17.4-Live
      </td>
      </table>
      </h3>
    </div>
    </div>

  </div>
</template>

<style>

:root{
  --lightorange:#CF6A2F;
}
body header nav footer {
  background-color:#24262B;
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
  display:inline-flex;
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

.router-link-exact-active {
  text-decoration:none;
}
.nuxt-link-active {
  text-decoration:none;
}

.bottomcontainer {
  width:auto;
  padding-top:20px%;
  margin:auto;
  display: flex;
  vertical-align:bottom;
  justify-content:center;
  align-items: center;
  text-align: center;
  background-color:#24262B;
}

.footer {
  font: bold 10px 'Segoe UI', sans-serif;
  display: inline-block;
  color: #9DA1B2;
  letter-spacing: 1px;
}
.cells {
}
.copyright {
  width:800px;
}
.version {
  width:800px;

</style>