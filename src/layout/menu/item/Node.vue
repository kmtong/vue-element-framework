<template>
  <el-submenu :index="item.id">
    <template #title>
      <i :class="`el-icon-${item.icon}`" v-if="item.icon"></i>
      <span>{{ item.label }}</span>
    </template>
    <menu-item v-for="(x, idx) in item.children" :item="x" :key="idx" />
  </el-submenu>
</template>
<script>
import MenuItem from "../MenuItem.vue";
export default {
  components: {
    MenuItem,
  },
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
};
</script>