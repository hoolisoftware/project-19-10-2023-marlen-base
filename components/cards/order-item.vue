<template>
    <div class="item">
        <div class="item-image_container">
            <div class="item-cost">
                <div>{{cost}}</div>
                <nuxt-img format="webp" src="/img/mor.png"/>
            </div>
            <div class="item-image">
                <nuxt-img format="webp" :src="image"/>
            </div>
        </div>
        <div class="item-title">{{title}}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "order-item",
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
    justify-content: center;
    width: 108px;
    height: 143px;
    transition: 0.3s;

    &-image_container {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: 0.3s;
        cursor: pointer;
        width: 108px;
        height: 108px;
    
        background: var(--case-background);
        border: var(--case-border);
        border-radius: 8px;
    
        &:hover > .item-image > img {
        transform: scale(1.1);
        }
        &:hover {
        transform: scale(0.98);
        }
    }
  
    &-cost {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      top: 2px;
      right: 2px;
      box-sizing: border-box;
      background: var(--order-item-cost-background);
      border-radius: 5px;
      gap: 2px;
      z-index: 2;
      width: fit-content;
      padding-left: 6px;
      padding-right: 6px;
      height: 22px;
      & img {
        display: flex;
        height: 11px;
        width: 11px;
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
    &-title {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      padding-top: 3px;
      padding-left: 3px;
      padding-right: 3px;
      font-size: 12px;
      line-height: 16px;
      color: var(--order-item-text-color)
    }
    &-image {
      display: flex;
      width: 84px;
      height: 84px;
      & img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
      }
    }
  }
  </style>
  