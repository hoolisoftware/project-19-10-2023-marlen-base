import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { P as Participant, C as Counter, a as Panel } from './Participant-9d510f4e.mjs';
import { B as Button } from './Button-1d188171.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  components: { PerfectScrollbar, Participant, Button, Counter, Panel },
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
  const _component_Panel = resolveComponent("Panel");
  const _component_Counter = resolveComponent("Counter");
  const _component_Button = resolveComponent("Button");
  const _component_PerfectScrollbar = resolveComponent("PerfectScrollbar");
  const _component_Participant = resolveComponent("Participant");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "auction" }, _attrs))} data-v-bda15ce0><h1 class="heading1 auction__title" data-v-bda15ce0>\u0410\u0443\u043A\u0446\u0438\u043E\u043D</h1><div class="auction__grid" data-v-bda15ce0>`);
  _push(ssrRenderComponent(_component_Panel, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="heading2 auction__lot-title" data-v-bda15ce0${_scopeId}>\u041B\u043E\u0442</h2><div class="auction__lot-grid" data-v-bda15ce0${_scopeId}><div class="auction__lot-img-box" data-v-bda15ce0${_scopeId}><img${ssrRenderAttr("src", "")} format="avif,webp" densities="x1 x2" class="auction__lot-img" data-v-bda15ce0${_scopeId}></div><div class="auction__lot-content" data-v-bda15ce0${_scopeId}><p class="auction__big-text" data-v-bda15ce0${_scopeId}>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430</p><p class="auction__text" data-v-bda15ce0${_scopeId}>\u0414\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043B\u043E\u0442\u0435\u0440\u0435\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:</p>`);
        _push2(ssrRenderComponent(_component_Counter, { class: "auction__counter" }, null, _parent2, _scopeId));
        _push2(`<p class="auction__text" data-v-bda15ce0${_scopeId}>\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0442\u0430\u0432\u043A\u0443:</p><div class="auction__bet-box" data-v-bda15ce0${_scopeId}><input type="text" class="auction__bet-input" value="2458" data-v-bda15ce0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          color: "green",
          text: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443",
          class: "auction__bet-btn"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="auction__text-box" data-v-bda15ce0${_scopeId}><p class="auction__text" data-v-bda15ce0${_scopeId}>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u044B\u043B\u0430: <span class="auction__text-value" data-v-bda15ce0${_scopeId}>2458</span></p><p class="auction__text" data-v-bda15ce0${_scopeId}>\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0433: <span class="auction__text-value" data-v-bda15ce0${_scopeId}>50</span></p></div></div></div>`);
      } else {
        return [
          createVNode("h2", { class: "heading2 auction__lot-title" }, "\u041B\u043E\u0442"),
          createVNode("div", { class: "auction__lot-grid" }, [
            createVNode("div", { class: "auction__lot-img-box" }, [
              createVNode("img", {
                src: "",
                format: "avif,webp",
                densities: "x1 x2",
                class: "auction__lot-img"
              })
            ]),
            createVNode("div", { class: "auction__lot-content" }, [
              createVNode("p", { class: "auction__big-text" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430"),
              createVNode("p", { class: "auction__text" }, "\u0414\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043B\u043E\u0442\u0435\u0440\u0435\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:"),
              createVNode(_component_Counter, { class: "auction__counter" }),
              createVNode("p", { class: "auction__text" }, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0442\u0430\u0432\u043A\u0443:"),
              createVNode("div", { class: "auction__bet-box" }, [
                createVNode("input", {
                  type: "text",
                  class: "auction__bet-input",
                  value: "2458"
                }),
                createVNode(_component_Button, {
                  color: "green",
                  text: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443",
                  class: "auction__bet-btn"
                })
              ]),
              createVNode("div", { class: "auction__text-box" }, [
                createVNode("p", { class: "auction__text" }, [
                  createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u044B\u043B\u0430: "),
                  createVNode("span", { class: "auction__text-value" }, "2458")
                ]),
                createVNode("p", { class: "auction__text" }, [
                  createTextVNode("\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0433: "),
                  createVNode("span", { class: "auction__text-value" }, "50")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Panel, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="heading2 auction__lot-title auction__lot-title--users" data-v-bda15ce0${_scopeId}>\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438</h2>`);
        _push2(ssrRenderComponent(_component_PerfectScrollbar, { class: "auction__user-list" }, {
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
          createVNode("h2", { class: "heading2 auction__lot-title auction__lot-title--users" }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"),
          createVNode(_component_PerfectScrollbar, { class: "auction__user-list" }, {
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bda15ce0"]]);

export { auction as default };
//# sourceMappingURL=auction-4825e62d.mjs.map
