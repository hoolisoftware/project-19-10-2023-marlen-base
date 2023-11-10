<template>
  <div class="item">
    <div class="item-image">
      <img alt="item" :src="image"/>
    </div>
    <div class="item-overlay">
      <div class="item-overlay_button">Вывести</div>
      <div class="item-overlay_button">Продать</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inventory-item",
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
  &:hover .item-overlay {
      opacity: 1;
  }

  &-overlay {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 100%;
    gap: 5px;
    transition: 0.3s;
    opacity: 0;
    &_button {
      display: flex;
      background: #ffffff;
      color: #000000;
      font-size: 12px;
      width: 100%;
      height: 32px;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #d5d5d5;
      }
    }
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
