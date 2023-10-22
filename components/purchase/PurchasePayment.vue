<script lang="ts" setup></script>

<template>
  <div class="purchase-payment">
    <p class="purchase-payment__title">Способы оплаты</p>
    <div class="purchase-payment__grid">
      <template v-for="method in paymentList">
        <PurchasePaymentMethod
            :is-selected="currentMethod === method.id"
            :img="method.img"
            :name="method.name"
            :description="method.description"
            @click="currentMethod = method.id"
        />
      </template>
    </div>
    <button class="purchase-payment__more-btn">Показать все</button>
  </div>
</template>

<style lang="scss" scoped>
.purchase-payment {
  padding: 32px;
  border-radius: 8px;
  background-color: var(--color-page-purchase-panel-mobile-bg);
  text-align: center;

  @media (min-width: 1024px) {
    border: 1px solid var(--color-page-purchase-border);
    background-color: transparent;
    text-align: left;
  }

  &__title {
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 700;

    @media (min-width: 1024px) {
      margin-bottom: 19px;
    }
  }

  &__grid {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    grid-gap: 6px;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
      grid-template: auto / repeat(4, 1fr);
    }
  }

  &__more-btn {
    padding: 0;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
    color: var(--color-page-purchase-more-btn-color);

    &:hover {
      text-decoration: none;
    }
  }
}
</style>

<script>
import {ref} from 'vue'
import PurchasePaymentMethod from "./PurchasePaymentMethod.vue";

export default {
  components: {PurchasePaymentMethod},
  setup() {
    const currentMethod = ref('visa')
    const paymentList = [
      {
        id: 'visa',
        img: 'payment-visa.png',
        name: 'Visa, Mastercard',
        description: 'Оплата пластиковыми картами Visa, Mastercard',
      },
      {
        id: 'umoney',
        img: 'payment-umoney.png',
        name: 'Ю-money',
        description: 'Оплата платёжной системой Юмани',
      },
      {
        id: 'webmoney',
        img: 'payment-webmoney.png',
        name: 'Webmoney',
        description: 'Оплата платёжной системой Webmoney',
      },
      {
        id: 'tether',
        img: 'payment-tether.png',
        name: 'Tether TRC-20',
        description: 'Оплата криптовалютой Tether TRC-20',
      },
    ]
    return {
      currentMethod,
      paymentList
    }
  }
}
</script>