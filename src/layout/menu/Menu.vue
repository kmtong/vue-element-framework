<template>
  <el-menu class="left-menu" @open="handleOpen" @close="handleClose" @select="handleSelect" :router="true" :collapse="menuCollapsed">
    <el-menu-item  v-for="(item, idx) in menuItems" :key="idx" :index="item.link">
      <!-- <router-link :to="item.link">{{ item.label }}</router-link> -->
      <i class="el-icon-menu"></i>
      <template #title>{{ item.label }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters("layout", ["menuCollapsed"]),
    menuItems() {
      // vue-modx will inject $pluginRegistry property
      return this.$pluginRegistry.moduleVarGet("menu", "menuItems");
    },
  },
  methods: {
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  },
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  },
  // handleSelect(key, keyPath) {
  //   console.log(key, keyPath);
  //   this.$router.push(key)
  // }
}
};
</script>

<style>
.left-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
