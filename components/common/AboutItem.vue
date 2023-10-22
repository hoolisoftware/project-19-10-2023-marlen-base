<template>
  <div class="about-item">
    <div class="about-item__icon-box">
      <nuxt-icon :name="icon" class="about-item__icon"/>
    </div>
    <p class="about-item__value">{{ value }}</p>
    <span v-if="!link" class="about-item__text">{{ text }}</span>
    <a v-else :href="link" class="about-item__text">
      {{ text }}
      <nuxt-icon name="external-link" class="about-item__text-icon"/>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.about-item {
  position: relative;
  height: 100%;
  padding: 48px 20px 20px;
  background-color: var(--color-about-item-bg);
  border-radius: 10px;
  text-align: center;

  &__icon-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 76px;
    background: var(--color-about-item-icon-box);
    border-radius: 10px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    color: var(--color-about-item-icon);
  }

  &__value {
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 700;
    color: var(--color-about-item-value);
  }

  &__text {
    display: inline-flex;
    align-items: center;
    color: var(--color-about-item-text);
  }

  &__text-icon {
    width: 18px;
    height: 18px;
    margin-left: 4px;
  }
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String
    }
  }
}
</script>
