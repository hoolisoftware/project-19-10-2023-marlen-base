<template>
  <div
      class="prize"
      :class="{'prize--checked':isChecked,'prize--selected':isSelected, 'prize--active':isActive}"
  >
    <nuxt-img
      :src="img"
      class="prize__img"
      format="avif,webp"
      densities="x1 x2"
      width="84"
      height="84"
    />
  </div>
</template>

<style lang="scss" scoped>
.prize {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 108px;
  border: 1px solid var(--color-prize-border);
  background-color: #000000;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  &--checked {
    background-color: var(--color-prize-checked-bg);
    border-color: var(--color-prize-checked-border);
  }

  &--selected {
    background-color: var(--color-prize-selected-bg);
    border-color: var(--color-prize-selected-border);
  }

  &--active {
    border-color: #18C529;
  }

  &__img {
    width: 84px !important;
    height: 84px !important;
  }

  &__check-icon {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 26px;
    height: 26px;
    color: #18C529;
  }
}
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
  }
}
</script>