<template>
  <div class="alchemy">
    <h1 class="heading1 alchemy__title">Алхимия</h1>
    <div class="alchemy__grid">
      <AlchemyCircle/>
      <AlchemyPrizes/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alchemy {
  padding-top: 67px;
  padding-bottom: 20px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 980px;
  }

  &__title {
    @media (min-width: 1024px) {
      margin-bottom: 64px;
    }
  }

  &__grid {
    display: grid;
    grid-gap: 50px 20px;
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      grid-template: auto / 1.2fr 1fr;
      max-width: unset;
      margin: 0;
    }

    @media (min-width: 1200px) {
      grid-template: auto / 1.2fr 1fr;
      grid-gap: 50px 92px;
    }
  }
}
</style>

<script>
import AlchemyCircle from "../components/alchemy/AlchemyCircle.vue";
import AlchemyPrizes from "../components/alchemy/AlchemyPrizes.vue";

export default {
  components: {AlchemyPrizes, AlchemyCircle}
}
</script>