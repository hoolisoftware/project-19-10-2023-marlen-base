<template>
  <div class="counter">
    <CounterElem :value=2 :max-value=3 text="Дней"/>
    <CounterElem :value=18 :max-value=24 text="Часов"/>
    <CounterElem :value=45 :max-value=60 text="Минут"/>
    <CounterElem :value=22 :max-value=60 text="Секунд"/>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: grid;
  grid-template: auto / repeat(4, 63px);
  grid-gap: 10px;
}
</style>
<script>
import CounterElem from "./CounterElem.vue";
export default {
  components: {CounterElem}
}
</script>