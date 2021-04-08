<template>
  <el-menu-item :index="item.id">
    <i :class="`el-icon-${item.icon}`" v-if="item.icon"></i>
    <template #title>
      <span>{{ item.label }}</span>
    </template>
  </el-menu-item>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
};
</script>