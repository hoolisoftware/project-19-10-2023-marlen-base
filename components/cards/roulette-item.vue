<template>
  <div 
    :class="'item ' + (winner ? 'item-win ':'') + (selected ? 'item-selected ':'') + (unselected ? 'item-unselected ':'')" 
    
  >
    <div class="item-cost">
      <div style="height: 15px;">{{cost}}</div>
      <nuxt-img format="webp" src="/img/mor.png" :style="(instantly? 'transition: 0.0s;' : '')"/>
    </div>
    <div class="item-image">
      <nuxt-img format="webp" :src="image" :style="(instantly? 'transition: 0.0s;' : '')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "roulette-item",
  props: {
    cost: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
      image: {
          type: String,
          required: true
      },
      winner: {
          type: Boolean,
          required: false
      },
      selected: {
          type: Boolean,
          required: false
      },
      unselected: {
          type: Boolean,
          required: false
      },
      instantly: {
          type: Boolean,
          required: false
      },
  }
}
</script>

<style lang="scss" scoped>

@import '../../public/colors.scss';

@keyframes wins {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(5deg) scale(1.2);
  }
  75% {
    transform: rotate(-5deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }

}

.item {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 0;
  width: 150px;
  height: 150px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 28px;
  @media(max-width: 620px) {
    height: 100px;
    width: 100px;
  }
  &-win {
    & > .item-image > img {
      animation: wins 2s infinite;
      transform: scale(1.2);
    }
  }

  &-selected {
    transition: 0.1s;
    opacity: 1;
    & > .item-image > img {
      transform: scale(1.2);
    }
  }

  &-unselected {
    transition: 0.1s;
    opacity: 0.92;
  }

  &-cost {
    display: flex;
    position: absolute;
    align-items: center;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding: 6px 10px;
    background: var(--case-background);
    border: var(--case-border);
    border-radius: 40px;
    gap: 6px;
    z-index: 2;
    & img {
      display: flex;
      height: 18px;
      width: 18px;
    }
    & div {
      display: flex;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: #505050;
    }
  }
  &-title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: var(--title-text)
  }
  &-image {
    display: inline-block;
    text-align: center;
    height: 140px;
    width: 140px;
    margin-bottom: 10px;
    & img {
      max-width: 100%;
      max-height: 100%;
      transition: 0.2s;
    }
    @media(max-width: 620px) {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
