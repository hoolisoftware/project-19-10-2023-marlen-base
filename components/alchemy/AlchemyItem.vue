<template>
    <div class="item" :class="{'item--checked':isChecked,'item--selected':isSelected, 'item--active':isActive}">
      <div class="item-cost">
        <div>{{cost}}</div>
        <nuxt-img format="webp" src="/img/mor.png"/>
      </div>
      <div class="item-image">
        <nuxt-img format="webp" :src="image"
        width="64"
         height="64"/>
      </div>
      <div class="item-title">{{title}}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "alchemy-item",
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
    isSelected: {
    type: Boolean,
    default: false
    },
    isChecked: {
    type: Boolean,
    default: false
    },
    isActive: {
    type: Boolean,
    default: false
    },
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
    padding-top: 12px;
    width: 108px;
    height: 108px;
    transition: 0.3s;
  
    background: var(--case-background);
    border: var(--case-border);
    border-radius: 8px;
  
    &:hover > .item-image > img {
      transform: scale(1.1);
    }
    cursor: pointer;
    &:hover {
      transform: scale(0.98);
    }

    &--checked {
        background: var(--color-prize-checked-bg);
        border: 1px solid var(--color-prize-checked-border);
    }

    &--selected {
        background-color: var(--color-prize-selected-bg);
        border-color: 1px solid var(--color-prize-selected-border);
    }

    &--active {
        border: 1px solid  #18C529;
    }
  
    &-cost {
      display: flex;
      position: absolute;
      align-items: center;
      padding: 0px 6px;
      height: 22px;
      right: 8px;
      top: 8px;
      box-sizing: border-box;
      justify-content: center;
      background: #0C0C0C;
      border: 1px solid #242424;
      border-radius: 30px;
      gap: 4px;
      z-index: 2;
      & img {
        display: flex;
        height: 12px;
        width: 12px;
      }
      & div {
        display: flex;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        color: #ffffff;
      }
    }
    &-title {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #FFFFFF;
      max-width: 108px;
      text-align: center;
    }
    &-image {
      display: flex;
      & img {
        max-width: 100%;
        max-height: 100%;
        transition: 0.3s;
      }
    }
  }
  </style>
  