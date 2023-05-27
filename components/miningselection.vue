<template>
  <div class="mining">
    <table>
      <td class="refinery">
        <h3>
          <div class="button">
            <NuxtLink to="/refinery">
              Refinery
              <br />
              <div class="loadouticon">
                <Icon name="game-icons:anvil-impact" />
              </div>
            </NuxtLink>
          </div>
        </h3>
      </td>
      <td class="loadout">
        <h3>
          <div class="button">
            <NuxtLink to="/loadout">
              Loadout
              <br />
              <div class="loadouticon">
                <Icon name="game-icons:laser-blast" />
              </div>
            </NuxtLink>
          </div>
        </h3>
      </td>
    </table>
  </div>
</template>

<script setup>
useHead({
  title: 'GUIDE | Mining Selection',
});
</script>

<style scoped>
.mining {
  height: 85vh;
  background-color: var(--backgray);
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button a {
  background-color: var(--darkgray);
  color: var(--lightorange);
  text-align: center;
  border-style: solid;
  border-width: 3px;
  border-radius: 15px;
  font: bold 35px 'Segoe UI', sans-serif;
  letter-spacing: 1px;
  display: inline-block;
  margin-block-start: -50px;
  padding-inline-start: 100px;
  padding-inline-end: 100px;
  padding-block-start: 50px;
  padding-block-end: 100px;
  text-decoration: none;
  animation: 1s appear;
}

.refinery {
  line-height: 200px;
}

.loadout {
  line-height: 200px;
  padding-left: 20px;
}

.loadouticon {
  margin-block-start: 10px;
  scale: 300%;
}

.button a:hover {
  color: var(--orangehover);
}

.mining h3 {
  text-decoration: none;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
