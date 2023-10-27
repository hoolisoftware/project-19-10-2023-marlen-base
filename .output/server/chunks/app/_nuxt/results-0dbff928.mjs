import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ticketsNumber: {
      type: Number,
      required: true
    },
    prize: {
      type: String,
      required: true
    }
  },
  setup({ ...props }) {
    return { ...props };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user" }, _attrs))} data-v-602e020f><img${ssrRenderAttr("src", $props.avatar)} format="avif,webp" densities="x1 x2" class="user__avatar" width="66" height="66" data-v-602e020f><div class="user__text-box" data-v-602e020f><p class="user__name" data-v-602e020f>${ssrInterpolate($props.name)}</p><p class="user__tickets" data-v-602e020f> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0438\u043B\u0435\u0442\u043E\u0432:\xA0 <span class="user__tickets-number" data-v-602e020f>${ssrInterpolate($props.ticketsNumber)}</span></p></div><div class="user__prize-box" data-v-602e020f><img${ssrRenderAttr("src", $props.prize)} format="avif,webp" densities="x1 x2" class="user__prize" width="70" height="70" data-v-602e020f></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/results/ResultsUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-602e020f"]]);
const _sfc_main = {
  components: { ResultsUser: __nuxt_component_0 },
  setup() {
    const userList = [
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize1.png"
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize2.png"
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize3.png"
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize4.png"
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize5.png"
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize6.png"
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize7.png"
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize10.png"
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize1.png"
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        ticketsNumber: 5,
        prize: "prize2.png"
      }
    ];
    return {
      userList
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResultsUser = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "results" }, _attrs))} data-v-88436313><h1 class="heading1 results__title" data-v-88436313>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043B\u043E\u0442\u0435\u0440\u0435\u0438</h1><div class="results__grid" data-v-88436313><!--[-->`);
  ssrRenderList($setup.userList, (user) => {
    _push(ssrRenderComponent(_component_ResultsUser, {
      avatar: user.avatar,
      name: user.name,
      "tickets-number": user.ticketsNumber,
      prize: user.prize
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const results = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88436313"]]);

export { results as default };
//# sourceMappingURL=results-0dbff928.mjs.map
