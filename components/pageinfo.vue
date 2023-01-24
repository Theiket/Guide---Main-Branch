<template>
<div class="container">
    <div>
      <p class="infotext">
        Grindstone Mining Co., also known as GMCo., was founded in the year 2952 after a night of long discussion and mild drinking.
        <br><br>
        Headquartered in Area 18 of the Stanton system, GMCo. has begun development on its new signature tool, GUIDE, to allow new and veteran miners, traders, and citizens of the 'verse to develop their knowledge and skills wherever they are, be it waiting for repairs, refuelling, or just lounging at home and wanting to brush up and the latest and greatest.
        <br><br>
        There is no one size fits all tool, but the aim of GUIDE is to attempt to get close.
        <br>
        With your help and continued support, it just might get there.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:#24262B;
}

.infotext {
  width:1000px;
  animation: 1s appear;
  font: bold 14px 'Segoe UI', sans-serif;
  display: block;
  color: #9DA1B2;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>