import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { d as defineStore, _ as _export_sfc, M as MediumButton } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { t as titleSection } from './title-section-a2280244.mjs';
import { m as modalStore } from './modal-33f1e527.mjs';
import axios from 'axios';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@tanstack/vue-query';

const _sfc_main$1 = {
  name: "inventory-item"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-dd0c5dc5><div class="item-image" data-v-dd0c5dc5><img alt="item" src="data:image/png;base64,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" data-v-dd0c5dc5></div><div class="item-overlay" data-v-dd0c5dc5><div class="item-overlay_button" data-v-dd0c5dc5>\u0412\u044B\u0432\u0435\u0441\u0442\u0438</div><div class="item-overlay_button" data-v-dd0c5dc5>\u041F\u0440\u043E\u0434\u0430\u0442\u044C</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/inventory-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const inventoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-dd0c5dc5"]]);
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true
});
api.interceptors.request.use(
  (config) => {
    const authStores = authStore();
    if (authStores.token) {
      config.headers["Authorization"] = `KWT ${authStores.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const authStore = defineStore({
  id: "authStore",
  state: () => ({
    token: null,
    user: null,
    stats: null
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUser(user) {
      this.user = user;
    },
    setStats(stats) {
      this.stats = stats;
    },
    async getUser() {
      const response = await api.get("user/details", {
        headers: {
          Authorization: `KWT ${this.token}`
        }
      });
      this.setUser(response.data.data.user);
      return response;
    },
    async getStats(user) {
      const response = await api.get("user/stats/", { user });
      this.setStats(response.data.data.stats);
      return response;
    }
  }
});
const _imports_0$1 = "" + publicAssetsURL("img/icons/moon.png");
const _imports_0 = "" + publicAssetsURL("img/icons/crystall.png");
const _sfc_main = {
  name: "profile",
  head: {
    title: "Kleewish | \u041F\u0440\u043E\u0444\u0438\u043B\u044C"
  },
  components: {
    mediumButton: MediumButton,
    inventoryItem,
    titleSection
  },
  data() {
    return {
      activeTab: 0,
      otherProfile: 0,
      modals: modalStore(),
      authStores: authStore()
    };
  },
  created() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_title_section = resolveComponent("title-section");
  const _component_medium_button = resolveComponent("medium-button");
  const _component_inventory_item = resolveComponent("inventory-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-219ba7ca>`);
  _push(ssrRenderComponent(_component_title_section, { text: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" }, null, _parent));
  _push(`<div class="profile" data-v-219ba7ca><div class="profile-info" data-v-219ba7ca><div class="profile-avatar" data-v-219ba7ca><img${ssrRenderAttr("src", $data.authStores.user ? $data.authStores.user.photo_url : "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg")} alt="\u0410\u0432\u0430\u0442\u0430\u0440" data-v-219ba7ca></div><div class="profile-name" data-v-219ba7ca>${ssrInterpolate($data.authStores.user ? `${$data.authStores.user.first_name} ${$data.authStores.user.last_name}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</div>`);
  if (_ctx.$route.params.otherProfile) {
    _push(`<div class="profile-contacts" data-v-219ba7ca><div data-v-219ba7ca><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-219ba7ca><g clip-path="url(#clip0_214_6157)" data-v-219ba7ca><path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#2787F5" data-v-219ba7ca></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.66727 10H6.33339C5.66658 10 5.5332 10.3139 5.5332 10.6599C5.5332 11.2779 6.32445 14.3432 9.21733 18.3972C11.146 21.1659 13.8631 22.6666 16.3357 22.6666C17.8193 22.6666 18.0028 22.3333 18.0028 21.7591V19.6666C18.0028 18.9999 18.1433 18.8669 18.613 18.8669C18.9592 18.8669 19.5526 19.0399 20.9373 20.3748C22.5197 21.9569 22.7806 22.6666 23.6706 22.6666H26.0045C26.6714 22.6666 27.0048 22.3333 26.8125 21.6755C26.602 21.0199 25.8465 20.0686 24.8439 18.9411C24.2999 18.2984 23.484 17.6062 23.2367 17.2601C22.8906 16.8152 22.9895 16.6174 23.2367 16.2219C23.2367 16.2219 26.0802 12.2172 26.3769 10.8577C26.5252 10.3633 26.3769 10 25.6711 10H23.3372C22.7438 10 22.4702 10.3139 22.3218 10.6599C22.3218 10.6599 21.135 13.5521 19.4537 15.4309C18.9097 15.9747 18.6625 16.1478 18.3657 16.1478C18.2174 16.1478 18.0026 15.9747 18.0026 15.4804V10.8577C18.0026 10.2644 17.8305 10 17.3358 10H13.6683C13.2975 10 13.0745 10.2753 13.0745 10.5363C13.0745 11.0987 13.9151 11.2284 14.0018 12.8105V16.2466C14.0018 16.9999 13.8656 17.1366 13.569 17.1366C12.7778 17.1366 10.8531 14.2314 9.7117 10.9071C9.48814 10.261 9.26377 10 8.66727 10Z" fill="white" data-v-219ba7ca></path></g><defs data-v-219ba7ca><clipPath id="clip0_214_6157" data-v-219ba7ca><rect width="32" height="32" fill="white" data-v-219ba7ca></rect></clipPath></defs></svg></div><div data-v-219ba7ca><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-219ba7ca><g clip-path="url(#clip0_214_6161)" data-v-219ba7ca><path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#26A5E4" data-v-219ba7ca></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.24335 15.8309C11.9077 13.7988 15.018 12.459 16.5742 11.8118C21.0175 9.96363 21.9409 9.64257 22.5426 9.63195C22.675 9.62963 22.9709 9.66245 23.1626 9.81801C23.447 10.0488 23.4486 10.5496 23.417 10.8811C23.1762 13.4111 22.1344 19.5507 21.6043 22.3843C21.38 23.5833 20.9384 23.9854 20.5109 24.0247C19.5817 24.1102 18.8762 23.4106 17.9762 22.8208C16.568 21.8976 15.7725 21.323 14.4055 20.4223C12.8259 19.3813 13.8499 18.8091 14.7502 17.8741C14.9858 17.6294 19.0796 13.9057 19.1589 13.5679C19.1688 13.5256 19.178 13.3681 19.0844 13.285C18.9909 13.2019 18.8528 13.2303 18.7532 13.2529C18.6119 13.2849 16.3623 14.7719 12.0043 17.7136C11.3657 18.1521 10.7874 18.3658 10.2692 18.3546C9.69785 18.3423 8.59898 18.0316 7.78204 17.766C6.78004 17.4403 5.98367 17.2681 6.05304 16.7149C6.08917 16.4268 6.48592 16.1321 7.24335 15.8309Z" fill="white" data-v-219ba7ca></path></g><defs data-v-219ba7ca><clipPath id="clip0_214_6161" data-v-219ba7ca><rect width="32" height="32" fill="white" data-v-219ba7ca></rect></clipPath></defs></svg></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.$route.params.otherProfile) {
    _push(`<div class="profile-cash" data-v-219ba7ca><div class="profile-cash_left" data-v-219ba7ca><div data-v-219ba7ca>\u0411\u0430\u043B\u0430\u043D\u0441</div><div data-v-219ba7ca><img alt="moon"${ssrRenderAttr("src", _imports_0$1)} data-v-219ba7ca><span data-v-219ba7ca>${ssrInterpolate($data.authStores.user ? `${$data.authStores.user.balance}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</span></div></div><div class="profile-cash-button" data-v-219ba7ca>`);
    _push(ssrRenderComponent(_component_medium_button, {
      color: "green",
      text: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="profile-stat" data-v-219ba7ca><h2 data-v-219ba7ca>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</h2><div class="profile-stat_item" data-v-219ba7ca><div data-v-219ba7ca>\u041E\u0442\u043A\u0440\u044B\u0442\u043E \u043A\u0435\u0439\u0441\u043E\u0432</div><div data-v-219ba7ca>${ssrInterpolate($data.authStores.stats ? `${$data.authStores.stats.cases_opened}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</div></div><div class="profile-stat_item" data-v-219ba7ca><div data-v-219ba7ca>\u0412\u044B\u0431\u0438\u0442\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443</div><div data-v-219ba7ca><img${ssrRenderAttr("src", _imports_0$1)} alt="\u041C\u0443\u043D" data-v-219ba7ca>${ssrInterpolate($data.authStores.stats ? `${$data.authStores.stats.case_opened_mora}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</div></div><div class="profile-stat_item" data-v-219ba7ca><div data-v-219ba7ca>\u0412\u044B\u0431\u0438\u0442\u043E \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432</div><div data-v-219ba7ca><img${ssrRenderAttr("src", _imports_0)} alt="\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432" data-v-219ba7ca> ${ssrInterpolate($data.authStores.stats ? `${$data.authStores.stats.crystals_obtained}` : "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")}</div></div></div></div><div class="inventory" data-v-219ba7ca><div class="inventory-top" data-v-219ba7ca><div class="inventory-top_title" data-v-219ba7ca><h2 data-v-219ba7ca>\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</h2><span data-v-219ba7ca>120 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432</span></div>`);
  if (!_ctx.$route.params.otherProfile) {
    _push(`<div class="inventory-top_actions" data-v-219ba7ca> \u041F\u0440\u043E\u0434\u0430\u0442\u044C \u0432\u0441\u0451 </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="inventory-tabs" data-v-219ba7ca><div class="${ssrRenderClass("inventory-tabs_active inventory-tabs_active__" + $data.activeTab)}" data-v-219ba7ca></div><div class="${ssrRenderClass("inventory-tabs_item" + ($data.activeTab === 0 ? " inventory-tabs_item__active" : ""))}" data-v-219ba7ca>\u0412\u0441\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B</div><div class="${ssrRenderClass("inventory-tabs_item" + ($data.activeTab === 1 ? " inventory-tabs_item__active" : ""))}" data-v-219ba7ca>\u0412\u044B\u0432\u0435\u0434\u0435\u043D\u043E</div></div><div class="inventory-items" data-v-219ba7ca>`);
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(ssrRenderComponent(_component_inventory_item, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Game = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-219ba7ca"]]);
const profile = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Game
});

export { Game as G, _imports_0 as _, authStore as a, api as b, profile as p };
//# sourceMappingURL=profile-d1222349.mjs.map
