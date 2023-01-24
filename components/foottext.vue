<template>
<div class="container">
    <div>
      <h3 class="footer">
      <table class="cells">
      <td class="copyright">
        Copyright 2023 Grindstone Mining Co.
      </td>
      <td class="version">
        GUIDE v0.1-HADES | Updated for Star Citizen Alpha v3.17.4-Live
      </td>
      </table>
      </h3>
    </div>
</div>
</template>

<style scoped>
.container {
  width:auto;
  padding-top:20px%;
  margin:auto;
  display: flex;
  vertical-align:bottom;
  justify-content:center;
  align-items: center;
  text-align: center;
  background-color:#24262B;
}

.footer {
  font: bold 10px 'Segoe UI', sans-serif;
  display: inline-block;
  color: #9DA1B2;
  letter-spacing: 1px;
}
.cells {
}
.copyright {
  width:800px;
}
.version {
  width:800px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>