<template>
  <div :style="menuBgStyle">
    <div class="logo-area" :style="logoBgStyle">
      <component :is="logoNormal" v-show="!menuCollapsed" class="logo-normal" />
      <component :is="logoSmall" v-show="menuCollapsed" class="logo-collapse" />
    </div>
    <el-menu
      class="left-menu"
      :background-color="menuBgColor"
      :text-color="menuTextColor"
      :active-text-color="menuActiveTextColor"
      :default-active="menuIndex"
      :collapse="menuCollapsed"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <menu-item v-for="(item, idx) in menuItems" :key="idx" :item="item" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuItem from "./MenuItem.vue";
import MenuMixins from "./mixins/menu-mixins";

export default {
  components: {
    MenuItem,
  },
  mixins: [MenuMixins],
  computed: {
    ...mapGetters("layout", ["menuCollapsed", "menuIndex"]),
    menuItems() {
      // vue-modx will inject $pluginRegistry property
      return this.$pluginRegistry.moduleVarGet("menu", "menuItems");
    },
    menuBgColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "menuBgColor");
    },
    menuTextColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "menuTextColor");
    },
    menuActiveTextColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "menuActiveTextColor");
    },
    navBgColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "navBgColor");
    },
    logoNormal() {
      return this.$pluginRegistry.moduleVarGet("layout", "logoNormal");
    },
    logoSmall() {
      return this.$pluginRegistry.moduleVarGet("layout", "logoCollapsed");
    },
    logoBgColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "logoBgColor");
    },
    menuBgStyle() {
      return {
        "background-color": this.menuBgColor,
      };
    },
    logoBgStyle() {
      return {
        "background-color": this.logoBgColor,
      };
    },
  },
  methods: {
    ...mapMutations("layout", ["setMenuIndex"]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(menuId) {
      this.handleMenuSelect(
        this.menuItems,
        menuId,
        this.setMenuIndex,
        this.menuIndex
      );
    },
  },
};
</script>

<style scoped>
.left-menu {
  border-right: 0;
}
.left-menu:not(.el-menu--collapse) {
  width: 200px;
}
.logo-area {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
