<template>
  <div>
    <div class="logo-area" :style="logoAreaStyle">
      <transition name="el-fade-in">
        <component :is="logoNormal" v-show="!menuCollapsed" class="logo-normal" />
      </transition>
      <transition name="el-fade-in">
        <component :is="logoCollapsed" v-show="menuCollapsed" class="logo-collapse" />
      </transition>
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
      <el-menu-item
        v-for="(item, idx) in menuItems"
        :key="idx"
        :index="item.id"
      >
        <i :class="`el-icon-${item.icon}`" v-if="item.icon"></i>
        <i class="el-icon-menu" v-if="!item.icon"></i>
        <template #title>{{ item.label }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
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
    logoCollapsed() {
      return this.$pluginRegistry.moduleVarGet("layout", "logoCollapsed");
    },
    logoAreaStyle() {
      return {
        "background-color": this.navBgColor
      }
    }
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
      const menu = this.menuItems.find(i => i.id === menuId)
      if (menu.selectFn && typeof(menu.selectFn) === 'function') {
        menu.selectFn();
      }
      if (!menu.ignoreState) {
        this.setMenuIndex(menuId);
      }
      if (menu.link) {
        this.$router.push(menu.link);
      }
    }
  },
};
</script>

<style>
.left-menu {
  height: 100%;
}
.left-menu:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.logo-area {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
