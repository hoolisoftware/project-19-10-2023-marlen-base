<template>
  <div class="alchemy">
    <h1 class="heading1 alchemy__title">Алхимия</h1>
    <div class="alchemy__grid">
      <AlchemyCircle :percent="60" class="alchemy__circle"/>
      <AlchemyPrizes class="alchemy__prizes"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alchemy {
  padding-top: 67px;
  padding-bottom: 20px;
  margin: 0 auto;

  &__circle {
    min-width: 460px;
  }

  &__prizes {
    width: fit-content;
  }

  @media (min-width: 1024px) {
    max-width: 980px;
  }

  &__title {
    @media (min-width: 600px) {
      margin-bottom: 64px;
    }
  }

  &__grid {
    display: flex;
    flex-direction: row;
    grid-gap: 50px 210px;
    width: fit-content;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
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