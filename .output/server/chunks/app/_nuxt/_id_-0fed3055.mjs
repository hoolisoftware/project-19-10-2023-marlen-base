import { t as titleSection } from './title-section-a2280244.mjs';
import { S as SERVER_URL, c as card } from './config-9d471605.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCase } from './case-9d08c009.mjs';
import './modal-33f1e527.mjs';
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
import '@tanstack/vue-query';
import 'axios';

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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const CaseItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-42dd63c5"]]);
const __default__ = {
  name: "case",
  components: { card, CaseItem }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    const { data, isLoading, isError } = useCase(String(id));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_blocks_title_section = titleSection;
      const _component_cards_case_card = card;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-677d1072>`);
      if (unref(isLoading)) {
        _push(`<div data-v-677d1072> Loading... </div>`);
      } else if (unref(isError)) {
        _push(`<div data-v-677d1072> Error... </div>`);
      } else {
        _push(`<div data-v-677d1072>`);
        _push(ssrRenderComponent(_component_blocks_title_section, {
          text: (_a = unref(data)) == null ? void 0 : _a.data.case.name
        }, null, _parent));
        _push(ssrRenderComponent(_component_cards_case_card, {
          title: (_b = unref(data)) == null ? void 0 : _b.data.case.name,
          image: unref(SERVER_URL) + ((_c = unref(data)) == null ? void 0 : _c.data.case.photo_url),
          cost: (_d = unref(data)) == null ? void 0 : _d.data.case.price,
          "show-border": false
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<h2 data-v-677d1072>\u0427\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u0430\u0441\u0442\u044C?</h2><!--[-->`);
      ssrRenderList((_e = unref(data)) == null ? void 0 : _e.data.case.items, (item) => {
        _push(`<div class="page-items" data-v-677d1072>`);
        _push(ssrRenderComponent(CaseItem, {
          title: item.name,
          image: unref(SERVER_URL) + item.photo_url,
          cost: item.sgd_price
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><h2 data-v-677d1072>\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u0435\u0439\u0441\u044B</h2><div class="page-items" data-v-677d1072>`);
      _push(ssrRenderComponent(card, {
        title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
        image: "/img/cases/case_3.png",
        cost: 200
      }, null, _parent));
      _push(ssrRenderComponent(card, {
        title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
        image: "/img/cases/case_4.png",
        cost: 200
      }, null, _parent));
      _push(ssrRenderComponent(card, {
        title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
        image: "/img/cases/case_5.png",
        cost: 200
      }, null, _parent));
      _push(ssrRenderComponent(card, {
        title: "\u041A\u0435\u0439\u0441 \u041A\u043B\u0438",
        image: "/img/cases/case_6.png",
        cost: 200
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-677d1072"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0fed3055.mjs.map
