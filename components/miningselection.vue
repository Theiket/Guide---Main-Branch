<template>
  <div class="mining">
    <div class="navigation-card">
      <h3>
        <NuxtLink class="button" to="/refinery">
          Refinery
          <div class="icon-wrapper">
            <Icon name="game-icons:anvil-impact" />
          </div>
        </NuxtLink>
      </h3>
    </div>
    <div class="navigation-card">
      <h3>
        <NuxtLink class="button" to="/loadout">
          Loadout
          <div class="icon-wrapper">
            <Icon name="game-icons:laser-blast" />
          </div>
        </NuxtLink>
      </h3>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: 1s appear;
}

.navigation-card {
  margin: 15px;
}

.button {
  background-color: var(--darkgray);
  color: var(--lightorange);
  text-align: center;
  border: 3px solid var(--lightorange);
  border-radius: 15px;
  font: bold 35px 'Segoe UI', sans-serif;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.icon-wrapper {
  margin-top: 30px;
  margin-bottom:60px;
  transform: scale(3);
}

.button:hover {
  color: var(--orangehover);
}

@media screen and (max-width: 600px) {
  .button {
    font-size: 24px;
    padding: 30px 60px;
  }

  .icon-wrapper {
    transform: scale(2);
  }
}
</style>
