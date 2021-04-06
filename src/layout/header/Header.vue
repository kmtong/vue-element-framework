<template>
  <el-header class="header-cls">
    <el-container direction="horizontal" class="header-full-width">
      <div class="hamburger-nav-item" @click="setMenuCollapsed(!menuCollapsed)">
        <i :class="collapseIcon"></i>
      </div>
      <el-menu :default-active="navMenuIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- sample nav menu -->
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
      </el-menu>
      <div class="widget-nav-item">
        <!-- nav widget area -->
      </div>
      <div class="avatar-nav-item">
        <!-- user area -->
        <span>John Chan {{navMenuIndex}}</span>
      </div>
    </el-container>
  </el-header>
</template>
<script>
import {mapGetters, mapMutations} from "vuex"
export default {
  data() {
    return {
      activeIndex: "1"
    }
  },
  computed: {
    ...mapGetters("layout", ["menuCollapsed", "navMenuIndex"]),
    collapseIcon() {
      if (this.menuCollapsed) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    }
  },
  methods: {
    ...mapMutations("layout", ["setMenuCollapsed", "setNavMenuIndex"]),
    handleSelect(menuIndex) {
      this.setNavMenuIndex(menuIndex);
    }
  }
}
</script>
<style scoped>
.header-cls {
  padding: 0;
  width: 100%;
  background-color: #545c64;
}

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
