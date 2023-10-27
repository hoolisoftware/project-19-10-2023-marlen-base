<template>
    <div class="item">
      <div class="item-image">
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
  