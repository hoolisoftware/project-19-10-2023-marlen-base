<template>
<div :class="'button ' + (color ? color:'') + (border ? ' button-bordered':'')" :data-theme="theme">
  {{text}}
</div>
</template>

<script>
import {themeStore} from "~/store/theme";

export default {
  name: "medium-button",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    border: {
      type: Boolean,
      required: false
    }
  },
computed: {

    theme() {
        return this.store.isDarkTheme ? 'dark':'light';
    }
},
    data() {
        return {
            activeMenu: false,
            store: themeStore()
        }
    },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: max-content;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  padding: 15px 45px;
  background: var(--button-background);
  color: var(--button-color);
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  &-bordered {
    background: none;
    border: var(--case-border);
    color: var(--modal-text);
    font-weight: 500;
    opacity: 0.5;
  }
  & a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
}
.green {
  background: #30AD4B;
  color: #ffffff;
}
</style>
