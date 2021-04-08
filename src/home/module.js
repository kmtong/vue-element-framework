export default {
  name: "home",
  dependsOn: ["router", "menu", "vuex", "request"],
  extensions: {
    router: [
      {
        path: "/",
        component: null, // layout routeFn will override this value
        children: [{ path: "/", component: () => import("./Home.vue") }]
      }
    ],
    menu: {
      id: "home", link: "/", icon: "s-home", label: "Home",
      children: [{ id: "home2", label: "Home2", link: "/", icon: "s-home" }]
    },
    nav: {
      id: "home", link: "/", icon: "s-home", label: "Home", ignoreState: true,
      selectFn: () => {
        alert("Home Nav Selected")
      }, children: [{ id: "home2", label: "Home2", link: "/", icon: "s-home" }]
    },
    "vuex.state": {
      username: "Global Username"
    },
    "vuex.mutations": {
      SetUsername(state, s) {
        state.username = s;
      }
    }
  }
};
