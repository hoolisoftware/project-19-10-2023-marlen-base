<template>
  <div class="livedrop">
    <div class="livedrop-right"></div>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_1.png" item-image="/img/items/item_1.png"
            item-title="Фрагмент нефрита Шивада"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Ваня" case-image="/img/cases/case_4.png" item-image="/img/items/item_2.png"
            item-title="Благословение полой луны"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_2.png" item-image="/img/items/item_3.png"
            item-title="Фрагмент изумруда Нагадус"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_1.png" item-image="/img/items/item_1.png"
            item-title="Фрагмент нефрита Шивада"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Ваня" case-image="/img/cases/case_4.png" item-image="/img/items/item_2.png"
            item-title="Благословение полой луны"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_2.png" item-image="/img/items/item_3.png"
            item-title="Фрагмент изумруда Нагадус"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_1.png" item-image="/img/items/item_1.png"
            item-title="Фрагмент нефрита Шивада"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Ваня" case-image="/img/cases/case_4.png" item-image="/img/items/item_2.png"
            item-title="Благословение полой луны"/>
    </nuxt-link>
    <nuxt-link :to="{ name: 'profile' }">
      <drop username="Гена" case-image="/img/cases/case_2.png" item-image="/img/items/item_3.png"
            item-title="Фрагмент изумруда Нагадус"/>
    </nuxt-link>
  </div>
</template>

<script>
import drop from "@/components/livedrop/drop.vue";

export default {
  name: "livedrop",
  components: {
    drop
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.livedrop {
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 15px;
  margin: 15px 0;
  width: 100%;
  max-width: 1900px;
  overflow: hidden;

  &-right {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 290px;
    height: 100%;
    background: var(--drop-shadow);
    z-index: 5;
    pointer-events: none;
  }
}
</style>
