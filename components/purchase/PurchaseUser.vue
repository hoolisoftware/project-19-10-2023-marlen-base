<script lang="ts" setup></script>

<template>
  <div class="purchase-user">
    <h3 class="purchase-user__title">Введите UID</h3>
    <input type="text" class="purchase-user__input" v-model="code" required>
    <div class="purchase-user__box">
      <NuxtImg
          src="user1.jpg"
          format="avif,webp"
          densities="x1 x2"
          class="purchase-user__avatar"
          width="58"
          height="58"
      />
      <div class="purchase-user__text-box">
        <p class="purchase-user__name">Dmitryi Ravos</p>
        <p class="purchase-user__text"> AR15</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.purchase-user {
  padding: 44px 24px;
  border-radius: 8px;
  background-color: var(--color-page-purchase-panel-mobile-bg);

  @media (min-width: 1024px) {
    padding: 44px 24px 24px;
    border: 1px solid var(--color-page-purchase-border);
    background-color: transparent;
  }

  &__title {
    margin-bottom: 26px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }

  &__input {
    width: 100%;
    margin-bottom: 16px;
    padding: 7px 10px;
    font-size: 24px;
    font-weight: 500;
    border-radius: 8px;
    background-color: var(--color-page-purchase-user-input-bg);
    border: 1px solid var(--color-page-purchase-user-input-border);
    color: #979797;
    letter-spacing: .2em;
    text-align: center;
    transition: box-shadow .3s;

    &::placeholder {
      opacity: 1;
      color: #979797;
    }

    &:focus {
      box-shadow: inset 0 0 0 1px var(--color-page-purchase-user-input-border);
      outline: none;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    padding: 30px;
    background-color: var(--color-page-purchase-user-panel-bg);
    border-radius: 8px;

    @media (min-width: 1024px) {
      padding: 30px 45px;
    }
  }

  &__avatar {
    flex-shrink: 0;
    width: 58px;
    height: 58px;
    margin-right: 30px;
    border-radius: 50%;
  }

  &__text-box {
  }

  &__name {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    color: #767676;
  }
}
</style>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const code = ref('245856879')

    return {
      code
    }
  }
}
</script>
