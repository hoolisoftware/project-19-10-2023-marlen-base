import { useSSRContext, resolveComponent, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import _sfc_main$6 from './nuxt-icon-c75976ab.mjs';
import { B as Button } from './Button-1d188171.mjs';
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

const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "purchase-item" }, _attrs))} data-v-b7e69a8d><div class="purchase-item__img-box" data-v-b7e69a8d><img${ssrRenderAttr("src", "")} format="avif,webp" densities="x1 x2" class="purchase-item__img" width="261" height="261" data-v-b7e69a8d></div><div class="purchase-item__content" data-v-b7e69a8d><h2 class="purchase-item__name" data-v-b7e69a8d>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430</h2><p class="purchase-item__text" data-v-b7e69a8d>\u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0440\u0430\u0442\u043E\u0440\u0443 \u043E\u0442\u0442\u043E\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u044B\u043A \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. </p><div class="purchase-item__price-box" data-v-b7e69a8d><p class="purchase-item__price-text" data-v-b7e69a8d>\u0426\u0435\u043D\u0430</p><p class="purchase-item__price" data-v-b7e69a8d>456 \u0440\u0443\u0431</p></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchase/PurchaseItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b7e69a8d"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_icon = _sfc_main$6;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "purchase-advantages" }, _attrs))} data-v-638c5ea8><li class="purchase-advantages__elem" data-v-638c5ea8>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "advantage1",
    class: "purchase-advantages__icon"
  }, null, _parent));
  _push(`<div class="purchase-advantages__text-box" data-v-638c5ea8><p class="purchase-advantages__bold-text" data-v-638c5ea8>\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430</p><p class="purchase-advantages__text" data-v-638c5ea8>\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430</p></div></li><li class="purchase-advantages__elem" data-v-638c5ea8>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "advantage2",
    class: "purchase-advantages__icon"
  }, null, _parent));
  _push(`<div class="purchase-advantages__text-box" data-v-638c5ea8><p class="purchase-advantages__bold-text" data-v-638c5ea8>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</p><p class="purchase-advantages__text" data-v-638c5ea8>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043B\u044E\u0431\u044B\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432</p></div></li><li class="purchase-advantages__elem" data-v-638c5ea8>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "advantage3",
    class: "purchase-advantages__icon"
  }, null, _parent));
  _push(`<div class="purchase-advantages__text-box" data-v-638c5ea8><p class="purchase-advantages__bold-text" data-v-638c5ea8>\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0442\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430</p><p class="purchase-advantages__text" data-v-638c5ea8>\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</p></div></li></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchase/PurchaseAdvantages.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-638c5ea8"]]);
const _sfc_main$3 = {
  props: {
    isSelected: {
      type: Boolean
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["payment-method", { "payment-method--selected": $props.isSelected }]
  }, _attrs))} data-v-8d83a0c4><img${ssrRenderAttr("src", $props.img)} format="avif,webp" densities="x1 x2" class="payment-method__img" width="70" height="36" data-v-8d83a0c4><div class="payment-method__text-box" data-v-8d83a0c4><h3 class="payment-method__name" data-v-8d83a0c4>${ssrInterpolate($props.name)}</h3><p class="payment-method__description" data-v-8d83a0c4>${ssrInterpolate($props.description)}</p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchase/PurchasePaymentMethod.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8d83a0c4"]]);
const _sfc_main$2 = {
  components: { PurchasePaymentMethod: __nuxt_component_0 },
  setup() {
    const currentMethod = ref("visa");
    const paymentList = [
      {
        id: "visa",
        img: "payment-visa.png",
        name: "Visa, Mastercard",
        description: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438 Visa, Mastercard"
      },
      {
        id: "umoney",
        img: "payment-umoney.png",
        name: "\u042E-money",
        description: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u042E\u043C\u0430\u043D\u0438"
      },
      {
        id: "webmoney",
        img: "payment-webmoney.png",
        name: "Webmoney",
        description: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 Webmoney"
      },
      {
        id: "tether",
        img: "payment-tether.png",
        name: "Tether TRC-20",
        description: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043E\u0439 Tether TRC-20"
      }
    ];
    return {
      currentMethod,
      paymentList
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PurchasePaymentMethod = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "purchase-payment" }, _attrs))} data-v-d9441f8b><p class="purchase-payment__title" data-v-d9441f8b>\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B</p><div class="purchase-payment__grid" data-v-d9441f8b><!--[-->`);
  ssrRenderList($setup.paymentList, (method) => {
    _push(ssrRenderComponent(_component_PurchasePaymentMethod, {
      "is-selected": $setup.currentMethod === method.id,
      img: method.img,
      name: method.name,
      description: method.description,
      onClick: ($event) => $setup.currentMethod = method.id
    }, null, _parent));
  });
  _push(`<!--]--></div><button class="purchase-payment__more-btn" data-v-d9441f8b>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchase/PurchasePayment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d9441f8b"]]);
const _sfc_main$1 = {
  setup() {
    const code = ref("245856879");
    return {
      code
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "purchase-user" }, _attrs))} data-v-15c7c9da><h3 class="purchase-user__title" data-v-15c7c9da>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 UID</h3><input type="text" class="purchase-user__input"${ssrRenderAttr("value", $setup.code)} required data-v-15c7c9da><div class="purchase-user__box" data-v-15c7c9da><img${ssrRenderAttr("src", "")} format="avif,webp" densities="x1 x2" class="purchase-user__avatar" width="58" height="58" data-v-15c7c9da><div class="purchase-user__text-box" data-v-15c7c9da><p class="purchase-user__name" data-v-15c7c9da>Dmitryi Ravos</p><p class="purchase-user__text" data-v-15c7c9da> AR15</p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchase/PurchaseUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-15c7c9da"]]);
const _sfc_main = {
  components: { Button, PurchaseUser: __nuxt_component_3, PurchasePayment: __nuxt_component_2, PurchaseAdvantages: __nuxt_component_1, PurchaseItem: __nuxt_component_0$1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PurchaseItem = __nuxt_component_0$1;
  const _component_PurchaseAdvantages = __nuxt_component_1;
  const _component_PurchasePayment = __nuxt_component_2;
  const _component_PurchaseUser = __nuxt_component_3;
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "purchase" }, _attrs))} data-v-a3b7a829><h1 class="heading1 purchase__title" data-v-a3b7a829>\u041F\u043E\u043A\u0443\u043F\u043A\u0430</h1><div class="purchase__grid" data-v-a3b7a829>`);
  _push(ssrRenderComponent(_component_PurchaseItem, null, null, _parent));
  _push(ssrRenderComponent(_component_PurchaseAdvantages, null, null, _parent));
  _push(ssrRenderComponent(_component_PurchasePayment, null, null, _parent));
  _push(ssrRenderComponent(_component_PurchaseUser, null, null, _parent));
  _push(`</div><div class="purchase__button-box" data-v-a3b7a829>`);
  _push(ssrRenderComponent(_component_Button, {
    color: "green",
    text: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
    class: "purchase__button"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/purchase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const purchase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a3b7a829"]]);

export { purchase as default };
//# sourceMappingURL=purchase-37655656.mjs.map
