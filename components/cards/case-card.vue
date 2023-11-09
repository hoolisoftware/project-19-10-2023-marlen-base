<script setup>
import { useThemeStore } from "~/store/themeNew";

const theme = useThemeStore()

</script>

<template>
  <div :class="'case' + (!showBorder ? ' case-wb' : '')" :data-theme="theme.darkTheme ? 'dark' : 'light'">
    <div>
      <div :class="'case-image' + (!showBorder ? ' case-image_wb' : '')">
        <img format="webp" :quality="showBorder ? 90 : 100" :width="showBorder ? 190 : 300" :height="showBorder ? 190 : 300"
          :src="image" alt="Кейс" />
      </div>
    </div>
    <div class="case-title">{{ title }}</div>
    <div class="case-bottom">
      <div class="case-cost">
        <div>Стоимость</div>
        <div>
          <nuxt-img alt="moon" src="/img/mor.png" />
          <span>{{ cost }}</span>
        </div>
      </div>
      <medium-button text="Открыть" v-on:click="showBorder ? false : modals.showModal('caseOpen')" />
    </div>
  </div>
</template>

<script>
import mediumButton from "@/components/buttons/medium-button.vue";
import { modalStore } from "~/store/modal";
export default {
  props: {
    title: String,
    image: String,
    cost: Number,
    showBorder: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: { mediumButton },
  name: "card",
  data() {
    return {
      activeMenu: false,
      modals: modalStore()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.case {
  display: inline-block;
  flex-direction: column;
  width: 314px;
  height: max-content;
  box-sizing: border-box;
  padding: 15px 20px;
  background: var(--case-background);
  border: var(--case-border);
  border-radius: 28px;
  gap: 10px;
  user-select: none;
  text-align: center;

  a {
    color: var(--modal-text);
  }

  &:hover>.case-image>img {
    transform: scale(1.06);
  }

  &-wb {
    background: none;
    border: none;
    width: auto;
  }

  &-title {
    display: flex;
    width: 100%;
    justify-content: center;
    font-style: normal;
    color: var(--modal-text);
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }

  &-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-image {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 200px;
    background: var(--case-image);
    border-radius: 20px;

    & img {
      max-width: 190px;
      max-height: 190px;
      transition: 0.3s;
    }

    &_wb {
      width: 340px;
      height: 340px;

      & img {
        max-width: 340px;
        max-height: 340px;
      }
    }
  }

  &-cost {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & div:nth-child(1) {
      display: flex;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #A6A6A6;
      padding-right: 15px;
    }

    & div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 5px;
      font-style: normal;
      font-weight: 700;
      color: var(--modal-text);
      font-size: 18px;
      line-height: 22px;

      & img {
        width: 22px;
        height: 22px;
      }
    }
  }
}</style>
