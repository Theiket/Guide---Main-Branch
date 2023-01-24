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
  background-color:#24262B;
  align-items:center;
  justify-content:center;
}
table {
  width:100%;
}
.refineryinput {
  width:300px;
  text-align: center;
  padding-left:100px;
  padding-top:10px;
}
.refineryoutput {
  width:250px;
}

.title {
  width:600px;
  animation: 1s appear;
  font: bold 64px/64px 'Segoe UI', sans-serif;
  display: block;
  color: #CF6A2F;
  letter-spacing: 1px;
}

.blocks {
  animation: 1s appear;
  background-color:#1B191E;
  width:1200px;
  height:750px;
  margin-top:5px;
  justify-items:center;
  align-items:center;
  color:#CF6A2F;
  font-size:24px;
  border:3px;
  border-style:solid;
  border-color:#CF6A2F;
  border-radius:50px;
  z-index:1;
}

.blocktitle{
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>