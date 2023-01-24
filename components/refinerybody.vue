<template>
<div class="container">
  <body>
    <table>
      <div class="blocks">
      <td class="refineryinput">
        <h3 class="blocktitle">
        Refinery Order
        </h3>
      </td>
      <td class="refineryoutput">
      </td>
      </div>
    </table>
  </body>
</div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  background-color:var(--backgray);
  align-items:center;
  justify-content:center;
}
table {
  width:100%;
}
.refineryinput {
  width:300px;
  text-align: center;
  padding-inline-start:100px;
  padding-block-start:10px;
}
.refineryoutput {
  width:250px;
}

.blocks {
  animation: 1s appear;
  background-color:var(--darkgray);
  width:1200px;
  height:750px;
  margin-block-start:5px;
  justify-items:center;
  align-items:center;
  color:var(--lightorange);
  font-size:24px;
  border:3px;
  border-style:solid;
  border-color:var(--lightorange);
  border-radius:50px;
  z-index:1;
}

.blocktitle{
  width:600px;
  animation: 1s appear;
  font: bold 48px/48px 'Segoe UI', sans-serif;
  color:var(--lightorange);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>