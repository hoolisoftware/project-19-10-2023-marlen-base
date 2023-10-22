<template>
  <div class="slide">
    <div class="slide__text-box">
      <p class="slide__names">{{ names }}</p>
      <p class="slide__title">{{ title }}</p>
    </div>
    <NuxtImg
        :src="img"
        format="avif,webp"
        densities="x1 x2"
        class="slide__img"
        width="70"
        height="70"
    />
  </div>
</template>

<style lang="scss" scoped>
.slide {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: var(--color-bg2);
  border: 1px solid var(--color-slider-border);
  border-radius: 20px;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 600;
  overflow: hidden;
  user-select: none;

  &::before {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(98deg, #DBC1AB 0%, #C9A788 100%);
    content: "";
  }

  &__names {
    margin-bottom: 8px;
    color: var(--color-slider-names);
  }

  &__title {
    color: var(--color-slider-title);
  }

  &__img {
    display: block;
    margin-left: 8px;
  }
}
</style>

<script>

export default {
  props: {
    names: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  setup({...props}) {
    return {...props}
  }
}
</script>
