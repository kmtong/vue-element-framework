<template>
  <el-container direction="horizontal" class="full-height">
    <Menu />
    <el-container direction="vertical">
      <Header></Header>
      <el-main class="full-height">
        <router-view />
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
.full-height {
  height: 100%;
}
</style>
