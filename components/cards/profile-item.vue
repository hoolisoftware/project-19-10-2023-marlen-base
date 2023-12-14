<template>
    <div class="item">
      <div class="item-image">
        <div class="item-cost">
            <div>{{cost}}</div>
            <nuxt-img class="item-cost-img" format="webp" src="/img/mor.png"/>
        </div>
        <img alt="item" :src="image"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "profile-item",
    props: {
    image: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../../public/colors';
  
  .item {
    display:flex;
    position: relative;
    height: 108px;
    width: 108px;
    justify-content: center;
    align-items: center;
    background: var(--profile-background);
    border: var(--profile-border);
    border-radius: 8px;
    &-cost {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      top: 2px;
      right: 2px;
      box-sizing: border-box;
      background: var(--profile-background);
      border-color: var(--order-item-cost-background);
      border-style: solid;
      border-width: 1px;
      border-radius: 10px;
      gap: 2px;
      z-index: 2;
      width: fit-content;
      height: fit-content;
      padding-left: 6px;
      padding-right: 6px;
      padding-top: 2px;
      padding-bottom: 2px;
      &-img {
        display: flex;
        height: 11px !important;
        width: 11px !important;
        transform: translate(0px, -2px);
      }
      & div {
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        color: var(--order-item-text-color);
      }
    }
    &:hover .item-image {
        opacity: 1;
    }
    &-image {
      display: flex;
      width: 84px;
      height: 84px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  </style>
  