import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { a as Panel, C as Counter, P as Participant } from './Participant-9d510f4e.mjs';
import _sfc_main$5 from './nuxt-icon-c75976ab.mjs';
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
import '@tanstack/vue-query';

const _sfc_main$4 = {
  props: {
    img: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "prize" }, _attrs))} data-v-7e507b27><img${ssrRenderAttr("src", "")} alt="prize" format="avif,webp" densities="x1 x2" class="prize__img" width="77" height="77" data-v-7e507b27></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lottery/LotteryPrize.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7e507b27"]]);
const _sfc_main$3 = {
  components: { LotteryPrize: __nuxt_component_0$1, PerfectScrollbar, Panel }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Panel = resolveComponent("Panel");
  const _component_PerfectScrollbar = resolveComponent("PerfectScrollbar");
  const _component_LotteryPrize = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_Panel, mergeProps({ class: "prizes" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="heading2 prizes__title" data-v-3e54c48a${_scopeId}>\u041F\u0440\u0438\u0437\u044B</h2><div class="prizes__tabs" data-v-3e54c48a${_scopeId}><button class="prizes__tab prizes__tab--active" data-v-3e54c48a${_scopeId}>\u0412\u0441\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B</button><button class="prizes__tab" data-v-3e54c48a${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button></div><div class="prizes__tabs-content" data-v-3e54c48a${_scopeId}><div class="prizes__tabs-panel" data-v-3e54c48a${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PerfectScrollbar, { class: "prizes__prize-list" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="prizes__prize-grid" data-v-3e54c48a${_scopeId2}><!--[-->`);
              ssrRenderList(9, (i) => {
                _push3(ssrRenderComponent(_component_LotteryPrize, {
                  img: "prize" + i + ".png"
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "prizes__prize-grid" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                    return createVNode(_component_LotteryPrize, {
                      img: "prize" + i + ".png"
                    }, null, 8, ["img"]);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("h2", { class: "heading2 prizes__title" }, "\u041F\u0440\u0438\u0437\u044B"),
          createVNode("div", { class: "prizes__tabs" }, [
            createVNode("button", { class: "prizes__tab prizes__tab--active" }, "\u0412\u0441\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B"),
            createVNode("button", { class: "prizes__tab" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
          ]),
          createVNode("div", { class: "prizes__tabs-content" }, [
            createVNode("div", { class: "prizes__tabs-panel" }, [
              createVNode(_component_PerfectScrollbar, { class: "prizes__prize-list" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "prizes__prize-grid" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                      return createVNode(_component_LotteryPrize, {
                        img: "prize" + i + ".png"
                      }, null, 8, ["img"]);
                    }), 64))
                  ])
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lottery/LotteryPrizes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-3e54c48a"]]);
const _sfc_main$2 = {
  components: { Counter, Button }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Counter = resolveComponent("Counter");
  const _component_nuxt_icon = _sfc_main$5;
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bet" }, _attrs))} data-v-ec069135><p class="bet__text bet__text--top" data-v-ec069135>\u0414\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043B\u043E\u0442\u0435\u0440\u0435\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:</p>`);
  _push(ssrRenderComponent(_component_Counter, { class: "bet__counter" }, null, _parent));
  _push(`<p class="bet__text" data-v-ec069135>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u044F:</p><p class="bet__price" data-v-ec069135>456 \u0440\u0443\u0431</p><div class="bet__count-box" data-v-ec069135><div class="bet__count-wrap" data-v-ec069135><p class="bet__text" data-v-ec069135>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B-\u0432\u043E \u0431\u0438\u043B\u0435\u0442\u043E\u0432:</p><div class="bet__input-box" data-v-ec069135><button class="bet__input-btn bet__input-btn--minus" aria-label="\u041C\u0438\u043D\u0443\u0441" data-v-ec069135>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "minus-circle",
    class: "bet__input-btn-icon",
    fill: "none"
  }, null, _parent));
  _push(`</button><input type="text" class="bet__input" value="1" data-v-ec069135><button class="bet__input-btn bet__input-btn--plus" aria-label="\u041F\u043B\u044E\u0441" data-v-ec069135>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "plus-circle",
    class: "bet__input-btn-icon"
  }, null, _parent));
  _push(`</button></div><p class="bet__small-text" data-v-ec069135>\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: 3 \u0438\u0437 5</p></div>`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "question-circle",
    class: "bet__question-icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    color: "green",
    text: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435",
    class: "bet__bet-btn"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lottery/LotteryBet.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ec069135"]]);
const _sfc_main$1 = {
  components: { PerfectScrollbar, Participant, Panel },
  setup() {
    const userList = [
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      }
    ];
    return {
      userList
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Panel = resolveComponent("Panel");
  const _component_PerfectScrollbar = resolveComponent("PerfectScrollbar");
  const _component_Participant = resolveComponent("Participant");
  _push(ssrRenderComponent(_component_Panel, mergeProps({ class: "users" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="heading2 users__title" data-v-e674f0fa${_scopeId}>\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438</h2>`);
        _push2(ssrRenderComponent(_component_PerfectScrollbar, { class: "users__user-list" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.userList, (user) => {
                _push3(ssrRenderComponent(_component_Participant, {
                  avatar: user.avatar,
                  name: user.name,
                  score: user.score,
                  "is-score-green": true
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($setup.userList, (user) => {
                  return openBlock(), createBlock(_component_Participant, {
                    avatar: user.avatar,
                    name: user.name,
                    score: user.score,
                    "is-score-green": true
                  }, null, 8, ["avatar", "name", "score"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("h2", { class: "heading2 users__title" }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"),
          createVNode(_component_PerfectScrollbar, { class: "users__user-list" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.userList, (user) => {
                return openBlock(), createBlock(_component_Participant, {
                  avatar: user.avatar,
                  name: user.name,
                  score: user.score,
                  "is-score-green": true
                }, null, 8, ["avatar", "name", "score"]);
              }), 256))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lottery/LotteryUsers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e674f0fa"]]);
const _sfc_main = {
  components: {
    LotteryUsers: __nuxt_component_2,
    LotteryBet: __nuxt_component_1,
    LotteryPrizes: __nuxt_component_0
  },
  setup() {
    const userList = [
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user3.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user4.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user1.jpg",
        name: "Dmitryi Ravos",
        score: 5
      },
      {
        avatar: "user2.jpg",
        name: "Dmitryi Ravos",
        score: 5
      }
    ];
    return {
      userList
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LotteryPrizes = __nuxt_component_0;
  const _component_LotteryBet = __nuxt_component_1;
  const _component_LotteryUsers = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lottery" }, _attrs))} data-v-2c7c0ffd><h1 class="heading1 lottery__title" data-v-2c7c0ffd>\u041B\u043E\u0442\u0435\u0440\u0435\u044F</h1><div class="lottery__grid" data-v-2c7c0ffd>`);
  _push(ssrRenderComponent(_component_LotteryPrizes, null, null, _parent));
  _push(ssrRenderComponent(_component_LotteryBet, null, null, _parent));
  _push(ssrRenderComponent(_component_LotteryUsers, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lottery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lottery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2c7c0ffd"]]);

export { lottery as default };
//# sourceMappingURL=lottery-8e316908.mjs.map
