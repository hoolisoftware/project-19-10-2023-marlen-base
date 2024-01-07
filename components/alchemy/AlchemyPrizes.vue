<template>
  <div class="prizes__prize-list">
    <div class="prizes__prize-grid">
      <template v-for="i in 9">
        <AlchemyPrize
            :img="'prize'+i+'.png'"
            :isSelected="i===1"
            :isChecked="(i===7 || i===8)"
            :isActive="(i===8)"
        />
      </template>
      <template v-for="i in 9">
        <AlchemyPrize :img="'prize'+i+'.png'"/>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: var(--scroll-track-color);
}

::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-color);
    border-radius: 5px;
    min-height: 20px !important;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scroll-thumb-hovered-color);
}

.prizes {
  max-width: 440px;

  &__prize-list {
    height: 452px;
    padding-right: 50px;
    overflow: auto;
    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);
  }

  &__prize-grid {
    display: grid;
    grid-template: auto / repeat(3, 108px);
    grid-gap: 5px;
  }
}
</style>

<script>
import AlchemyPrize from "../../components/alchemy/AlchemyPrize.vue";

export default {
  components: {AlchemyPrize}
}
</script>