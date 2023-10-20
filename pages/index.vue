<template>
  <div class="page">
    <title-section text="Инадзума" info="4 кейса" icon="inadzuma"/>
    <div class="case-list">
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_9.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_10.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_3.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_4.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_6.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_7.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_8.png" :cost="200"/>
      </nuxt-link>
    </div>


    <title-section text="Монштадт" info="4 кейса" icon="monshtadt"/>
    <div class="case-list">
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_1.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_2.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_3.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_4.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_6.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_7.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_8.png" :cost="200"/>
      </nuxt-link>
    </div>


    <title-section text="Ли ЮЭ" info="4 кейса" icon="liue"/>
    <div class="case-list">
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_1.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_2.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_3.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_4.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_6.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_7.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_8.png" :cost="200"/>
      </nuxt-link>
    </div>


    <title-section text="Сумеру" info="4 кейса" icon="sumeru"/>
    <div class="case-list">
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_1.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_2.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_3.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_4.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_5.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_6.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_7.png" :cost="200"/>
      </nuxt-link>
      <nuxt-link to="/case">
        <card title="Кейс Кли" image="/img/cases/case_8.png" :cost="200"/>
      </nuxt-link>
    </div>


  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1800px;
}

.case-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 34px;
  flex-wrap: wrap;
  margin-bottom: 75px;
}
</style>
<script>
import card from "@/components/cards/case-card.vue";
import titleSection from "@/components/blocks/title-section.vue";

export default {
  head: {
    title: 'Kleewish | Кейсы'
  },
  components: {card, titleSection}
}
</script>
