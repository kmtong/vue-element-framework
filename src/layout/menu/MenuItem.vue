<template>
  <component :is="nodeOrLeaf" :item="item" v-if="item" />
</template>
<script>
import { shallowRef } from "vue";
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      nodeOrLeaf: null,
    };
  },
  watch: {
    async item() {
      this.nodeOfLeaf = await this.setupNodeOrLeaf();
    },
  },
  async mounted() {
    this.nodeOrLeaf = await this.setupNodeOrLeaf();
  },
  methods: {
    async setupNodeOrLeaf() {
      if (this.item && this.item.children) {
        return shallowRef((await import("./item/Node.vue")).default);
      }
      return shallowRef((await import("./item/Leaf.vue")).default);
    },
  },
};
</script>