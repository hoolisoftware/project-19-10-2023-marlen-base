<template>
  <button :class="'button button--'+color">{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
  line-height: 1;
  font-weight: 600;
  border-width: 0;
  transition: transform .3s, opacity .3s;

  &:hover {
    opacity: .9;
    transform: scale(.98);
  }

  &--gold {
    padding: 18px 25px;
    background: var(--color-button-gold-bg);
    border-radius: 12px;
    font-size: 21px;
    color: var(--color-button-gold);
  }

  &--green {
    padding: 12px 25px;
    background-color: #30AD4B;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
  }
}
</style>

<script>

export default {
  props: {
    color: {
      type: String,
      default: 'gold'
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>