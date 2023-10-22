<template>
  <div
      class="prize"
      :class="{'prize--checked':isChecked,'prize--selected':isSelected}"
  >
    <NuxtImg
        :src="img"
        format="avif,webp"
        densities="x1 x2"
        class="lottery-prize__img"
        width="84"
        height="84"
    />
    <nuxt-icon v-if="isChecked" name="check" class="prize__check-icon"/>
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
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  &--checked {
    border-color: #18C529;
    background-color: var(--color-prize-checked-bg);
  }

  &--selected {
    background-color: var(--color-prize-selected-bg);
  }

  &__img {
    width: 84px;
    height: 84px;
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
  }
}
</script>