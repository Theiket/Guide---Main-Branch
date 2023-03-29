<template>
  <div>
  <!-- Header Nav Menu -->
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
            <div class="navlinks">
              <div class="navbutton">
                <NuxtLink to="/mining">
                  <Icon name="bi:gem" />
                </NuxtLink>
              </div>
              <div class="navbutton">
                <NuxtLink to="/trading">
                  <Icon name="material-symbols:currency-exchange" />
                </NuxtLink>
              </div>
              <div class="navbutton">
                <NuxtLink to="/spaceships">
                  <Icon name="carbon:rocket" />
                </NuxtLink>
              </div>
              <div class="navbutton">
                <NuxtLink to="/starmap">
                  <Icon name="ph:planet" />
                </NuxtLink>
              </div>
              <div class="navbutton">
                <NuxtLink to="/catalogue">
                  <Icon name="material-symbols:search" />
                </NuxtLink>
              </div>
              <div class="navbutton">
                <NuxtLink to="/info">
                  <Icon name="ic:outline-info" />
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

  <!-- Footer Text -->
      <div class="bottom-container">
        <footer>
          <div>
            <h3 class="footer">
            <span class="copyright">
              Copyright 2023 ©
              Grindstone Mining Co.
            </span>
            <span class="version">
              GUIDE v0.1-HADES | Updated for Star Citizen Alpha v3.17.4-LIVE
            </span>
            </h3>
          </div>
        </footer>
      </div>

    </div>
  </div>
</template>

<style>
 /* Root */
  :root{
    --greensafety:#2FCFA9;
    --reddanger:#CF3A2F;
    --lightorange:#CF6A2F;
    --orangehover:#CF9A2F;
    --backgray:#24262B;
    --lightgray:#9DA1B2;
    --darkgray:#1B191E;
    --va-divider-color:transparent;
    }
/* Body, Nav, & HTML */
  body, html{
    background-color:var(--backgray);
    }

  nav {
    background-color:var(--backgray);
    padding-block-end:10px;
    }
/* Top Menu */
  .topmenu {
    background-color:var(--backgray);
    padding-inline-start:25px;
    letter-spacing:5px;
    text-decoration:none;
    padding-block-end:7px;
    animation: 1s appear;
    }
  .menu {
    color: var(--lightorange);
    font: bold 45px 'Segoe UI', sans-serif;
    margin-block-start:0px;
    text-decoration:none;
    display:inline-block;
    animation: 1s appear;
    user-select:none;
    width:15%;
    }
/* Navlinks */
  .navlinks {
    position:absolute;
    right:10px;
    padding-inline-start:60%;
    margin-block-start: -40px;
    margin-block-end:7px;
    border-block-start: solid;
    border-block-end: solid;
    border-color:var(--lightorange);
    animation: 1s appear;
    }
  /* Nav Buttons */
    .navbutton {
      color:var(--lightorange);
      border-style:none;
      display: inline-block;
      scale:150%;
      padding: 10px 10px;
      justify-content:center;
      vertical-align:center;
      text-decoration:none;
      padding-inline-end:15px;
      margin-inline-end:5px;
      margin-block-end:5px;
      }

    .navbutton a {
      color:var(--lightorange);
      }
    .navbutton a:hover {
      color:var(--orangehover);
      }
/* Nuxt Link */
  .router-link-exact-active {
    text-decoration:none;
    }
  .nuxt-link-active {
    text-decoration:none;
    }
/* Footer */
  .bottom-container {
    width:98vw;
    display: inline-block;
    justify-content:center;
    background-color:var(--backgray);
    animation: 1s appear;
    position:absolute;
    bottom:15px;
    user-select:none;
    }
  .footer {
    font: bold 10px 'Segoe UI', sans-serif;
    color: var(--lightgray);
    letter-spacing: 1px;
    }
  .bottom-container span {
    width:100%;
    margin-inline-start:25%;
    text-align: center;
  }

/* Animations */
  @keyframes zoomfade {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity:0;
    }
    }
  @keyframes zoomout {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity:0;
    }
    }
  @keyframes slideappear {
    0% {
      opacity: 0;
      left:-50px;
    }
    100% {
      opacity: 1;
      left:0px;
    }
    }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    }
  @keyframes flash {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }  
  @keyframes disappear {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
    }
  @keyframes slideappear {
    0% {
      opacity: 0;
      left:-500px;
      }
    75% {
      opacity:0;
      }
    100% {
      opacity: 1;
      }
      }
  @keyframes scale1 {
    0% {
      scale:100%;
    }
    100% {
      scale:110%;
    }
    }
  @keyframes scale2 {
    0% {
      scale:100%;
    }
    100% {
      scale:120%;
    }
    }
  @keyframes appear1 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    60% {
      opacity:0;
      scale:0.6;
      }
    }
  @keyframes appear2 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  @keyframes appear3 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  @keyframes appear4 {
    0% {
      opacity: 0;
      scale:0;
      }
    60% {
      opacity:0;
      scale:0.6;
      rotate:0deg;
      }
    }
  @keyframes appear5 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    70% {
      opacity:0;
      scale:0.8;
      rotate:0deg;
      }
    }
  @keyframes appear6 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    80% {
      opacity:0;
      scale:0.8;
      rotate:0deg;
      }
      }
  @keyframes appear7 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    80% {
      opacity:0;
      scale:0.8;
      rotate:0deg;
      }
      }
</style>
