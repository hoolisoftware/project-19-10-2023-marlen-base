<template>
  <Panel class="prizes">
    <h2 class="heading2 prizes__title">Призы</h2>
    <div class="prizes__tabs">
      <button class="prizes__tab prizes__tab--active">Все предметы</button>
      <button class="prizes__tab">Подробнее</button>
    </div>
    <div class="prizes__tabs-content">
      <div class="prizes__tabs-panel">
        <PerfectScrollbar class="prizes__prize-list">
          <div class="prizes__prize-grid">
            <template v-for="i in 9">
              <LotteryPrize :img="'prize'+i+'.png'"/>
            </template>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  </Panel>
</template>

<style lang="scss" scoped>
.prizes {
  padding-left: 10px;
  padding-right: 10px;

  &__title {
    margin-bottom: 30px;
  }

  &__tabs {
    display: inline-flex;
    margin-bottom: 27px;
    padding: 2px;
    border-radius: 10px;
    background: var(--color-page-lottery-tabs-bg);
  }

  &__tab {
    padding: 11px 12px;
    border-radius: 10px;
    background: none;
    font-size: 14px;
    font-weight: 500;
    border: none;
    color: #959595;

    &--active {
      background: var(--color-page-lottery-tabs-active-bg);
      color: var(--color-page-lottery-tabs-active);
    }
  }

  &__prize-list {
    height: 270px;
    padding-right: 8px;
  }

  &__prize-grid {
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    grid-gap: 5px;
  }
}
</style>

<script>
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'
import Panel from "../../components/common/Panel.vue";
import LotteryPrize from "../../components/lottery/LotteryPrize.vue";

export default {
  components: {LotteryPrize, PerfectScrollbar, Panel}
}
</script>