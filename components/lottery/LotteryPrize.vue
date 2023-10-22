<template>
  <div class="prize">
    <NuxtImg
        :src="img"
        format="avif,webp"
        densities="x1 x2"
        class="prize__img"
        width="77"
        height="77"
    />
  </div>
</template>

<style lang="scss" scoped>
.prize {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid var(--color-prize-border);
  border-radius: 8px;

  &__img {
    width: 77px;
    height: 77px;
  }
}
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    }
  }
}
</script>
