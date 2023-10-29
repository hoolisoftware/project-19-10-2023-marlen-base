import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useInfiniteQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { u as useBaseQuery } from './index-93da1471.mjs';
import { S as SERVER_URL } from './config-5bff1946.mjs';
import { _ as _export_sfc, M as MediumButton } from '../server.mjs';
import { m as modalStore } from './modal-33f1e527.mjs';
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

function useReviewsStats() {
  return useBaseQuery(["reviews-stats"], "reviews/stats/");
}
function useReviews() {
  return useInfiniteQuery({
    queryKey: ["reviews"],
    queryFn: async ({
      pageParam = 1
    }) => {
      const response = await axios.get(`${SERVER_URL}/api/reviews/`, {
        params: {
          page: pageParam
        }
      });
      return await response.data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data.page + 1;
    },
    onSuccess: (data) => console.log(data.pages),
    onError: (e) => console.log(e)
  });
}
function formatIsoDate(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const customFormattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return customFormattedDate;
}
const _sfc_main$2 = {
  name: "review",
  props: {
    avatar: {
      type: String,
      required: true
    },
    text: {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "review" }, _attrs))} data-v-71c3aafa><div class="review-top" data-v-71c3aafa><div class="review-user" data-v-71c3aafa><img${ssrRenderAttr("src", $props.avatar)} width="190" height="190" alt="\u0410\u0432\u0430\u0442\u0430\u0440" data-v-71c3aafa><div class="review-info" data-v-71c3aafa><div class="review-info_user" data-v-71c3aafa>${ssrInterpolate($props.name)}</div><div class="review-details_date" data-v-71c3aafa>${ssrInterpolate($props.date)}</div></div></div><div class="review-details" data-v-71c3aafa><div class="${ssrRenderClass($props.type === "positive" ? "review-details_icon" : "review-details_icon__red")}" data-v-71c3aafa>`);
  if ($props.type === "positive") {
    _push(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-71c3aafa><path d="M9.65432 14.6668V26.6668H7.50766C6.30766 26.6668 5.34766 25.7068 5.34766 24.5202V16.8268C5.34766 15.6402 6.32099 14.6668 7.50766 14.6668H9.65432ZM24.6676 12.6668H18.2943V8.00016C18.2943 6.5335 17.0943 5.3335 15.641 5.3335H15.521C14.9876 5.3335 14.5076 5.6535 14.2943 6.14683L10.6543 14.6668V26.6668H22.921C23.8943 26.6668 24.721 25.9735 24.8943 25.0135L26.6543 15.0135C26.8676 13.7868 25.9343 12.6668 24.681 12.6668H24.6676Z" fill="#68B159" data-v-71c3aafa></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type === "negative") {
    _push(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-71c3aafa><path d="M9.65432 17.3332V5.33317H7.50766C6.30766 5.33317 5.34766 6.29317 5.34766 7.47984V15.1732C5.34766 16.3598 6.32099 17.3332 7.50766 17.3332H9.65432ZM24.6676 19.3332H18.2943V23.9998C18.2943 25.4665 17.0943 26.6665 15.641 26.6665H15.521C14.9876 26.6665 14.5076 26.3465 14.2943 25.8532L10.6543 17.3332V5.33317H22.921C23.8943 5.33317 24.721 6.0265 24.8943 6.98651L26.6543 16.9865C26.8676 18.2132 25.9343 19.3332 24.681 19.3332H24.6676Z" fill="#D34A4A" data-v-71c3aafa></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="review-body" data-v-71c3aafa>${ssrInterpolate($props.text)}</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reviews/review.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-71c3aafa"]]);
const __default__$1 = {
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  setup(__props) {
    const { data, isLoading } = useReviewsStats();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stat" }, _attrs))} data-v-bb0a1833><div class="stat-title" data-v-bb0a1833>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</div><div class="stat-main" data-v-bb0a1833><div class="stat-main_item" data-v-bb0a1833>\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445: <span class="stat-main_item__positive" data-v-bb0a1833>${ssrInterpolate(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : (_a = unref(data)) == null ? void 0 : _a.data.positive_reviews)}</span></div><div class="stat-main_item" data-v-bb0a1833>\u041D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0445: <span class="stat-main_item__negative" data-v-bb0a1833>${ssrInterpolate(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : (_b = unref(data)) == null ? void 0 : _b.data.negative_reviews)}</span></div></div><div class="stat-line" data-v-bb0a1833><div data-v-bb0a1833></div><div data-v-bb0a1833></div></div><div class="stat-description" data-v-bb0a1833><p data-v-bb0a1833>\u0410 \u0447\u0442\u043E \u0434\u0443\u043C\u0430\u0435\u0448\u044C \u0442\u044B \u043E \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435?</p><p data-v-bb0a1833>\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u0447\u0435\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0437\u044B\u0432 \u043E \u043D\u0430\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438 <span data-v-bb0a1833>1 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043A\u0435\u0439\u0441</span></p></div><div data-v-bb0a1833>`);
      _push(ssrRenderComponent(MediumButton, { text: "\u041D\u0410\u041F\u0418\u0421\u0410\u0422\u042C \u041E\u0422\u0417\u042B\u0412" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reviews/review-stats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const reviewStats = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb0a1833"]]);
const __default__ = {
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const { data, fetchNextPage, isLoading } = useReviews();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-23e520a4>`);
      _push(ssrRenderComponent(titleSection, {
        text: "\u041E\u0442\u0437\u044B\u0432\u044B",
        info: `${(_a = unref(data)) == null ? void 0 : _a.pages[0].data.count} \u043E\u0442\u0437\u044B\u0432\u043E\u0432`
      }, null, _parent));
      _push(`<div class="reviews" data-v-23e520a4>`);
      if ((_b = unref(data)) == null ? void 0 : _b.pages) {
        _push(`<div class="reviews-list" data-v-23e520a4><!--[-->`);
        ssrRenderList((_c = unref(data)) == null ? void 0 : _c.pages, (page) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(page.data.reviews, (review2, index) => {
            _push(ssrRenderComponent(review2, {
              avatar: review2.author.photo_url,
              name: `${review2.author.first_name} ${review2.author.last_name}`,
              text: review2.text,
              source: "vk",
              date: unref(formatIsoDate)(review2.created_at),
              type: review2.is_positive ? "positive" : "negative",
              key: index
            }, null, _parent));
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]-->`);
        if ((_d = unref(data).pages[Object.keys(unref(data).pages).length - 1].data) == null ? void 0 : _d.has_next) {
          _push(ssrRenderComponent(MediumButton, {
            text: "\u0423\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0449\u0451",
            onClick: unref(fetchNextPage)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(isLoading)) {
        _push(`<div data-v-23e520a4> Loading... </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="reviews-stat" data-v-23e520a4>`);
      _push(ssrRenderComponent(reviewStats, null, null, _parent));
      _push(`<div data-v-23e520a4>`);
      _push(ssrRenderComponent(MediumButton, {
        text: "\u0412\u0441\u0435",
        border: _ctx.selectedOption !== "all"
      }, null, _parent));
      _push(`</div><div data-v-23e520a4>`);
      _push(ssrRenderComponent(MediumButton, {
        text: "\u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435",
        border: _ctx.selectedOption !== "positive"
      }, null, _parent));
      _push(`</div><div data-v-23e520a4>`);
      _push(ssrRenderComponent(MediumButton, {
        text: "\u0422\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435",
        border: _ctx.selectedOption !== "negative"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23e520a4"]]);

export { reviews as default };
//# sourceMappingURL=reviews-8e2f8ffa.mjs.map
