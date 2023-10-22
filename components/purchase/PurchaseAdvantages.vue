<template>
  <ul class="purchase-advantages">
    <li class="purchase-advantages__elem">
      <nuxt-icon name="advantage1" class="purchase-advantages__icon"/>
      <div class="purchase-advantages__text-box">
        <p class="purchase-advantages__bold-text">Быстрая доставка</p>
        <p class="purchase-advantages__text">Моментальное получение предмета</p>
      </div>
    </li>
    <li class="purchase-advantages__elem">
      <nuxt-icon name="advantage2" class="purchase-advantages__icon"/>
      <div class="purchase-advantages__text-box">
        <p class="purchase-advantages__bold-text">Безопасность покупки</p>
        <p class="purchase-advantages__text">Безопасная покупка любых предметов</p>
      </div>
    </li>
    <li class="purchase-advantages__elem">
      <nuxt-icon name="advantage3" class="purchase-advantages__icon"/>
      <div class="purchase-advantages__text-box">
        <p class="purchase-advantages__bold-text">Оперативная техподдержка</p>
        <p class="purchase-advantages__text">В случае возникновения вопросов</p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.purchase-advantages {
  padding: 32px;
  border-radius: 8px;
  background-color: var(--color-page-purchase-panel-mobile-bg);

  @media (min-width: 1024px) {
    border: 1px solid var(--color-page-purchase-border);
    background-color: transparent;
  }

  &__elem {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 22px;
      padding-bottom: 17px;
      border-bottom: 1px solid var(--color-page-purchase-border);
    }
  }

  &__icon {
    width: 41px;
    height: 41px;
    margin-right: 30px;
    color: #C9A788;
  }

  &__text-box {
    font-size: 14px;
  }

  &__bold-text {
    display: none;

    @media (min-width: 1024px) {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
    }
  }

  &__text {
    color: #8F8F8F;
  }
}
</style>
