<template>
  <div class="container">
    <table>
      <tbody>
        <tr>
          <td>
            <div id="pyro-system" class="systemPyro" @click="changeComponent('PyroMap')">
              <Icon name="game-icons:anarchy" />
              <p class="planetText">PYRO</p>
              <p class="systemText">SYSTEM</p>
              <div class="unavailable">
                <p class="warningText">
                SCAN UNAVAILABLE
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
        </tr>
        <tr>
          <td>
            <div>
              <div id="stanton-system" class="systemStanton" @click="changeComponent('StantonMap')">
                <Icon name="mdi:circle-slice-8" />
                <br>
                <p class="planetText">STANTON</p>
                <p class="systemText">SYSTEM</p>
                <div class="overlay"></div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Starmap'
  })
</script>

<script>
export default {
  methods: {
    changeComponent(componentName) {
      this.$emit('component-changed', componentName);
    }
  }
};
</script>

<style scoped>
/* General */
    .container {
      user-select:none;
      overflow:hidden;
      display:flex;
      width:100%;
      height:90vh;
      margin-inline-start:-0.75%;
      position:relative;
      animation:2s appear;
      }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    }

/* Stanton */
  /* Objects */
    .systemStanton {
      position:absolute;
      height: 50px;
      width: 50px;
      color: var(--lightgray);
      border-radius: 50%;
      top:50%;
      left:50%;
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

    .systemStanton .icon {
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

/* Pyro */
  /* Objects */
    .systemPyro {
      position:absolute;
      height: 50px;
      width: 50px;
      color: var(--lightgray);
      border-radius: 50%;
      top:40%;
      left:40%;
      user-select:none;
      }
    .systemPyro:hover {
      color: var(--reddanger);
      cursor:pointer;
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
    .systemPyro:hover p {
      opacity:1;
      cursor:default;
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

    .systemPyro .icon {
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
/* Stars */
  #stars.fade {
    transition: all 0.6s ease-in-out;
    opacity:0;
  }
</style>
