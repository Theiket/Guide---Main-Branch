<template>
  <div class="mining">
      <table>
        <td class="refinery">
          <h3>
          <NuxtLink to="/refinery">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          Refinery
          </a>
          </NuxtLink>
          </h3>
        </td>
        <td class="loadout">
          <h3>
          <NuxtLink to="/loadout">
          <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          >
          Loadout
          </a>
          </NuxtLink>
          </h3>
        </td>
      </table>
  </div>
</template>

<style scoped>
.mining {
  min-height:50vh;
  background-color:var(--backgray);
  align-content:center;
  vertical-align:center;
  padding:20%;
}

.button {
  background-color:var(--darkgray);
  color:var(--lightorange);
  text-align:center;
  border-style:solid;
  border-width:3px;
  border-radius:15px;
  font: bold 35px 'Segoe UI', sans-serif;
  letter-spacing:1px;
  display: inline-block;
  padding-inline-start:100px;
  padding-inline-end:100px;
  padding-block-start:100px;
  padding-block-end:100px;
  text-decoration:none;
  animation: 1s appear;

}

.refinery {
  line-height:200px;
}

.loadout {
  line-height:200px;
  padding-left:20px;
}

a:hover {
  color:var(--hoverorange);
}

.nuxt-link-active {
  text-decoration:none;
}

.mining h3 {
  text-decoration:none;
  color: var(--lightorange);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>