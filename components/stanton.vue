<template>
<body>
<div class="proxz-nav">
  <div class="proxz-nav__system">
    <li class="proxz-nav__orbit">
      <a class="proxz-nav__satellite" href="#">
        <span class="proxz-nav__label">Hurston
        <span class="proxz-nav__description">Stanton 1<br>Terrestrial Planet
        </span>
        </span>
      </a>
    </li>
    <li class="proxz-nav__orbit">
      <a class="proxz-nav__satellite" href="#">
        <span class="proxz-nav__label">Crusader
          <span class="proxz-nav__description">Stanton 2<br>Gas Giant
          </span>
        </span>
      </a>
    </li><li class="proxz-nav__orbit">
      <a class="proxz-nav__satellite" href="#">
        <span class="proxz-nav__label">ArcCorp
        <span class="proxz-nav__description">Stanton 3<br>Terrestrial Planet
        </span>
        </span>
      </a>
    </li>
    <li class="proxz-nav__orbit">
      <a class="proxz-nav__satellite" href="#">
        <span class="proxz-nav__label">microTech
          <span class="proxz-nav__description">Stanton 4<br>Terrestrial Planet
          </span>
        </span>
      </a>
    </li>
  </div>
  <div class="hologram"></div>
</div>
</body>
</template>

<style scoped>
@charset "UTF-8";
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

html {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}

q, blockquote {
  quotes: none;
}
q:before, q:after, blockquote:before, blockquote:after {
  content: "";
  content: none;
}

a img {
  border: none;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

html,
body {
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  animation: 1s appear;
  background-color:#24262B;
}

body {
  line-height: 1.2rem;
  font-family: 'dosislight';
  color: #fefefe;
  background-color: #11171d;
  box-shadow: inset 0 8em 16em -8em black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floor:after {
  content: '';
  width: 50em;
  height: 25em;
  position: absolute;
  left: 50%;
  top: -80%;
  z-index: -1;
  transform: translate(-50%, -50%) rotateX(30deg) translateZ(-4em);
  background-image: radial-gradient(rgba(36, 49, 61, 0), #11171d 15em), radial-gradient(rgba(112, 230, 255, 0.2), rgba(0, 0, 0, 0)), linear-gradient(rgba(112, 230, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, transparent calc(100% - 1px), rgba(112, 230, 255, 0.1) calc(100% - 1px)), linear-gradient(90deg, #11171d calc(100% - 1px), transparent calc(100% - 1px)), linear-gradient(rgba(112, 230, 255, 0.5) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 6em 3em, 6em 3em, 6em 3em, 6em 3em;
  background-position: top center;
}

.proxz-nav {
  transform-style: preserve-3d;
}
.proxz-nav__system {
  perspective: 1500px;
  position: relative;
  z-index: 1;
}
.proxz-nav__orbit, .proxz-nav__orbit:before, .proxz-nav__satellite {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
}
.proxz-nav__orbit {
  z-index: 10;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  display: flex;
  align-items: center;
}

/* **************************************************
step1 starts here
************************************************** */

.proxz-nav__orbit:nth-child(4) {
  width: 500px;
  height: 500px;
  z-index: 5;
  transform: translate(-50%, -30%) translateY(-50px) rotateX(65deg);
}
.proxz-nav__orbit:nth-child(1) .proxz-nav__label,
.proxz-nav__orbit:nth-child(1) .proxz-nav__satellite,
.proxz-nav__orbit:nth-child(1) .proxz-nav__satellite:before {
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
}
.proxz-nav__orbit:nth-child(1) .proxz-nav__satellite:before {
  background-color: #CF3A2F;
  right:-3px;
}
.proxz-nav__orbit:nth-child(1) .proxz-nav__label {
  color: #70ffdb;
}
.proxz-nav__orbit:nth-child(1) .proxz-nav__label:before {
  content: "";
  color: rgba(254, 254, 254, 0.75);
  padding-right: 8px;
}

/* **************************************************
step2 starts here
************************************************** */


.proxz-nav__orbit:nth-child(3) {
  width: 350px;
  height: 350px;
  z-index: 4;
  transform: translate(-50%, -30%) translateY(-40px) rotateX(65deg);
}
.proxz-nav__orbit:nth-child(2) .proxz-nav__label,
.proxz-nav__orbit:nth-child(2) .proxz-nav__satellite,
.proxz-nav__orbit:nth-child(2) .proxz-nav__satellite:before {
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
}
.proxz-nav__orbit:nth-child(2) .proxz-nav__satellite:before {
  background-color: #2FCFA9;
  right:-3px;
}
.proxz-nav__orbit:nth-child(2) .proxz-nav__label {
  color: #70ffa0;
}
.proxz-nav__orbit:nth-child(2) .proxz-nav__label:before {
  content: "";
  color: rgba(254, 254, 254, 0.75);
  padding-right: 8px;
}

/* **************************************************
step3 starts here
************************************************** */

.proxz-nav__orbit:nth-child(2) {
  width: 250px;
  height: 250px;
  z-index: 3;
  transform: translate(-50%, -30%) translateY(-30px) rotateX(65deg);
}
.proxz-nav__orbit:nth-child(3) .proxz-nav__label,
.proxz-nav__orbit:nth-child(3) .proxz-nav__satellite,
.proxz-nav__orbit:nth-child(3) .proxz-nav__satellite:before {
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
}
.proxz-nav__orbit:nth-child(3) .proxz-nav__satellite:before {
  background-color: #CF2F55;
  right:-3px;
}
.proxz-nav__orbit:nth-child(3) .proxz-nav__label {
  color: #7cff70;
}
.proxz-nav__orbit:nth-child(3) .proxz-nav__label:before {
  content: "";
  color: rgba(254, 254, 254, 0.75);
  padding-right: 8px;
}

/* **************************************************
step4 starts here
************************************************** */

.proxz-nav__orbit:nth-child(1) {
  width: 150px;
  height: 150px;
  z-index: 2;
  transform: translate(-50%, -30%) translateY(-20px) rotateX(65deg);
}
.proxz-nav__orbit:nth-child(4) .proxz-nav__label,
.proxz-nav__orbit:nth-child(4) .proxz-nav__satellite,
.proxz-nav__orbit:nth-child(4) .proxz-nav__satellite:before {
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
}
.proxz-nav__orbit:nth-child(4) .proxz-nav__satellite:before {
  background-color: #D8D6D5;
  right:-3px;
}
.proxz-nav__orbit:nth-child(4) .proxz-nav__label {
  color: #b8ff70;
}
.proxz-nav__orbit:nth-child(4) .proxz-nav__label:before {
  content: "";
  color: rgba(254, 254, 254, 0.75);
  padding-right: 8px;
}



.proxz-nav__orbit:before {
  content: '';
  width: 100%;
  height: 100%;
  z-index: 0;
  box-sizing: border-box;
  border: 1px dotted rgba(207, 106, 47, 0.5);
  transform: translate(-50%, -50%) rotate(0);
  animation: orbitRotation 40s linear infinite reverse;
}
.proxz-nav__orbit:hover {
  cursor: pointer;
}
.proxz-nav__orbit:hover:before {
  border-width: 2px;
  border-color: #70e6ff;
}
.proxz-nav__orbit:hover .proxz-nav__label {
  opacity: 1;
  text-shadow: 0 0 1em #70e6ff;
}
.proxz-nav__orbit:hover .proxz-nav__satellite:before {
  opacity: 1;
}



.proxz-nav__satellite {
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translate(-50%, -50%) rotate(0);
  -webkit-animation: orbitRotation 40s linear infinite;
          animation: orbitRotation 40s linear infinite;
  transform-style: preserve-3d;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.proxz-nav__satellite:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  position: absolute;
  right: 0;
  top: calc(50% - 4px);
  border-radius: 50%;
  transform: rotate(0) rotateX(-90deg);
  opacity: .25;
  animation: satelliteRotation 40s linear infinite reverse;
}
.proxz-nav__label {
  opacity: 0;
  padding: 0 8px 48px 0;
  pointer-events: none;
  text-align: left;
  text-transform: uppercase;
  transform-origin: 100% 50%;
  transform: rotate(0) rotateX(-90deg);
  transition: opacity .25s ease-in-out;
  animation: satelliteRotation 40s linear infinite reverse;
}
.proxz-nav__description {
  display: block;
  font-size: 12px;
  width:150px;
  color: rgba(254, 254, 254, 0.75);
}

.hologram {
  perspective: 350px;
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 0;
  border-radius: 50%;
  background-image: radial-gradient(to top, #70e6ff, rgba(0, 177, 214, 0.3));
  background-repeat: no-repeat;
  box-shadow: 0 0.7em 0.25em -0.6em rgba(0, 0, 0, 0.5), 0 0.6em 1em -0.4em black, 0 0 1.5em 0 #CF9A2F, 0 0 6em 1em rgba(112, 230, 255, 0.5), 0 0 3em 0.5em rgba(112, 230, 255, 0.5);
  transform-style: preserve-3d;
  pointer-events: none;
}
.hologram:after, .hologram:before {
  content: '';
  position: absolute;
  pointer-events: none;
  border-radius: .4em;
}
.hologram:before {
  width: 100em;
  height: 100em;
  left: 50%;
  top: 0;
  z-index: 0;
  transform: translate(-50%, -50%) translateZ(-15em) rotateX(50deg) scale(0.75);
  background-image: radial-gradient(rgba(17, 23, 29, 0), #11171d 35%), radial-gradient(rgba(112, 230, 255, 0.2), rgba(0, 0, 0, 0)), linear-gradient(rgba(112, 230, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, transparent calc(100% - 1px), rgba(112, 230, 255, 0.1) calc(100% - 1px)), linear-gradient(90deg, #11171d calc(100% - 1px), transparent calc(100% - 1px)), linear-gradient(#70e6ff 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 6em 6em, 6em 6em, 6em 6em, 6em 6em;
  background-position: top center;
}
.hologram:after {
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100vh;
  z-index: º;
  transform-origin: 50% 100%;
  transform: translate(-50%, 0) rotateX(-86.8deg);
  background-image: radial-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(112, 230, 255, 0.1) 60%, rgba(0, 0, 0, 0) 70%);
  opacity: .75;
  -webkit-animation: lightVibration .07s linear infinite;
          animation: lightVibration .07s linear infinite;
}

@-webkit-keyframes lightVibration {
  50% {
    opacity: .25;
    height: 100vh;
  }
}

@keyframes lightVibration {
  50% {
    opacity: .25;
    height: 100vh;
  }
}
@-webkit-keyframes orbitRotation {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes orbitRotation {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes satelliteRotation {
  100% {
    transform: rotate(360deg) rotateX(-90deg);
  }
}
@keyframes satelliteRotation {
  100% {
    transform: rotate(360deg) rotateX(-90deg);
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>