<template>
  <el-container direction="horizontal">
    <Menu />
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        <router-view class="content" />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import Menu from "./menu/Menu.vue";
import Header from "./header/Header.vue";
export default {
  name: "Layout",
  components: { Menu, Header },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 20px;
}
.content {
  padding-left: 50px;
  width: 500px;
  display: inline-block;
}
</style>
