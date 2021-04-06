<template>
  <div id="main">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
html, body, #app {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>
