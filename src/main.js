import { createApp } from "vue";
import VueModx from "vue-modx";
import RouterModule from "vmx-router";
import RequestModule from "vmx-request";
import VuexModule from "vmx-vuex";

// main app
import App from "./App.vue";

// extension modules
import Layout from "./layout/module.js";
import Home from "./home/module.js";
import Module1 from "./module1/module.js";
import LogoNormal from "./logo/normal.vue";
import LogoCollapsed from "./logo/collapsed.vue";

let app = createApp(App);

app.use(VueModx, {
  modules: [
    RouterModule,
    RequestModule,
    VuexModule,
    Layout,
    Home,
    Module1
    // add more modules
  ],
  config: {
    router: {
      routes: [],
      scrollBehavior: () => ({ y: 0 }), // see https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling
      mode: "hash" // default "history"
    },
    layout: {
      // navBgColor: "#4ca1f2",
      // menuBgColor: "#545c64",
      // menuTextColor: "#ffffff",
      // menuActiveTextColor: "#ffd04b",
      logoNormal: LogoNormal,
      logoCollapsed: LogoCollapsed,
      // logoBgColor: "#ffffff"
    }
  }
});

app.mount("#app");

