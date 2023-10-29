import { _ as _export_sfc, b as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { AxiosError } from 'axios';
import { a as useCases } from './case-6a5dc538.mjs';
import { S as SERVER_URL } from './config-5bff1946.mjs';
import { c as card } from './case-card-5027f9d9.mjs';
import { t as titleSection } from './title-section-a2280244.mjs';
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
import './index-93da1471.mjs';
import './modal-33f1e527.mjs';

const __default__ = {
  head: {
    title: "Kleewish | \u041A\u0435\u0439\u0441\u044B"
  },
  components: { card, titleSection }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoading, data, error } = useCases();
    const categories = [
      ["\u0418\u043D\u0430\u0434\u0437\u0443\u043C\u0430", "inadzuma"],
      ["\u041C\u043E\u043D\u0448\u0442\u0430\u0434\u0442", "mondstadt"],
      ["\u041B\u0438 \u042E\u042D", "liyue"],
      ["\u0421\u0443\u043C\u0435\u0440\u0443", "sumeru"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0$3;
      if (unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-da6f6e08> Loading... </div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-da6f6e08>${ssrInterpolate(unref(error) instanceof unref(AxiosError) && unref(error).message)}</div>`);
      } else if ((_a = unref(data)) == null ? void 0 : _a.data.cases) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-da6f6e08><div class="page" data-v-da6f6e08><!--[-->`);
        ssrRenderList(categories, (_category) => {
          _push(`<div data-v-da6f6e08>`);
          _push(ssrRenderComponent(titleSection, {
            text: _category[0],
            info: unref(data).data.cases.filter((item) => item.category === _category[1]).length + " \u043A\u0435\u0439\u0441\u0430",
            icon: "inadzuma"
          }, null, _parent));
          _push(`<!--[-->`);
          ssrRenderList(unref(data).data.cases.filter((item) => item.category === _category[1]), ({ id, name, price, photo_url }) => {
            _push(`<div data-v-da6f6e08><div class="case-list" data-v-da6f6e08>`);
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: `/case/${id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(card, {
                    title: name,
                    image: `${unref(SERVER_URL)}${photo_url}`,
                    cost: price
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(card, {
                      title: name,
                      image: `${unref(SERVER_URL)}${photo_url}`,
                      cost: price
                    }, null, 8, ["title", "image", "cost"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da6f6e08"]]);

export { index as default };
//# sourceMappingURL=index-e0a92770.mjs.map
