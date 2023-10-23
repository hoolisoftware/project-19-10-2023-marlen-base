import _sfc_main$4 from './nuxt-icon-c75976ab.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$2 } from '../server.mjs';
import { B as Button } from './Button-1d188171.mjs';
import { useWindowSize } from 'vue-window-size';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {
  components: { Button },
  setup() {
    const { width } = useWindowSize();
    const radius = width < 1024 ? 91 : 136;
    const percent = 33;
    const angle = 360 / 100 * percent;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = angle / 360 * circumference;
    const strokeArray = `${strokeDasharray}, ${circumference - strokeDasharray}`;
    const cx = 160 + Math.cos(angle * Math.PI / 180) * radius;
    const cy = 160 + Math.sin(angle * Math.PI / 180) * radius;
    return {
      strokeArray,
      cx,
      cy,
      percent
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$4;
  const _component_nuxt_img = __nuxt_component_0$2;
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle" }, _attrs))} data-v-8efed34f><div class="circle__box" data-v-8efed34f><div class="circle__wrap" data-v-8efed34f><div class="circle__panel circle__panel--bottom" data-v-8efed34f>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "plus",
    class: "circle__panel-plus"
  }, null, _parent));
  _push(`<span class="circle__panel-text" data-v-8efed34f>\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442</span></div><div class="circle__panel circle__panel--left" data-v-8efed34f>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "plus",
    class: "circle__panel-plus"
  }, null, _parent));
  _push(`<span class="circle__panel-text" data-v-8efed34f>\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442</span><div class="circle__panel-img-box" data-v-8efed34f>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/img/prize2.png",
    format: "avif,webp",
    densities: "x1 x2",
    width: "84",
    height: "84",
    class: "circle__panel-img"
  }, null, _parent));
  _push(`</div></div><div class="circle__panel circle__panel--right" data-v-8efed34f>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "plus",
    class: "circle__panel-plus"
  }, null, _parent));
  _push(`<span class="circle__panel-text" data-v-8efed34f>\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442</span></div><div class="circle__center" data-v-8efed34f><svg class="circle__svg" data-v-8efed34f><circle cx="160" cy="160" r="136" stroke-width="5"${ssrRenderAttr("stroke-dasharray", $setup.strokeArray)} fill="none" data-v-8efed34f></circle><circle${ssrRenderAttr("cx", $setup.cx)}${ssrRenderAttr("cy", $setup.cy)} r="15" class="circle__percent-circle" data-v-8efed34f></circle><text${ssrRenderAttr("x", $setup.cx)}${ssrRenderAttr("y", $setup.cy)} class="circle__percent-text" style="${ssrRenderStyle({ "transform-origin": $setup.cx + "px " + $setup.cy + "px" })}" fill="white" data-v-8efed34f>${ssrInterpolate($setup.percent)}% </text></svg><img${ssrRenderAttr("src", "")} format="avif,webp" densities="x1 x2" class="circle__img" data-v-8efed34f></div></div></div>`);
  _push(ssrRenderComponent(_component_Button, {
    color: "green",
    text: "\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/alchemy/AlchemyCircle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8efed34f"]]);
const _sfc_main$2 = {
  props: {
    img: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["prize", { "prize--checked": $props.isChecked, "prize--selected": $props.isSelected }]
  }, _attrs))} data-v-49ee37c3><img${ssrRenderAttr("src", "")} class="lottery-prize__img" data-v-49ee37c3>`);
  if ($props.isChecked) {
    _push(ssrRenderComponent(_component_nuxt_icon, {
      name: "check",
      class: "prize__check-icon"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/alchemy/AlchemyPrize.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-49ee37c3"]]);
const _sfc_main$1 = {
  components: { AlchemyPrize: __nuxt_component_0, PerfectScrollbar }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PerfectScrollbar = resolveComponent("PerfectScrollbar");
  const _component_AlchemyPrize = __nuxt_component_0;
  _push(ssrRenderComponent(_component_PerfectScrollbar, mergeProps({ class: "prizes__prize-list" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="prizes__prize-grid" data-v-bea2feda${_scopeId}><!--[-->`);
        ssrRenderList(9, (i) => {
          _push2(ssrRenderComponent(_component_AlchemyPrize, {
            img: "prize" + i + ".png",
            isSelected: i === 1,
            isChecked: i === 7 || i === 8
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--><!--[-->`);
        ssrRenderList(9, (i) => {
          _push2(ssrRenderComponent(_component_AlchemyPrize, {
            img: "prize" + i + ".png"
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "prizes__prize-grid" }, [
            (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
              return createVNode(_component_AlchemyPrize, {
                img: "prize" + i + ".png",
                isSelected: i === 1,
                isChecked: i === 7 || i === 8
              }, null, 8, ["img", "isSelected", "isChecked"]);
            }), 64)),
            (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
              return createVNode(_component_AlchemyPrize, {
                img: "prize" + i + ".png"
              }, null, 8, ["img"]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/alchemy/AlchemyPrizes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bea2feda"]]);
const _sfc_main = {
  components: { AlchemyPrizes: __nuxt_component_1, AlchemyCircle: __nuxt_component_0$1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AlchemyCircle = __nuxt_component_0$1;
  const _component_AlchemyPrizes = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "alchemy" }, _attrs))} data-v-a32644b4><h1 class="heading1 alchemy__title" data-v-a32644b4>\u0410\u043B\u0445\u0438\u043C\u0438\u044F</h1><div class="alchemy__grid" data-v-a32644b4>`);
  _push(ssrRenderComponent(_component_AlchemyCircle, null, null, _parent));
  _push(ssrRenderComponent(_component_AlchemyPrizes, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/alchemy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alchemy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a32644b4"]]);

export { alchemy as default };
//# sourceMappingURL=alchemy-382a75cb.mjs.map
