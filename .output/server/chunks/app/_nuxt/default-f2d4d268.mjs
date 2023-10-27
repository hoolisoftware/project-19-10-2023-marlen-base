import { d as defineStore, _ as _export_sfc, t as themeStore, M as MediumButton, a as __nuxt_component_0, e as __nuxt_component_0$2, b as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, ref, unref, resolveComponent, withCtx, createVNode, renderSlot, mergeProps, openBlock, createBlock, createTextVNode } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { m as modalStore } from './modal-33f1e527.mjs';
import { a as authStore, G as Game, b as api, _ as _imports_0 } from './profile-d1222349.mjs';
import { c as card, t as tgBotId, o as origin, v as vkBotId } from './config-9d471605.mjs';
import { useRoute } from 'vue-router';
import axios from 'axios';
import BezierEasing from 'bezier-easing';
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
import '@tanstack/vue-query';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './title-section-a2280244.mjs';

const _sfc_main$e = {
  name: "drop",
  props: {
    itemTitle: {
      type: String,
      required: true
    },
    itemImage: {
      type: String,
      required: true
    },
    caseImage: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "drop" }, _attrs))} data-v-1998a13a><div class="drop-left" data-v-1998a13a><div data-v-1998a13a>${ssrInterpolate($props.username)}</div><div data-v-1998a13a>${ssrInterpolate($props.itemTitle)}</div></div><div class="drop-right" data-v-1998a13a><div class="drop-right_image" data-v-1998a13a>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    width: "70",
    height: "70",
    src: $props.itemImage,
    alt: $props.itemTitle
  }, null, _parent));
  _push(`</div><div class="drop-right_case" data-v-1998a13a>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    width: "120",
    alt: "\u043A\u0435\u0439\u0441",
    height: "120",
    src: $props.caseImage
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/livedrop/drop.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const drop = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-1998a13a"]]);
const _sfc_main$d = {
  name: "livedrop",
  components: {
    drop
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$3;
  const _component_drop = resolveComponent("drop");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "livedrop" }, _attrs))} data-v-7bbdc6d2><div class="livedrop-right" data-v-7bbdc6d2></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_1.png",
          "item-image": "/img/items/item_1.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_1.png",
            "item-image": "/img/items/item_1.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0412\u0430\u043D\u044F",
          "case-image": "/img/cases/case_4.png",
          "item-image": "/img/items/item_2.png",
          "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0412\u0430\u043D\u044F",
            "case-image": "/img/cases/case_4.png",
            "item-image": "/img/items/item_2.png",
            "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_2.png",
          "item-image": "/img/items/item_3.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_2.png",
            "item-image": "/img/items/item_3.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_1.png",
          "item-image": "/img/items/item_1.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_1.png",
            "item-image": "/img/items/item_1.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0412\u0430\u043D\u044F",
          "case-image": "/img/cases/case_4.png",
          "item-image": "/img/items/item_2.png",
          "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0412\u0430\u043D\u044F",
            "case-image": "/img/cases/case_4.png",
            "item-image": "/img/items/item_2.png",
            "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_2.png",
          "item-image": "/img/items/item_3.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_2.png",
            "item-image": "/img/items/item_3.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_1.png",
          "item-image": "/img/items/item_1.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_1.png",
            "item-image": "/img/items/item_1.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043D\u0435\u0444\u0440\u0438\u0442\u0430 \u0428\u0438\u0432\u0430\u0434\u0430"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0412\u0430\u043D\u044F",
          "case-image": "/img/cases/case_4.png",
          "item-image": "/img/items/item_2.png",
          "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0412\u0430\u043D\u044F",
            "case-image": "/img/cases/case_4.png",
            "item-image": "/img/items/item_2.png",
            "item-title": "\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u043E\u0439 \u043B\u0443\u043D\u044B"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_drop, {
          username: "\u0413\u0435\u043D\u0430",
          "case-image": "/img/cases/case_2.png",
          "item-image": "/img/items/item_3.png",
          "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_drop, {
            username: "\u0413\u0435\u043D\u0430",
            "case-image": "/img/cases/case_2.png",
            "item-image": "/img/items/item_3.png",
            "item-title": "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u0430 \u041D\u0430\u0433\u0430\u0434\u0443\u0441"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/livedrop/livedrop.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-7bbdc6d2"]]);
const _sfc_main$c = {
  name: "mini-profile",
  components: { MediumButton },
  props: {
    logged: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      modals: modalStore(),
      authStores: authStore()
    };
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_medium_button = resolveComponent("medium-button");
  const _component_nuxt_img = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mini-profile" }, _attrs))} data-v-598ea7ad>`);
  if (!$props.logged) {
    _push(`<div class="profile" data-v-598ea7ad>`);
    _push(ssrRenderComponent(_component_medium_button, { text: "\u0412\u043E\u0439\u0442\u0438" }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="profile" data-v-598ea7ad><div class="profile-cash" data-v-598ea7ad>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      alt: "moon",
      src: "/img/mor.png"
    }, null, _parent));
    _push(`<div data-v-598ea7ad>${ssrInterpolate($data.authStores.user ? `${$data.authStores.user.balance}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</div></div>`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "profile" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_img, {
            format: "webp",
            quality: "90",
            width: "88",
            height: "88",
            class: "profile-avatar",
            alt: "\u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430",
            src: $data.authStores.user ? $data.authStores.user.photo_url : "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_nuxt_img, {
              format: "webp",
              quality: "90",
              width: "88",
              height: "88",
              class: "profile-avatar",
              alt: "\u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430",
              src: $data.authStores.user ? $data.authStores.user.photo_url : "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/mini-profile.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const miniProfile = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-598ea7ad"]]);
const _sfc_main$b = {
  name: "header-menu"
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-3a81ef1e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    exact: "",
    to: "/",
    class: "menu-item",
    "exact-active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-3a81ef1e${_scopeId}>\u041A\u0435\u0439\u0441\u044B</span><div class="menu-item_border" data-v-3a81ef1e${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041A\u0435\u0439\u0441\u044B"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/shop",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-3a81ef1e${_scopeId}>\u041C\u0430\u0433\u0430\u0437\u0438\u043D</span><div class="menu-item_border" data-v-3a81ef1e${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-3a81ef1e${_scopeId}>\u0422\u0430\u0439\u043D\u0438\u043A</span><div class="menu-item_border" data-v-3a81ef1e${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u0422\u0430\u0439\u043D\u0438\u043A"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/alchemy",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-3a81ef1e${_scopeId}>\u0410\u043B\u0445\u0438\u043C\u0438\u044F</span><div class="menu-item_border" data-v-3a81ef1e${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u0410\u043B\u0445\u0438\u043C\u0438\u044F"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="menu-item" data-v-3a81ef1e><span data-v-3a81ef1e>\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0436\u0438\u043C\u044B <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 451.847 451.847" style="${ssrRenderStyle({ "enable-background": "new 0 0 512 512" })}" xml:space="preserve" data-v-3a81ef1e><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" data-original="#000000" data-v-3a81ef1e></path></svg></span><div class="menu-item_border" data-v-3a81ef1e></div><div class="submenu" data-v-3a81ef1e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/lottery",
    class: "submenu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041B\u043E\u0442\u0435\u0440\u0435\u044F `);
      } else {
        return [
          createTextVNode(" \u041B\u043E\u0442\u0435\u0440\u0435\u044F ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/auction",
    class: "submenu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0410\u0443\u043A\u0446\u0438\u043E\u043D `);
      } else {
        return [
          createTextVNode(" \u0410\u0443\u043A\u0446\u0438\u043E\u043D ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/reviews",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-3a81ef1e${_scopeId}>\u041E\u0442\u0437\u044B\u0432\u044B</span><div class="menu-item_border" data-v-3a81ef1e${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041E\u0442\u0437\u044B\u0432\u044B"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/header-menu.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const headerMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-3a81ef1e"]]);
const _sfc_main$a = {
  name: "header-menu",
  data() {
    return {
      activeMenu: false,
      store: themeStore()
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-db226333>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    exact: "",
    to: "/",
    class: "menu-item",
    "exact-active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u041A\u0435\u0439\u0441\u044B</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041A\u0435\u0439\u0441\u044B"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/shop",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u041C\u0430\u0433\u0430\u0437\u0438\u043D</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u0422\u0430\u0439\u043D\u0438\u043A</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u0422\u0430\u0439\u043D\u0438\u043A"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u0412\u043E\u0437\u0432\u044B\u0448\u0435\u043D\u0438\u0435</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u0412\u043E\u0437\u0432\u044B\u0448\u0435\u043D\u0438\u0435"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u041A\u0440\u0430\u0444\u0442</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041A\u0440\u0430\u0444\u0442"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>Plinco</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "Plinco"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/reviews",
    class: "menu-item",
    "active-class": "menu-item_active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-db226333${_scopeId}>\u041E\u0442\u0437\u044B\u0432\u044B</span><div class="menu-item_border" data-v-db226333${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", null, "\u041E\u0442\u0437\u044B\u0432\u044B"),
          createVNode("div", { class: "menu-item_border" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="theme" data-v-db226333><div class="${ssrRenderClass("theme-active " + ($data.store.isDarkTheme === true ? "theme-active_dark" : ""))}" data-v-db226333></div><div class="theme-item" data-v-db226333><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db226333><path d="M13.8823 9.48774C13.8287 9.43435 13.7612 9.39722 13.6874 9.38066C13.6137 9.36409 13.5367 9.36877 13.4655 9.39415C12.5085 9.73534 11.4744 9.79799 10.4833 9.57482C9.49212 9.35165 8.58464 8.85182 7.86627 8.1334C7.1479 7.41499 6.64812 6.50748 6.42501 5.51632C6.2019 4.52516 6.2646 3.49104 6.60585 2.5341C6.63121 2.46288 6.63586 2.38593 6.61926 2.31217C6.60267 2.23841 6.56551 2.17087 6.51209 2.11737C6.45868 2.06387 6.39119 2.0266 6.31746 2.00989C6.24373 1.99318 6.16677 1.99771 6.09551 2.02296C5.23276 2.32762 4.44982 2.82292 3.80495 3.472C2.64893 4.6289 1.99969 6.19756 2 7.83304C2.00031 9.46852 2.65014 11.0369 3.8066 12.1934C4.96307 13.3499 6.53148 13.9997 8.16696 14C9.80245 14.0003 11.3711 13.3511 12.528 12.195C13.1771 11.5501 13.6724 10.767 13.977 9.9041C14.0022 9.83283 14.0066 9.7559 13.9899 9.68221C13.9731 9.60852 13.9358 9.5411 13.8823 9.48774Z" fill="black"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "1" : "0.25")} data-v-db226333></path></svg></div><div class="theme-item" data-v-db226333><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db226333><path d="M8 12C7.20888 12 6.43552 11.7654 5.77772 11.3259C5.11992 10.8864 4.60723 10.2616 4.30448 9.53074C4.00173 8.79983 3.92252 7.99556 4.07686 7.21964C4.2312 6.44372 4.61216 5.73098 5.17157 5.17157C5.73098 4.61216 6.44372 4.2312 7.21964 4.07686C7.99556 3.92252 8.79983 4.00173 9.53074 4.30448C10.2616 4.60723 10.8864 5.11992 11.3259 5.77772C11.7654 6.43552 12 7.20888 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12ZM8 5.33334C7.47259 5.33334 6.95701 5.48973 6.51848 5.78275C6.07995 6.07577 5.73816 6.49224 5.53632 6.97951C5.33449 7.46678 5.28168 8.00296 5.38457 8.52024C5.48747 9.03753 5.74144 9.51268 6.11438 9.88562C6.48732 10.2586 6.96248 10.5125 7.47976 10.6154C7.99704 10.7183 8.53322 10.6655 9.02049 10.4637C9.50776 10.2618 9.92424 9.92005 10.2173 9.48152C10.5103 9.04299 10.6667 8.52742 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61429 8.70725 5.33334 8 5.33334Z" fill="white"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "0.25" : "1")} data-v-db226333></path><path d="M7.99992 10C7.82311 10 7.65354 9.92976 7.52851 9.80473C7.40349 9.67971 7.33325 9.51014 7.33325 9.33333V6.66666C7.33325 6.48985 7.40349 6.32028 7.52851 6.19526C7.65354 6.07023 7.82311 6 7.99992 6C8.53035 6 9.03906 6.21071 9.41413 6.58578C9.78921 6.96085 9.99992 7.46956 9.99992 8C9.99992 8.53043 9.78921 9.03914 9.41413 9.41421C9.03906 9.78928 8.53035 10 7.99992 10ZM7.99992 3.33333C7.82311 3.33333 7.65354 3.26309 7.52851 3.13807C7.40349 3.01304 7.33325 2.84347 7.33325 2.66666V1.99999C7.33325 1.82318 7.40349 1.65361 7.52851 1.52859C7.65354 1.40357 7.82311 1.33333 7.99992 1.33333C8.17673 1.33333 8.3463 1.40357 8.47132 1.52859C8.59635 1.65361 8.66659 1.82318 8.66659 1.99999V2.66666C8.66659 2.84347 8.59635 3.01304 8.47132 3.13807C8.3463 3.26309 8.17673 3.33333 7.99992 3.33333ZM11.7733 4.89333C11.6076 4.88583 11.4508 4.8169 11.3333 4.7C11.2091 4.57509 11.1394 4.40612 11.1394 4.22999C11.1394 4.05387 11.2091 3.8849 11.3333 3.75999L11.8066 3.28666C11.8664 3.21687 11.9399 3.16019 12.0226 3.12018C12.1053 3.08016 12.1954 3.05768 12.2872 3.05413C12.379 3.05058 12.4706 3.06605 12.5561 3.09957C12.6417 3.13309 12.7194 3.18392 12.7844 3.24889C12.8493 3.31386 12.9002 3.39156 12.9337 3.47711C12.9672 3.56266 12.9827 3.65422 12.9791 3.74603C12.9756 3.83784 12.9531 3.92793 12.9131 4.01064C12.8731 4.09335 12.8164 4.1669 12.7466 4.22666L12.2733 4.7C12.2078 4.76507 12.1296 4.81585 12.0435 4.84913C11.9575 4.88241 11.8654 4.89746 11.7733 4.89333ZM13.9999 8.66666H13.3333C13.1564 8.66666 12.9869 8.59642 12.8618 8.4714C12.7368 8.34638 12.6666 8.17681 12.6666 8C12.6666 7.82318 12.7368 7.65361 12.8618 7.52859C12.9869 7.40357 13.1564 7.33333 13.3333 7.33333H13.9999C14.1767 7.33333 14.3463 7.40357 14.4713 7.52859C14.5963 7.65361 14.6666 7.82318 14.6666 8C14.6666 8.17681 14.5963 8.34638 14.4713 8.4714C14.3463 8.59642 14.1767 8.66666 13.9999 8.66666ZM12.2399 12.9067C12.065 12.9059 11.8974 12.8365 11.7733 12.7133L11.3333 12.24C11.2628 12.1133 11.2355 11.9672 11.2556 11.8236C11.2757 11.6801 11.342 11.547 11.4445 11.4445C11.5469 11.342 11.68 11.2758 11.8236 11.2557C11.9671 11.2356 12.1133 11.2629 12.2399 11.3333L12.7133 11.8067C12.8374 11.9316 12.9071 12.1005 12.9071 12.2767C12.9071 12.4528 12.8374 12.6218 12.7133 12.7467C12.5822 12.8593 12.4125 12.9167 12.2399 12.9067ZM7.99992 14.6667C7.82311 14.6667 7.65354 14.5964 7.52851 14.4714C7.40349 14.3464 7.33325 14.1768 7.33325 14V13.3333C7.33325 13.1565 7.40349 12.9869 7.52851 12.8619C7.65354 12.7369 7.82311 12.6667 7.99992 12.6667C8.17673 12.6667 8.3463 12.7369 8.47132 12.8619C8.59635 12.9869 8.66659 13.1565 8.66659 13.3333V14C8.66659 14.1768 8.59635 14.3464 8.47132 14.4714C8.3463 14.5964 8.17673 14.6667 7.99992 14.6667ZM3.75992 12.9067C3.67218 12.9072 3.58521 12.8904 3.50398 12.8572C3.42276 12.824 3.34888 12.7751 3.28659 12.7133C3.16242 12.5884 3.09272 12.4195 3.09272 12.2433C3.09272 12.0672 3.16242 11.8982 3.28659 11.7733L3.75992 11.3333C3.88745 11.2241 4.0515 11.167 4.21929 11.1735C4.38707 11.18 4.54623 11.2496 4.66496 11.3683C4.78369 11.487 4.85325 11.6462 4.85973 11.814C4.86621 11.9817 4.80914 12.1458 4.69992 12.2733L4.22659 12.7467C4.09721 12.8577 3.93021 12.915 3.75992 12.9067ZM2.66659 8.66666H1.99992C1.82311 8.66666 1.65354 8.59642 1.52851 8.4714C1.40349 8.34638 1.33325 8.17681 1.33325 8C1.33325 7.82318 1.40349 7.65361 1.52851 7.52859C1.65354 7.40357 1.82311 7.33333 1.99992 7.33333H2.66659C2.8434 7.33333 3.01297 7.40357 3.13799 7.52859C3.26301 7.65361 3.33325 7.82318 3.33325 8C3.33325 8.17681 3.26301 8.34638 3.13799 8.4714C3.01297 8.59642 2.8434 8.66666 2.66659 8.66666ZM4.22659 4.89333C4.05169 4.89259 3.88409 4.82316 3.75992 4.7L3.28659 4.22666C3.17737 4.09913 3.1203 3.93508 3.12678 3.76729C3.13326 3.59951 3.20281 3.44035 3.32154 3.32162C3.44027 3.20289 3.59943 3.13333 3.76722 3.12685C3.935 3.12037 4.09905 3.17744 4.22659 3.28666L4.69992 3.75999C4.82409 3.8849 4.89378 4.05387 4.89378 4.22999C4.89378 4.40612 4.82409 4.57509 4.69992 4.7C4.63763 4.76178 4.56375 4.81067 4.48252 4.84384C4.4013 4.87702 4.31432 4.89384 4.22659 4.89333Z" fill="white"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "0.25" : "1")} data-v-db226333></path></svg></div></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/mobile-menu.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const mobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-db226333"]]);
const _sfc_main$9 = {
  name: "website-header",
  components: {
    miniProfile,
    headerMenu,
    mobileMenu
  },
  data() {
    return {
      activeMenu: false,
      store: themeStore(),
      authStores: authStore()
    };
  },
  methods: {
    toggleTheme() {
      this.store.toggleTheme();
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mobile_menu = resolveComponent("mobile-menu");
  const _component_nuxt_link = __nuxt_component_0$3;
  const _component_header_menu = resolveComponent("header-menu");
  const _component_mini_profile = resolveComponent("mini-profile");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "header",
    "data-theme": $data.store.isDarkTheme === true ? "dark" : "light"
  }, _attrs))} data-v-2201ca9c><div class="${ssrRenderClass("sidemenu " + ($data.activeMenu ? "sidemenu-active" : ""))}" data-v-2201ca9c><div class="sidemenu-top" data-v-2201ca9c><div class="sidemenu-top_title" data-v-2201ca9c> \u041C\u0435\u043D\u044E </div><div class="sidemenu-top_close" data-v-2201ca9c><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2201ca9c><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"${ssrRenderAttr("fill", $data.store.isDarkTheme ? "white" : "black")} data-v-2201ca9c></path></svg></div></div><div data-v-2201ca9c>`);
  _push(ssrRenderComponent(_component_mobile_menu, null, null, _parent));
  _push(`</div></div><div class="header-burger" data-v-2201ca9c><svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2201ca9c><path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H22.5C23.3284 0 24 0.671573 24 1.5C24 2.32843 23.3284 3 22.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"${ssrRenderAttr("fill", $data.store.isDarkTheme === true ? "white" : "black")} data-v-2201ca9c></path><path d="M0 8.5C0 7.67157 0.671573 7 1.5 7H22.5C23.3284 7 24 7.67157 24 8.5C24 9.32843 23.3284 10 22.5 10H1.5C0.671573 10 0 9.32843 0 8.5Z"${ssrRenderAttr("fill", $data.store.isDarkTheme === true ? "white" : "black")} data-v-2201ca9c></path><path d="M0 15.5C0 14.6716 0.671573 14 1.5 14H22.5C23.3284 14 24 14.6716 24 15.5C24 16.3284 23.3284 17 22.5 17H1.5C0.671573 17 0 16.3284 0 15.5Z"${ssrRenderAttr("fill", $data.store.isDarkTheme === true ? "white" : "black")} data-v-2201ca9c></path></svg></div><div class="header-logo"${ssrRenderAttr("data-theme", $data.store.isDarkTheme === true ? "dark" : "light")} data-v-2201ca9c>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2201ca9c${_scopeId}><g clip-path="url(#clip0_419_4502)" data-v-2201ca9c${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.23236 11.423C8.80824 11.9699 8.38925 12.5101 7.77426 12.8668L7.78209 12.8394C7.08919 11.7297 6.25146 11.7414 5.60162 12.8511C5.01051 13.8593 5.15535 15.008 5.96569 15.8559C6.56854 16.4889 7.32407 16.8679 8.15007 17.0946C8.73747 17.2566 9.3307 17.394 9.92442 17.5315C10.3041 17.6194 10.6839 17.7073 11.0626 17.8018C13.0551 18.2981 14.1278 19.8298 13.9829 21.9515C13.9723 21.9515 13.9595 21.9533 13.9469 21.955C13.9221 21.9585 13.8981 21.9618 13.8929 21.9515C13.8337 21.8589 13.7772 21.7644 13.7206 21.6698C13.6386 21.5327 13.5565 21.3955 13.4662 21.2638C12.4797 19.8376 11.3092 18.6224 9.52803 18.2551C8.42018 18.0245 7.3319 18.1105 6.55289 19.103C5.76604 20.1072 5.98135 21.1387 6.53723 22.1586C6.6123 22.2981 6.71904 22.4453 6.82491 22.5913C7.03923 22.8869 7.24995 23.1775 7.18706 23.3894C7.10286 23.6761 6.77272 23.733 6.42753 23.7925C6.22705 23.827 6.02148 23.8624 5.85608 23.9442C4.88524 24.4209 3.9144 24.925 3.80871 26.1519C3.6991 27.4492 4.4468 28.301 5.48027 28.9496C6.44327 29.5553 7.50806 29.821 8.81947 29.8444C8.73436 29.9199 8.65481 29.9904 8.57975 30.0568C8.28195 30.3205 8.05497 30.5215 7.83298 30.7275C7.20272 31.3058 6.63901 31.927 6.34541 32.7554C5.88348 34.0722 6.62335 35.3108 8.01305 35.4828C8.39669 35.5297 8.80773 35.514 9.18354 35.4242C9.65721 35.3108 9.73942 35.4476 9.73942 35.897C9.7355 36.8113 9.85294 37.7139 10.2836 38.5384C11.2074 40.3201 13.3409 40.4842 14.5036 38.8509C15.1103 37.9913 15.3804 37.0028 15.4901 35.9634C15.5372 35.5214 15.5861 35.0813 15.6391 34.6042C15.6653 34.3684 15.6925 34.1236 15.721 33.8651C15.8437 34.0313 15.9468 34.1717 16.0394 34.2978C16.1536 34.4533 16.2518 34.5871 16.3513 34.7208C17.2517 35.9438 18.3478 36.9246 19.8314 37.3661C21.4677 37.8546 22.6187 36.7449 22.235 35.0881C22.1959 34.9174 22.1538 34.7466 22.1085 34.5635C22.0813 34.4533 22.053 34.3386 22.0236 34.2168L22.0556 34.2217C22.8528 34.3448 23.5599 34.4539 24.2746 34.3614C25.4646 34.209 26.0009 33.3728 25.676 32.224C25.5586 31.8098 25.3981 31.3995 25.0966 31.1065C25.0334 31.0446 24.9702 30.9826 24.907 30.9205C23.5462 29.5846 22.179 28.2423 20.1289 27.9884L20.1153 27.9866C19.9083 27.9599 19.6986 27.9329 19.5339 27.7188C19.7724 27.6579 20.0114 27.5997 20.2501 27.5416C21.3902 27.2641 22.523 26.9883 23.5621 26.4293C24.3411 26.0112 25.0262 25.4916 24.9909 24.5108C24.9557 23.4597 24.2041 22.9361 23.3389 22.5454C22.5665 22.1986 21.7417 22.1758 20.858 22.1513C20.8057 22.1498 20.7532 22.1484 20.7005 22.1468C20.7407 22.0331 20.78 21.9263 20.8177 21.8236C20.8902 21.6265 20.957 21.4449 21.0136 21.2599C21.4521 19.8415 20.6966 18.8373 19.2207 18.8568C18.3869 18.8685 17.6979 19.2163 17.0559 19.6969C16.8104 19.8826 16.57 20.0786 16.3212 20.2814C16.1931 20.3858 16.0629 20.492 15.9285 20.5995C15.3491 17.7823 13.795 16.231 11.0782 15.6332C10.8664 15.5866 10.6531 15.5439 10.4395 15.5012C9.61516 15.3364 8.78736 15.1708 8.02871 14.7736C7.63725 14.5704 7.25752 14.3633 7.51981 13.7616C8.01697 14.3633 8.65506 14.965 9.34404 14.3477C10.6672 13.1637 11.9551 11.9056 12.8124 10.3152C13.1334 9.72523 13.1687 9.02581 12.5815 8.57646C12.1649 8.25519 12.2795 8.08017 12.4858 7.76494C12.4928 7.75427 12.4999 7.74345 12.5071 7.73246C13.3448 6.46646 13.8576 5.07152 13.7245 3.54373C13.564 1.69163 12.2135 1.07426 10.6398 2.05111C10.2266 2.30714 9.87537 2.63675 9.50658 2.9828C9.23939 3.23352 8.963 3.49286 8.64723 3.7391C8.6206 3.45517 8.6037 3.18133 8.58727 2.91515C8.55058 2.32049 8.51624 1.76407 8.38103 1.21883C8.24402 0.652259 7.98565 0.195094 7.38671 0.0427055C6.75645 -0.11359 6.23971 0.124761 5.88739 0.644444C5.55073 1.14459 5.24539 1.66818 4.96745 2.20349C4.75111 2.62153 4.55639 3.04937 4.34708 3.50925C4.26097 3.69845 4.17239 3.89308 4.07882 4.09467C4.04397 4.01119 4.01409 3.94357 3.98864 3.88597C3.94261 3.78182 3.91108 3.71047 3.89092 3.63751C3.67561 2.86384 3.32329 2.18005 2.41509 2.14098C1.50297 2.1019 1.11542 2.77788 0.80225 3.50466C0.344234 4.57528 0.128928 5.70843 0.0506348 6.85329C-0.109866 9.19382 0.0193176 11.4679 1.82006 13.2849C2.12149 13.5896 2.43466 13.8788 2.88093 13.9335C3.34286 13.9921 3.74216 13.8397 3.94572 13.4177C4.14928 12.9918 4.03967 12.6089 3.6717 12.2807C2.16064 10.9287 1.63607 8.8109 2.30548 6.63448C2.37057 6.81641 2.42958 6.98551 2.48587 7.14683C2.56499 7.37356 2.63875 7.58494 2.71652 7.79498C2.90834 8.31466 3.25283 8.7054 3.8322 8.71712C4.43897 8.72884 4.85784 8.36546 5.07706 7.81842C5.16975 7.58913 5.2417 7.35052 5.31372 7.11166C5.38162 6.88648 5.44959 6.66107 5.53507 6.44302C5.61248 6.24369 5.67961 6.03924 5.74639 5.8358C5.91264 5.32939 6.0768 4.82934 6.39238 4.43071C6.39238 4.74185 6.39108 5.053 6.38978 5.36429C6.38717 5.9873 6.38455 6.61089 6.39238 7.23622C6.3963 7.73246 6.63118 8.10366 7.11268 8.2834C7.61376 8.47096 8.00522 8.25605 8.3184 7.88875C8.42965 7.75797 8.51748 7.61005 8.60555 7.46171C8.65694 7.37516 8.70841 7.28847 8.76467 7.20496C9.54368 6.04056 10.401 4.94649 11.6185 4.0009C11.4227 6.11089 10.1622 7.44331 8.90168 8.74447C7.71554 9.96749 7.80949 10.5927 9.41059 11.1944C9.35072 11.2704 9.29149 11.3468 9.23236 11.423ZM9.73601 27.7128C9.86861 27.7107 10.004 27.7085 10.1423 27.707L10.1501 27.7031C10.7921 27.7148 11.7512 27.625 12.7103 27.4726C13.5089 27.3475 13.6224 26.9177 13.4501 26.2691C13.0704 24.8312 12.5145 23.4597 11.6298 22.2562C10.98 21.3692 10.201 20.6073 9.0618 20.3728C8.79957 20.3181 8.46278 20.2479 8.28279 20.4705C8.10013 20.6966 8.27203 20.9601 8.41034 21.1721L8.43937 21.2168C8.75256 21.7066 9.07966 22.1894 9.40676 22.6722C9.57029 22.9135 9.73383 23.1549 9.89563 23.3972L9.91611 23.428C10.2308 23.9025 10.5495 24.383 10.1931 24.9757C9.85648 25.5384 9.32017 25.6791 8.70557 25.6126C7.99702 25.5345 7.31978 25.6869 6.66995 25.9487C6.63138 25.9643 6.59065 25.9794 6.54913 25.9947C6.29986 26.0869 6.02179 26.1898 6.00837 26.4879C5.99425 26.7804 6.25073 26.9457 6.48785 27.0986C6.51367 27.1153 6.53926 27.1318 6.56425 27.1483C7.47073 27.7491 8.4797 27.7329 9.73601 27.7128ZM8.48244 33.3962C9.16395 32.0013 11.587 30.3014 13.7203 29.6763C13.8591 30.2057 13.797 30.7272 13.7353 31.2464C13.7099 31.4592 13.6847 31.6716 13.6733 31.884C13.6599 32.1186 13.6476 32.3533 13.6354 32.588C13.5688 33.8618 13.5023 35.1356 13.2544 36.3892C13.2452 36.4358 13.236 36.4848 13.2265 36.5356C13.1267 37.0684 12.992 37.7876 12.4558 37.7412C11.9731 37.6994 11.9348 37.1006 11.9017 36.5828C11.8945 36.4706 11.8876 36.3623 11.8764 36.2642C11.7942 35.5374 11.9156 34.8224 12.1583 34.1269C12.3501 33.5837 12.3736 33.0367 11.8647 32.6381C11.3949 32.2748 10.9095 32.3998 10.4202 32.6577C10.3744 32.6818 10.3285 32.7061 10.2827 32.7304C9.74948 33.013 9.20495 33.3021 8.48244 33.3962ZM23.0959 32.1888C22.2883 32.1631 21.6356 31.8729 20.9893 31.5856L20.8606 31.5284C20.773 31.4895 20.6858 31.4496 20.5987 31.4097C20.3278 31.2857 20.0576 31.162 19.7762 31.0674C19.2321 30.8876 18.7467 31.0283 18.3944 31.4776C18.0146 31.9622 18.1595 32.4428 18.4883 32.8921C18.634 33.093 18.7917 33.2857 18.9496 33.4785C19.3259 33.9384 19.7032 34.3994 19.9211 34.9748C18.3043 34.502 16.4566 31.716 16.026 28.9925C16.798 29.3203 17.611 29.5235 18.4202 29.7258C20.1385 30.1552 21.8397 30.5804 23.0959 32.1849V32.1888ZM18.0949 22.1898C18.2652 21.9426 18.4355 21.6955 18.6057 21.4474V21.4435C16.8716 22.432 15.8811 23.9207 15.6189 25.8862C15.5523 26.3941 15.7285 26.4488 16.1513 26.3433C16.8145 26.1792 17.4794 26.0209 18.1441 25.8626C18.919 25.6781 19.6941 25.4935 20.4652 25.3001L20.5924 25.2685C21.21 25.1158 21.8466 24.9584 22.5791 24.4795C22.4199 24.4575 22.2829 24.4377 22.1607 24.42C21.9134 24.3842 21.7265 24.3571 21.5378 24.3388C20.775 24.263 20.0707 24.4875 19.3662 24.712C19.2356 24.7537 19.1047 24.7954 18.9737 24.8351C18.3787 25.0148 17.8854 24.8351 17.5292 24.3623C17.1769 23.8934 17.263 23.3972 17.584 22.9322C17.7543 22.6841 17.9246 22.4369 18.0949 22.1898Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M32.6361 17.5832L32.5891 25.8942L38.7077 17.5832H42.8729L35.7287 26.9219L43.053 37.9915H38.7508L33.0393 28.8404L32.5852 29.11L32.6322 37.9876H29.1951V17.5832H32.6361Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M44.7167 17.5832H48.1303V34.2326H53.2272V37.9954H44.7167V17.5832Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M65.3078 17.5832V21.1038H58.7547V25.3003H65.0573V28.7662H58.7547V34.4788H65.3548V37.9993H55.345V17.5832H65.3117H65.3078Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M78.5474 17.5833V21.1038H71.9942V25.3004H78.2968V28.7662H71.9942V34.4788H78.5943V37.9994H68.5846V17.5833H78.5513H78.5474Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M80.1405 17.5832H83.7811L87.7388 30.8215L91.6535 17.5832H93.1763L96.9539 30.8215L101.139 17.5832H104.803L97.9091 37.9954H95.9988L92.3816 25.3277L88.6744 37.9954H86.7876L80.1444 17.5832H80.1405Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M106.576 17.5832H109.99V37.9954H106.576V17.5832Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M112.311 33.9865L114.656 31.9038C115.094 32.9158 115.619 33.6582 116.226 34.1388C116.832 34.6155 117.506 34.8578 118.249 34.8578C118.993 34.8578 119.537 34.6273 119.933 34.1662C120.328 33.7051 120.524 33.0956 120.524 32.3375C120.524 31.9585 120.477 31.6186 120.387 31.3216C120.297 31.0246 120.136 30.7394 119.909 30.4698C119.682 30.2002 119.377 29.9267 119.001 29.6571C118.621 29.3874 118.144 29.1061 117.568 28.817C116.871 28.4575 116.245 28.0902 115.693 27.719C115.141 27.3478 114.671 26.9336 114.296 26.4725C113.916 26.0115 113.626 25.4879 113.419 24.9018C113.215 24.3156 113.109 23.6358 113.109 22.8582C113.109 22.0806 113.243 21.2991 113.509 20.6114C113.775 19.9237 114.147 19.3298 114.624 18.8258C115.102 18.3217 115.67 17.9232 116.331 17.634C116.993 17.3449 117.709 17.2003 118.48 17.2003C119.678 17.2003 120.708 17.4855 121.565 18.0521C122.422 18.6187 123.123 19.3923 123.671 20.3653L121.487 22.6941C121.138 22.0611 120.731 21.5766 120.269 21.2327C119.807 20.8889 119.255 20.7169 118.621 20.7169C117.987 20.7169 117.521 20.9123 117.142 21.2991C116.762 21.686 116.574 22.1627 116.574 22.7214C116.574 22.991 116.621 23.245 116.723 23.4795C116.821 23.7139 116.989 23.9484 117.224 24.1828C117.459 24.4172 117.772 24.6517 118.167 24.8861C118.563 25.1206 119.048 25.3902 119.623 25.6989C120.383 26.0779 121.037 26.4803 121.593 26.9023C122.145 27.3282 122.603 27.7971 122.959 28.309C123.315 28.8248 123.581 29.407 123.753 30.0556C123.926 30.7042 124.016 31.4466 124.016 32.275C124.016 33.1972 123.875 34.0294 123.593 34.7797C123.311 35.5299 122.924 36.1707 122.422 36.7021C121.921 37.2335 121.33 37.6438 120.649 37.9329C119.968 38.2221 119.224 38.3666 118.418 38.3666C117.674 38.3666 116.981 38.2572 116.335 38.0423C115.689 37.8274 115.114 37.5226 114.605 37.1358C114.096 36.749 113.65 36.2879 113.262 35.7565C112.875 35.2251 112.561 34.6351 112.319 33.9825L112.311 33.9865Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path><path d="M130.056 17.5832V25.2964H136.609V17.5832H140V37.9954H136.609V29.0358H130.056V37.9954H126.643V17.5832H130.056Z" fill="#C74141" data-v-2201ca9c${_scopeId}></path></g><defs data-v-2201ca9c${_scopeId}><clipPath id="clip0_419_4502" data-v-2201ca9c${_scopeId}><rect width="140" height="40" fill="white" data-v-2201ca9c${_scopeId}></rect></clipPath></defs></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "140",
            height: "40",
            viewBox: "0 0 140 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("g", { "clip-path": "url(#clip0_419_4502)" }, [
              createVNode("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M9.23236 11.423C8.80824 11.9699 8.38925 12.5101 7.77426 12.8668L7.78209 12.8394C7.08919 11.7297 6.25146 11.7414 5.60162 12.8511C5.01051 13.8593 5.15535 15.008 5.96569 15.8559C6.56854 16.4889 7.32407 16.8679 8.15007 17.0946C8.73747 17.2566 9.3307 17.394 9.92442 17.5315C10.3041 17.6194 10.6839 17.7073 11.0626 17.8018C13.0551 18.2981 14.1278 19.8298 13.9829 21.9515C13.9723 21.9515 13.9595 21.9533 13.9469 21.955C13.9221 21.9585 13.8981 21.9618 13.8929 21.9515C13.8337 21.8589 13.7772 21.7644 13.7206 21.6698C13.6386 21.5327 13.5565 21.3955 13.4662 21.2638C12.4797 19.8376 11.3092 18.6224 9.52803 18.2551C8.42018 18.0245 7.3319 18.1105 6.55289 19.103C5.76604 20.1072 5.98135 21.1387 6.53723 22.1586C6.6123 22.2981 6.71904 22.4453 6.82491 22.5913C7.03923 22.8869 7.24995 23.1775 7.18706 23.3894C7.10286 23.6761 6.77272 23.733 6.42753 23.7925C6.22705 23.827 6.02148 23.8624 5.85608 23.9442C4.88524 24.4209 3.9144 24.925 3.80871 26.1519C3.6991 27.4492 4.4468 28.301 5.48027 28.9496C6.44327 29.5553 7.50806 29.821 8.81947 29.8444C8.73436 29.9199 8.65481 29.9904 8.57975 30.0568C8.28195 30.3205 8.05497 30.5215 7.83298 30.7275C7.20272 31.3058 6.63901 31.927 6.34541 32.7554C5.88348 34.0722 6.62335 35.3108 8.01305 35.4828C8.39669 35.5297 8.80773 35.514 9.18354 35.4242C9.65721 35.3108 9.73942 35.4476 9.73942 35.897C9.7355 36.8113 9.85294 37.7139 10.2836 38.5384C11.2074 40.3201 13.3409 40.4842 14.5036 38.8509C15.1103 37.9913 15.3804 37.0028 15.4901 35.9634C15.5372 35.5214 15.5861 35.0813 15.6391 34.6042C15.6653 34.3684 15.6925 34.1236 15.721 33.8651C15.8437 34.0313 15.9468 34.1717 16.0394 34.2978C16.1536 34.4533 16.2518 34.5871 16.3513 34.7208C17.2517 35.9438 18.3478 36.9246 19.8314 37.3661C21.4677 37.8546 22.6187 36.7449 22.235 35.0881C22.1959 34.9174 22.1538 34.7466 22.1085 34.5635C22.0813 34.4533 22.053 34.3386 22.0236 34.2168L22.0556 34.2217C22.8528 34.3448 23.5599 34.4539 24.2746 34.3614C25.4646 34.209 26.0009 33.3728 25.676 32.224C25.5586 31.8098 25.3981 31.3995 25.0966 31.1065C25.0334 31.0446 24.9702 30.9826 24.907 30.9205C23.5462 29.5846 22.179 28.2423 20.1289 27.9884L20.1153 27.9866C19.9083 27.9599 19.6986 27.9329 19.5339 27.7188C19.7724 27.6579 20.0114 27.5997 20.2501 27.5416C21.3902 27.2641 22.523 26.9883 23.5621 26.4293C24.3411 26.0112 25.0262 25.4916 24.9909 24.5108C24.9557 23.4597 24.2041 22.9361 23.3389 22.5454C22.5665 22.1986 21.7417 22.1758 20.858 22.1513C20.8057 22.1498 20.7532 22.1484 20.7005 22.1468C20.7407 22.0331 20.78 21.9263 20.8177 21.8236C20.8902 21.6265 20.957 21.4449 21.0136 21.2599C21.4521 19.8415 20.6966 18.8373 19.2207 18.8568C18.3869 18.8685 17.6979 19.2163 17.0559 19.6969C16.8104 19.8826 16.57 20.0786 16.3212 20.2814C16.1931 20.3858 16.0629 20.492 15.9285 20.5995C15.3491 17.7823 13.795 16.231 11.0782 15.6332C10.8664 15.5866 10.6531 15.5439 10.4395 15.5012C9.61516 15.3364 8.78736 15.1708 8.02871 14.7736C7.63725 14.5704 7.25752 14.3633 7.51981 13.7616C8.01697 14.3633 8.65506 14.965 9.34404 14.3477C10.6672 13.1637 11.9551 11.9056 12.8124 10.3152C13.1334 9.72523 13.1687 9.02581 12.5815 8.57646C12.1649 8.25519 12.2795 8.08017 12.4858 7.76494C12.4928 7.75427 12.4999 7.74345 12.5071 7.73246C13.3448 6.46646 13.8576 5.07152 13.7245 3.54373C13.564 1.69163 12.2135 1.07426 10.6398 2.05111C10.2266 2.30714 9.87537 2.63675 9.50658 2.9828C9.23939 3.23352 8.963 3.49286 8.64723 3.7391C8.6206 3.45517 8.6037 3.18133 8.58727 2.91515C8.55058 2.32049 8.51624 1.76407 8.38103 1.21883C8.24402 0.652259 7.98565 0.195094 7.38671 0.0427055C6.75645 -0.11359 6.23971 0.124761 5.88739 0.644444C5.55073 1.14459 5.24539 1.66818 4.96745 2.20349C4.75111 2.62153 4.55639 3.04937 4.34708 3.50925C4.26097 3.69845 4.17239 3.89308 4.07882 4.09467C4.04397 4.01119 4.01409 3.94357 3.98864 3.88597C3.94261 3.78182 3.91108 3.71047 3.89092 3.63751C3.67561 2.86384 3.32329 2.18005 2.41509 2.14098C1.50297 2.1019 1.11542 2.77788 0.80225 3.50466C0.344234 4.57528 0.128928 5.70843 0.0506348 6.85329C-0.109866 9.19382 0.0193176 11.4679 1.82006 13.2849C2.12149 13.5896 2.43466 13.8788 2.88093 13.9335C3.34286 13.9921 3.74216 13.8397 3.94572 13.4177C4.14928 12.9918 4.03967 12.6089 3.6717 12.2807C2.16064 10.9287 1.63607 8.8109 2.30548 6.63448C2.37057 6.81641 2.42958 6.98551 2.48587 7.14683C2.56499 7.37356 2.63875 7.58494 2.71652 7.79498C2.90834 8.31466 3.25283 8.7054 3.8322 8.71712C4.43897 8.72884 4.85784 8.36546 5.07706 7.81842C5.16975 7.58913 5.2417 7.35052 5.31372 7.11166C5.38162 6.88648 5.44959 6.66107 5.53507 6.44302C5.61248 6.24369 5.67961 6.03924 5.74639 5.8358C5.91264 5.32939 6.0768 4.82934 6.39238 4.43071C6.39238 4.74185 6.39108 5.053 6.38978 5.36429C6.38717 5.9873 6.38455 6.61089 6.39238 7.23622C6.3963 7.73246 6.63118 8.10366 7.11268 8.2834C7.61376 8.47096 8.00522 8.25605 8.3184 7.88875C8.42965 7.75797 8.51748 7.61005 8.60555 7.46171C8.65694 7.37516 8.70841 7.28847 8.76467 7.20496C9.54368 6.04056 10.401 4.94649 11.6185 4.0009C11.4227 6.11089 10.1622 7.44331 8.90168 8.74447C7.71554 9.96749 7.80949 10.5927 9.41059 11.1944C9.35072 11.2704 9.29149 11.3468 9.23236 11.423ZM9.73601 27.7128C9.86861 27.7107 10.004 27.7085 10.1423 27.707L10.1501 27.7031C10.7921 27.7148 11.7512 27.625 12.7103 27.4726C13.5089 27.3475 13.6224 26.9177 13.4501 26.2691C13.0704 24.8312 12.5145 23.4597 11.6298 22.2562C10.98 21.3692 10.201 20.6073 9.0618 20.3728C8.79957 20.3181 8.46278 20.2479 8.28279 20.4705C8.10013 20.6966 8.27203 20.9601 8.41034 21.1721L8.43937 21.2168C8.75256 21.7066 9.07966 22.1894 9.40676 22.6722C9.57029 22.9135 9.73383 23.1549 9.89563 23.3972L9.91611 23.428C10.2308 23.9025 10.5495 24.383 10.1931 24.9757C9.85648 25.5384 9.32017 25.6791 8.70557 25.6126C7.99702 25.5345 7.31978 25.6869 6.66995 25.9487C6.63138 25.9643 6.59065 25.9794 6.54913 25.9947C6.29986 26.0869 6.02179 26.1898 6.00837 26.4879C5.99425 26.7804 6.25073 26.9457 6.48785 27.0986C6.51367 27.1153 6.53926 27.1318 6.56425 27.1483C7.47073 27.7491 8.4797 27.7329 9.73601 27.7128ZM8.48244 33.3962C9.16395 32.0013 11.587 30.3014 13.7203 29.6763C13.8591 30.2057 13.797 30.7272 13.7353 31.2464C13.7099 31.4592 13.6847 31.6716 13.6733 31.884C13.6599 32.1186 13.6476 32.3533 13.6354 32.588C13.5688 33.8618 13.5023 35.1356 13.2544 36.3892C13.2452 36.4358 13.236 36.4848 13.2265 36.5356C13.1267 37.0684 12.992 37.7876 12.4558 37.7412C11.9731 37.6994 11.9348 37.1006 11.9017 36.5828C11.8945 36.4706 11.8876 36.3623 11.8764 36.2642C11.7942 35.5374 11.9156 34.8224 12.1583 34.1269C12.3501 33.5837 12.3736 33.0367 11.8647 32.6381C11.3949 32.2748 10.9095 32.3998 10.4202 32.6577C10.3744 32.6818 10.3285 32.7061 10.2827 32.7304C9.74948 33.013 9.20495 33.3021 8.48244 33.3962ZM23.0959 32.1888C22.2883 32.1631 21.6356 31.8729 20.9893 31.5856L20.8606 31.5284C20.773 31.4895 20.6858 31.4496 20.5987 31.4097C20.3278 31.2857 20.0576 31.162 19.7762 31.0674C19.2321 30.8876 18.7467 31.0283 18.3944 31.4776C18.0146 31.9622 18.1595 32.4428 18.4883 32.8921C18.634 33.093 18.7917 33.2857 18.9496 33.4785C19.3259 33.9384 19.7032 34.3994 19.9211 34.9748C18.3043 34.502 16.4566 31.716 16.026 28.9925C16.798 29.3203 17.611 29.5235 18.4202 29.7258C20.1385 30.1552 21.8397 30.5804 23.0959 32.1849V32.1888ZM18.0949 22.1898C18.2652 21.9426 18.4355 21.6955 18.6057 21.4474V21.4435C16.8716 22.432 15.8811 23.9207 15.6189 25.8862C15.5523 26.3941 15.7285 26.4488 16.1513 26.3433C16.8145 26.1792 17.4794 26.0209 18.1441 25.8626C18.919 25.6781 19.6941 25.4935 20.4652 25.3001L20.5924 25.2685C21.21 25.1158 21.8466 24.9584 22.5791 24.4795C22.4199 24.4575 22.2829 24.4377 22.1607 24.42C21.9134 24.3842 21.7265 24.3571 21.5378 24.3388C20.775 24.263 20.0707 24.4875 19.3662 24.712C19.2356 24.7537 19.1047 24.7954 18.9737 24.8351C18.3787 25.0148 17.8854 24.8351 17.5292 24.3623C17.1769 23.8934 17.263 23.3972 17.584 22.9322C17.7543 22.6841 17.9246 22.4369 18.0949 22.1898Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M32.6361 17.5832L32.5891 25.8942L38.7077 17.5832H42.8729L35.7287 26.9219L43.053 37.9915H38.7508L33.0393 28.8404L32.5852 29.11L32.6322 37.9876H29.1951V17.5832H32.6361Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M44.7167 17.5832H48.1303V34.2326H53.2272V37.9954H44.7167V17.5832Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M65.3078 17.5832V21.1038H58.7547V25.3003H65.0573V28.7662H58.7547V34.4788H65.3548V37.9993H55.345V17.5832H65.3117H65.3078Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M78.5474 17.5833V21.1038H71.9942V25.3004H78.2968V28.7662H71.9942V34.4788H78.5943V37.9994H68.5846V17.5833H78.5513H78.5474Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M80.1405 17.5832H83.7811L87.7388 30.8215L91.6535 17.5832H93.1763L96.9539 30.8215L101.139 17.5832H104.803L97.9091 37.9954H95.9988L92.3816 25.3277L88.6744 37.9954H86.7876L80.1444 17.5832H80.1405Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M106.576 17.5832H109.99V37.9954H106.576V17.5832Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M112.311 33.9865L114.656 31.9038C115.094 32.9158 115.619 33.6582 116.226 34.1388C116.832 34.6155 117.506 34.8578 118.249 34.8578C118.993 34.8578 119.537 34.6273 119.933 34.1662C120.328 33.7051 120.524 33.0956 120.524 32.3375C120.524 31.9585 120.477 31.6186 120.387 31.3216C120.297 31.0246 120.136 30.7394 119.909 30.4698C119.682 30.2002 119.377 29.9267 119.001 29.6571C118.621 29.3874 118.144 29.1061 117.568 28.817C116.871 28.4575 116.245 28.0902 115.693 27.719C115.141 27.3478 114.671 26.9336 114.296 26.4725C113.916 26.0115 113.626 25.4879 113.419 24.9018C113.215 24.3156 113.109 23.6358 113.109 22.8582C113.109 22.0806 113.243 21.2991 113.509 20.6114C113.775 19.9237 114.147 19.3298 114.624 18.8258C115.102 18.3217 115.67 17.9232 116.331 17.634C116.993 17.3449 117.709 17.2003 118.48 17.2003C119.678 17.2003 120.708 17.4855 121.565 18.0521C122.422 18.6187 123.123 19.3923 123.671 20.3653L121.487 22.6941C121.138 22.0611 120.731 21.5766 120.269 21.2327C119.807 20.8889 119.255 20.7169 118.621 20.7169C117.987 20.7169 117.521 20.9123 117.142 21.2991C116.762 21.686 116.574 22.1627 116.574 22.7214C116.574 22.991 116.621 23.245 116.723 23.4795C116.821 23.7139 116.989 23.9484 117.224 24.1828C117.459 24.4172 117.772 24.6517 118.167 24.8861C118.563 25.1206 119.048 25.3902 119.623 25.6989C120.383 26.0779 121.037 26.4803 121.593 26.9023C122.145 27.3282 122.603 27.7971 122.959 28.309C123.315 28.8248 123.581 29.407 123.753 30.0556C123.926 30.7042 124.016 31.4466 124.016 32.275C124.016 33.1972 123.875 34.0294 123.593 34.7797C123.311 35.5299 122.924 36.1707 122.422 36.7021C121.921 37.2335 121.33 37.6438 120.649 37.9329C119.968 38.2221 119.224 38.3666 118.418 38.3666C117.674 38.3666 116.981 38.2572 116.335 38.0423C115.689 37.8274 115.114 37.5226 114.605 37.1358C114.096 36.749 113.65 36.2879 113.262 35.7565C112.875 35.2251 112.561 34.6351 112.319 33.9825L112.311 33.9865Z",
                fill: "#C74141"
              }),
              createVNode("path", {
                d: "M130.056 17.5832V25.2964H136.609V17.5832H140V37.9954H136.609V29.0358H130.056V37.9954H126.643V17.5832H130.056Z",
                fill: "#C74141"
              })
            ]),
            createVNode("defs", null, [
              createVNode("clipPath", { id: "clip0_419_4502" }, [
                createVNode("rect", {
                  width: "140",
                  height: "40",
                  fill: "white"
                })
              ])
            ])
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_header_menu, null, null, _parent));
  _push(`<div class="header-profile" data-v-2201ca9c><div class="theme" data-v-2201ca9c><div class="${ssrRenderClass("theme-active " + ($data.store.isDarkTheme === true ? "theme-active_dark" : ""))}" data-v-2201ca9c></div><div class="theme-item" data-v-2201ca9c><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2201ca9c><path d="M13.8823 9.48774C13.8287 9.43435 13.7612 9.39722 13.6874 9.38066C13.6137 9.36409 13.5367 9.36877 13.4655 9.39415C12.5085 9.73534 11.4744 9.79799 10.4833 9.57482C9.49212 9.35165 8.58464 8.85182 7.86627 8.1334C7.1479 7.41499 6.64812 6.50748 6.42501 5.51632C6.2019 4.52516 6.2646 3.49104 6.60585 2.5341C6.63121 2.46288 6.63586 2.38593 6.61926 2.31217C6.60267 2.23841 6.56551 2.17087 6.51209 2.11737C6.45868 2.06387 6.39119 2.0266 6.31746 2.00989C6.24373 1.99318 6.16677 1.99771 6.09551 2.02296C5.23276 2.32762 4.44982 2.82292 3.80495 3.472C2.64893 4.6289 1.99969 6.19756 2 7.83304C2.00031 9.46852 2.65014 11.0369 3.8066 12.1934C4.96307 13.3499 6.53148 13.9997 8.16696 14C9.80245 14.0003 11.3711 13.3511 12.528 12.195C13.1771 11.5501 13.6724 10.767 13.977 9.9041C14.0022 9.83283 14.0066 9.7559 13.9899 9.68221C13.9731 9.60852 13.9358 9.5411 13.8823 9.48774Z" fill="black"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "1" : "0.25")} data-v-2201ca9c></path></svg></div><div class="theme-item" data-v-2201ca9c><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2201ca9c><path d="M8 12C7.20888 12 6.43552 11.7654 5.77772 11.3259C5.11992 10.8864 4.60723 10.2616 4.30448 9.53074C4.00173 8.79983 3.92252 7.99556 4.07686 7.21964C4.2312 6.44372 4.61216 5.73098 5.17157 5.17157C5.73098 4.61216 6.44372 4.2312 7.21964 4.07686C7.99556 3.92252 8.79983 4.00173 9.53074 4.30448C10.2616 4.60723 10.8864 5.11992 11.3259 5.77772C11.7654 6.43552 12 7.20888 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12ZM8 5.33334C7.47259 5.33334 6.95701 5.48973 6.51848 5.78275C6.07995 6.07577 5.73816 6.49224 5.53632 6.97951C5.33449 7.46678 5.28168 8.00296 5.38457 8.52024C5.48747 9.03753 5.74144 9.51268 6.11438 9.88562C6.48732 10.2586 6.96248 10.5125 7.47976 10.6154C7.99704 10.7183 8.53322 10.6655 9.02049 10.4637C9.50776 10.2618 9.92424 9.92005 10.2173 9.48152C10.5103 9.04299 10.6667 8.52742 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61429 8.70725 5.33334 8 5.33334Z" fill="white"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "0.25" : "1")} data-v-2201ca9c></path><path d="M7.99992 10C7.82311 10 7.65354 9.92976 7.52851 9.80473C7.40349 9.67971 7.33325 9.51014 7.33325 9.33333V6.66666C7.33325 6.48985 7.40349 6.32028 7.52851 6.19526C7.65354 6.07023 7.82311 6 7.99992 6C8.53035 6 9.03906 6.21071 9.41413 6.58578C9.78921 6.96085 9.99992 7.46956 9.99992 8C9.99992 8.53043 9.78921 9.03914 9.41413 9.41421C9.03906 9.78928 8.53035 10 7.99992 10ZM7.99992 3.33333C7.82311 3.33333 7.65354 3.26309 7.52851 3.13807C7.40349 3.01304 7.33325 2.84347 7.33325 2.66666V1.99999C7.33325 1.82318 7.40349 1.65361 7.52851 1.52859C7.65354 1.40357 7.82311 1.33333 7.99992 1.33333C8.17673 1.33333 8.3463 1.40357 8.47132 1.52859C8.59635 1.65361 8.66659 1.82318 8.66659 1.99999V2.66666C8.66659 2.84347 8.59635 3.01304 8.47132 3.13807C8.3463 3.26309 8.17673 3.33333 7.99992 3.33333ZM11.7733 4.89333C11.6076 4.88583 11.4508 4.8169 11.3333 4.7C11.2091 4.57509 11.1394 4.40612 11.1394 4.22999C11.1394 4.05387 11.2091 3.8849 11.3333 3.75999L11.8066 3.28666C11.8664 3.21687 11.9399 3.16019 12.0226 3.12018C12.1053 3.08016 12.1954 3.05768 12.2872 3.05413C12.379 3.05058 12.4706 3.06605 12.5561 3.09957C12.6417 3.13309 12.7194 3.18392 12.7844 3.24889C12.8493 3.31386 12.9002 3.39156 12.9337 3.47711C12.9672 3.56266 12.9827 3.65422 12.9791 3.74603C12.9756 3.83784 12.9531 3.92793 12.9131 4.01064C12.8731 4.09335 12.8164 4.1669 12.7466 4.22666L12.2733 4.7C12.2078 4.76507 12.1296 4.81585 12.0435 4.84913C11.9575 4.88241 11.8654 4.89746 11.7733 4.89333ZM13.9999 8.66666H13.3333C13.1564 8.66666 12.9869 8.59642 12.8618 8.4714C12.7368 8.34638 12.6666 8.17681 12.6666 8C12.6666 7.82318 12.7368 7.65361 12.8618 7.52859C12.9869 7.40357 13.1564 7.33333 13.3333 7.33333H13.9999C14.1767 7.33333 14.3463 7.40357 14.4713 7.52859C14.5963 7.65361 14.6666 7.82318 14.6666 8C14.6666 8.17681 14.5963 8.34638 14.4713 8.4714C14.3463 8.59642 14.1767 8.66666 13.9999 8.66666ZM12.2399 12.9067C12.065 12.9059 11.8974 12.8365 11.7733 12.7133L11.3333 12.24C11.2628 12.1133 11.2355 11.9672 11.2556 11.8236C11.2757 11.6801 11.342 11.547 11.4445 11.4445C11.5469 11.342 11.68 11.2758 11.8236 11.2557C11.9671 11.2356 12.1133 11.2629 12.2399 11.3333L12.7133 11.8067C12.8374 11.9316 12.9071 12.1005 12.9071 12.2767C12.9071 12.4528 12.8374 12.6218 12.7133 12.7467C12.5822 12.8593 12.4125 12.9167 12.2399 12.9067ZM7.99992 14.6667C7.82311 14.6667 7.65354 14.5964 7.52851 14.4714C7.40349 14.3464 7.33325 14.1768 7.33325 14V13.3333C7.33325 13.1565 7.40349 12.9869 7.52851 12.8619C7.65354 12.7369 7.82311 12.6667 7.99992 12.6667C8.17673 12.6667 8.3463 12.7369 8.47132 12.8619C8.59635 12.9869 8.66659 13.1565 8.66659 13.3333V14C8.66659 14.1768 8.59635 14.3464 8.47132 14.4714C8.3463 14.5964 8.17673 14.6667 7.99992 14.6667ZM3.75992 12.9067C3.67218 12.9072 3.58521 12.8904 3.50398 12.8572C3.42276 12.824 3.34888 12.7751 3.28659 12.7133C3.16242 12.5884 3.09272 12.4195 3.09272 12.2433C3.09272 12.0672 3.16242 11.8982 3.28659 11.7733L3.75992 11.3333C3.88745 11.2241 4.0515 11.167 4.21929 11.1735C4.38707 11.18 4.54623 11.2496 4.66496 11.3683C4.78369 11.487 4.85325 11.6462 4.85973 11.814C4.86621 11.9817 4.80914 12.1458 4.69992 12.2733L4.22659 12.7467C4.09721 12.8577 3.93021 12.915 3.75992 12.9067ZM2.66659 8.66666H1.99992C1.82311 8.66666 1.65354 8.59642 1.52851 8.4714C1.40349 8.34638 1.33325 8.17681 1.33325 8C1.33325 7.82318 1.40349 7.65361 1.52851 7.52859C1.65354 7.40357 1.82311 7.33333 1.99992 7.33333H2.66659C2.8434 7.33333 3.01297 7.40357 3.13799 7.52859C3.26301 7.65361 3.33325 7.82318 3.33325 8C3.33325 8.17681 3.26301 8.34638 3.13799 8.4714C3.01297 8.59642 2.8434 8.66666 2.66659 8.66666ZM4.22659 4.89333C4.05169 4.89259 3.88409 4.82316 3.75992 4.7L3.28659 4.22666C3.17737 4.09913 3.1203 3.93508 3.12678 3.76729C3.13326 3.59951 3.20281 3.44035 3.32154 3.32162C3.44027 3.20289 3.59943 3.13333 3.76722 3.12685C3.935 3.12037 4.09905 3.17744 4.22659 3.28666L4.69992 3.75999C4.82409 3.8849 4.89378 4.05387 4.89378 4.22999C4.89378 4.40612 4.82409 4.57509 4.69992 4.7C4.63763 4.76178 4.56375 4.81067 4.48252 4.84384C4.4013 4.87702 4.31432 4.89384 4.22659 4.89333Z" fill="white"${ssrRenderAttr("fill-opacity", $data.store.isDarkTheme === true ? "0.25" : "1")} data-v-2201ca9c></path></svg></div></div>`);
  _push(ssrRenderComponent(_component_mini_profile, {
    logged: !!$data.authStores.user
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/website-header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const websiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-2201ca9c"]]);
const _sfc_main$8 = {
  name: "website-footer"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-8b63f85e><div class="foot-logo" data-v-8b63f85e><svg width="238" height="68" viewBox="0 0 238 68" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8b63f85e><g clip-path="url(#clip0_421_5136)" data-v-8b63f85e><path fill-rule="evenodd" clip-rule="evenodd" d="M15.695 19.4194C14.974 20.349 14.2617 21.2674 13.2162 21.8737L13.2296 21.8272C12.0516 19.9408 10.6275 19.9607 9.52276 21.8472C8.51787 23.561 8.7641 25.5139 10.1417 26.9553C11.1665 28.0314 12.4509 28.6757 13.8551 29.061C14.8537 29.3365 15.8622 29.57 16.8715 29.8037C17.5169 29.9532 18.1627 30.1027 18.8064 30.2633C22.1937 31.1069 24.0172 33.7108 23.7709 37.3177C23.753 37.3177 23.7311 37.3208 23.7097 37.3238C23.6676 37.3296 23.6267 37.3353 23.6179 37.3177C23.5173 37.1604 23.4212 36.9997 23.325 36.8389C23.1856 36.6059 23.046 36.3726 22.8925 36.1486C21.2155 33.7241 19.2256 31.6583 16.1976 31.0339C14.3143 30.6419 12.4642 30.7881 11.1399 32.4753C9.80227 34.1824 10.1683 35.9361 11.1133 37.6698C11.2409 37.907 11.4224 38.1573 11.6023 38.4055C11.9667 38.908 12.3249 39.402 12.218 39.7622C12.0749 40.2496 11.5136 40.3463 10.9268 40.4474C10.586 40.5061 10.2365 40.5663 9.95533 40.7054C8.30491 41.5158 6.65449 42.3727 6.4748 44.4585C6.28847 46.6638 7.55956 48.1119 9.31646 49.2146C10.9536 50.2442 12.7637 50.6959 14.9931 50.7357C14.8484 50.8641 14.7132 50.9838 14.5856 51.0968C14.0793 51.5451 13.6934 51.8868 13.3161 52.2369C12.2446 53.22 11.2863 54.2762 10.7872 55.6844C10.0019 57.923 11.2597 60.0287 13.6222 60.3209C14.2744 60.4007 14.9731 60.3741 15.612 60.2213C16.4173 60.0287 16.557 60.2612 16.557 61.0251C16.5504 62.5794 16.75 64.1138 17.482 65.5154C19.0526 68.5444 22.6795 68.8234 24.6561 66.0468C25.6876 64.5855 26.1468 62.9049 26.3331 61.138C26.4133 60.3867 26.4964 59.6384 26.5865 58.8273C26.6311 58.4265 26.6773 58.0103 26.7257 57.5709C26.9343 57.8535 27.1096 58.0921 27.267 58.3065C27.4611 58.5708 27.6281 58.7982 27.7972 59.0256C29.3278 61.1048 31.1912 62.7721 33.7134 63.5227C36.4952 64.353 38.4517 62.4665 37.7995 59.65C37.733 59.3597 37.6614 59.0694 37.5845 58.7581C37.5383 58.5708 37.4902 58.3759 37.4402 58.1687L37.4945 58.1771C38.8498 58.3863 40.0518 58.5718 41.2667 58.4145C43.2898 58.1555 44.2016 56.734 43.6492 54.781C43.4495 54.0769 43.1767 53.3795 42.6643 52.8813C42.5568 52.776 42.4494 52.6706 42.342 52.5652C40.0285 50.294 37.7043 48.0121 34.2192 47.5805L34.1961 47.5775C33.8442 47.5321 33.4877 47.4862 33.2076 47.1222C33.6131 47.0187 34.0194 46.9198 34.4251 46.821C36.3633 46.3492 38.2891 45.8804 40.0555 44.9301C41.3799 44.2194 42.5445 43.3359 42.4846 41.6686C42.4247 39.8818 41.147 38.9916 39.6762 38.3274C38.363 37.7379 36.9609 37.699 35.4585 37.6574C35.3696 37.6549 35.2804 37.6524 35.1908 37.6499C35.2592 37.4565 35.326 37.2749 35.3901 37.1004C35.5134 36.7653 35.6269 36.4565 35.7232 36.142C36.4685 33.7307 35.1841 32.0236 32.6752 32.0568C31.2577 32.0767 30.0865 32.6679 28.9951 33.485C28.5777 33.8007 28.169 34.1338 27.746 34.4786C27.5283 34.656 27.3068 34.8366 27.0784 35.0194C26.0935 30.2301 23.4515 27.593 18.833 26.5767C18.4729 26.4974 18.1102 26.4249 17.7472 26.3523C16.3458 26.072 14.9385 25.7906 13.6488 25.1153C12.9833 24.7699 12.3378 24.4179 12.7837 23.3949C13.6288 24.4179 14.7136 25.4408 15.8849 24.3913C18.1342 22.3786 20.3237 20.2397 21.7811 17.5361C22.3268 16.5331 22.3867 15.3441 21.3885 14.5802C20.6804 14.0341 20.8752 13.7365 21.2259 13.2006C21.2378 13.1825 21.2499 13.1641 21.262 13.1454C22.6862 10.9932 23.558 8.62181 23.3317 6.02457C23.0589 2.87599 20.7629 1.82646 18.0876 3.48711C17.3853 3.92237 16.7881 4.48271 16.1612 5.07099C15.707 5.49721 15.2371 5.93809 14.7003 6.3567C14.655 5.87402 14.6263 5.40849 14.5984 4.95598C14.536 3.94506 14.4776 2.99914 14.2478 2.07224C14.0148 1.10907 13.5756 0.331885 12.5574 0.0728252C11.486 -0.192878 10.6075 0.212319 10.0086 1.09578C9.43625 1.94603 8.91716 2.83613 8.44466 3.74617C8.07688 4.45683 7.74585 5.18416 7.39003 5.96596C7.24365 6.2876 7.09306 6.61846 6.93399 6.96117C6.87475 6.81925 6.82395 6.70429 6.78068 6.60638C6.70244 6.42932 6.64884 6.30803 6.61456 6.18399C6.24854 4.86876 5.64959 3.70631 4.10565 3.63989C2.55506 3.57346 1.89622 4.72263 1.36382 5.95814C0.585198 7.77821 0.219178 9.70455 0.0860792 11.6508C-0.186773 15.6297 0.03284 19.4957 3.0941 22.5845C3.60653 23.1026 4.13893 23.5942 4.89759 23.6872C5.68287 23.7868 6.36167 23.5277 6.70773 22.8103C7.05378 22.0863 6.86745 21.4353 6.24188 20.8774C3.67308 18.579 2.78132 14.9788 3.91931 11.2788C4.02998 11.5881 4.13029 11.8756 4.22599 12.1498C4.36049 12.5353 4.48588 12.8946 4.61808 13.2517C4.94417 14.1351 5.52981 14.7994 6.51473 14.8193C7.54625 14.8393 8.25832 14.2215 8.631 13.2915C8.78858 12.9017 8.91089 12.4961 9.03333 12.09C9.14876 11.7072 9.26431 11.324 9.40963 10.9534C9.54122 10.6145 9.65533 10.2669 9.76886 9.92109C10.0515 9.06018 10.3306 8.2101 10.8671 7.53243C10.8671 8.06138 10.8648 8.59033 10.8626 9.11952C10.8582 10.1786 10.8537 11.2387 10.8671 12.3018C10.8737 13.1454 11.273 13.7765 12.0916 14.082C12.9434 14.4009 13.6089 14.0355 14.1413 13.4111C14.3304 13.1888 14.4797 12.9373 14.6294 12.6851C14.7168 12.538 14.8043 12.3906 14.8999 12.2487C16.2243 10.2692 17.6817 8.40925 19.7514 6.80175C19.4186 10.3887 17.2757 12.6539 15.1329 14.8658C13.1164 16.945 13.2761 18.0078 15.998 19.0307C15.8962 19.1599 15.7955 19.2898 15.695 19.4194ZM16.5512 47.112C16.7766 47.1084 17.0067 47.1047 17.2418 47.1022L17.2551 47.0955C18.3465 47.1154 19.977 46.9627 21.6075 46.7036C22.9651 46.491 23.1581 45.7604 22.8652 44.6577C22.2197 42.2132 21.2747 39.8817 19.7707 37.8358C18.666 36.3279 17.3417 35.0326 15.4051 34.634C14.9593 34.5411 14.3867 34.4217 14.0807 34.8001C13.7702 35.1844 14.0624 35.6324 14.2976 35.9928L14.3469 36.0688C14.8793 36.9014 15.4354 37.7221 15.9915 38.5429C16.2695 38.9532 16.5475 39.3636 16.8226 39.7754L16.8574 39.8279C17.3923 40.6344 17.9341 41.4513 17.3283 42.459C16.756 43.4155 15.8443 43.6547 14.7995 43.5417C13.5949 43.4089 12.4436 43.6679 11.3389 44.113C11.2733 44.1396 11.2041 44.1652 11.1335 44.1913C10.7098 44.348 10.237 44.5229 10.2142 45.0297C10.1902 45.5269 10.6262 45.808 11.0293 46.0679C11.0732 46.0962 11.1167 46.1242 11.1592 46.1523C12.7002 47.1737 14.4155 47.1462 16.5512 47.112ZM14.4201 56.7737C15.5787 54.4025 19.698 51.5127 23.3244 50.45C23.5604 51.3499 23.455 52.2364 23.3499 53.1191C23.3069 53.4808 23.2639 53.8419 23.2446 54.2031C23.2218 54.6019 23.201 55.0009 23.1801 55.3998C23.067 57.5654 22.9539 59.7307 22.5325 61.8619C22.5169 61.941 22.5012 62.0244 22.4851 62.1107C22.3154 63.0166 22.0863 64.2391 21.1749 64.1603C20.3543 64.0893 20.2892 63.0713 20.2329 62.1909C20.2207 62.0003 20.2089 61.8161 20.19 61.6494C20.0502 60.4139 20.2565 59.1983 20.6691 58.0159C20.9952 57.0926 21.0351 56.1626 20.17 55.4851C19.3714 54.8673 18.5462 55.0799 17.7143 55.5183C17.6364 55.5593 17.5585 55.6006 17.4805 55.6419C16.5741 56.1224 15.6484 56.6137 14.4201 56.7737ZM39.263 54.7212C37.8901 54.6776 36.7805 54.1842 35.6818 53.6957L35.463 53.5986C35.314 53.5323 35.1659 53.4645 35.0178 53.3967C34.5573 53.1859 34.098 52.9756 33.6196 52.8148C32.6946 52.5092 31.8693 52.7483 31.2704 53.5122C30.6249 54.3359 30.8711 55.1529 31.4301 55.9168C31.6779 56.2583 31.9459 56.5859 32.2143 56.9138C32.8541 57.6956 33.4954 58.4792 33.8658 59.4573C31.1173 58.6536 27.9762 53.9174 27.2442 49.2875C28.5567 49.8448 29.9388 50.1902 31.3144 50.534C34.2355 51.2641 37.1275 51.987 39.263 54.7145V54.7212ZM30.7613 37.7228C31.0508 37.3027 31.3403 36.8825 31.6298 36.4607V36.4541C28.6816 38.1347 26.9979 40.6655 26.5521 44.0067C26.4389 44.8702 26.7384 44.9632 27.4571 44.7839C28.5847 44.5048 29.715 44.2357 30.845 43.9666C32.1622 43.653 33.48 43.3392 34.7909 43.0103L35.0072 42.9567C36.057 42.6971 37.1392 42.4295 38.3845 41.6154C38.1138 41.578 37.8809 41.5443 37.6732 41.5142C37.2527 41.4534 36.935 41.4074 36.6143 41.3763C35.3176 41.2474 34.1203 41.629 32.9225 42.0107C32.7005 42.0814 32.478 42.1523 32.2553 42.2199C31.2438 42.5254 30.4053 42.2199 29.7997 41.4161C29.2007 40.619 29.3471 39.7754 29.8928 38.9849C30.1823 38.5631 30.4718 38.143 30.7613 37.7228Z" fill="white" data-v-8b63f85e></path><path d="M55.4813 29.8917L55.4015 44.0204L65.8031 29.8917H72.8839L60.7387 45.7674L73.1901 64.5858H65.8763L56.1668 49.0289L55.3948 49.4873L55.4747 64.5792H49.6317V29.8917H55.4813Z" fill="white" data-v-8b63f85e></path><path d="M76.0184 29.8917H81.8215V58.1957H90.4862V64.5925H76.0184V29.8917Z" fill="white" data-v-8b63f85e></path><path d="M111.023 29.8917V35.8766H99.883V43.0108H110.597V48.9027H99.883V58.6142H111.103V64.5991H94.0865V29.8917H111.03H111.023Z" fill="white" data-v-8b63f85e></path><path d="M133.531 29.8918V35.8767H122.39V43.0108H133.105V48.9028H122.39V58.6142H133.61V64.5992H116.594V29.8918H133.537H133.531Z" fill="white" data-v-8b63f85e></path><path d="M136.239 29.8917H142.428L149.156 52.3967L155.811 29.8917H158.4L164.822 52.3967L171.936 29.8917H178.165L166.446 64.5925H163.198L157.049 43.0573L150.747 64.5925H147.539L136.245 29.8917H136.239Z" fill="white" data-v-8b63f85e></path><path d="M181.18 29.8917H186.983V64.5925H181.18V29.8917Z" fill="white" data-v-8b63f85e></path><path d="M190.929 57.7772L194.915 54.2367C195.66 55.9571 196.552 57.2192 197.583 58.0363C198.615 58.8466 199.76 59.2585 201.024 59.2585C202.288 59.2585 203.214 58.8666 203.886 58.0828C204.558 57.2989 204.891 56.2627 204.891 54.974C204.891 54.3297 204.811 53.7518 204.658 53.247C204.505 52.7421 204.232 52.2572 203.846 51.7989C203.46 51.3405 202.941 50.8756 202.302 50.4172C201.656 49.9589 200.844 49.4806 199.866 48.9891C198.681 48.378 197.617 47.7536 196.678 47.1225C195.74 46.4915 194.941 45.7874 194.303 45.0035C193.657 44.2197 193.165 43.3296 192.812 42.3332C192.466 41.3368 192.286 40.181 192.286 38.8592C192.286 37.5373 192.512 36.2088 192.965 35.0397C193.417 33.8706 194.05 32.8609 194.862 32.004C195.673 31.1471 196.638 30.4696 197.763 29.978C198.888 29.4865 200.106 29.2407 201.417 29.2407C203.453 29.2407 205.203 29.7256 206.661 30.6888C208.118 31.652 209.309 32.9672 210.241 34.6212L206.528 38.5802C205.935 37.5041 205.243 36.6804 204.458 36.0958C203.673 35.5113 202.734 35.219 201.656 35.219C200.578 35.219 199.786 35.5511 199.141 36.2088C198.495 36.8664 198.176 37.6768 198.176 38.6267C198.176 39.085 198.256 39.5168 198.429 39.9153C198.595 40.3139 198.881 40.7124 199.28 41.111C199.68 41.5095 200.212 41.9081 200.884 42.3066C201.556 42.7052 202.382 43.1635 203.36 43.6883C204.651 44.3326 205.762 45.0168 206.707 45.7342C207.646 46.4583 208.424 47.2554 209.03 48.1255C209.636 49.0024 210.088 49.9921 210.381 51.0948C210.674 52.1974 210.827 53.4595 210.827 54.8677C210.827 56.4354 210.587 57.8503 210.108 59.1256C209.629 60.401 208.97 61.4904 208.118 62.3938C207.266 63.2972 206.261 63.9946 205.104 64.4862C203.946 64.9777 202.681 65.2235 201.31 65.2235C200.046 65.2235 198.868 65.0375 197.77 64.6722C196.672 64.3068 195.693 63.7887 194.828 63.1311C193.963 62.4735 193.204 61.6897 192.546 60.7863C191.887 59.8829 191.354 58.8799 190.942 57.7706L190.929 57.7772Z" fill="white" data-v-8b63f85e></path><path d="M221.096 29.8917V43.0041H232.236V29.8917H237.999V64.5925H232.236V49.3611H221.096V64.5925H215.293V29.8917H221.096Z" fill="white" data-v-8b63f85e></path></g><defs data-v-8b63f85e><clipPath id="clip0_421_5136" data-v-8b63f85e><rect width="238" height="68" fill="white" data-v-8b63f85e></rect></clipPath></defs></svg></div><div class="foot-links" data-v-8b63f85e>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430`);
      } else {
        return [
          createTextVNode("\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435`);
      } else {
        return [
          createTextVNode("\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="foot-info" data-v-8b63f85e><div class="foot-info_text" data-v-8b63f85e><p data-v-8b63f85e>\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0438\u0445 \u043F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u044F\u043C / All rights belong to their copyright holders.</p><p data-v-8b63f85e>\u0421\u0430\u0439\u0442 \u043D\u0435 \u0430\u0444\u0444\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D \u0438 \u043D\u0435 \u043E\u0434\u043E\u0431\u0440\u0435\u043D \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u0438\u0433\u0440\u044B Genshin Impact /</p><p data-v-8b63f85e>The site is not affiliated with or approved by the game developer Genshin Impact.</p></div><div class="foot-info_copy" data-v-8b63f85e> KleeWish.ru \xA9 2023 </div></div></footer>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/website-footer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const websiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-8b63f85e"]]);
const _sfc_main$7 = {
  name: "about",
  components: { mediumButton: MediumButton }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}><h1>\u041E \u043D\u0430\u0441 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445</h1><div class="about-items"><div class="about-item"><div class="about-item_icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.4146 5.41422C30.1955 4.63316 30.1955 3.36684 29.4146 2.58579C28.6335 1.80474 27.3671 1.80474 26.5861 2.58579L15.0333 14.1385C13.5811 13.207 11.8538 12.6667 10.0003 12.6667C4.84567 12.6667 0.666992 16.8453 0.666992 22C0.666992 27.1547 4.84567 31.3333 10.0003 31.3333C15.155 31.3333 19.3337 27.1547 19.3337 22C19.3337 20.1465 18.7934 18.4192 17.8618 16.9671L21.6175 13.2112L23.3125 14.906C24.3539 15.9475 26.0423 15.9475 27.0837 14.906L30.3855 11.6042C31.427 10.5628 31.427 8.87434 30.3855 7.83294L28.6907 6.13806L29.4146 5.41422ZM4.66699 22C4.66699 19.0545 7.05481 16.6667 10.0003 16.6667C12.9458 16.6667 15.3337 19.0545 15.3337 22C15.3337 24.9455 12.9458 27.3333 10.0003 27.3333C7.05481 27.3333 4.66699 24.9455 4.66699 22Z" fill="#F5E7DB"></path></svg></div><div class="about-item_main"><div class="about-item_value">125 000</div><div class="about-item_title">\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0435\u0439\u0441\u043E\u0432</div></div></div><div class="about-item"><div class="about-item_icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_63_505)"><path d="M9.69362 9.75052C9.69362 11.9905 8.15618 13.8062 6.25986 13.8062C4.36354 13.8062 2.82642 11.9905 2.82642 9.75052C2.82642 7.51068 4.36354 5.69531 6.25986 5.69531C8.15618 5.69531 9.69362 7.51084 9.69362 9.75052Z" fill="#F5E7DB"></path><path d="M10.1737 16.9022C10.4216 16.751 10.6962 16.6526 10.9803 16.6055C10.4034 15.7915 9.99455 14.9182 9.75839 13.8731C9.69375 13.4911 9.17087 13.4463 8.78207 13.7631C8.05487 14.3561 7.20623 14.7529 6.25983 14.7529C5.29503 14.7529 4.40751 14.3691 3.69583 13.7267C3.46879 13.5214 3.13422 13.4905 2.8731 13.65C1.52206 14.4751 0.499507 15.7851 0.0534266 17.3403C-0.0662534 17.7574 0.0177483 18.2076 0.279188 18.5547C0.541108 18.9012 0.949909 19.1055 1.38415 19.1055H7.57119C8.31151 18.2513 9.18559 17.5055 10.1737 16.9022Z" fill="#F5E7DB"></path><path d="M22.3058 9.75052C22.3058 11.9905 23.8434 13.8062 25.7397 13.8062C27.636 13.8062 29.1733 11.9905 29.1733 9.75052C29.1733 7.51068 27.636 5.69531 25.7397 5.69531C23.8434 5.69531 22.3058 7.51084 22.3058 9.75052Z" fill="#F5E7DB"></path><path d="M21.826 16.9022C21.5782 16.751 21.3038 16.6526 21.0197 16.6055C21.5965 15.7915 22.0052 14.9182 22.2416 13.8731C22.3062 13.4911 22.8294 13.4463 23.2181 13.7631C23.9453 14.3561 24.7939 14.7529 25.7403 14.7529C26.7051 14.7529 27.5924 14.3691 28.3041 13.7267C28.5313 13.5214 28.8657 13.4905 29.127 13.65C30.4779 14.4751 31.5004 15.7851 31.9467 17.3403C32.0664 17.7575 31.9822 18.2076 31.7208 18.5547C31.4592 18.9012 31.05 19.1055 30.6158 19.1055H24.4289C23.6883 18.2513 22.8144 17.5055 21.826 16.9022Z" fill="#F5E7DB"></path><path d="M25.3554 23.5919C24.6837 21.2473 23.1602 19.2649 21.1431 17.9934C20.7452 17.7427 20.2287 17.7833 19.8757 18.0943C18.7933 19.0476 17.454 19.6153 15.9996 19.6153C14.5167 19.6153 13.153 19.0255 12.0594 18.0383C11.7105 17.7231 11.1965 17.6756 10.7953 17.9209C8.71895 19.1889 7.14726 21.2017 6.46214 23.5921C6.27798 24.2334 6.4071 24.9247 6.8087 25.4582C7.21126 25.9908 7.83958 26.3046 8.5071 26.3046H23.3105C23.9781 26.3046 24.607 25.9919 25.0093 25.4582C25.4111 24.9246 25.5396 24.2338 25.3554 23.5919Z" fill="#F5E7DB"></path><path d="M21.2761 11.9275C21.2761 15.3694 18.9134 18.1603 15.9993 18.1603C13.0852 18.1603 10.7227 15.3696 10.7227 11.9275C10.7227 8.48508 13.0851 5.69531 15.9993 5.69531C18.9135 5.69531 21.2761 8.48508 21.2761 11.9275Z" fill="#F5E7DB"></path></g><defs><clipPath id="clip0_63_505"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg></div><div class="about-item_main"><div class="about-item_value">125 000</div><div class="about-item_title">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</div></div></div><div class="about-item"><div class="about-item_icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.9248 28.9374L28.5691 2.75849C28.4899 1.21327 27.2123 0 25.6618 0H6.33518C4.78674 0 3.5103 1.21327 3.43105 2.75849L2.0743 28.9374C2.03253 29.7341 2.32059 30.5147 2.86993 31.093C3.41927 31.6713 4.18279 32 4.98056 32H27.0185C27.8174 32 28.5798 31.6713 29.1281 31.093C29.6774 30.5147 29.9665 29.7352 29.9248 28.9374ZM24.6819 6.6842C23.6871 10.5703 20.1865 13.3984 16.0081 13.3984C11.834 13.3984 8.33444 10.5756 7.33749 6.69277C6.55363 6.38651 5.99679 5.62407 5.99679 4.73098C5.99679 3.56805 6.93914 2.62464 8.10314 2.62464C9.26608 2.62464 10.2084 3.56805 10.2084 4.73098C10.2084 5.39705 9.89895 5.9903 9.416 6.3758C10.2502 9.24673 12.8834 11.3102 16.0092 11.3102C19.1318 11.3102 21.7607 9.25208 22.5981 6.38651C22.1066 6.00208 21.7907 5.4024 21.7907 4.72991C21.7907 3.56698 22.7341 2.62357 23.897 2.62357C25.0589 2.62357 26.0012 3.56698 26.0012 4.72991C26.0012 5.6155 25.4551 6.37259 24.6819 6.6842Z" fill="#F5E7DB"></path></svg></div><div class="about-item_main"><div class="about-item_value">125 000</div><div class="about-item_title">\u041F\u043E\u043A\u0443\u043F\u043E\u043A \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435</div></div></div><div class="about-item"><div class="about-item_icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.1597 13.1732C28.1038 12.9961 27.9991 12.8383 27.8577 12.718C27.7161 12.5977 27.5435 12.5198 27.3597 12.4932L20.133 11.4399L16.893 4.89324C16.8007 4.73854 16.6699 4.61044 16.5134 4.52148C16.3567 4.43252 16.1798 4.38574 15.9997 4.38574C15.8195 4.38574 15.6426 4.43252 15.4859 4.52148C15.3294 4.61044 15.1985 4.73854 15.1063 4.89324L11.8663 11.4399L4.63966 12.4932C4.45582 12.5198 4.28322 12.5977 4.1417 12.718C4.00018 12.8383 3.89549 12.9961 3.83966 13.1732C3.78006 13.3497 3.77096 13.5394 3.81337 13.7208C3.85577 13.9022 3.948 14.0681 4.07966 14.2L9.33299 19.2933L8.093 26.4933C8.06157 26.6786 8.08233 26.869 8.15297 27.0433C8.22362 27.2176 8.34134 27.3688 8.49299 27.48C8.64489 27.5881 8.82401 27.6517 9.01014 27.6636C9.19629 27.6753 9.38201 27.6348 9.54633 27.5466L15.9997 24.1466L22.4663 27.5466C22.6094 27.625 22.7698 27.6664 22.933 27.6666C23.1427 27.6641 23.347 27.5992 23.5197 27.48C23.6713 27.3688 23.789 27.2176 23.8597 27.0433C23.9303 26.869 23.9511 26.6786 23.9197 26.4933L22.6663 19.2933L27.9063 14.2C28.0403 14.0696 28.135 13.9042 28.1798 13.7228C28.2246 13.5413 28.2175 13.3509 28.1597 13.1732Z" fill="#F5E7DB"></path></svg></div><div class="about-item_main"><div class="about-item_value">125 000</div><div class="about-item_title">\u041E\u0442\u0437\u044B\u0432\u043E\u0432</div></div></div></div><div class="about-right">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    alt: "\u0414\u0435\u0432\u0443\u0448\u043A\u0430",
    class: "about-right_girl",
    src: "/img/person.png"
  }, null, _parent));
  _push(`<div class="about-right_text">\u0410 \u0442\u044B \u0432\u0441\u0451 \u0435\u0449\u0435 \u043D\u0435 \u0441 \u043D\u0430\u043C\u0438?</div>`);
  _push(ssrRenderComponent(_component_medium_button, { text: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/about.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const VK_APP_ID = vkBotId;
const REDIRECT_URI = origin;
const VK_AUTH_URL = `https://oauth.vk.com/authorize?client_id=${VK_APP_ID}&display=page&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=friends&response_type=token&v=5.130`;
const _sfc_main$6 = {
  methods: {
    vkAuth: () => {
      window.open(VK_AUTH_URL, "VK_auth", "width=700,height=350");
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vk" }, _attrs))} data-v-95f3cd2c><div data-v-95f3cd2c>\u0412\u043E\u0439\u0442\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E</div><div data-v-95f3cd2c><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95f3cd2c><g clip-path="url(#clip0_214_8103)" data-v-95f3cd2c><path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#2787F5" data-v-95f3cd2c></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.66727 10H6.33339C5.66658 10 5.5332 10.3139 5.5332 10.6599C5.5332 11.2779 6.32445 14.3432 9.21733 18.3972C11.146 21.1659 13.8631 22.6666 16.3357 22.6666C17.8193 22.6666 18.0028 22.3333 18.0028 21.7591V19.6666C18.0028 18.9999 18.1433 18.8669 18.613 18.8669C18.9592 18.8669 19.5526 19.0399 20.9373 20.3748C22.5197 21.9569 22.7806 22.6666 23.6706 22.6666H26.0045C26.6714 22.6666 27.0048 22.3333 26.8125 21.6755C26.602 21.0199 25.8465 20.0686 24.8439 18.9411C24.2999 18.2984 23.484 17.6062 23.2367 17.2601C22.8906 16.8152 22.9895 16.6174 23.2367 16.2219C23.2367 16.2219 26.0802 12.2172 26.3769 10.8577C26.5252 10.3633 26.3769 10 25.6711 10H23.3372C22.7438 10 22.4702 10.3139 22.3218 10.6599C22.3218 10.6599 21.135 13.5521 19.4537 15.4309C18.9097 15.9747 18.6625 16.1478 18.3657 16.1478C18.2174 16.1478 18.0026 15.9747 18.0026 15.4804V10.8577C18.0026 10.2644 17.8305 10 17.3358 10H13.6683C13.2975 10 13.0745 10.2753 13.0745 10.5363C13.0745 11.0987 13.9151 11.2284 14.0018 12.8105V16.2466C14.0018 16.9999 13.8656 17.1366 13.569 17.1366C12.7778 17.1366 10.8531 14.2314 9.7117 10.9071C9.48814 10.261 9.26377 10 8.66727 10Z" fill="white" data-v-95f3cd2c></path></g><defs data-v-95f3cd2c><clipPath id="clip0_214_8103" data-v-95f3cd2c><rect width="32" height="32" fill="white" data-v-95f3cd2c></rect></clipPath></defs></svg></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/button-vk.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ButtonVk = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-95f3cd2c"]]);
const _sfc_main$5 = {
  components: {},
  methods: {
    async tgPopup() {
      window.open(
        `https://oauth.telegram.org/auth?bot_id=${tgBotId}&origin=${origin}/&request_access=write`,
        "_blank",
        "width=500,height=500"
      );
    },
    async handleTelegramResponse(event) {
      const data = JSON.parse(event.data);
      console.log(window.location.origin);
      if (data.origin.slice(0, -1) !== window.location.origin || data.event !== "auth_result")
        return;
      console.log(data);
      let authStores = authStore();
      const req = await api.post("user/auth/telegram_login/", { "user": data.result });
      console.log(req);
      authStores.setToken(req.data.data.token);
      authStores.setUser(req.data.data.user);
      this.$router.go(0);
    }
  },
  mounted() {
    window.addEventListener("message", this.handleTelegramResponse, false);
  },
  beforeUnmount() {
    window.removeEventListener("message", this.handleTelegramResponse, false);
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tg" }, _attrs))} data-v-e8f323de><div data-v-e8f323de>\u0412\u043E\u0439\u0442\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E</div><div data-v-e8f323de><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e8f323de><path fill-rule="evenodd" clip-rule="evenodd" d="M7.24335 15.8309C11.9077 13.7988 15.018 12.459 16.5742 11.8118C21.0175 9.96363 21.9409 9.64257 22.5426 9.63195C22.675 9.62963 22.9709 9.66245 23.1626 9.81801C23.447 10.0488 23.4486 10.5496 23.417 10.8811C23.1762 13.4111 22.1344 19.5507 21.6043 22.3843C21.38 23.5833 20.9384 23.9854 20.5109 24.0247C19.5817 24.1102 18.8762 23.4106 17.9762 22.8208C16.568 21.8976 15.7725 21.323 14.4055 20.4223C12.8259 19.3813 13.8499 18.8091 14.7502 17.8741C14.9858 17.6294 19.0796 13.9057 19.1589 13.5679C19.1688 13.5256 19.178 13.3681 19.0844 13.285C18.9909 13.2019 18.8528 13.2303 18.7532 13.2529C18.6119 13.2849 16.3623 14.7719 12.0043 17.7136C11.3657 18.1521 10.7874 18.3658 10.2692 18.3546C9.69785 18.3423 8.59898 18.0316 7.78204 17.766C6.78004 17.4403 5.98367 17.2681 6.05304 16.7149C6.08917 16.4268 6.48592 16.1321 7.24335 15.8309Z" fill="white" data-v-e8f323de></path></svg></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/buttons/button-telegram.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ButtonTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e8f323de"]]);
const rouletteStore = defineStore({
  id: "rouletteStore",
  state: () => ({
    animationState: null
  })
});
const _sfc_main$4 = {
  name: "roulette-item",
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
    },
    winner: {
      type: Boolean,
      required: false
    },
    selected: {
      type: Boolean,
      required: false
    },
    unselected: {
      type: Boolean,
      required: false
    },
    instantly: {
      type: Boolean,
      required: false
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "item " + ($props.winner ? "item-win " : "") + ($props.selected ? "item-selected " : "") + ($props.unselected ? "item-unselected " : "")
  }, _attrs))} data-v-4949a7c6><div class="item-cost" data-v-4949a7c6>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    src: "/img/mor.png",
    style: $props.instantly ? "transition: 0.0s;" : ""
  }, null, _parent));
  _push(`<div data-v-4949a7c6>${ssrInterpolate($props.cost)}</div></div><div class="item-image" data-v-4949a7c6>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    src: $props.image,
    style: $props.instantly ? "transition: 0.0s;" : ""
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/roulette-item.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RouletteItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-4949a7c6"]]);
const _sfc_main$3 = {
  name: "roulette-items",
  components: { RouletteItem },
  data() {
    return {
      modalStores: modalStore(),
      themeStores: themeStore(),
      authStores: authStore(),
      rouletteStores: rouletteStore(),
      items: [
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 },
        { title: "None", image: "/img/items/item_1.png", cost: 1200 },
        { title: "None", image: "/img/items/item_1.png", cost: 125 },
        { title: "None", image: "/img/items/item_1.png", cost: 120 }
      ],
      random_num: Math.random(),
      is_winner: false,
      animationStartTime: 0,
      animationCompletion: 0,
      animationDuration: 8e3,
      clicked: false,
      instantly: false,
      bufferItems: 2
    };
  },
  methods: {
    async moveElement() {
      this.items.forEach((item) => {
        const element = document.getElementById(`el${this.items.indexOf(item)}`);
        element.style.transform = `translateX(${-(this.items.length - this.bufferItems * 2) / 2 * 100 + (10 + this.random_num * 80)}%)`;
      });
      const animationStartTime = Date.now();
      let currentTime = Date.now();
      let elapsed = currentTime - animationStartTime;
      let animationCompletion = 0;
      let newAnimationCompletion = 0;
      let bezierCurve = BezierEasing(0.08, 0.67, 0.25, 1);
      while (elapsed < this.animationDuration) {
        currentTime = Date.now();
        elapsed = currentTime - animationStartTime;
        newAnimationCompletion = bezierCurve(elapsed / this.animationDuration);
        this.instantly = newAnimationCompletion - animationCompletion > 0.03;
        animationCompletion = newAnimationCompletion;
        this.clicked = Math.floor((this.items.length - this.bufferItems * 2 - (10 + this.random_num * 80) / 100 - 0.5) * animationCompletion + 0.5) + this.bufferItems;
        await new Promise((r) => setTimeout(r, 30));
      }
      this.clicked = false;
      this.rouletteStores.animationState = "ended";
      this.items.forEach(async (item) => {
        const element = document.getElementById(`el${this.items.indexOf(item)}`);
        element.style.transition = `all 0.6s ease`;
        element.style.transform = `translateX(${-(this.items.length - this.bufferItems * 2) / 2 * 100 + 50}%)`;
        if (this.items.indexOf(item) === this.items.length - 1 - this.bufferItems) {
          element.style.opacity = 1;
          await new Promise((r) => setTimeout(r, 600));
          this.is_winner = true;
        } else {
          element.style.opacity = 0.4;
        }
      });
    }
  },
  watch: {
    rouletteStores: {
      async handler(newValue) {
        if (newValue.animationState === "running") {
          await this.moveElement();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.items.forEach((item) => {
      const element = document.getElementById(`el${this.items.indexOf(item)}`);
      element.style.transform = `translateX(${(this.items.length - this.bufferItems * 2) / 2 * 100 - 50}%)`;
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_roulette_item = resolveComponent("roulette-item");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-9b7a8d55><!--[-->`);
  ssrRenderList($data.items, (item) => {
    _push(ssrRenderComponent(_component_roulette_item, {
      title: item.title,
      image: item.image,
      cost: item.cost,
      winner: $data.items.indexOf(item) === $data.items.length - 1 - $data.bufferItems ? $data.is_winner : false,
      selected: $data.clicked !== false ? $data.clicked === $data.items.indexOf(item) : false,
      unselected: $data.clicked !== false ? $data.clicked !== $data.items.indexOf(item) : false,
      instantly: $data.instantly,
      id: `el${$data.items.indexOf(item)}`,
      class: "roulette_transitions"
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/misc/roulette-items.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const RouletteItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-9b7a8d55"]]);
const _sfc_main$2 = {
  name: "roulette-wheel",
  components: { RouletteItems, MediumButton },
  data() {
    return {
      modalStores: modalStore(),
      themeStores: themeStore(),
      authStores: authStore(),
      rouletteStores: rouletteStore()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_roulette_items = resolveComponent("roulette-items");
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "roulette-parent" }, _attrs))} data-v-bfac48a2><div class="roulette-arrow" data-v-bfac48a2><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" xml:space="preserve" data-v-bfac48a2><path d="M30.926 60.575V31.369L5.232 19.419zm2.244-29.217v29.183l25.436-41.335zm0-26.783v24.292l25.818-12.331zm-2.244 24.314V4.575L4.962 16.816z" fill="#dbc1ab" data-original="#000000" data-v-bfac48a2></path></svg></div><div class="roulette-overflow" data-v-bfac48a2>`);
  _push(ssrRenderComponent(_component_roulette_items, { class: "roulette-items" }, null, _parent));
  _push(`</div>`);
  if ($data.rouletteStores.animationState === "ended") {
    _push(`<div data-v-bfac48a2><div class="roulette-note" data-v-bfac48a2>\u{1F389} \u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0441 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0435\u043C!</div><div class="roulette-winner" data-v-bfac48a2><span data-v-bfac48a2>\u0428\u043B\u0451\u043F\u0430\u043D\u0446\u044B \u0438\u043D\u0434\u044E\u043A\u0430</span><div data-v-bfac48a2><img${ssrRenderAttr("src", _imports_0)} alt="\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432" data-v-bfac48a2><p data-v-bfac48a2>33</p></div></div><div class="roulette-win" data-v-bfac48a2><p data-v-bfac48a2>\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435. \u0418\u0445 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0441\u0430\u0439\u0442\u0443, \u043F\u043E\u043B\u0443\u0447\u0430\u044F \u0434\u0435\u043D\u044C\u0433\u0438 \u0437\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0430 \u0432\u0430\u0448 \u0431\u0430\u043B\u0430\u043D\u0441 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0434\u043E\u0440\u043E\u0436\u0435, \u0438\u043B\u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0431\u0435 \u0432 \u0438\u0433\u0440\u0443 \u043F\u043E UID, \u0435\u0441\u043B\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432\u044B\u0431\u0438\u043B\u0441\u044F \u0434\u043E\u0440\u043E\u0436\u0435 60 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432. </p><p data-v-bfac48a2>\u0423\u0434\u0430\u0447\u0438 \u0438 \u043A\u0440\u0443\u0442\u044B\u0445 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u0439!</p></div><div class="roulette-buttons" data-v-bfac48a2>`);
    _push(ssrRenderComponent(_component_medium_button, {
      color: "green",
      text: "\u041F\u0440\u043E\u0434\u0430\u0442\u044C"
    }, null, _parent));
    _push(ssrRenderComponent(_component_medium_button, { text: "\u0415\u0449\u0451 \u0440\u0430\u0437" }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<div data-v-bfac48a2>`);
    _push(ssrRenderComponent(_component_medium_button, {
      text: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
      style: { transition: `opacity 0.6s ease`, opacity: $data.rouletteStores.animationState === null ? 1 : 0.6 },
      onClick: ($event) => $data.rouletteStores.animationState === null ? $data.rouletteStores.animationState = "running" : false
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/misc/roulette-wheel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RouletteWheel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bfac48a2"]]);
const __default__ = {
  name: "modal",
  components: { RouletteItem, MediumButton, ButtonTelegram, ButtonVk, RouletteWheel },
  computed: {
    morFromRub() {
      return this.rubValue;
    }
  },
  methods: {
    hideModal(modalName) {
      console.log("test");
    }
  },
  data() {
    return {
      rubValue: null,
      activeMethod: null,
      reviewText: null,
      modalStores: modalStore(),
      themeStores: themeStore(),
      authStores: authStore(),
      rouletteStores: rouletteStore()
    };
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  async setup(__props) {
    let authStores = authStore();
    let modalStores = modalStore();
    let themeStores = themeStore();
    const route = useRoute();
    route.query.ref;
    ref([]);
    ref([]);
    ref(false);
    console.log("Setup complete");
    const tmpTransaction = async (morValue) => {
      console.log(morValue);
      await axios.post("http://localhost:8000/api/payments/balance/", { amount: morValue }, {
        headers: {
          Authorization: `KWT ${authStores.token}`
        }
      });
      await authStores.getUser();
      console.log(authStores.user);
      modalStores.hideModal("deposit");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(modalStores).isModalShown("signIn")) {
        _push(`<div class="modal" data-v-f3c359c2><div class="modal-content" data-v-f3c359c2><div class="modal-content_top" data-v-f3c359c2><div class="modal-content_title" data-v-f3c359c2>\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F</div><div class="modal-content_close" data-v-f3c359c2><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3c359c2><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"${ssrRenderAttr("fill", unref(themeStores).isDarkTheme ? "white" : "black")} data-v-f3c359c2></path></svg></div></div><div class="modal-content_body" data-v-f3c359c2>`);
        _push(ssrRenderComponent(ButtonVk, null, null, _parent));
        _push(ssrRenderComponent(ButtonTelegram, { id: "telegram-login-button" }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(modalStores).isModalShown("deposit")) {
        _push(`<div class="modal" data-v-f3c359c2><div class="modal-content" data-v-f3c359c2><div class="modal-content_top" data-v-f3c359c2><div class="modal-content_title" data-v-f3c359c2>\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435</div><div class="modal-content_close" data-v-f3c359c2><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3c359c2><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"${ssrRenderAttr("fill", unref(themeStores).isDarkTheme ? "white" : "black")} data-v-f3c359c2></path></svg></div></div><div class="modal-content_body" data-v-f3c359c2><div class="deposit" data-v-f3c359c2><div class="deposit-value" data-v-f3c359c2><div class="deposit-input" data-v-f3c359c2><div class="deposit-input_title" data-v-f3c359c2>\u0440\u0443\u0431\u043B\u0435\u0439</div><input type="number"${ssrRenderAttr("value", _ctx.rubValue)} placeholder="\u0421\u0443\u043C\u043C\u0430" data-v-f3c359c2></div><div class="deposit-equals" data-v-f3c359c2>=</div><div class="deposit-input" data-v-f3c359c2><div class="deposit-input_title" data-v-f3c359c2>\u043C\u043E\u0440</div><input type="number"${ssrRenderAttr("value", _ctx.morFromRub)} placeholder="\u0421\u0443\u043C\u043C\u0430" disabled data-v-f3c359c2></div></div><input class="deposit-promo" placeholder="\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434" data-v-f3c359c2><div class="deposit-method" data-v-f3c359c2><div class="deposit-method_title" data-v-f3c359c2>\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</div><div class="deposit-method_list" data-v-f3c359c2><div class="deposit-method_item" data-v-f3c359c2>`);
        if (_ctx.activeMethod === 1) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="${ssrRenderStyle({ "enable-background": "new 0 0 512 512" })}" xml:space="preserve" data-v-f3c359c2><path d="M256 42.667C138.453 42.667 42.667 138.453 42.667 256S138.453 469.333 256 469.333 469.333 373.547 469.333 256 373.547 42.667 256 42.667zm100.48 185.812L249.814 335.146a21.635 21.635 0 0 1-30.294 0l-64-64a21.42 21.42 0 1 1 30.294-30.292l48.853 49.063 91.519-91.729a21.42 21.42 0 0 1 30.294 30.291z" data-name="check-circle-Filled" fill="#32bb76" data-original="#000000" data-v-f3c359c2></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_nuxt_img, {
          format: "webp",
          src: "/img/deposit/method_1.png"
        }, null, _parent));
        _push(`</div><div class="deposit-method_item" data-v-f3c359c2>`);
        if (_ctx.activeMethod === 2) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="${ssrRenderStyle({ "enable-background": "new 0 0 512 512" })}" xml:space="preserve" data-v-f3c359c2><path d="M256 42.667C138.453 42.667 42.667 138.453 42.667 256S138.453 469.333 256 469.333 469.333 373.547 469.333 256 373.547 42.667 256 42.667zm100.48 185.812L249.814 335.146a21.635 21.635 0 0 1-30.294 0l-64-64a21.42 21.42 0 1 1 30.294-30.292l48.853 49.063 91.519-91.729a21.42 21.42 0 0 1 30.294 30.291z" data-name="check-circle-Filled" fill="#32bb76" data-original="#000000" data-v-f3c359c2></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_nuxt_img, {
          format: "webp",
          src: "/img/deposit/method_2.png"
        }, null, _parent));
        _push(`</div></div></div></div>`);
        _push(ssrRenderComponent(MediumButton, {
          color: "green",
          text: "\u041A \u043E\u043F\u043B\u0430\u0442\u0435",
          onClick: () => {
            tmpTransaction(_ctx.morFromRub);
            this.rubValue = null;
          }
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(modalStores).isModalShown("review")) {
        _push(`<div class="modal" data-v-f3c359c2><div class="modal-content" data-v-f3c359c2><div class="modal-content_top" data-v-f3c359c2><div class="modal-content_title" data-v-f3c359c2>\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432</div><div class="modal-content_close" data-v-f3c359c2><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3c359c2><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"${ssrRenderAttr("fill", unref(themeStores).isDarkTheme ? "white" : "black")} data-v-f3c359c2></path></svg></div></div><div class="modal-content_body" data-v-f3c359c2><div class="review" data-v-f3c359c2><textarea placeholder="\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430" data-v-f3c359c2>${ssrInterpolate(_ctx.reviewText)}</textarea></div>`);
        _push(ssrRenderComponent(MediumButton, {
          color: "green",
          text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(modalStores).isModalShown("caseOpen")) {
        _push(`<div class="modal" data-v-f3c359c2><div class="modal-content" data-v-f3c359c2><div class="modal-content_top" data-v-f3c359c2><div class="modal-content_title" data-v-f3c359c2>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0435\u0439\u0441</div><div class="modal-content_close" data-v-f3c359c2><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3c359c2><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"${ssrRenderAttr("fill", unref(themeStores).isDarkTheme ? "white" : "black")} data-v-f3c359c2></path></svg></div></div><div class="modal-content_body" data-v-f3c359c2>`);
        _push(ssrRenderComponent(RouletteWheel, null, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3c359c2"]]);
const _sfc_main = {
  components: { Game, About, websiteHeader, websiteFooter, card, livedrop: __nuxt_component_1, modal },
  computed: {
    theme() {
      return this.store.isDarkTheme ? "dark" : "light";
    }
  },
  data() {
    return {
      store: themeStore()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtErrorBoundary = __nuxt_component_0$2;
  const _component_modal = resolveComponent("modal");
  const _component_website_header = resolveComponent("website-header");
  const _component_livedrop = __nuxt_component_1;
  const _component_about = resolveComponent("about");
  const _component_website_footer = resolveComponent("website-footer");
  _push(ssrRenderComponent(_component_NuxtErrorBoundary, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="wrapper"${ssrRenderAttr("data-theme", $options.theme)}${_scopeId}>`);
        _push2(ssrRenderComponent(_component_modal, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_website_header, null, null, _parent2, _scopeId));
        _push2(`<main${_scopeId}>`);
        _push2(ssrRenderComponent(_component_livedrop, null, null, _parent2, _scopeId));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(ssrRenderComponent(_component_about, null, null, _parent2, _scopeId));
        _push2(`</main>`);
        _push2(ssrRenderComponent(_component_website_footer, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "wrapper",
            "data-theme": $options.theme
          }, [
            createVNode(_component_modal),
            createVNode(_component_website_header),
            createVNode("main", null, [
              createVNode(_component_livedrop),
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_about)
            ]),
            createVNode(_component_website_footer)
          ], 8, ["data-theme"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-f2d4d268.mjs.map