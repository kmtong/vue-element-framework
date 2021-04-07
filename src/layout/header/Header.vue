<template>
  <el-header :style="headerStyle">
    <el-container direction="horizontal" class="header-full-width">
      <div class="hamburger-nav-item" @click="setMenuCollapsed(!menuCollapsed)">
        <i :class="collapseIcon"></i>
      </div>
      <el-menu
        mode="horizontal"
        :default-active="navMenuIndex"
        :background-color="navBgColor"
        :text-color="navTextColor"
        :active-text-color="navActiveTextColor"
        @select="handleSelect"
      >
        <el-menu-item v-for="(nav, idx) in navItems" :key="idx" :index="nav.id">
          <i :class="`el-icon-${nav.icon}`" v-if="nav.icon"></i>
          <template #title>{{ nav.label }}</template>
        </el-menu-item>
      </el-menu>
      <div class="widget-nav-item">
        <!-- nav widget area -->
      </div>
      <div class="avatar-nav-item">
        <!-- user area -->
        <span>John Chan {{ navMenuIndex }}</span>
      </div>
    </el-container>
  </el-header>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("layout", ["menuCollapsed", "navMenuIndex"]),
    navBgColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "navBgColor");
    },
    navTextColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "navTextColor");
    },
    navActiveTextColor() {
      return this.$pluginRegistry.moduleVarGet("layout", "navActiveTextColor");
    },
    navItems() {
      return this.$pluginRegistry.moduleVarGet("layout", "navItems");
    },
    collapseIcon() {
      if (this.menuCollapsed) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    },
    headerStyle() {
      return {
        "padding": 0,
        "width": "100%",
        "background-color": this.navBgColor
      }
    }
  },
  methods: {
    ...mapMutations("layout", ["setMenuCollapsed", "setNavMenuIndex"]),
    handleSelect(navId) {
      const nav = this.navItems.find(i => i.id === navId)
      if (nav.selectFn && typeof(nav.selectFn) === 'function') {
        nav.selectFn();
      }
      if (!nav.ignoreState) {
        this.setNavMenuIndex(navId);
      }
      if (nav.link) {
        this.$router.push(nav.link);
      }
    },
  },
};
</script>
<style scoped>
.header-full-width {
  width: 100%;
}

.hamburger-nav-item {
  font-size: 18px;
  height: 60px;
  line-height: 56px;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
}

.hamburger-nav-item:hover {
  background-color: #fff;
  color: #545c64;
}

.widget-nav-item {
  font-size: 14px;
  height: 60px;
  line-height: 56px;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
}

.avatar-nav-item {
  font-size: 14px;
  height: 60px;
  line-height: 56px;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
}
</style>
