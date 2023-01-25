<template>
  <div id="stars">
  </div>
</template>

<script>
+ definePageMeta({ layout: 'default' })
export default {

}

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
html,
body {
	margin: 0;
	padding: 0;
}

html{
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: relative;
  color: #5EFC8D;
  font-family: "Source Code Pro", mono;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}


#stars {
	display: block;
	position: relative;
  overflow:hidden;
	width: 100%;
	height: 16rem;
	height: 100vh;
	z-index: 1;
}
.star {
  position:absolute;
  background:#fff;
  border-radius:50%;
  box-shadow: 0 0 10px rgba(255,255,255, 0.9);
  cursor:pointer;
}
.star:after {
  content: attr(data-tooltip);
  width:285px;
  display: block;
  position: absolute;
  background: #000;
  padding: 3px;
  border-radius: 3px;
  top: -100%;
  left: 300%;
  text-align: center;
  display: none;
  font-size: 0.8em;
  line-height: 1.3;
  border: 1px solid rgba(100, 100, 100, 0.3);
  z-index:9001;
}
.star:before {
  content: "";
  display: block;
  position: absolute;
  padding: 200%;
  width:0px;
  height:0px;
  bottom:-152%;
  left:-152%;
  margin-right:-50%;
  border-radius: 100%;
  box-shadow: none;
  background: rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 0px 0px #5EFC8D;
  transition: all 350ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
}

.star:hover:after{
  display: block;
}
.star:hover:before {
  display: block;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 4px #5EFC8D;
}

</style>