export default {
  name: "module1",
  dependsOn: ["router", "menu"],
  extensions: {
    router: [
      {
        path: "/",
        component: null, // layout routeFn will override this value
        children: [
          {
            path: "/module1",
            component: () => import("./component.vue")
          }
        ]
      }
    ],
    menu: { id: "module1", link: "/module1", label: "Module1", icon: "s-custom" },
    nav: { id: "module1", link: "/module1", label: "Module1" }
  }
};
