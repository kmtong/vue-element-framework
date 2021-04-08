export default {
    methods: {
        handleMenuSelect(menuItems, menuId, persistStateFn, origState) {
            const menu = this.findMenuItem(menuItems, menuId);
            if (!menu) {
                console.error("Cannot find menu id: ", menuId);
                return;
            }
            if (menu.selectFn && typeof menu.selectFn === "function") {
                menu.selectFn();
            }
            if (!menu.ignoreState) {
                if (persistStateFn) {
                    persistStateFn(menuId);
                }
            } else {
                if (persistStateFn) {
                    persistStateFn(null);
                    this.$nextTick(() => persistStateFn(origState));
                }
            }
            if (menu.link) {
                this.$router.push(menu.link);
            }
        },
        findMenuItem(items, menuId) {
            const menu = items.find((i) => i.id === menuId);
            if (menu) {
                return menu;
            } else {
                const children = items
                    .flatMap((i) => i.children)
                    .filter((i) => i != null);
                if (children.length == 0) {
                    return null;
                }
                return this.findMenuItem(children, menuId);
            }
        },
    }
}
