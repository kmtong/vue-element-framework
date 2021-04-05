<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.left-menu {
  width: 100px;
  display: block;
  float: left;
}
.content {
  padding-left: 50px;
  width: 500px;
  display: inline-block;
}
</style>
