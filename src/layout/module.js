import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import MenuModule from "./menu/module.js";
import Layout from "./Layout.vue";

export default {
  name: "layout",
  dependsOn: [MenuModule],
  extensions: {
    routeFn() {
      return (route) => {
        if (!route.component) {
          route.component = Layout;
        }
        return route;
      };
    },
    "vuex.modules": {
      "layout": {
        namespaced: true,
        state: () => {
          return {
            "menuCollapsed": false,
            "navMenuIndex": null
          };
        },
        getters: {
          menuCollapsed(state) {
            return state.menuCollapsed;
          },
          navMenuIndex(state) {
            return state.navMenuIndex;
          }
        },
        mutations: {
          setMenuCollapsed(state, collapse) {
            state.menuCollapsed = collapse
          },
          setNavMenuIndex(state, navMenuIndex) {
            state.navMenuIndex = navMenuIndex
          }
        }
      }
    }
  },
  start({vue}) {
    vue.use(ElementPlus)
  }
};
