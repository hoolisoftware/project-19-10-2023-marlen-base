<template>
  <PerfectScrollbar class="prizes__prize-list">
    <div class="prizes__prize-grid">
      <template v-for="i in 9">
        <AlchemyPrize
            :img="'prize'+i+'.png'"
            :isSelected="i===1"
            :isChecked="(i===7 || i===8)"
        />
      </template>
      <template v-for="i in 9">
        <AlchemyPrize :img="'prize'+i+'.png'"/>
      </template>
    </div>
  </PerfectScrollbar>
</template>

<style lang="scss" scoped>
.prizes {
  max-width: 440px;

  &__prize-list {
    height: 461px;
    padding-right: 50px;
  }

  &__prize-grid {
    display: grid;
    grid-template: auto / repeat(3, 108px);
    grid-gap: 5px;
  }
}
</style>

<script>
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'
import AlchemyPrize from "../../components/alchemy/AlchemyPrize.vue";

export default {
  components: {AlchemyPrize, PerfectScrollbar}
}
</script>