import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useRoute, M as MediumButton } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1, a as _imports_0, b as authStore } from './crystall-71ace51f.mjs';
import { u as useBaseQuery } from './index-93da1471.mjs';
import { t as titleSection } from './title-section-a2280244.mjs';
import { m as modalStore } from './modal-33f1e527.mjs';
import { S as SERVER_URL } from './config-5bff1946.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'axios';

function useUserProfile(id) {
  return useBaseQuery(["user", id], `user/details/${id}`);
}
function useUserStats(id) {
  return useBaseQuery(["stats", id], `user/stats/${id}`);
}
function useUserInventory(id) {
  return useBaseQuery(["inventory", id], `user/inventory/${id}`);
}
const _sfc_main$1 = {
  name: "profile-item",
  props: {
    image: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-ea643a0d><div class="item-image" data-v-ea643a0d><img alt="item"${ssrRenderAttr("src", $props.image)} data-v-ea643a0d></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/profile-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const profileItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea643a0d"]]);
function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
const __default__ = {
  name: "user_profile",
  head: {
    title: "Kleewish | \u041F\u0440\u043E\u0444\u0438\u043B\u044C"
  },
  components: {
    mediumButton: MediumButton,
    profileItem,
    titleSection
  },
  data() {
    return {
      activeTab: 0,
      otherProfile: 1,
      modals: modalStore(),
      authStores: authStore()
    };
  },
  created() {
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    const { data: profileData, isLoading: profileIsLoading, isError: profileIsError } = useUserProfile(String(id));
    const { data: statsData, isLoading: statsIsLoading, isError: statsIsError } = useUserStats(String(id));
    const { data: inventoryData, isLoading: inventoryIsLoading, isError: inventoryIsError } = useUserInventory(String(id));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-23fc8799>`);
      if (unref(profileIsLoading)) {
        _push(`<div data-v-23fc8799> Loading... </div>`);
      } else if (unref(profileIsError)) {
        _push(`<div data-v-23fc8799> Error... </div>`);
      } else {
        _push(`<div data-v-23fc8799>`);
        _push(ssrRenderComponent(titleSection, { text: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" }, null, _parent));
        _push(`<div class="profile" data-v-23fc8799><div class="profile-info" data-v-23fc8799><div class="profile-avatar" data-v-23fc8799><img${ssrRenderAttr("src", (_a = unref(profileData)) == null ? void 0 : _a.data.user.photo_url)} alt="\u0410\u0432\u0430\u0442\u0430\u0440" data-v-23fc8799></div><div class="profile-name" data-v-23fc8799>${ssrInterpolate(((_b = unref(profileData)) == null ? void 0 : _b.data.user.first_name) + (((_c = unref(profileData)) == null ? void 0 : _c.data.user.last_name) ? (_d = unref(profileData)) == null ? void 0 : _d.data.user.last_name : ""))}</div>`);
        if (_ctx.$route.params.otherProfile) {
          _push(`<div class="profile-contacts" data-v-23fc8799><div data-v-23fc8799><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-23fc8799><g clip-path="url(#clip0_214_6157)" data-v-23fc8799><path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#2787F5" data-v-23fc8799></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.66727 10H6.33339C5.66658 10 5.5332 10.3139 5.5332 10.6599C5.5332 11.2779 6.32445 14.3432 9.21733 18.3972C11.146 21.1659 13.8631 22.6666 16.3357 22.6666C17.8193 22.6666 18.0028 22.3333 18.0028 21.7591V19.6666C18.0028 18.9999 18.1433 18.8669 18.613 18.8669C18.9592 18.8669 19.5526 19.0399 20.9373 20.3748C22.5197 21.9569 22.7806 22.6666 23.6706 22.6666H26.0045C26.6714 22.6666 27.0048 22.3333 26.8125 21.6755C26.602 21.0199 25.8465 20.0686 24.8439 18.9411C24.2999 18.2984 23.484 17.6062 23.2367 17.2601C22.8906 16.8152 22.9895 16.6174 23.2367 16.2219C23.2367 16.2219 26.0802 12.2172 26.3769 10.8577C26.5252 10.3633 26.3769 10 25.6711 10H23.3372C22.7438 10 22.4702 10.3139 22.3218 10.6599C22.3218 10.6599 21.135 13.5521 19.4537 15.4309C18.9097 15.9747 18.6625 16.1478 18.3657 16.1478C18.2174 16.1478 18.0026 15.9747 18.0026 15.4804V10.8577C18.0026 10.2644 17.8305 10 17.3358 10H13.6683C13.2975 10 13.0745 10.2753 13.0745 10.5363C13.0745 11.0987 13.9151 11.2284 14.0018 12.8105V16.2466C14.0018 16.9999 13.8656 17.1366 13.569 17.1366C12.7778 17.1366 10.8531 14.2314 9.7117 10.9071C9.48814 10.261 9.26377 10 8.66727 10Z" fill="white" data-v-23fc8799></path></g><defs data-v-23fc8799><clipPath id="clip0_214_6157" data-v-23fc8799><rect width="32" height="32" fill="white" data-v-23fc8799></rect></clipPath></defs></svg></div><div data-v-23fc8799><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-23fc8799><g clip-path="url(#clip0_214_6161)" data-v-23fc8799><path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#26A5E4" data-v-23fc8799></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.24335 15.8309C11.9077 13.7988 15.018 12.459 16.5742 11.8118C21.0175 9.96363 21.9409 9.64257 22.5426 9.63195C22.675 9.62963 22.9709 9.66245 23.1626 9.81801C23.447 10.0488 23.4486 10.5496 23.417 10.8811C23.1762 13.4111 22.1344 19.5507 21.6043 22.3843C21.38 23.5833 20.9384 23.9854 20.5109 24.0247C19.5817 24.1102 18.8762 23.4106 17.9762 22.8208C16.568 21.8976 15.7725 21.323 14.4055 20.4223C12.8259 19.3813 13.8499 18.8091 14.7502 17.8741C14.9858 17.6294 19.0796 13.9057 19.1589 13.5679C19.1688 13.5256 19.178 13.3681 19.0844 13.285C18.9909 13.2019 18.8528 13.2303 18.7532 13.2529C18.6119 13.2849 16.3623 14.7719 12.0043 17.7136C11.3657 18.1521 10.7874 18.3658 10.2692 18.3546C9.69785 18.3423 8.59898 18.0316 7.78204 17.766C6.78004 17.4403 5.98367 17.2681 6.05304 16.7149C6.08917 16.4268 6.48592 16.1321 7.24335 15.8309Z" fill="white" data-v-23fc8799></path></g><defs data-v-23fc8799><clipPath id="clip0_214_6161" data-v-23fc8799><rect width="32" height="32" fill="white" data-v-23fc8799></rect></clipPath></defs></svg></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(statsIsLoading)) {
          _push(`<div data-v-23fc8799> Loading... </div>`);
        } else if (unref(statsIsError)) {
          _push(`<div data-v-23fc8799> Error... </div>`);
        } else {
          _push(`<div data-v-23fc8799><div class="profile-stat" data-v-23fc8799><h2 data-v-23fc8799>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</h2><div class="profile-stat_item" data-v-23fc8799><div data-v-23fc8799>\u041E\u0442\u043A\u0440\u044B\u0442\u043E \u043A\u0435\u0439\u0441\u043E\u0432</div><div data-v-23fc8799>${ssrInterpolate(`${(_e = unref(statsData)) == null ? void 0 : _e.data.stats.cases_opened}`)}</div></div><div class="profile-stat_item" data-v-23fc8799><div data-v-23fc8799>\u0412\u044B\u0431\u0438\u0442\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443</div><div data-v-23fc8799><img${ssrRenderAttr("src", _imports_0$1)} alt="\u041C\u0443\u043D" data-v-23fc8799>${ssrInterpolate(`${(_f = unref(statsData)) == null ? void 0 : _f.data.stats.case_opened_mora}`)}</div></div><div class="profile-stat_item" data-v-23fc8799><div data-v-23fc8799>\u0412\u044B\u0431\u0438\u0442\u043E \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432</div><div data-v-23fc8799><img${ssrRenderAttr("src", _imports_0)} alt="\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432" data-v-23fc8799> ${ssrInterpolate(`${(_g = unref(statsData)) == null ? void 0 : _g.data.stats.crystals_obtained}`)}</div></div></div></div>`);
        }
        _push(`</div>`);
        if (unref(inventoryIsLoading)) {
          _push(`<div data-v-23fc8799> Loading... </div>`);
        } else if (unref(inventoryIsError)) {
          _push(`<div data-v-23fc8799> Error... </div>`);
        } else {
          _push(`<div data-v-23fc8799><div class="inventory" data-v-23fc8799><div class="inventory-top" data-v-23fc8799><div class="inventory-top_title" data-v-23fc8799><h2 data-v-23fc8799>\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</h2><span data-v-23fc8799>${ssrInterpolate((_h = unref(inventoryData)) == null ? void 0 : _h.data.items.filter((item) => _ctx.activeTab === 0 || item.is_ordered && _ctx.activeTab === 1).length)} ${ssrInterpolate(unref(getNoun)((_i = unref(inventoryData)) == null ? void 0 : _i.data.items.filter((item) => _ctx.activeTab === 0 || item.is_ordered && _ctx.activeTab === 1).length, "\u043F\u0440\u0435\u0434\u043C\u0435\u0442", "\u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430", "\u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432"))}</span></div></div><div class="inventory-tabs" data-v-23fc8799><div class="${ssrRenderClass("inventory-tabs_active inventory-tabs_active__" + _ctx.activeTab)}" data-v-23fc8799></div><div class="${ssrRenderClass("inventory-tabs_item" + (_ctx.activeTab === 0 ? " inventory-tabs_item__active" : ""))}" data-v-23fc8799>\u0412\u0441\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B</div><div class="${ssrRenderClass("inventory-tabs_item" + (_ctx.activeTab === 1 ? " inventory-tabs_item__active" : ""))}" data-v-23fc8799>\u0412\u044B\u0432\u0435\u0434\u0435\u043D\u043E</div></div><div class="inventory-items" data-v-23fc8799><!--[-->`);
          ssrRenderList((_j = unref(inventoryData)) == null ? void 0 : _j.data.items, (profile_item) => {
            _push(`<div data-v-23fc8799>`);
            if (_ctx.activeTab === 0 || _ctx.activeTab === 1 && profile_item.is_ordered) {
              _push(ssrRenderComponent(profileItem, {
                image: unref(SERVER_URL) + profile_item.item.photo_url
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div></div>`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23fc8799"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-c176103e.mjs.map
