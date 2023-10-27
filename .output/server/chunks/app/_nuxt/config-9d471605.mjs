import { _ as _export_sfc, M as MediumButton, t as themeStore, a as __nuxt_component_0 } from '../server.mjs';
import { m as modalStore } from './modal-33f1e527.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  props: {
    title: String,
    image: String,
    cost: Number,
    showBorder: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: { mediumButton: MediumButton },
  name: "card",
  computed: {
    theme() {
      return this.store.isDarkTheme ? "dark" : "light";
    }
  },
  data() {
    return {
      activeMenu: false,
      store: themeStore(),
      modals: modalStore()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "case" + (!$props.showBorder ? " case-wb" : ""),
    "data-theme": $options.theme
  }, _attrs))} data-v-1ab7693e><div class="${ssrRenderClass("case-image" + (!$props.showBorder ? " case-image_wb" : ""))}" data-v-1ab7693e><img format="webp"${ssrRenderAttr("quality", $props.showBorder ? 90 : 100)}${ssrRenderAttr("width", $props.showBorder ? 190 : 300)}${ssrRenderAttr("height", $props.showBorder ? 190 : 300)}${ssrRenderAttr("src", $props.image)} alt="\u041A\u0435\u0439\u0441" data-v-1ab7693e></div><div class="case-title" data-v-1ab7693e>${ssrInterpolate($props.title)}</div><div class="case-bottom" data-v-1ab7693e><div class="case-cost" data-v-1ab7693e><div data-v-1ab7693e>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C</div><div data-v-1ab7693e>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "moon",
    src: "/img/mor.png"
  }, null, _parent));
  _push(`<span data-v-1ab7693e>${ssrInterpolate($props.cost)}</span></div></div>`);
  _push(ssrRenderComponent(_component_medium_button, {
    text: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
    onClick: ($event) => $props.showBorder ? false : $data.modals.showModal("caseOpen")
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/case-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1ab7693e"]]);
const tgBotId = 6215189056;
const vkBotId = 51615870;
const origin = "http://92.255.109.252/";
const SERVER_URL = "http://135.181.103.193:8000";

export { SERVER_URL as S, card as c, origin as o, tgBotId as t, vkBotId as v };
//# sourceMappingURL=config-9d471605.mjs.map