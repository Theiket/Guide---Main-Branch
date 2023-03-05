<template>
  <div>
    <div id="solar-system" class="systemStanton" @click="zoom()">
      <Icon name="mdi:circle-slice-8" />
      <br>
      <p class="planetText">STANTON</p>
      <p class="systemText">SYSTEM</p>
      <div class="overlay"></div>
    </div>
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
    user-select:none;
    }
  .systemStanton:hover {
    color: var(--greensafety);
    cursor:pointer;
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
  .systemStanton:hover p {
    cursor:default;
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
    border-style:dashed;
    border-color:transparent;
    border-width:thin;
    border-radius:50%;
    }
  .systemStanton:hover .icon {
    border-style:dashed;
    border-color:var(--orangehover);
    border-width:thin;
    border-radius:50%;
    animation:1s appear;
    }
  .systemStanton.zoomed, .systemStanton.zoomed .icon {
    transition: all 1s ease-in-out;
    opacity: 0;
    transform: scale(4);
    border-style:none;
    z-index:2;
    }
  .systemStanton.zoomed {
    background-color:rgba(36, 38, 43, 1);
  }

  .systemStanton.zoomed .systemText,
  .systemStanton.zoomed .planetText {
    transition: all 0.1s ease-in-out;
    opacity:0;
  }
</style>