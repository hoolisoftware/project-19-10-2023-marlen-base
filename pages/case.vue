<template>
  <div class="page">
    <blocks-title-section text="Кейс Кли"/>
    <cards-case-card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200" :show-border="false"/>
    <h2>Что может выпасть?</h2>
    <div class="page-items">
      <case-item title="Набор начала путешествия" image="/img/items/item_1.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_2.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_3.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_4.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_5.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_1.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_2.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_1.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_2.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_3.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_4.png" :cost="150"/>
      <case-item title="Набор начала путешествия" image="/img/items/item_5.png" :cost="150"/>
    </div>
    <h2>Другие кейсы</h2>

    <div class="page-items">
      <card title="Кейс Кли" image="/img/cases/case_3.png" :cost="200"/>
      <card title="Кейс Кли" image="/img/cases/case_4.png" :cost="200"/>
      <card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200"/>
      <card title="Кейс Кли" image="/img/cases/case_6.png" :cost="200"/>
    </div>
  </div>
</template>

<script>
import CaseItem from "@/components/cards/case-item.vue";
import card from "@/components/cards/case-card.vue";

export default {
  name: "case",
  components: {card, CaseItem}
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &-items {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  & h2 {
    display: flex;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin: 55px 0 15px 0;
  }
}
</style>
