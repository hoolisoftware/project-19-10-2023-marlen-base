<template>
  <div class="page">
    <title-section text="Магазин"/>
    <div class="shop">
      <shop-card title="Предмет" image="/img/cases/case_1.png" :cost="200"/>
      <shop-card title="Предмет" image="/img/cases/case_1.png" :cost="200"/>
      <shop-card title="Предмет" image="/img/cases/case_1.png" :cost="200"/>
    </div>
  </div>
</template>

<script>
import shopCard from "@/components/cards/shop-card.vue";
import titleSection from "@/components/blocks/title-section.vue";
export default {
  name: "shop",
  head: {
    title: 'Kleewish | Магазин'
  },
  components: {
    shopCard,
    titleSection
  }
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 34px;
  flex-wrap: wrap;
}
</style>
