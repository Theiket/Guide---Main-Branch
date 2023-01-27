<template>
<div>
<NuxtLink to="/starmap">
    <div class="systemStanton">
    <Icon name="mdi:circle-slice-8" />
    <br>
    <p class="planetText">STANTON</p>
    <p class="systemText">SYSTEM</p>
    </div>
    </NuxtLink>
</div>
</template>

<script>
</script>

<style scoped>
.systemStanton {
  position:relative;
  height: 50px;
  width: 50px;
  color: var(--lightgray);
  border-radius: 50%;
  margin:10px 10px;
}
.systemStanton:hover {
  color: var(--greensafety);
}
.systemStanton .planetText {
  font: bold 15px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  text-transform:capitalize;
  opacity:1;
  position:relative;
  color:var(--lightorange);
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  width:100px;
  padding-block-start:15px;
}
.systemStanton:hover .planetText{
  opacity:1;
}

.systemStanton .systemText {
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
}
.icon:hover {
  border-style:dashed;
  border-color:var(--orangehover);
  border-width:thin;
  border-radius:50%;
  animation:1s appear;
}
</style>