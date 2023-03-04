<template>
<div>
  <NuxtLink to="/MapPyro">
    <div class="systemPyro">
      <Icon name="game-icons:anarchy" />
      <p class="planetText">PYRO</p>
      <p class="systemText">SYSTEM</p>
      <div class="unavailable">
        <p class="warningText">
        SCAN UNAVAILABLE
        </p>
      </div>
    </div>
  </NuxtLink>
</div>
</template>

<script>
</script>

<style scoped>
.systemPyro {
  position:relative;
  height: 50px;
  width: 50px;
  color: var(--lightgray);
  border-radius: 50%;
  margin:10px 10px;
  left:-70px;
  bottom:60px;
  user-select:none;
}
.systemPyro:hover {
  color: var(--reddanger);
}
.systemPyro .planetText {
  font: bold 15px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  text-transform:capitalize;
  opacity:1;
  color:var(--lightorange);
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  width:100px;
  padding-block-start:15px;
}
.systemPyro:hover .planetText{
  opacity:1;
}

.systemPyro .systemText {
  font: 550 15px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  text-transform:capitalize;
  opacity:0.7;
  position:relative;
  color:var(--lightorange);
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  width:100px;
}

.icon {
  scale:300%;
  border-style:dashed;
  border-color:transparent;
  border-width:thin;
  border-radius:50%;
}

.systemPyro:hover .icon {
  border-style:dashed;
  border-color:var(--orangehover);
  border-width:thin;
  border-radius:50%;
  animation:1s appear;
}

.systemPyro .warningText {
  opacity:0;
  font: bold 15px 'Segoe UI', sans-serif;
  width:200px;
  letter-spacing:1px;
  text-align:left;
  right:50px;
}
.systemPyro:hover .warningText {
  opacity:1;
  animation:1s appear;
}
</style>