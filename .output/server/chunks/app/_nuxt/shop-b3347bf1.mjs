import { _ as _export_sfc, M as MediumButton, t as themeStore } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  props: {
    title: String,
    image: String,
    cost: Number
  },
  components: { mediumButton: MediumButton },
  name: "card",
  computed: {
    theme() {
      return this.theme.isDarkTheme() ? "dark" : "light";
    }
  },
  data() {
    return {
      theme: themeStore()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_medium_button = resolveComponent("medium-button");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "case",
    "data-theme": $data.theme
  }, _attrs))} data-v-2d00acd1><div class="case-image" data-v-2d00acd1><img${ssrRenderAttr("src", $props.image)} alt="\u041F\u0440\u0435\u0434\u043C\u0435\u0442" data-v-2d00acd1></div><div class="case-title" data-v-2d00acd1>${ssrInterpolate($props.title)}</div><div class="case-bottom" data-v-2d00acd1><div class="case-cost" data-v-2d00acd1><div data-v-2d00acd1>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C</div><div data-v-2d00acd1><img alt="moon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKrSURBVHgBTZLNTxNBGMaf2Zn9XpZtqSKosVHESgjGoImJGjEa9WiI8WRiwBhvHPDGyYSrCd70hvgPePHjwsEEJSIq8hW+LIIUKf2i3ZbtbtttHQ8QJ5lkMnmed+b5vS/Bf2thYqLBOGT2qZJ/hyB50sktEsXUZjf/lMamZueHenqere1pyd5henz0QUv7macicy1vdwWKsYGKayPz6xvUBg1UPp7+PC08vnmzf2TfOPVx5H5b5/WXmbUZMKyjrqkOTnYZTHbgFRzktuOwcx6OnTmLxZ+B3otd/cPk/evn4a4bVyfjC+Oh+mABcr0BUfGRWf0BQWS8bA1KkMJO5hFbSOD4ua5seruhhYXD1b7d1HAIXh6S2YRyMc+NMiBwS7UGQVFQcor86zqYRLGzNmMJ0oE+FrScK5loAgdaGrExuQSByAhfbOUhBEhGEOnYFrLROHyfAmUXqysZHI6wbqFc2u3wHB+EVnGo4yCIpMKO2/A9BYnoNuJz65DUemS3UihkbFSKJbiZbCtz8imUSy6HUELND/G9jJVPq/CcCoSqD9d2UdhIwDraxIHZ8HJFXqRAWXxxK0prlVO5GOUXX7EVTfJsPhipoeRWUHbKCDWb2NlMQLUM3gYflPhz9FZHsNlQzMtuNontWAZWUOYvAdlUHjJn1Nga4MIqRE1GjVTAGEVVk9/S8+2RhYDoPNxNpWVaq2KH50tz9JougYgCCjkHii5Cs2RQRkBU3QtGmu/S0S+r+UijXqQl71YuX4Z5UIXBapBVCk0TYSgURK6HFDRAJQK7enrg0u0X7/ZH7sm9toHIUX3wSDgg6KYISZEgqgxag85pD8Kxv7ux3/GBts5HQ//0dM/4YSY5dq3dfOUxEtAtKSRpsqlYTRDqDid88cTw/BLp7bzQ/WZP/xcxCyDDiOREJwAAAABJRU5ErkJggg==" data-v-2d00acd1><span data-v-2d00acd1>${ssrInterpolate($props.cost)}</span></div></div>`);
  _push(ssrRenderComponent(_component_medium_button, { text: "\u041A\u0443\u043F\u0438\u0442\u044C" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/shop-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const shopCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2d00acd1"]]);
const _sfc_main = {
  name: "shop",
  head: {
    title: "Kleewish | \u041C\u0430\u0433\u0430\u0437\u0438\u043D"
  },
  components: {
    shopCard,
    titleSection
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_title_section = resolveComponent("title-section");
  const _component_shop_card = resolveComponent("shop-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-0c8b9dfd>`);
  _push(ssrRenderComponent(_component_title_section, { text: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D" }, null, _parent));
  _push(`<div class="shop" data-v-0c8b9dfd>`);
  _push(ssrRenderComponent(_component_shop_card, {
    title: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442",
    image: "/img/cases/case_1.png",
    cost: 200
  }, null, _parent));
  _push(ssrRenderComponent(_component_shop_card, {
    title: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442",
    image: "/img/cases/case_1.png",
    cost: 200
  }, null, _parent));
  _push(ssrRenderComponent(_component_shop_card, {
    title: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442",
    image: "/img/cases/case_1.png",
    cost: 200
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0c8b9dfd"]]);

export { shop as default };
//# sourceMappingURL=shop-b3347bf1.mjs.map
