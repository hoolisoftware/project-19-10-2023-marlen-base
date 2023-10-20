import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  name: "title-section",
  props: {
    icon: {
      type: String,
      require: false
    },
    text: {
      type: String,
      require: true
    },
    info: {
      type: String,
      require: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-4fa19cd6>`);
  if ($props.icon) {
    _push(`<div class="title-icon" data-v-4fa19cd6>`);
    if ($props.icon === "inadzuma") {
      _push(ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        src: "/img/icons/inadzuma.png",
        alt: "\u0418\u043D\u0430\u0434\u0437\u0443\u043C\u0430"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($props.icon === "liue") {
      _push(ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        src: "/img/icons/li_ue.png",
        alt: "\u041B\u0438 \u042E\u042D"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($props.icon === "monshtadt") {
      _push(ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        src: "/img/icons/monshtadt.png",
        alt: "\u041C\u043E\u043D\u0448\u0442\u0430\u0434\u0442"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($props.icon === "sumeru") {
      _push(ssrRenderComponent(_component_nuxt_img, {
        format: "webp",
        src: "/img/icons/sumeru.png",
        alt: "\u0421\u0443\u043C\u0435\u0440\u0443"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="title-text" data-v-4fa19cd6>${ssrInterpolate($props.text)}</div>`);
  if ($props.info) {
    _push(`<div class="title-info" data-v-4fa19cd6>${ssrInterpolate($props.info)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/title-section.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const titleSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4fa19cd6"]]);

export { titleSection as t };
//# sourceMappingURL=title-section-a2280244.mjs.map
