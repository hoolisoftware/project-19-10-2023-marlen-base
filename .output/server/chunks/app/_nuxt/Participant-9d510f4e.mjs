import { mergeProps, useSSRContext, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel" }, _attrs))} data-v-9697f500>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Panel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Panel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9697f500"]]);
const _sfc_main$2 = {
  props: {
    maxValue: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup({ value, maxValue, text }) {
    const angle = value / maxValue * 360;
    const circumference = 2 * Math.PI * 31;
    const strokeDasharray = angle / 360 * circumference;
    const strokeArray = `${strokeDasharray}, ${circumference - strokeDasharray}`;
    return {
      strokeArray,
      value,
      text
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "counter-elem" }, _attrs))} data-v-135447bf><svg class="counter-elem__circle" data-v-135447bf><circle cx="32" cy="32" r="31" stroke-width="1.5"${ssrRenderAttr("stroke-dasharray", $setup.strokeArray)} fill="none" data-v-135447bf></circle></svg><p class="counter-elem__value" data-v-135447bf>${ssrInterpolate($setup.value)}</p><p class="counter-elem__text" data-v-135447bf>${ssrInterpolate($setup.text)}</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CounterElem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CounterElem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-135447bf"]]);
const _sfc_main$1 = {
  components: { CounterElem }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CounterElem = resolveComponent("CounterElem");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "counter" }, _attrs))} data-v-9ba35c09>`);
  _push(ssrRenderComponent(_component_CounterElem, {
    value: 2,
    "max-value": 3,
    text: "\u0414\u043D\u0435\u0439"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CounterElem, {
    value: 18,
    "max-value": 24,
    text: "\u0427\u0430\u0441\u043E\u0432"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CounterElem, {
    value: 45,
    "max-value": 60,
    text: "\u041C\u0438\u043D\u0443\u0442"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CounterElem, {
    value: 22,
    "max-value": 60,
    text: "\u0421\u0435\u043A\u0443\u043D\u0434"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9ba35c09"]]);
const _sfc_main = {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    isScoreGreen: {
      type: Boolean
    }
  },
  setup({ ...props }) {
    return { ...props };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user" }, _attrs))} data-v-ad225afd><img${ssrRenderAttr("src", $props.avatar)} format="avif,webp" densities="x1 x2" class="user__avatar" width="45" height="45" data-v-ad225afd><p class="user__name" data-v-ad225afd>${ssrInterpolate($props.name)}</p><p class="${ssrRenderClass([{ "user__score--green": $props.isScoreGreen }, "user__score"])}" data-v-ad225afd>${ssrInterpolate($props.score)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Participant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Participant = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ad225afd"]]);

export { Counter as C, Participant as P, Panel as a };
//# sourceMappingURL=Participant-9d510f4e.mjs.map
