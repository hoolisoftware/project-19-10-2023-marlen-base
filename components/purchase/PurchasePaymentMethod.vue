<template>
  <div :class="['payment-method', {'payment-method--selected': isSelected}]">
    <NuxtImg
        :src="img"
        format="avif,webp"
        densities="x1 x2"
        class="payment-method__img"
        width="70"
        height="36"
    />
    <div class="payment-method__text-box">
      <h3 class="payment-method__name">{{ name }}</h3>
      <p class="payment-method__description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment-method {
  position: relative;
  padding: 43px 10px 26px;
  box-shadow: inset 0 0 0 1px var(--color-page-purchase-border);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: box-shadow .3s;
  background-color: var(--color-bg2);

  &:not(.payment-method--selected):hover {
    box-shadow: inset 0 0 0 1px var(--color-page-purchase-selected-method-border);
  }

  &--selected {
    border-width: 2px;
    box-shadow: inset 0 0 0 2px var(--color-page-purchase-selected-method-border);
  }

  &__img {
    margin-bottom: 16px;
  }

  &__name {
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 700;
  }

  &__description {
    display: none;
    font-size: 14px;
    line-height: 18px;
    color: #767676;

    @media (min-width: 1024px) {
      display: block;
    }
  }
}
</style>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
}
</script>