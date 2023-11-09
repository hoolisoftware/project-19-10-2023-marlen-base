<script setup lang="ts">
import { useCase } from "~/hooks/use-query/case";
import { SERVER_URL } from "~/config";

const { id } = useRoute().params
const {data, isLoading, isError} = useCase(String(id))

</script>

<template>
  <div class="page">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="isError">
      Error...
    </div>
    <div v-else="data?.data">
      <div style="text-align: center">
        <blocks-title-section :text='data?.data.case.name'/>
        <cards-case-card
          :title='data?.data.case.name'
          :image='SERVER_URL+data?.data.case.photo_url'
          :cost="data?.data.case.price"
          :show-border="false"/>
      </div>
      <h2 class="page-items">Что может выпасть?</h2>
      <div class="page-items">
        <div v-for="item in data?.data.case.items">
          <case-item :title='item.name' :image='SERVER_URL+item.photo_url' :cost='item.sgd_price'/>
        </div>
      </div>
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

<script lang="ts">
import CaseItem from "@/components/cards/case-item.vue";
import card from "@/components/cards/case-card.vue";

export default {
  name: "case",
  components: {card, CaseItem},
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
