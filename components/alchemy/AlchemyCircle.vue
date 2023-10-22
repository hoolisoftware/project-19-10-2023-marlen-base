<template>
  <div class="circle">
    <div class="circle__box">
      <div class="circle__wrap">
        <div class="circle__panel circle__panel--bottom">
          <nuxt-icon name="plus" class="circle__panel-plus"/>
          <span class="circle__panel-text">Положите предмет</span>
        </div>
        <div class="circle__panel circle__panel--left">
          <nuxt-icon name="plus" class="circle__panel-plus"/>
          <span class="circle__panel-text">Положите предмет</span>
          <div class="circle__panel-img-box">
            <NuxtImg
                src="prize2.png"
                format="avif,webp"
                densities="x1 x2"
                width="84"
                height="84"
                class="circle__panel-img"
            />
          </div>
        </div>
        <div class="circle__panel circle__panel--right">
          <nuxt-icon name="plus" class="circle__panel-plus"/>
          <span class="circle__panel-text">Положите предмет</span>
        </div>
        <div class="circle__center">
          <svg class="circle__svg">
            <circle
                cx="160"
                cy="160"
                r="136"
                stroke-width="5"
                :stroke-dasharray="strokeArray"
                fill="none"
            />
            <circle
                :cx="cx"
                :cy="cy"
                r="15"
                class="circle__percent-circle"
            />
            <text
                :x="cx"
                :y="cy"
                class="circle__percent-text"
                :style="{'transform-origin':cx+'px '+cy+'px'}"
                fill="white">
              {{ percent }}%
            </text>
          </svg>
          <NuxtImg
              src="lot.png"
              format="avif,webp"
              densities="x1 x2"
              class="circle__img"
              width="175"
              height="175"
          />
        </div>
      </div>
    </div>
    <Button color="green" text="Активировать"/>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  text-align: center;

  &__box {
    position: relative;
    width: 100%;
    max-width: 443px;
    margin: 0 auto;
    overflow: hidden;

    &::before {
      display: block;
      width: 100%;
      padding-top: 100%;
      content: "";
    }

    @media (min-width: 400px) {
      margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 97px;
      overflow: unset;
    }
  }

  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 8px solid var(--color-page-alchemy-big-circle-border);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(.7);

    @media (min-width: 1024px) {
      transform: translate(-50%, -50%);
    }
  }

  &__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 108px;
    border-radius: 8px;
    border: 1px solid var(--color-page-alchemy-panel-border);
    box-shadow: 0 0 25px rgba(0, 0, 0, .1);
    background-color: var(--color-bg);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-page-alchemy-panel-text);
    overflow: hidden;

    &--left {
      top: -16px;
      left: -80px;

      @media (min-width: 400px) {
        top: 0;
        left: -70px;
      }

      @media (min-width: 1024px) {
        top: 56px;
        left: -40px;
      }
    }

    &--right {
      top: -16px;
      right: -80px;

      @media (min-width: 400px) {
        top: 0;
        right: -70px;
      }

      @media (min-width: 1024px) {
        top: 56px;
        right: -40px;
      }
    }

    &--bottom {
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);

      @media (min-width: 1024px) {
        bottom: -53px;
      }
    }
  }

  &__panel-plus {
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
  }

  &__panel-img-box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
  }

  &__center {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 271px;
    height: 271px;
    border-radius: 50%;
    background-color: var(--color-page-alchemy-medium-circle-bg);
    box-shadow: var(--color-page-alchemy-medium-circle-box-shadow);
  }

  &__img {
    display: block;
    width: 175px;
    height: 175px;
  }

  &__svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    transform-origin: 50%;
    width: 320px;
    height: 320px;
    stroke: var(--color-page-alchemy-small-circle-bg);
  }

  &__percent-circle {
    fill: var(--color-page-alchemy-small-circle-bg);
    stroke: var(--color-page-alchemy-small-circle-border);
    stroke-width: 1px;
  }

  &__percent-text {
    transform: translate(4px, 10px) rotate(-90deg);
    font-size: 12px;
    stroke: #fff;
    stroke-width: 0.3px;
  }
}
</style>

<script>
import Button from "../common/Button.vue";
import {useWindowSize} from 'vue-window-size';

export default {
  components: {Button},

  setup() {
    const {width} = useWindowSize();
    const radius = (width < 1024) ? 91 : 136;
    const percent = 33;
    const angle = (360 / 100) * percent;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = (angle / 360) * circumference;
    const strokeArray = `${strokeDasharray}, ${circumference - strokeDasharray}`
    const cx = 160 + Math.cos((angle * Math.PI) / 180) * radius
    const cy = 160 + Math.sin((angle * Math.PI) / 180) * radius
    return {
      strokeArray,
      cx,
      cy,
      percent,
    }
  }
}
</script>