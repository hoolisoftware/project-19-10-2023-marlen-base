<template>
  <div class="purchase">
    <h1 class="heading1 purchase__title">Покупка</h1>
    <div class="purchase__grid">
      <PurchaseItem/>
      <PurchaseAdvantages/>
      <PurchasePayment/>
      <PurchaseUser/>
    </div>
    <div class="purchase__button-box">
      <Button color="green" text="Подтвердить покупку" class="purchase__button"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.purchase {
  max-width: 1270px;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 70px;

  @media (min-width: 1024px) {
    padding-top: 66px;
    padding-bottom: 0;
  }

  &__title {
    margin-bottom: 36px;

    @media (min-width: 1024px) {
      margin-bottom: 44px;
    }
  }

  &__grid {
    display: grid;
    grid-row-gap: 36px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
      grid-template: auto / 2.1fr 1fr;
      grid-gap: 50px 20px;
      margin-bottom: 38px;
    }
  }

  &__button-box {
    text-align: center;
  }

  &__button {
    width: 100%;
    max-width: 258px;
    height: 54px;
  }
}
</style>
<script>
import PurchaseItem from "@/components/purchase/PurchaseItem.vue";
import PurchaseAdvantages from "@/components/purchase/PurchaseAdvantages.vue";
import PurchasePayment from "@/components/purchase/PurchasePayment.vue";
import PurchaseUser from "@/components/purchase/PurchaseUser.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {Button, PurchaseUser, PurchasePayment, PurchaseAdvantages, PurchaseItem}
}
</script>