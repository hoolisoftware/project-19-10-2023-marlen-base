<template>
  <div class="drop">
    <div class="drop-left">
      <div>{{username}}</div>
      <div>{{itemTitle}}</div>
    </div>
    <div class="drop-right">
      <div class="drop-right_image">
        <nuxt-img format="webp" width="70" height="70" :src="itemImage" :alt="itemTitle"/>
      </div>
      <div class="drop-right_case">
        <nuxt-img format="webp" width="120" alt="кейс" height="120" :src="caseImage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "drop",
  props: {
    itemTitle: {
      type: String,
      required: true
    },
    itemImage: {
      type: String,
      required: true
    },
    caseImage: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.drop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 236px;
  width: 236px;
  height: 100px;
  background: var(--drop-background);
  border: var(--drop-border);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &:hover > .drop-right {
    transform: translateY(-60%);
  }
  &:hover {
    transform: scale(0.96);
  }
  &-left {
    display: flex;
    flex-direction: column;
    max-width: 120px;
    height: 100%;
    gap: 5px;
    justify-content: center;
    & div:nth-child(1) {
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: #A8A8A8;
    }
    & div:nth-child(2) {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: #838383;

    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    height: 200%;
    gap: 20px;
    justify-content: center;
    transition: 0.3s;
    &_image {
      display: flex;
      width: 70px;
      height: 70px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &_case {
      display: flex;
      width: 60px;
      height: 60px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
