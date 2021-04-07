import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import MenuModule from "./menu/module.js";
import Layout from "./Layout.vue";

import ls from 'local-storage';

export default {
  name: "layout",
  dependsOn: [MenuModule],
  extensionPoints: {
    // allow nav registration
    nav({ registry }, item) {
      // accept single item / array of items
      if (Array.isArray(item)) {
        item.forEach((o) => {
          registry.moduleVarAppend("layout", "navItems", o);
        });
      } else {
        registry.moduleVarAppend("layout", "navItems", item);
      }
    }
  },
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
            "menuCollapsed": ls('layout/menuCollapsed') || false,
            "menuIndex": ls('layout/menuIndex'),
            "navMenuIndex": ls('layout/navMenuIndex')
          };
        },
        getters: {
          menuCollapsed(state) {
            return state.menuCollapsed;
          },
          navMenuIndex(state) {
            return state.navMenuIndex;
          },
          menuIndex(state) {
            return state.menuIndex;
          }
        },
        mutations: {
          setMenuCollapsed(state, collapse) {
            state.menuCollapsed = collapse
            ls('layout/menuCollapsed', collapse)
          },
          setNavMenuIndex(state, navMenuIndex) {
            state.navMenuIndex = navMenuIndex
            ls('layout/navMenuIndex', navMenuIndex)
          },
          setMenuIndex(state, menuIndex) {
            state.menuIndex = menuIndex
            ls('layout/menuIndex', menuIndex)
          }
        }
      }
    }
  },
  start({vue, config, registry}) {
    vue.use(ElementPlus)

    this.setModVar("navBgColor", "#545c64", config.layout, registry)
    this.setModVar("navTextColor", "#ffffff", config.layout, registry)
    this.setModVar("navActiveTextColor", "#ffd04b", config.layout, registry)
    this.setModVar("menuBgColor", "#545c64", config.layout, registry)
    this.setModVar("menuTextColor", "#ffffff", config.layout, registry)
    this.setModVar("menuActiveTextColor", "#ffd04b", config.layout, registry)

    this.setModVar("logoNormal", null, config.layout, registry)
    this.setModVar("logoCollapsed", null, config.layout, registry)
  
  },
  setModVar(varname, dftVal, layoutCfg, registry) {
    const value = (layoutCfg && layoutCfg[varname]) ? layoutCfg[varname] : dftVal
    console.log(varname, value)
    registry.moduleVarSet("layout", varname, value)
  }
};
