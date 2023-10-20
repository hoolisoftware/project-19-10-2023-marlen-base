<template>
  <div class="item">
    <div class="item-cost">
      <nuxt-img format="webp" src="/img/mor.png"/>
      <div>{{cost}}</div>
    </div>
    <div class="item-image">
      <nuxt-img format="webp" :src="image"/>
    </div>
    <div class="item-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "case-item",
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
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../public/colors.scss';

.item {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 25px 0;
  width: 200px;
  height: 200px;
  transition: 0.3s;
  cursor: pointer;

  background: var(--case-background);
  border: var(--case-border);
  border-radius: 28px;

  &:hover > .item-image > img {
    transform: scale(1.1);
  }
  &:hover {
    transform: scale(0.98);
  }

  &-cost {
    display: flex;
    position: absolute;
    align-items: center;
    right: 15px;
    top: 15px;
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
    display: flex;
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
    & img {
      max-width: 100%;
      max-height: 100%;
      transition: 0.3s;
    }
  }
}
</style>
