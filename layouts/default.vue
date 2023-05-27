
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<template>
<!DOCTYPE html>
<html lang="en">
  <div>
    <header class="topmenu">
      <nav role="navigation" aria-label="Main navigation">
        <NuxtLink to="/" aria-label="Home page">
          <h1 class="menu">
          GUIDE
          </h1>
        </NuxtLink>

        <div class="navlinks">
          <NuxtLink to="/mining" class="navbutton" aria-label="Mining page">
            <Icon name="bi:gem" />
          </NuxtLink>
          <NuxtLink to="/trading" class="navbutton" aria-label="Trading page">
            <Icon name="material-symbols:currency-exchange" />
          </NuxtLink>
          <NuxtLink to="/spaceships" class="navbutton" aria-label="Spaceships page">
            <Icon name="carbon:rocket" />
          </NuxtLink>
          <NuxtLink to="/starmap" class="navbutton" aria-label="Starmap page">
            <Icon name="ph:planet" />
          </NuxtLink>
          <NuxtLink to="/catalogue" class="navbutton" aria-label="Catalogue page">
            <Icon name="material-symbols:search" />
          </NuxtLink>
          <NuxtLink to="/info" class="navbutton" aria-label="Information page">
            <Icon name="ic:outline-info" />
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bottom-container">
      <h3 class="footer">
      <span class="copyright">
        Copyright 2023 ©
        Grindstone Mining Co.
      </span>
      <span class="version">
        GUIDE v0.1-HADES | Updated for Star Citizen Alpha v3.17.4-LIVE
      </span>
      </h3>
    </footer>
  </div>
</html>
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
    -webkit-padding-after:10px;
            padding-block-end:10px;
    }
/* Top Menu */
  .topmenu {
    background-color:var(--backgray);
    -webkit-padding-start:25px;
            padding-inline-start:25px;
    letter-spacing:5px;
    text-decoration:none;
    -webkit-padding-after:7px;
            padding-block-end:7px;
    -webkit-animation: 1s appear;
            animation: 1s appear;
    }
  .menu {
    color: var(--lightorange);
    font: bold 45px 'Segoe UI', sans-serif;
    -webkit-margin-before:0px;
            margin-block-start:0px;
    text-decoration:none;
    display:inline-block;
    -webkit-animation: 1s appear;
            animation: 1s appear;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none;
    width:15%;
    }
/* Navlinks */
  .navlinks {
    position:absolute;
    right:10px;
    -webkit-padding-start:60%;
            padding-inline-start:60%;
    -webkit-margin-before: -40px;
            margin-block-start: -40px;
    -webkit-margin-after:7px;
            margin-block-end:7px;
    -webkit-border-before: solid;
            border-block-start: solid;
    -webkit-border-after: solid;
            border-block-end: solid;
    border-color:var(--lightorange);
    -webkit-animation: 1s appear;
            animation: 1s appear;
    }
/* Nav Buttons */
  .navbutton {
    color:var(--lightorange);
    border-style:none;
    display: inline-block;
    scale:150%;
    padding: 10px 10px;
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
    vertical-align:center;
    text-decoration:none;
    -webkit-padding-end:15px;
            padding-inline-end:15px;
    -webkit-margin-end:5px;
            margin-inline-end:5px;
    -webkit-margin-after:5px;
            margin-block-end:5px;
    }
  .navbutton:hover {
    color: var(--orangehover);
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
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
    background-color:var(--backgray);
    -webkit-animation: 1s appear;
            animation: 1s appear;
    position:absolute;
    bottom:15px;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none;
    }
  .footer {
    font: bold 10px 'Segoe UI', sans-serif;
    color: var(--lightgray);
    letter-spacing: 1px;
    }
  .bottom-container span {
    width:100%;
    -webkit-margin-start:25%;
            margin-inline-start:25%;
    text-align: center;
  }

/* Animations */
  @-webkit-keyframes zoomfade {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(4);
              transform: scale(4);
      opacity:0;
    }
    }
  @keyframes zoomfade {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(4);
              transform: scale(4);
      opacity:0;
    }
    }
  @-webkit-keyframes zoomout {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity:0;
    }
    }
  @keyframes zoomout {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity:0;
    }
    }
  @-webkit-keyframes slideappear {
    0% {
      opacity: 0;
      left:-50px;
    }
    100% {
      opacity: 1;
      left:0px;
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
  @-webkit-keyframes appear {
    0% {
      opacity: 0;
    }
    }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    }
  @-webkit-keyframes flash {
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
  @-webkit-keyframes disappear {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
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
  @-webkit-keyframes scale1 {
    0% {
      scale:100%;
    }
    100% {
      scale:110%;
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
  @-webkit-keyframes scale2 {
    0% {
      scale:100%;
    }
    100% {
      scale:120%;
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
  @-webkit-keyframes appear1 {
    0% {
      opacity: 0;
      scale:0.3;
      }
    60% {
      opacity:0;
      scale:0.6;
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
  @-webkit-keyframes appear2 {
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
  @-webkit-keyframes appear3 {
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
  @-webkit-keyframes appear4 {
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
  @-webkit-keyframes appear5 {
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
  @-webkit-keyframes appear6 {
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
  @-webkit-keyframes appear7 {
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
