import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/advantage1.svg": () => import('./advantage1-38d86b77.mjs').then((m) => m["default"]),
          "/assets/icons/advantage2.svg": () => import('./advantage2-ad0327a3.mjs').then((m) => m["default"]),
          "/assets/icons/advantage3.svg": () => import('./advantage3-9f07569f.mjs').then((m) => m["default"]),
          "/assets/icons/bag.svg": () => import('./bag-248793fe.mjs').then((m) => m["default"]),
          "/assets/icons/burger.svg": () => import('./burger-38b65780.mjs').then((m) => m["default"]),
          "/assets/icons/check.svg": () => import('./check-64bd50fc.mjs').then((m) => m["default"]),
          "/assets/icons/external-link.svg": () => import('./external-link-2bcaf001.mjs').then((m) => m["default"]),
          "/assets/icons/key.svg": () => import('./key-02d9363a.mjs').then((m) => m["default"]),
          "/assets/icons/logo.svg": () => import('./logo-dadb29f8.mjs').then((m) => m["default"]),
          "/assets/icons/minus-circle.svg": () => import('./minus-circle-def764f4.mjs').then((m) => m["default"]),
          "/assets/icons/moon.svg": () => import('./moon-22b0b7a2.mjs').then((m) => m["default"]),
          "/assets/icons/plus-circle.svg": () => import('./plus-circle-783f176c.mjs').then((m) => m["default"]),
          "/assets/icons/plus.svg": () => import('./plus-e9c691db.mjs').then((m) => m["default"]),
          "/assets/icons/question-circle.svg": () => import('./question-circle-496e815b.mjs').then((m) => m["default"]),
          "/assets/icons/star.svg": () => import('./star-13b23450.mjs').then((m) => m["default"]),
          "/assets/icons/sun.svg": () => import('./sun-70840e0f.mjs').then((m) => m["default"]),
          "/assets/icons/users.svg": () => import('./users-ae948691.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${unref(icon)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-c75976ab.mjs.map
