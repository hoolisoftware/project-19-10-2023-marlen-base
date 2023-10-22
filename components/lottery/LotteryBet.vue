<template>
  <div class="bet">
    <p class="bet__text bet__text--top">До окончания лотереи осталось:</p>
    <Counter class="bet__counter"/>
    <p class="bet__text">Стоимость участия:</p>
    <p class="bet__price">456 руб</p>
    <div class="bet__count-box">
      <div class="bet__count-wrap">
        <p class="bet__text">Выберите кол-во билетов:</p>
        <div class="bet__input-box">
          <button class="bet__input-btn bet__input-btn--minus" aria-label="Минус">
            <nuxt-icon name="minus-circle" class="bet__input-btn-icon" fill="none"/>
          </button>
          <input type="text" class="bet__input" value="1"/>
          <button class="bet__input-btn bet__input-btn--plus" aria-label="Плюс">
            <nuxt-icon name="plus-circle" class="bet__input-btn-icon"/>
          </button>
        </div>
        <p class="bet__small-text">Осталось: 3 из 5</p>
      </div>
      <nuxt-icon name="question-circle" class="bet__question-icon"/>
      <Button color="green" text="Принять участие" class="bet__bet-btn"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bet {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text {
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 500;
    color: #767676;

    &--top {
      margin-bottom: 27px;
    }
  }

  &__price {
    margin-bottom: 38px;
    font-size: 42px;
    font-weight: 500;
  }

  &__small-text {
    font-size: 12px;
    font-weight: 500;
    color: #767676;
  }

  &__counter {
    margin: 0 auto 41px;
  }

  &__count-box {
    position: relative;
  }

  &__question-icon {
    position: absolute;
    top: 38px;
    right: -33px;
    width: 24px;
    height: 24px;
  }

  &__count-wrap {
    position: relative;
    margin-bottom: 34px;
  }

  &__input-box {
    position: relative;
    max-width: 172px;
    margin: 0 auto 8px;
  }

  &__input {
    width: 100%;
    padding: 13px 36px;
    text-align: center;
    border: 1px solid var( --color-page-lottery-input-border);
    background-color: var(--color-page-lottery-input-bg);
    border-radius: 8px;
    font-size: 24px;
    font-weight: 500;
    color: var(--color-text);
  }

  &__input-btn {
    position: absolute;
    top: 0;
    width: 36px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: #968B88;

    &--minus {
      left: 0;
    }

    &--plus {
      right: 0;
    }
  }

  &__input-btn-icon {
    width: 24px;
    height: 24px;
    color: #968B88;
  }
}
</style>

<script>
import Button from "../../components/common/Button.vue";
import Counter from "../common/Counter.vue";

export default {
  components: {Counter, Button}
}
</script>