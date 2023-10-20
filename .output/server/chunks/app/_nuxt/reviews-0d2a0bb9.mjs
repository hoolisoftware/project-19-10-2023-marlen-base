import { _ as _export_sfc, M as MediumButton, a as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { m as modalStore } from './modal-33f1e527.mjs';
import { t as titleSection } from './title-section-a2280244.mjs';
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

const _sfc_main$2 = {
  name: "review",
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "review" }, _attrs))} data-v-9a399792><div class="review-top" data-v-9a399792><div class="review-user" data-v-9a399792>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    format: "webp",
    src: $props.avatar,
    width: "190",
    height: "190",
    alt: "\u0410\u0432\u0430\u0442\u0430\u0440"
  }, null, _parent));
  _push(`<div class="review-info" data-v-9a399792><div class="review-info_user" data-v-9a399792>${ssrInterpolate($props.name)}</div><div class="review-details_date" data-v-9a399792>${ssrInterpolate($props.date)}</div></div></div><div class="review-details" data-v-9a399792><div class="${ssrRenderClass($props.type === "positive" ? "review-details_icon" : "review-details_icon__red")}" data-v-9a399792>`);
  if ($props.type === "positive") {
    _push(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9a399792><path d="M9.65432 14.6668V26.6668H7.50766C6.30766 26.6668 5.34766 25.7068 5.34766 24.5202V16.8268C5.34766 15.6402 6.32099 14.6668 7.50766 14.6668H9.65432ZM24.6676 12.6668H18.2943V8.00016C18.2943 6.5335 17.0943 5.3335 15.641 5.3335H15.521C14.9876 5.3335 14.5076 5.6535 14.2943 6.14683L10.6543 14.6668V26.6668H22.921C23.8943 26.6668 24.721 25.9735 24.8943 25.0135L26.6543 15.0135C26.8676 13.7868 25.9343 12.6668 24.681 12.6668H24.6676Z" fill="#68B159" data-v-9a399792></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type === "negative") {
    _push(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9a399792><path d="M9.65432 17.3332V5.33317H7.50766C6.30766 5.33317 5.34766 6.29317 5.34766 7.47984V15.1732C5.34766 16.3598 6.32099 17.3332 7.50766 17.3332H9.65432ZM24.6676 19.3332H18.2943V23.9998C18.2943 25.4665 17.0943 26.6665 15.641 26.6665H15.521C14.9876 26.6665 14.5076 26.3465 14.2943 25.8532L10.6543 17.3332V5.33317H22.921C23.8943 5.33317 24.721 6.0265 24.8943 6.98651L26.6543 16.9865C26.8676 18.2132 25.9343 19.3332 24.681 19.3332H24.6676Z" fill="#D34A4A" data-v-9a399792></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="review-body" data-v-9a399792> \u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430 </div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reviews/review.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-9a399792"]]);
const _sfc_main$1 = {
  name: "review-stats",
  components: {
    mediumButton: MediumButton
  },
  data() {
    return {
      modals: modalStore()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "stat" }, _attrs))} data-v-859b7319><div class="stat-title" data-v-859b7319>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</div><div class="stat-main" data-v-859b7319><div class="stat-main_item" data-v-859b7319>\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445: <span class="stat-main_item__positive" data-v-859b7319>1012</span></div><div class="stat-main_item" data-v-859b7319>\u041D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0445: <span class="stat-main_item__negative" data-v-859b7319>1012</span></div></div><div class="stat-line" data-v-859b7319><div data-v-859b7319></div><div data-v-859b7319></div></div><div class="stat-description" data-v-859b7319><p data-v-859b7319>\u0410 \u0447\u0442\u043E \u0434\u0443\u043C\u0430\u0435\u0448\u044C \u0442\u044B \u043E \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435?</p><p data-v-859b7319>\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u0447\u0435\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0437\u044B\u0432 \u043E \u043D\u0430\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438 <span data-v-859b7319>1 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043A\u0435\u0439\u0441</span></p></div><div data-v-859b7319>`);
  _push(ssrRenderComponent(_component_medium_button, { text: "\u041D\u0410\u041F\u0418\u0421\u0410\u0422\u042C \u041E\u0422\u0417\u042B\u0412" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reviews/review-stats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const reviewStats = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-859b7319"]]);
const _sfc_main = {
  name: "reviews",
  head: {
    title: "Kleewish | \u041E\u0442\u0437\u044B\u0432\u044B"
  },
  components: {
    MediumButton,
    review,
    reviewStats,
    titleSection
  },
  computed: {
    filteredReviews() {
      if (this.selectedOption === "all") {
        return this.reviewList;
      } else if (this.selectedOption === "positive") {
        return this.reviewList.filter((review2) => review2.type === "positive");
      } else if (this.selectedOption === "negative") {
        return this.reviewList.filter((review2) => review2.type === "negative");
      }
    }
  },
  data() {
    return {
      selectedOption: "all",
      reviewList: [
        {
          avatar: "/img/avatars/bukin.jpeg",
          name: "\u0413\u0435\u043D\u0430 \u0411\u0443\u043A\u0438\u043D",
          date: "07.03.2023 15:22",
          text: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
          source: "vk",
          type: "negative"
        },
        {
          avatar: "/img/avatars/avatar.jpeg",
          name: "\u0410\u043D\u043E\u043D\u0438\u043C\u0443\u0441",
          date: "07.03.2023 15:22",
          text: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
          source: "tg",
          type: "positive"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_title_section = resolveComponent("title-section");
  const _component_review = resolveComponent("review");
  const _component_review_stats = resolveComponent("review-stats");
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-21a64c71>`);
  _push(ssrRenderComponent(_component_title_section, {
    text: "\u041E\u0442\u0437\u044B\u0432\u044B",
    info: "1000 \u043E\u0442\u0437\u044B\u0432\u043E\u0432"
  }, null, _parent));
  _push(`<div class="reviews" data-v-21a64c71><div class="reviews-list" data-v-21a64c71><!--[-->`);
  ssrRenderList($options.filteredReviews, (review2, index) => {
    _push(ssrRenderComponent(_component_review, {
      avatar: review2.avatar,
      name: review2.name,
      text: review2.text,
      source: review2.source,
      date: review2.date,
      type: review2.type,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="reviews-stat" data-v-21a64c71>`);
  _push(ssrRenderComponent(_component_review_stats, null, null, _parent));
  _push(`<div data-v-21a64c71>`);
  _push(ssrRenderComponent(_component_medium_button, {
    text: "\u0412\u0441\u0435",
    border: $data.selectedOption !== "all"
  }, null, _parent));
  _push(`</div><div data-v-21a64c71>`);
  _push(ssrRenderComponent(_component_medium_button, {
    text: "\u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435",
    border: $data.selectedOption !== "positive"
  }, null, _parent));
  _push(`</div><div data-v-21a64c71>`);
  _push(ssrRenderComponent(_component_medium_button, {
    text: "\u0422\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435",
    border: $data.selectedOption !== "negative"
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-21a64c71"]]);

export { reviews as default };
//# sourceMappingURL=reviews-0d2a0bb9.mjs.map
