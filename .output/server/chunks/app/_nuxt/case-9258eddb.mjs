import { t as titleSection } from './title-section-a2280244.mjs';
import { c as card } from './case-card-2729647c.mjs';
import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './modal-33f1e527.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';
import 'vue-router';
import '@unhead/shared';
import 'unhead';

const _sfc_main$1 = {
  name: "case-item",
  props: {
    cost: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-42dd63c5><div class="item-cost" data-v-42dd63c5>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    src: "/img/mor.png"
  }, null, _parent));
  _push(`<div data-v-42dd63c5>${ssrInterpolate($props.cost)}</div></div><div class="item-image" data-v-42dd63c5>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    src: $props.image
  }, null, _parent));
  _push(`</div><div class="item-title" data-v-42dd63c5>${ssrInterpolate($props.title)}</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/case-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CaseItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-42dd63c5"]]);
const _sfc_main = {
  name: "case",
  components: { card, CaseItem }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_blocks_title_section = titleSection;
  const _component_cards_case_card = card;
  const _component_case_item = resolveComponent("case-item");
  const _component_card = resolveComponent("card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-52962e47>`);
  _push(ssrRenderComponent(_component_blocks_title_section, { text: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438" }, null, _parent));
  _push(ssrRenderComponent(_component_cards_case_card, {
    title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
    image: "/img/cases/case_5.png",
    cost: 200,
    "show-border": false
  }, null, _parent));
  _push(`<h2 data-v-52962e47>\u0427\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u0430\u0441\u0442\u044C?</h2><div class="page-items" data-v-52962e47>`);
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_1.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_2.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_3.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_4.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_5.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_1.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_2.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_1.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_2.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_3.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_4.png",
    cost: 150
  }, null, _parent));
  _push(ssrRenderComponent(_component_case_item, {
    title: "\u041D\u0430\u0431\u043E\u0440 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
    image: "/img/items/item_5.png",
    cost: 150
  }, null, _parent));
  _push(`</div><h2 data-v-52962e47>\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u0435\u0439\u0441\u044B</h2><div class="page-items" data-v-52962e47>`);
  _push(ssrRenderComponent(_component_card, {
    title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
    image: "/img/cases/case_3.png",
    cost: 200
  }, null, _parent));
  _push(ssrRenderComponent(_component_card, {
    title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
    image: "/img/cases/case_4.png",
    cost: 200
  }, null, _parent));
  _push(ssrRenderComponent(_component_card, {
    title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
    image: "/img/cases/case_5.png",
    cost: 200
  }, null, _parent));
  _push(ssrRenderComponent(_component_card, {
    title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
    image: "/img/cases/case_6.png",
    cost: 200
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _case = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-52962e47"]]);

export { _case as default };
//# sourceMappingURL=case-9258eddb.mjs.map
